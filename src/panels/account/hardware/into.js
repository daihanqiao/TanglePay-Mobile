import React, { useEffect, useRef, useState } from 'react';
import { Base, I18n, IotaSDK } from '@tangle-pay/common';
import { Formik } from 'formik';
import { Container, View, Text, Input, Textarea, Form, Item, Button, Label, Content } from 'native-base';
import * as Yup from 'yup';
import { useStore } from '@tangle-pay/store';
import { useCreateCheck, useAddWallet } from '@tangle-pay/store/common';
import { S, SS, Nav, ThemeVar, SvgIcon, Toast } from '@/common';
import { Platform, PermissionsAndroid } from 'react-native';
import TransportBLE from '@ledgerhq/react-native-hw-transport-ble';
// import { Observable } from 'rxjs';
const schema = Yup.object().shape({
	name: Yup.string().required(),
	agree: Yup.bool().isTrue().required()
});
const deviceAddition =
	(device) =>
	({ devices }) => ({
		devices: devices.some((i) => i.id === device.id) ? devices : devices.concat(device)
	});
export const AccountHardwareInto = () => {
	const form = useRef();
	const addWallet = useAddWallet();
	const [sub, setSub] = useState();
	const [devices, setDevices] = useState([]);
	const [refreshing, setRefreshing] = useState(false);
	console.log(devices);
	useCreateCheck((name) => {
		if (!IotaSDK.checkWeb3Node(IotaSDK.curNode?.id)) {
			form.current.setFieldValue('name', name);
		}
	});
	const getPermissions = async () => {
		if (Platform.OS === 'android') {
			await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION);
		}
		let previousAvailable = false;
		// new Observable(TransportBLE.observeState).subscribe((e) => {
		// 	if (e.available !== previousAvailable) {
		// 		previousAvailable = e.available;
		// 		if (e.available) {
		// 			reload();
		// 		}
		// 	}
		// });
	};
	const startScan = async () => {
		setRefreshing(true);
		const sub = TransportBLE.observeState({
			next: (e) => {
				console.log(e.descriptor);
			},
			complete: () => {},
			error: () => {}
		});
		// const sub = new Observable(TransportBLE.listen).subscribe({
		// 	complete: () => {
		// 		setRefreshing(false);
		// 	},
		// 	next: (e) => {
		// 		if (e.type === 'add') {
		// 			setDevices(deviceAddition(e.descriptor));
		// 		}
		// 	},
		// 	error: (error) => {
		// 		console.log(error);
		// 		setRefreshing(false);
		// 	}
		// });
		setSub(sub);
	};
	const reload = () => {
		if (sub) {
			sub.unsubscribe();
		}
		setRefreshing(false);
		setDevices([]);
	};
	useEffect(() => {
		getPermissions();
	});
	return (
		<Container>
			<Nav title={I18n.t('account.connectLedger')} />
			<Content>
				<Formik
					innerRef={form}
					initialValues={{
						agree: true
					}}
					validateOnBlur={false}
					validateOnChange={false}
					validateOnMount={false}
					validationSchema={schema}
					onSubmit={async (values) => {
						try {
							const curNodeId = IotaSDK.curNode?.id;
							const isIota = IotaSDK.checkIota(curNodeId);
							const isShimmer = IotaSDK.checkSMR(curNodeId);
							if (isIota || isShimmer) {
								Toast.showLoading();
								const [{ address, path }] = await IotaSDK.getHardwareAddressInIota(
									curNodeId,
									0,
									true,
									1
								);
								const info = await IotaSDK.importHardware({
									address: address,
									name: values.name,
									publicKey: '',
									path: path,
									type: 'ledger'
								});
								addWallet(info);
								Toast.hideLoading();
								Base.replace('main');
							} else if (IotaSDK.checkWeb3Node(curNodeId)) {
								await startScan();
								// await IotaSDK.checkHardwareConnect();
								// Base.push('account/hardware/import', {
								// 	name: values.name,
								// 	type: IotaSDK.curNode?.type
								// });
							}
						} catch (error) {
							Toast.show(String(error));
						}
					}}>
					{({ handleChange, handleSubmit, setFieldValue, values, errors }) => (
						<View style={[SS.p16]}>
							<Form>
								<Text style={[SS.fz14, SS.mt24]}>{I18n.t('account.intoName')}</Text>
								<Item style={[SS.mt8, SS.ml0]} error={!!errors.name}>
									<Input
										style={[SS.fz14, SS.pl0, S.h(44)]}
										placeholder={I18n.t('account.intoNameTips')}
										onChangeText={handleChange('name')}
										value={values.name}
									/>
								</Item>
								<View style={[SS.mt20]} />
								<Item
									style={[SS.row, SS.as, SS.ml0, SS.mb40, { borderBottomWidth: 0 }]}
									onPress={() => {
										setFieldValue('agree', !values.agree);
									}}>
									<SvgIcon
										color={values.agree ? ThemeVar.brandPrimary : ThemeVar.textColor}
										size={16}
										style={[SS.mr8, S.marginT(4)]}
										name={values.agree ? 'checkbox_1' : 'checkbox_0'}
									/>
									<View style={[S.w(ThemeVar.deviceWidth - 50)]}>
										<Text
											style={[
												SS.fz14,
												S.tl,
												S.lineHeight(22),
												S.color(!errors.agree ? '#eee' : ThemeVar.brandDanger)
											]}>
											{I18n.t('account.intoAgree')
												.split('##')
												.filter((e) => !!e)
												.map((e, i) => {
													return i % 2 ? (
														<Text
															onPress={() => {
																Base.push(
																	i === 1
																		? 'https://tanglepay.com/terms.html'
																		: 'https://tanglepay.com/policy.html'
																);
															}}
															key={i}
															style={[SS.cP]}>
															{e}
														</Text>
													) : (
														<Text key={i}>{e}</Text>
													);
												})}
										</Text>
									</View>
								</Item>
								<Button block onPress={handleSubmit}>
									<Text>{I18n.t('account.intoBtn')}</Text>
								</Button>
							</Form>
						</View>
					)}
				</Formik>
			</Content>
		</Container>
	);
};
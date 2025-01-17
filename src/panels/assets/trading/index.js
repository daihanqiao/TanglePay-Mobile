import React, { useState, useRef, useEffect } from 'react';
import { Nav, SvgIcon, Toast, SS, S, ThemeVar } from '@/common';
import { Image, TouchableOpacity } from 'react-native';
import { Base, I18n, IotaSDK } from '@tangle-pay/common';
import { useStore } from '@tangle-pay/store';
import { useRoute } from '@react-navigation/native';
import { Container, Content, View, Text, Input, Form, Button, Item } from 'native-base';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useGetNodeWallet, useHandleUnlocalConditions } from '@tangle-pay/store/common';
import Clipboard from '@react-native-clipboard/clipboard';

const schema = Yup.object().shape({
	password: Yup.string().required()
});

export const AssetsTrading = () => {
	const form = useRef();
	const [ipfsImage, setIpfsImage] = useState('');
	const [curWallet] = useGetNodeWallet();
	const { params } = useRoute();
	const id = params.id;
	const [unlockConditions] = useStore('common.unlockConditions');
	const { onDismiss, onAccept } = useHandleUnlocalConditions();
	const curInfo = unlockConditions.find((e) => e.blockId == id) || {};
	const [opacity, setOpacity] = useState(1);
	useEffect(() => {
		if (/ipfs/.test(curInfo.logoUrl)) {
			fetch(curInfo.logoUrl)
				.then((res) => res.json())
				.then((res) => {
					setIpfsImage(res?.image || '');
				});
		}
	}, [curInfo.logoUrl]);
	return (
		<Container>
			<Nav title={I18n.t('assets.tradingTitle')} />
			<View style={[SS.ph16, SS.pt16]}>
				<View style={[SS.mb20]}>
					<Text style={[SS.fz16, SS.fw600]}>{I18n.t('assets.acceptTitle')}</Text>
				</View>
				<View style={[SS.ac, SS.row, S.border(2), SS.pb20]}>
					<View style={[SS.c, SS.pr]}>
						<Image
							style={[
								S.wh(32),
								S.radius(32),
								SS.pa,
								SS.bgW,
								{ left: 0, top: 0, zIndex: 1, opacity },
								S.border(4)
							]}
							source={{ uri: ipfsImage || curInfo.logoUrl }}
							onError={() => {
								setOpacity(0);
							}}
						/>
						<View style={[{ width: 32, height: 32, borderRadius: 32 }, S.border(4), SS.bgP, SS.c]}>
							<Text style={[SS.fw600, SS.cW, SS.fz22]}>
								{String(curInfo.token).toLocaleUpperCase()[0]}
							</Text>
						</View>
					</View>
					<Text style={[SS.cP, SS.fz14, SS.fw600, SS.ml20, SS.mr24]}>
						{curInfo.token}: {curInfo.amountStr}
					</Text>
					<Text style={[SS.fz14]}>
						{I18n.t('assets.tradingFrom')} {Base.handleAddress(curInfo.unlockAddress)}
					</Text>
				</View>
				{curInfo.standard || curInfo.depositStr ? (
					<View style={[SS.pt16]}>
						{curInfo.depositStr ? (
							<View style={[SS.ac, SS.row, SS.jsb, SS.pb12]}>
								<Text style={[SS.fz14, SS.fw400]}>{I18n.t('assets.storageDeposit')}</Text>
								<Text style={[SS.fz14, SS.fw400]}>{curInfo.depositStr}</Text>
							</View>
						) : null}
						<View style={[SS.ac, SS.row, SS.jsb, SS.pb12]}>
							<Text style={[SS.fz14, SS.fw400]}>{curInfo.token}</Text>
						</View>
						{curInfo.standard ? (
							<View style={[SS.ac, SS.row, SS.jsb, SS.pb12]}>
								<Text style={[SS.fz14, SS.fw400]}>{I18n.t('assets.standard')}</Text>
								<Text style={[SS.fz14, SS.fw400]}>{curInfo.standard}</Text>
							</View>
						) : null}
					</View>
				) : null}
				{curInfo.assetsId ? (
					<View style={[SS.pt10]}>
						<View style={[SS.pb10]}>
							<Text style={[SS.fz14, SS.fw400]}>{I18n.t('assets.tokenID')}</Text>
						</View>
						<View style={[SS.pb10]}>
							<TouchableOpacity
								activeOpacity={0.8}
								onPress={() => {
									Clipboard.setString(curInfo.assetsId);
									Toast.success(I18n.t('assets.copied'));
								}}>
								<Text style={[SS.fz14, SS.fw400]}>{curInfo.assetsId}</Text>
							</TouchableOpacity>
						</View>
					</View>
				) : null}
				<View style={[SS.mt10]}>
					<Formik
						innerRef={form}
						initialValues={{}}
						validateOnBlur={false}
						validateOnChange={false}
						validateOnMount={false}
						validationSchema={schema}
						onSubmit={async (values) => {
							const { password } = values;
							const isPassword = await IotaSDK.checkPassword(curWallet.seed, password);
							if (!isPassword) {
								return Toast.error(I18n.t('assets.passwordError'));
							}
							try {
								Toast.showLoading();
								await onAccept({
									...curInfo,
									curWallet: { ...curWallet, password }
								});
								onDismiss(curInfo.blockId);
								Toast.hideLoading();
								Toast.success(I18n.t('assets.acceptSucc'));
								IotaSDK.refreshAssets();
								setTimeout(() => {
									IotaSDK.refreshAssets();
								}, 3000);
								Base.goBack();
							} catch (error) {
								Toast.hideLoading();
								error = String(error);
								if (
									error.includes('There are not enough funds in the inputs for the required balance')
								) {
									error = I18n.t('assets.unlockError');
								}
								Toast.show(error);
								Base.goBack();
							}
						}}>
						{({ handleChange, handleSubmit, values, errors }) => (
							<View>
								<Form>
									<Text style={[SS.fz14, SS.mb12, SS.mt12]}>
										{I18n.t('account.showKeyInputPassword').replace(/{name}/, curWallet.name)}
									</Text>
									<Item style={[SS.ml0, S.border(2)]}>
										<Input
											keyboardType='ascii-capable'
											secureTextEntry
											style={[SS.fz14, SS.pl0, S.h(44)]}
											placeholder={I18n.t('account.intoPasswordTips')}
											onChangeText={handleChange('password')}
											value={values.password}
										/>
									</Item>
								</Form>
								<View style={[SS.row, SS.ac, SS.jsb, { marginTop: 50, width: ThemeVar.deviceWidth }]}>
									<Button
										style={[S.w(ThemeVar.deviceWidth - 32)]}
										block
										primary
										disabled={!values.password}
										onPress={handleSubmit}>
										<Text>{I18n.t('shimmer.accept')}</Text>
									</Button>
								</View>
							</View>
						)}
					</Formik>
				</View>
			</View>
		</Container>
	);
};

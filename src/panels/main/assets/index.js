import React, { useEffect, useState, useRef } from 'react';
import { Container, View, Text } from 'native-base';
import { TouchableOpacity, RefreshControl, ScrollView } from 'react-native';
import { Base, I18n } from '@tangle-pay/common';
import { useStore } from '@tangle-pay/store';
import { CoinList, ActivityList } from './list';
import { useGetNodeWallet, useGetAssetsList, useGetLegal } from '@tangle-pay/store/common';
import { AssetsNav, SvgIcon, S, SS, ThemeVar } from '@/common';

export const Assets = () => {
	const [isRequestAssets, _] = useStore('common.isRequestAssets');
	const [isRequestHis, __] = useStore('common.isRequestHis');
	const [isShowAssets, setShowAssets] = useStore('common.showAssets');
	const [___, refreshAssets] = useStore('common.forceRequest');
	const [curWallet] = useGetNodeWallet();
	const [search, setSearch] = useState('');
	const [curTab, setTab] = useState(0);
	const scroll = useRef();
	const scrollPage = useRef();
	useGetAssetsList(curWallet);
	const [totalAssets] = useStore('common.totalAssets');
	const curLegal = useGetLegal();
	const checkPush = (path) => {
		if (!curWallet.address) {
			Base.push('account/register');
			return;
		}
		Base.push(path);
	};
	useEffect(() => {
		if (curTab === 0) {
			scrollPage.current.scrollTo({
				y: 0,
				animated: true
			});
			scroll.current.scrollTo({
				x: 0,
				animated: true
			});
		} else {
			scroll.current.scrollToEnd();
		}
	}, [curTab]);
	return (
		<Container>
			<AssetsNav
				right={
					<SvgIcon
						onPress={() => {
							checkPush('assets/scan');
						}}
						name='scan'
						size={24}
						style={[SS.mr10]}
					/>
				}
			/>
			<ScrollView
				ref={scrollPage}
				// style={{ height: curTab === 0 ? 600 : undefined }}
				// scrollEnabled={curTab === 1}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={[SS.ph20, { height: curTab === 0 ? ThemeVar.deviceHeight - 200 : undefined }]}
				refreshControl={
					<RefreshControl
						refreshing={false}
						onRefresh={() => {
							if (isRequestAssets && isRequestHis) {
								refreshAssets(Math.random());
							}
						}}
					/>
				}>
				<View style={[SS.pt20, S.bg('#1D70F7'), SS.mt5, SS.radius10, { overflow: 'hidden' }]}>
					<View style={[SS.ph20, SS.row, SS.ac]}>
						<Text style={[SS.fz16, SS.cW]}>
							{I18n.t('assets.myAssets')}({curLegal.unit || ''})
						</Text>
						<SvgIcon
							onPress={() => setShowAssets(!isShowAssets)}
							name={isShowAssets ? 'eye_1' : 'eye_0'}
							size={24}
							color='#fff'
							style={[SS.ml5]}
						/>
					</View>
					<View style={[SS.ph20, SS.mt20, SS.mb15]}>
						<Text style={[SS.cW, SS.fz20]}>{isShowAssets ? totalAssets.assets || '0.00' : '****'}</Text>
					</View>
					<View style={[SS.row, SS.pv10, S.bg('#1F7EFC')]}>
						<TouchableOpacity
							onPress={() => {
								checkPush('assets/send');
							}}
							activeOpacity={0.8}
							style={[SS.flex1, SS.c, SS.pv5, S.border(1, '#fff', 1)]}>
							<Text style={[SS.cW, SS.fz17]}>{I18n.t('assets.send')}</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								checkPush('assets/receive');
							}}
							activeOpacity={0.8}
							style={[SS.flex1, SS.pv5, SS.c]}>
							<Text style={[SS.cW, SS.fz17]}>{I18n.t('assets.receive')}</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={[SS.row, SS.jsb, SS.ac, SS.mt25, SS.mb10]}>
					<View style={[SS.row, SS.ac]}>
						<TouchableOpacity
							onPress={() => setTab(0)}
							activeOpacity={0.8}
							style={[SS.c, SS.pv20, SS.mr30]}>
							<Text
								style={[
									S.color(curTab === 0 ? ThemeVar.textColor : ThemeVar.secondTextColor),
									SS.fz17
								]}>
								{I18n.t('assets.assets')}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => setTab(1)} activeOpacity={0.8} style={[SS.c, SS.pv20]}>
							<Text
								style={[
									S.color(curTab === 1 ? ThemeVar.textColor : ThemeVar.secondTextColor),
									SS.fz17
								]}>
								{I18n.t('assets.activity')}
							</Text>
						</TouchableOpacity>
					</View>
					{
						curTab === 0 ? null : null
						// <Icon
						// 	onPress={() => {
						// 		Base.push('assets/addAssets');
						// 	}}
						// 	style={[S.wh(20)]}
						// 	name={images.com.add}
						// />
						// <View style={[S.border(4, '#ccc', 1), S.radius(6), SS.row, SS.ac, SS.ph10, S.paddingV(2)]}>
						// 	<Image style={[S.wh(12), SS.mr10]} source={images.com.search} />
						// 	<TextInput
						// 		value={search}
						// 		onChangeText={setSearch}
						// 		style={[SS.fz14, SS.cS, S.w(50), SS.p0]}
						// 		placeholder={I18n.t('assets.search')}
						// 	/>
						// </View>
					}
				</View>
				<ScrollView scrollEnabled={false} ref={scroll} horizontal showsHorizontalScrollIndicator={false}>
					<View style={[S.w(ThemeVar.deviceWidth - 40)]}>
						<CoinList />
					</View>
					<View style={[S.w(ThemeVar.deviceWidth - 40)]}>
						<ActivityList search={search} />
					</View>
				</ScrollView>
			</ScrollView>
		</Container>
	);
};
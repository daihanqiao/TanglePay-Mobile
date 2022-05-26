import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';
import { I18n, IotaSDK } from '@tangle-pay/common';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Assets } from './assets';
import { User } from './user';
import { Staking } from './staking';
import { Apps } from './apps';
import { useGetNodeWallet } from '@tangle-pay/store/common';
import { SvgIcon, ThemeVar, S } from '@/common';

const Tab = createBottomTabNavigator();
const initRoutes = [
	{
		key: 'assets',
		title: I18n.t('assets.assets'),
		component: Assets
	},
	{
		key: 'apps',
		title: I18n.t('apps.title'),
		component: Apps
	},
	{
		key: 'staking',
		title: I18n.t('staking.title'),
		component: Staking
	},
	{
		key: 'me',
		title: I18n.t('user.me'),
		component: User
	}
];
export const Main = () => {
	const [curWallet] = useGetNodeWallet();
	const [routes, setRoutes] = useState([...initRoutes]);
	useEffect(() => {
		IotaSDK.setMqtt(curWallet.address);
	}, [curWallet.address]);
	useEffect(() => {
		const type = IotaSDK.nodes.find((e) => e.id === curWallet.nodeId)?.type;
		if (type === 1) {
			setRoutes([...initRoutes]);
		} else {
			setRoutes([...initRoutes.filter((e) => e.key !== 'staking')]);
		}
	}, [curWallet.nodeId]);
	return (
		<Tab.Navigator
			initialRouteName='assets'
			inactiveColor={ThemeVar.textColor}
			activeColor={ThemeVar.textColor}
			barStyle={{ backgroundColor: ThemeVar.cardDefaultBg }}
			shifting={false}>
			{routes.map((e) => {
				return (
					<Tab.Screen
						key={e.key}
						name={e.key}
						component={e.component}
						options={{
							headerShown: false,
							tabBarLabel: ({ focused }) => (
								<Text style={[focused ? styles.activeLabel : styles.label]}>{e.title}</Text>
							),
							tabBarIcon: ({ focused }) => (
								<SvgIcon
									name={e.key}
									size={e.key === 'staking' ? 32 : 25}
									color={focused ? ThemeVar.brandPrimary : ThemeVar.textColor}
								/>
							)
						}}></Tab.Screen>
				);
			})}
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	label: {
		...S.font(10, ThemeVar.textColor)
	},
	activeLabel: {
		...S.font(10, ThemeVar.brandPrimary)
	}
});

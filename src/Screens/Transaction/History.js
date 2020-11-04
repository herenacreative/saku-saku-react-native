import { Ionicons, StatusBar, React, Text, View, TouchableOpacity, useNavigation, SafeAreaView, ScrollView } from 'Libraries';
import { CardPhotoText } from 'Components';
import style from './style';
import { color } from 'Assets';

const History = () => {
	const navigation = useNavigation();

	return (
		<SafeAreaView style={style.container}>
			<StatusBar backgroundColor={color.primary} barStyle="light-content" />
			<ScrollView>
				<Text style={style.subtitlePadding}>This Week</Text>
				<CardPhotoText
					name='Samuel Suhi'
					detail='Income'
					count='Rp. 21.000.000'
				/>
				<CardPhotoText
					name='Samuel Suhi'
					detail='Income'
					count='Rp. 21.000.000'
				/>
				<Text style={style.subtitlePadding}>This Month</Text>
				<CardPhotoText
					name='Samuel Suhi'
					detail='Income'
					count='Rp. 21.000.000'
				/>
				<CardPhotoText
					name='Samuel Suhi'
					detail='Income'
					count='Rp. 21.000.000'
				/>
				<View style={style.btnSmall}>
					<View style={style.btnSmall1}>
						<TouchableOpacity style={style.btn}>

							<Ionicons name='arrow-up-outline' size={20} color='red' />
						</TouchableOpacity>
						<TouchableOpacity style={style.btn}>

							<Ionicons name='arrow-down-outline' size={20} color='green' />
						</TouchableOpacity>
					</View>
					<TouchableOpacity style={style.btnSmall2}>
						<Text style={style.text}>Filter by Date</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default History;

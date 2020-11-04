import { Ionicons, DateRangePicker, StatusBar, React, Text, View, moment, TouchableOpacity, useNavigation, useState, ScrollView, Modal } from 'Libraries';
import { CardPhotoText } from 'Components';
import style from './style';
import { color } from 'Assets';

const History = () => {
	const navigation = useNavigation();
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [displayedDate, setDisplayedDate] = useState(moment())
	const [dates, setDates] = useState({...dates})
	const [modalVisibleAdd, setModalVisibleAdd] = useState(false);

	return (
		<ScrollView>
			<>
		<View style={style.container}>
			<StatusBar backgroundColor={color.primary} barStyle="light-content" />
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
					<TouchableOpacity 
						onPress={() => {
							setModalVisibleAdd(true);
						}}
					style={style.btnSmall2}>
						<Text style={style.text}>Filter by Date</Text>
					</TouchableOpacity>
				</View>

				
			</View>
			{/* modal Add */}
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisibleAdd}
			>
				<TouchableOpacity style={style.modalFade} onPress={() => setModalVisibleAdd(false)}>
				</TouchableOpacity>
				<View style={style.modalContainer}>
					<View style={style.scrollTit}>
					</View>
					<View style={style.modalsCard}>
								<DateRangePicker
									onChange={setDates}
									endDate={endDate}
									startDate={startDate}
									displayedDate={displayedDate}
									range
								>
								<Text style={style.textModal}>Click Date</Text>
								</DateRangePicker>
					</View>
				</View>
			</Modal>
			</>
		</ScrollView>
	);
};

export default History;

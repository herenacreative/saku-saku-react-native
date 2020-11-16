import {
	React,
	View,
	Animatable,
	useNavigation,
	Text,
	ScrollView,
	StatusBar
} from 'Libraries';
import style from './style';
import { color } from 'Assets';

const FormAuth = props => {
	const navigation = useNavigation();
	const { content, title, desc, footer, linkfooter, link } = props;

	return (
		<ScrollView >
			<View style={style.container}>

				{/* title */}
				<StatusBar
					backgroundColor={color.default}
					barStyle="light-content"
				/>
				<View style={style.head}>
					<Animatable.Text
						animation="flipInX"
						iterationCount={21}
						direction="alternate"
						style={style.headline2}
					>
						Saku Saku
          </Animatable.Text>
				</View>

				{/* content */}
				<Animatable.View
					style={style.shadow}
					animation='fadeInUpBig'
				>
					<View style={style.contents}>
						<View style={style.content}>
							<Text style={style.title}>
								{title}
							</Text>
							<Text style={style.desc}>
								{desc}
							</Text>

							{/* form */}
							<View style={style.forms}>
								{content}
							</View>
							{/* form */}

						</View>
						<Text style={style.text}>
							{footer}
							<Text
								onPress={() => navigation.navigate(`${link}`)}
								style={style.textPrimary}
							>
								{linkfooter}
							</Text>
						</Text>
					</View>
				</Animatable.View>
			</View>
		</ScrollView>
	);
};

export default FormAuth;

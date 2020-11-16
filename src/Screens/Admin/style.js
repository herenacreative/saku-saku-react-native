import { Dimensions, StyleSheet } from 'Libraries';
import { color } from 'Assets';

const style = StyleSheet.create({
    container: {
        backgroundColor: color.dark2,
        minHeight: Dimensions.get('window').height + 30,
    },
    container1: {
        backgroundColor: color.default,
        minHeight: Dimensions.get('window').height + 30,
    },
    container2: {
        width: Dimensions.get('window').width - 30,
        backgroundColor: color.darkblue,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 7.5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 10,
        elevation: 10,
    },
    textPrimary: {
        color: color.light,
        fontWeight: 'bold',
    },
    helperText: {
        fontSize: 16,
        color: color.darkblue,
        marginLeft: 10,
        flex: 3,
    },
    helperTextPadding: {
        fontSize: 16,
        color: color.light,
        marginLeft: 10,
        flex: 3,
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        borderWidth: 1,
        backgroundColor: color.light,
        borderRadius: 10,
        paddingHorizontal: 10,
        borderColor: color.light,
    },
    textSearch: {
        marginHorizontal: 10,
        color: color.primary,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
    },
    topNav:{
        backgroundColor: color.darkblue,
        borderBottomRightRadius: 45,
        padding: 15,
    },
     headline: {
         fontSize: 24,
         color: color.light,
         fontFamily: 'NunitoSans-Bold',
     },
     //dashboard
     card: {
         flexDirection: 'row',
         justifyContent: 'space-between',
         padding: 15,
     },
     title: {
         fontSize: 34,
         fontWeight: 'bold',
         color: color.primary,
         fontFamily: 'JustAnotherHand-Regular',
     },
    card2: {
        marginTop: 15,
        height: Dimensions.get('window').height/2 + 60,
        backgroundColor: color.darkblue,
        flexDirection: 'row',
        borderTopRightRadius: 40,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 10,
        elevation: 10,
    },
    card3: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    btnmargin: {
        marginHorizontal: 15,
        marginTop: 20,
    },
    img: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    img2: {
        width: 50,
        height: 50,
    },
    //modal
    modalContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 330,
        padding: 15,
        position: 'absolute',
        bottom: 0,
        backgroundColor: color.darkblue,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    scrollTit: {
        width: 80,
        height: 6,
        margin: 15,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: color.primary,
    },
    modalFade: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: color.dark,
        opacity: 0.6,
    },
    textModal:{
        paddingVertical: 15,
        color: color.primary,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'JustAnotherHand-Regular',

    },
    modalsCard:{
        width: Dimensions.get('window').width- 30,
        marginVertical: 30,
        // backgroundColor: color.light,
        borderRadius: 10,
    },
    desc:{
        color: color.primary,
        fontSize: 16,
        paddingTop: 10,
        // paddingHorizontal: 10,
    },
    search2: {
        // flexDirection: 'row',
        // alignItems: 'center',
        // marginTop: 15,
        borderWidth: 1,
        backgroundColor: color.light,
        borderRadius: 10,
        // paddingBottom: 10,
        borderColor: color.light,
    },
    textSearch2: {
        // marginHorizontal: 5,
        color: color.darkblue,
        borderBottomColor: color.primary,
        borderBottomWidth: 1,
        marginBottom: 10,
        backgroundColor: color.default,
        fontSize: 16,
        borderRadius: 10,
    },
});

export default style;
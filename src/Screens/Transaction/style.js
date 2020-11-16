import { color } from 'Assets';
import {StyleSheet, Dimensions} from 'Libraries';

const style = StyleSheet.create({
    container: {
        backgroundColor: color.default,
        minHeight: Dimensions.get('window').height + 20,
    },
    card:{
        flexDirection: 'row',
        backgroundColor: color.primary,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
    },
    card1: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    card2:{
        width: Dimensions.get('window').width - 33,
        backgroundColor: color.light,
        marginLeft: 20, 
        marginTop: 10,
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
    chart: {
        padding: 15,
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    subtitlePadding: {
        fontWeight: 'bold',
        fontSize: 16,
        padding: 15,
    },
    subtitlePrimary: {
        fontSize: 16,
        color: color.primary,
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    btnSmall: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        marginTop: 15,
    },
    btnSmall1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 15,
        flex: 1,
    },
    btnSmall2: {
        margin: 15,
        padding: 15,
        paddingLeft: 0,
        borderRadius: 15,
        backgroundColor: color.light,
        flex: 2,
    },
    btn: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: color.light,
        marginRight: 10,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: color.primary,
    },
    inputs: {
        borderWidth: 1,
        margin: 15,
        backgroundColor: color.light,
        borderColor: color.light,
        borderRadius: 10,
        padding: 10,
    },
    inputs1: {
        paddingTop: 30,
        textAlign: 'center',
        fontSize: 42,
        fontWeight: 'bold',
        color: color.primary,
    },
    helperTextPadding:{
        opacity: 0.5,
        paddingLeft: 15,
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15,
        borderWidth: 1,
        backgroundColor: color.light,
        borderRadius: 10,
        paddingHorizontal: 10,
        borderColor: color.light,
    },
    textSearch:{
        marginHorizontal: 10,
        color: color.primary,
    },
    topNav: {
        justifyContent: 'center',
        // paddingVertical: 5,
        minHeight: Dimensions.get('window').height / 6,
        backgroundColor: color.primary,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
    },
    textcenter:{
        marginTop: 30,
        marginBottom: 30,
        alignItems: 'center',
    },
    inputs2: {
        borderBottomWidth: 1,
        margin: 15,
        padding: 10,
    },
    btnmargin:{
        marginHorizontal: 15,
        marginTop: 20,
    },
    betweens: {
        height: Dimensions.get('window').height - 160,
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    center:{
        alignItems: 'center',
        margin: 15,
    },
    action: {
        flexDirection: 'row',
        margin: 15,
        borderBottomColor: 'rgba(169, 169, 169, 0.6)',
        borderBottomWidth: 1,
    },
    textInput1: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
        fontSize: 16,
    },
    icons: {
        marginTop: 10,
    },
    viewImg:{
        alignItems: 'center',
        margin: 25,
    },
    imgStatus:{
        height: 80,
        width: 80,
    },
    headline5:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    img: {
        height: 50,
        width: 50,
        borderRadius: 10,
    },
    //modal
    modalContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 200,
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
    textModal: {
        paddingVertical: 15,
        color: color.primary,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'JustAnotherHand-Regular',

    },
    modalsCard: {
        width: Dimensions.get('window').width - 30,
        borderRadius: 10,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default style;
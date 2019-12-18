import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default {
    
    urls: {
        "DEV_URL" : "http://api.plos.org/search?q=title:DNA"
    },
    endpoints: {
        "clientdetails" : "clientdetails",
    },
    colors: {
        primaryColor: "gray",
        white: 'white',
    },
    fonts: {
        font_AvenirBookOblique: 'Avenir-BookOblique',
        font_AvenirBook: 'Avenir-Book',
        font_AvenirMedium: 'Avenir-Medium',
        font_AvenirHeavy: 'Avenir-Heavy',
    },
    fontSize: {
        font_1_8: RFPercentage(1.8),
        fontSize: RFValue(24, 580) // second argument is standardScreenHeight(optional),
    },
    fontFamily: {
        font_AvenirBookOblique: 'Avenir-BookOblique',
        font_AvenirBook: 'Avenir-Book',
        font_AvenirMedium: 'Avenir-Medium',
        font_AvenirHeavy: 'Avenir-Heavy',
        font_sourceSansPro_regular: 'SourceSansPro-Regular',
        font_sourceSansPro_bold: 'SourceSansPro-Bold',
    },
    images: {

    },
    axiosTimeOut:30000,
    environmentVar_key:'dev',//DEV
};
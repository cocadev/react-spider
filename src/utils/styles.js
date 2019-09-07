import { container } from "assets/jss/material-kit-react.js";
import imageOurApps from "assets/img/widescreen-1.jpg"
import imageCard1 from "assets/img/card-bg-1.jpg"
import imageCard2 from "assets/img/card-bg-2.jpg"
import imageCard3 from "assets/img/card-bg-3.jpg"
// import imageCard4 from "assets/img/card-bg-4.jpg"

import OurApp from 'assets/img/feature-bg-2.jpg'

export default {
    ///////////////////////// Normal /////////////////////////////
    container: {
        zIndex: "12",
        color: "#FFFFFF",
        ...container
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3",
        paddingTop: "59px"
    },
    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        '@media (max-width:426px)': {
            margin: "-16px 5px 0px",
        },
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    //////////////////////////////////////// other //////////////////////////
    img: {
        width: '100%'
    },
    imgPhone: {
        width: '80%'
    },
    body: {
        marginLeft: "5em"
    },
    //////////////////////////// Normal Section ////////////////////////////
    section: {
        padding: "70px",
        textAlign: "left",
        ...container,
        display: 'flex',
        '@media (max-width:426px)': {
            padding: "0 50px",
        },
    },
    background: {
        height: 605,
        marginTop: 87,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: "url(" + imageOurApps + ")",

        '@media (max-width:426px)': {
            height: 280,
            marginTop: 71,
        },
    },
    back: {
        marginTop: 87,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: "url(" + OurApp + ")",

        '@media (max-width:426px)': {
            height: 280,
            marginTop: 71,
        },
    },

    fluid: {
        marginTop: 147,
        ...container,
        width: "100%",
        "@media (min-width: 1200px)": {
            maxWidth: "1270px",
        },
        '@media (max-width:426px)': {
            height: 280,
            marginTop: 71,
        },
    },

    //////////////////////////// content ////////////


    //////////////////////////// Letter Typhography ////////////////////////
    content: {
        fontSize: 55,
        color: '#fff',
        fontWeight: 500,
        lineHeight: 1.2,
        marginTop: 40,
        '@media (max-width:426px)': {
            fontSize: 20,
        },
    },
    title: {
        marginTop: 50,
        color: "#fff !important",
        fontSize: 36,
        fontWeight: 300,
        '@media (max-width:426px)': {
            marginTop: 30,
            fontSize: 16,
        },
    },

    h2: {
        fontSize: "2.8125rem",
        color: '#343434',
        fontWeight: 500,
        lineHeight: 1.2
    },
    h3: {
        color: "#6c757d !important"
    },
    h4: {
        color: "#434343 !important",
        fontSize: 20,
        fontWeight: 500
    },
    h5: {
        color: "#9c27B0 !important",
        fontWeight: 500
    },
    h6: {
        fontSize: 16,
        color: '#434343',
    },
    h7: {
        fontSize: 36,
        color: '#434343',
        fontWeight: '500'
    },

    myBtn: {
        marginTop: 320,
        '@media (max-width:426px)': {
            marginTop: -40,
        },
    },
    //////////// color //////////
    pink: {
        color: "#9c27B0 !important",
    },

    //////////// spacing ///////////

    ml: {
        marginLeft: "2.7em",
        '@media (max-width:426px)': {
            marginLeft: "0",
        },
    },

    //////////// card ////////////////
    card: {
        padding: "70px 30px",
        '@media (max-width:426px)': {
            padding: "20px 5px 1px 5px",
            margin: "2px",
        },
        margin: "8px",
        border: "1px solid #e6e6e6 !important",
        boxShadow: "6px 5px 30px rgba(0,0,0,0.12) !important",
        borderRadius: 5,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardBg1: {
        backgroundImage: "url(" + imageCard1 + ")",
    },
    cardBg2: {
        backgroundImage: "url(" + imageCard2 + ")",
    },
    cardBg3: {
        backgroundImage: "url(" + imageCard3 + ")",
    },


    ///////////////shopbox////////////////
    tagView: {
        position: "absolute",
        top: "30px",
        left: "30px",
    },
    tag: {
        backgroundImage: "-webkit-linear-gradient(left,#c54db7 0%,#ffab2f 44%,#ffa700 100%)",
        fontSize: "12px",
        fontWeight: "bold",
        backgroundSize: "300%,1px",
        boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)!important",
        borderRadius: "12px",
        padding: "4px 12px",
        textTransform: "uppercase",
        color: "#fff"
    },
    shopBox: {
        display: "inline-block",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        maxWidth: "320px",
        height: "370px",
        background: "white",
        marginLeft: "20px",
        marginRight: "20px",
        border: "1px solid #DEE2E6",
        borderRadius: "5px",
        marginBottom: "10px",
        textAlign: "center",
        boxShadow: "1px 3px 10px 1px rgba(0, 0, 0, 0.23)",
        overflow: "hidden",
        '@media (max-width:426px)': {
            maxWidth: "245px",
            height: "350px",
            marginLeft: "2px",
            marginRight: "2px",
        },
    },
    navWrapper: {
        margin: "20px auto 50px auto",
        textAlign: "center"
    },

    ///////////////////////////////// Image house ////////////////////////////////////
    imgFluid: {
        maxWidth: "100%",
        height: "auto"
    },
    imgRounded: {
        borderRadius: "6px !important"
    },
    imgRoundedCircle: {
        borderRadius: "50% !important"
    },
    imgRaised: {
        boxShadow:
            "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    imgGallery: {
        width: "100%",
        marginBottom: "2.142rem"
    },
    imgCardTop: {
        width: "100%",
        borderTopLeftRadius: "calc(.25rem - 1px)",
        borderTopRightRadius: "calc(.25rem - 1px)"
    },
    imgCardBottom: {
        width: "100%",
        borderBottomLeftRadius: "calc(.25rem - 1px)",
        borderBottomRightRadius: "calc(.25rem - 1px)"
    },
    imgCard: {
        width: "100%",
        borderRadius: "calc(.25rem - 1px)"
    },
    imgCardOverlay: {
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        padding: "1.25rem"
    }
};

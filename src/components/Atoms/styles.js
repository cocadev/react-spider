import { container } from "assets/jss/material-kit-react.js";
import imageOurApps from "assets/img/widescreen-1.jpg"
import imageAbout from "assets/img/widescreen-2.jpg"
import imageTutorial from "assets/img/widescreen-3.jpg"
import imageServices from "assets/img/widescreen-4.jpg"

import imageCard3 from "assets/img/card-bg-3.jpg"

export default {
    body: {
        marginLeft: "5em",
        '@media (max-width:900px)': {
            marginLeft: "1em",
        },
        '@media (max-width:426px)': {
            marginLeft: "0.5em",
        },
    },
    section: {
        padding: "70px",
        textAlign: "left",
        ...container,
        display: 'flex',
        '@media (max-width:900px)': {
            padding: "0 20px",
        },
        '@media (max-width:426px)': {
            padding: "0 5px",
        },
    },
    //////////////////////////////////////////////////////////////
    background: {
        height: 460,
        marginTop: 87,
        paddingTop: 20,
        backgroundPosition: "center",
        backgroundSize: "cover",
        '@media (max-width:900px)': {
            height: 380,
            marginTop: 71,
            paddingTop: 40,
        },
        '@media (max-width:426px)': {
            height: 220,
            marginTop: 29,
            paddingTop: 30,
        },
        backgroundRepeat: "no-repeat"
    },
    tutorial: {
        backgroundImage: "url(" + imageTutorial + ")",
    },
    apps: {
        backgroundImage: "url(" + imageOurApps + ")",
        height: 540,
        '@media (max-width:900px)': {
            height: 420,
        },
        '@media (max-width:426px)': {
            height: 260,
        },
    },
    about: {
        backgroundImage: "url(" + imageAbout + ")",
    },
    services: {
        backgroundImage: "url(" + imageServices + ")",
        height: 540,
        '@media (max-width:900px)': {
            height: 420,
        },
        '@media (max-width:426px)': {
            height: 260,
        },
    },
    ///////////////////////////////////////////////////////////////
    h1: {
        fontSize: '2.1125rem',
        fontWeight: '500',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        '@media (max-width:900px)': {
            fontSize: '1.6125rem',

        },
        '@media (max-width:426px)': {
            fontSize: '1.2125rem',

        },

    },
    h2: {
        fontSize: '1.5125rem',
        fontWeight: '300',
        color: "#6c757d !important",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        lineHeight: '2.025rem',
        '@media (max-width:900px)': {
            fontSize: '1.2125rem',
            lineHeight: '1.625rem',

        },
        '@media (max-width:426px)': {
            fontSize: '1.0125rem',
            lineHeight: '1.225rem',
        },
    },
    h3: {
        color: "#6c757d !important",
        fontSize: "1.6125rem",
        '@media (max-width:900px)': {
            fontSize: "1.3125rem",
        },
        '@media (max-width:426px)': {
            fontSize: "1.1125rem",
        },
    },
    h4: {
        marginTop: "1.2em",
        color: "#434343 !important",
        fontSize: 20,
        fontWeight: 500
    },
    h5: {
        color: "#9c27B0 !important",
        fontWeight: 500
    },
    h6: {
        fontSize: "2.8125rem",
        color: '#343434',
        fontWeight: 500,
        lineHeight: 1.2,
        '@media (max-width:900px)': {
            fontSize: "1.8125rem",
        },
        '@media (max-width:426px)': {
            fontSize: "1.2125rem",
        },
    },
    h7: {
        fontSize: 16,
        color: '#434343',
    },
    h01:{
        fontSize: "3.5125rem",
        fontWeight: '500',
        lineHeight: '4rem',
        color: '#fff',
        marginLeft: '0.9rem',
        '@media (max-width:426px)': {
            fontSize: "2.5125rem",
            lineHeight: '2.8rem',
        },
    },
    h02:{
        fontSize: "2.2125rem",
        lineHeight: "3.0125rem",
        marginTop: "4rem",
        color: '#fff',
        '@media (max-width:426px)': {
            fontSize: "1.2125rem",
            lineHeight: '1.8rem',
            marginTop: "2rem",
        },
    },
    card: {
        padding: "30px 46px",
        '@media (max-width:900px)': {
            padding: "20px 5px 12px 5px",
            margin: "50px 2px",
        },
        '@media (max-width:426px)': {
            padding: "20px 5px 12px 5px",
            margin: "30px 2px",
        },
        margin: "8px 60px",
        border: "1px solid #e6e6e6 !important",
        boxShadow: "6px 5px 30px rgba(0,0,0,0.12) !important",
        borderRadius: 5,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: "url(" + imageCard3 + ")",
    },
    img: {
        width: '100%'
    },
    pink: {
        color: "#9c27B0 !important",
    },
    dark: {
        marginTop: '12px',
        color: "#333 !important",
    },
    ml: {
        margin: "0.7em 0 0 2.7em",
        '@media (max-width:426px)': {
            marginLeft: "0",
        },
    },
    mt: {
        marginTop: "2.7em",
        '@media (max-width:426px)': {
            marginLeft: "0.7em",
        },
    },
    flexend: {
        marginBottom: '40px',
        display: 'flex',
        alignItems: 'flex-end'
    },
    myBtn: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    myBtn2: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    }
};

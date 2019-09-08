import { container } from "assets/jss/material-kit-react.js";
import imageOurApps from "assets/img/widescreen-1.jpg"
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
    pink: {
        color: "#9c27B0 !important",
    },
    h4: {
        marginTop: "1.2em",
        color: "#434343 !important",
        fontSize: 20,
        fontWeight: 500
    },
    h7: {
        fontSize: 16,
        color: '#434343',
    },
    ml: {
        margin: "0.7em 0 0 2.7em",
        '@media (max-width:426px)': {
            marginLeft: "0",
        },
    },
};

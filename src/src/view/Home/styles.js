import { container, title } from "assets/jss/material-kit-react.js";

export default {
    ///////////////////////// Normal /////////////////////////////
    container: {
        zIndex: "12",
        color: "#FFFFFF",
        ...container
    },
    title: {
        ...title,
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        color: "#FFFFFF",
        textDecoration: "none"
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3"
    },
    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    /////////////////////////// Modal ///////////////////////
    modalBtn: {
        zIndex: 100,
        position: 'fixed',
        right: 10,
        bottom: 10
    },
    modalCloseButton: {
        color: "#999999",
        marginTop: "12px",
        WebkitAppearance: "none",
        padding: "0",
        cursor: "pointer",
        background: "0 0",
        border: "0",
        fontSize: "inherit",
        opacity: ".9",
        textShadow: "none",
        fontWeight: "700",
        lineHeight: "1",
        float: "right"
    }
};

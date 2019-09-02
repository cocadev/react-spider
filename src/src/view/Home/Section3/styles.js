import { container } from "assets/jss/material-kit-react.js";

export default {
  img: {
    width: "100%"
  },
  section: {
    padding: "70px 0",
    textAlign: "left",
    ...container
  },
  background: {
    backgroundColor: '#F8F8F8'
  },
  body: {
    // paddingLeft: "3rem !important"
  },
  title: {
    color: "#9c27B0 !important",
    fontWeight: 500
  },
  content: {
    fontSize: "2.8125rem",
    color: '#343434',
    fontWeight: 500,
    lineHeight: 1.2
  },
  description: {
    color: "#6c757d !important",
    fontWeight: "400 !important"
  },
  item: {
    color: "#434343 !important",
    fontSize: 20,
    fontWeight: 500
  },
  itemContent: {
    fontSize: 16,
    paddingLeft: "1.8rem",
    color: '#434343'
  },
  pink: {
    color: "#9c27B0 !important",
    marginRight: 10
  },
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
  view:{
    paddingBottom: '50px'
  },
  left: {
    marginLeft: "16px"
  },
  cardTitle: {
    fontWeight: 500,
    fontSize: 20
  },
  hr: {
    height: 1,
    width: '100%',
    backgroundColor: '#DEE2E6',
    margin: '2px 0 12px 0'
  },
  shopBox :{
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
  }
};

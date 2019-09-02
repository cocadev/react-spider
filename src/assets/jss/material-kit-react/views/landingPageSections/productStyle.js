import image1 from "assets/img/card-bg-blue.jpg"
import image2 from "assets/img/card-bg-black.jpg"
import image3 from "assets/img/card-bg-3.jpg"

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  description: {
    color: "#fff",
    fontSize:16,
    lineHeight:1.875
  },
  description3: {
    color: "#111",
    fontSize:16,
    lineHeight:1.875
  },
  card1: {
    Height: "50px",
    padding: "70px 30px",
    margin: "8px",
    borderRadius: 5,
    backgroundPosition: "top center",
    backgroundSize: "cover",
    backgroundImage: "url(" + image1 + ")",
  },
  card2: {
    Height: "50px",
    padding: "70px 30px",
    margin: "8px",
    borderRadius: 5,
    backgroundPosition: "top center",
    backgroundSize: "cover",
    backgroundImage: "url(" + image2 + ")",
  },
  card3: {
    Height: "50px",
    padding: "70px 30px",
    margin: "8px",
    borderRadius: 5,
    backgroundPosition: "top center",
    backgroundSize: "cover",
    backgroundImage: "url(" + image3 + ")",
    boxShadow: "6px 5px 30px rgba(0,0,0,0.12) !important"
  },
  icon1: {
    width:50,
    height:50,
    filter: "invert(100%)"
  },
  icon2: {
    width:50,
    height:50,
    filter: "invert(100%)"
  },
  icon3: {
    width:50,
    height:50,
  },
  title: {
    marginTop:30,
    fontSize: 20,
    fontWeight: 500
  },
  title3:{
    marginTop:30,
    fontSize: 20,
    fontWeight: 500,
    color: '#111'
  },
  learn1: {
    fontWeight: 500,
    marginTop: 50,
    color: '#fff'
  },
  learn2: {
    fontWeight: 500,
    marginTop: 50,
    color: '#fff'
  },
  learn3: {
    fontWeight: 500,
    marginTop: 50,
    color: '#9c27b0'
  }
};

export default productStyle;

import { Link } from 'react-router-dom';
import React from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  pageOuterContainer: {
    backgroundCover: ({ theme }) => "#f6f6f6",
    textAlign:"Center"
  },
  pageInnerContainer: {
    display: "flex",
    flex-direction: column;
    height: 100%; 
  },
  homepageTitleContainer: {    
  }, 
  homepageTitleFont: {           
    font: {
      size: "15Rem",
      color: "#24202e",
    },    
  },
  homepageSubtitleContainer: {
    textAlign:"center",
  },
  homepageSubtitleFont: {
    color: 'rgba(0,0,0,0.37)'
  },
  homeMenu: {
    flex: "none"
  },
  link: {
    color: "#24202e",
    textDecoration: "none",     
    "&:hover": {
      opacity: 0.5
    },
    transition: "0.3s"
  },
  description: {
    flex: "none"
    margin-left: "auto",
    width: "32rem",
    columns: "2",
  }
});

const Comp = () => {
  const theme = useTheme();
  const styleComponents = useStyles({ theme });
  return (
   <div className={styleComponents.pageOuterContainer}>
    <div className={styleComponents.pageInnerContainer}>
      <div className={styleComponents.homepageTitleContainer}>
        <h1 className={styleComponents.homepageTitleFont}>Dum_Dev.</h1>
        <div className = {styleComponents.homepageSubtitleConatiner}>
          <h4 className = {styleComponents.homepageSubtitleFont}>
            - Lack of time, is a just story of your mind -
          </h4>
        </div>
      </div>
      <div className={styleComponents.homeMenu}>
        <Link to="/posts" className={styleComponents.link}>
          Posts
        </Link>
        <br />
        <Link to="/Series" className={styleComponents.link}>
          Series
        </Link>
          <br />
        <Link to="/books" className={styleComponents.link}>
          Books
        </Link>
        <br />
        <Link to="/portfolio" className={styleComponents.link}>
          Portfoilo
        </Link>
          <br />
        <a
          className={styleComponents.link}
          href="http://cssinjs.org/react-jss"
          traget="_blank"
        >
          Search
        </a>
      </div>
      <div className={styleComponents.description}>
        This blog was made for posting which is results of programming study. I
        This blog was made for posting which is results of programming study. I
        This blog was made for posting which is results of programming study. I
        This blog was made for posting which is results of programming study. I
        This blog was made for posting which is results of programming study. I
        This blog was made for posting which is results of programming study. I
        This blog was made for posting which is results of programming study. I
        This blog was made for posting which is results of programming study. I
        This blog was made for posting which is results of programming study. I
        This blog was made for posting which is results of programming study. I
        This blog was made for posting which is results of programming study. I
        This blog was made for posting which is results of programming study. I
        This blog was made for posting which is results of programming study. I
        This blog was made for posting which is results of programming study. I
        This blog was made for posting which is results of programming study. I
     
      </div>
    </div>
  </div>
  );
};

export default Comp;

import { Link } from 'react-router-dom';
import React from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    padding: 40,
    backgroundCover: ({ theme }) => "#f6f6f6",
    textAlign: "center"
  },
  title: {
    font: {
      size: "15Rem",
      weight: 1000
	},	  
	padding: "8Rem 0Rem 0Rem 0Rem",
	margin: ["0Rem", "0Rem", "6Rem", "0Rem"],
    color: "#24202e",
  },
  homeMenu: {
	float: "Left",

	"text-align" : "Left",
    margin: ["0Rem", "0Rem", "7Rem", "6.5Rem"]
  },
  link: {
    color: "#24202e",
    textDecoration: "none",
    font: {
      size: "1.4Rem"
    },
    "&:hover": {
      opacity: 0.5
    },
    transition: "0.3s"
  },
  description: {
    margin: ["0Rem", "0Rem", "0Rem", "40Rem"],
    mozColumnCount: 2,
    webkitColumnCount: 2,
    columnCount: 2,
    columnWidth: "1Rem"
  }
});

const Comp = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Dum_Dev.</h1>
      <div className={classes.homeMenu}>
		<Link to="/posts" className={classes.link}>
				Posts
		</Link>
        <br />
		<Link to="/Series" className={classes.link}>
				Series
		</Link>
        <br />
		<Link to="/books" className={classes.link}>
				Books
		</Link>
        <br />
		<Link to="/portfolio" className={classes.link}>
				Portfoilo
		</Link>
        <br />
        <a
          className={classes.link}
          href="http://cssinjs.org/react-jss"
          traget="_blank"
        >
          Search
        </a>
      </div>
      <div className={classes.description}>
        This blog was made for posting which is results of programming study. I
        mainly study about React.js, Node.js, Express.js, Redux, etc... 뭘 쓸지
        고민해보기
      </div>
    </div>
  );
};

export default Comp;

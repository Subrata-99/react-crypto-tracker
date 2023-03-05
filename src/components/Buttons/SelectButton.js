import { makeStyles } from "@material-ui/core";
import React from "react";
import { Classnames } from "react-alice-carousel";
const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    SelectButton: {
      border: "1px solid #40E0D0",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor: selected ? "#40E0D0" : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "#40E0D0",
        color: "black",
      },
      width: "22%",
      margin: 5,
    },
  });

  const classes = useStyles();
  return (
    <span onClick={onClick} className={classes.SelectButton}>
      {children}
    </span>
  );
};

export default SelectButton;

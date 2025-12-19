import React from "react";
import classes from "../../components/MyPath/MyPath.module.scss";

const Index: React.FC<{ item: string }> = ({ item }) => {
  return (
    <ul className={classes.ul}>
      <li>Главная</li>
      <li>/</li>
      <li>Услуги</li>
      <li>/</li>
      <li>{item} </li>
    </ul>
  );
};

export default Index;

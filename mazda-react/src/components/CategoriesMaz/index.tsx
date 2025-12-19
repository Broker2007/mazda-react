import React from "react";
import { IMazda } from "../Pages/Home";
import classes from "../../components/CategoriesMaz/CategoriesMaz.module.scss";

const Index: React.FC<IMazda> = (props) => {
  const { title, image, data } = props;
  return (
    <div>
      <img src={require("../../" + title)} className={classes.block}/>
      <p className="fz-24 mb-5">{image}</p>
      <p className="fz-14 mb-5">{data}</p>
    </div>
  );
};

export default Index;

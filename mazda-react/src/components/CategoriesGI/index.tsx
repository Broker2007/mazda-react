import React from 'react';
import { Link } from "react-router-dom";
import {ICategories} from "../Pages/Home";
import {clsx} from "clsx";
import classes from "../CategoriesGI/CategoriesGI.module.scss"

type CategoriesGI = {
    index: number;
    item:ICategories;
}
const Index:React.FC<CategoriesGI> = (props) => {
    const {title, image, _id} = props.item
    return (
        <Link to={"/services/" + _id} className={classes.link}>
          <div className={clsx("d-f jc-sp ai-cen", classes.category__block)}>
              <div className={classes.border__r}>
                  <img src={require("../../" + title)} alt='картинка)' width='40' height='40'/>
              </div>
              <div className="w-100">
                <p className="text-align-cen">{image}</p>
              </div>
          </div>
        </Link>
    );
}

export default Index;
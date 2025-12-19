import React, { useState } from "react";
import classes from "../MyScroll/MyScroll.module.scss";
import { clsx } from "clsx";
import MyImage from "./MyImage";

const Index:React.FC = () => {
  const nextItem = () => {
    if (index < 3) {
      setIndex(index + 1);
    } else {
      setIndex(1);
    }
  };
  const backItem = () => {
    if (index > 1) {
      setIndex(index - 1);
    } else {
      setIndex(3);
    }
  };
  const setItem = (i:number) => {
    setIndex(i);
  };
  const [index, setIndex] = useState(1);
  const items = [
    {
      classes: "background1",
      p1: "Технический центр",
      p2: "DVS-MAZDA",
      p3: "Бесплатная компьютерная диагностика",
      p4: "при первом обращении",
    },
    {
      classes: "background2",
      p1: "DVS-MAZDA",
      p2: "Мы предлагаем!",
      p3: "Плановое техническое обслуживание",
      p4: "автомобиля мазда",
    },
    {
      classes: "background3",
      p1: "DVS-MAZDA",
      p2: "Номер 1",
      p3: "В 2018 году наши машины показали",
      p4: "лучшее качество",
    },
  ];
  return (
    <div className={classes.hero_slider}>
      <img
        src={require("../../assets/next.png")}
        className={classes.next}
        onClick={() => nextItem()}
      />
      <img
        src={require("../../assets/back.png")}
        className={classes.back}
        onClick={() => backItem()}
      />
      {items.map((item, i) => (
        <MyImage item={item} bul={i + 1 == index ? true : false} key={i}/>
      ))}
      <div className={clsx("d-f ai-cen", classes.gap)}>
        {items.map((obj, i) => (
          <span
              key={i}
            onClick={() => setItem(i + 1)}
            className={clsx(
              classes.span,
              i + 1 === index && "active",
              i + 1 !== index && "hover"
            )}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Index;

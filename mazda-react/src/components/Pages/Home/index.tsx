import React, {useEffect, useState} from "react";
import classes from "../Home/Home.module.scss";
import {clsx} from "clsx";
import CategoriesGI from "../../CategoriesGI";
import axios from "axios";
import CategoriesMaz from "../../CategoriesMaz";
import Promotion from "../../Promotion";
import RepairSer from "../../RepairSer";
import MyScroll from "../../MyScroll";


axios.defaults.headers.post["Content-Type"] = "application/json";
export interface ICategories {
  _id: string;
  image: string;
  title: string;
}

export interface IMazda {
  _id: string;
  data: string;
  image: string;
  title: string;
}
const Index: React.FC = () => {
  let [mazda, setMazda] = useState<IMazda[]>([]);
  let [categories, setCategories] = useState<ICategories[]>([]);

  const getCategories = async () => {
    const response = await axios.get<ICategories[]>(
      "http://localhost:3004/categories"
    );
    setCategories(response.data);
  };
  const getMazda = async () => {
    const response = await axios.get<IMazda[]>("http://localhost:3004/mazda");
    console.log(response.data);
    setMazda(response.data);
  };
  useEffect(() => {
    getCategories();
    getMazda();
  }, []);

  return (
    <div>
      <MyScroll/>
      <div className={classes.background__grid}>
        <div id={"service"} className={clsx("container", classes.grid)}>
          {categories.map((obj, index) => (
            <CategoriesGI key={index} item={obj} index={index} />
          ))}
        </div>
      </div>
      <div className={clsx("text-align-cen", classes.flex)}>
        <p className={clsx("text-align-cen", classes.title)}>
          АВТОМОБИЛИ МАЗДА
        </p>
        <div className="d-f jc-cen ai-cen">
          <span className={classes.span}> </span>
        </div>
        <div
          className={clsx(
            "d-f flex-wrap jc-cen ai-cen",
            classes.mazdas
          )}
        >
          {mazda.map((obj, index) => (
            <CategoriesMaz key={index} {...obj} />
          ))}
        </div>
        <span className={clsx("container", classes.span_2)}></span>
        <div>
          <p className={clsx("text-align-cen", classes.title)}>
            СТАНЦИЯ ТЕХНИЧЕСКОГО ОБСЛУЖИВАНИЯ <br />
            АВТОМОБИЛЕЙ «ДВС-МАЗДА»
          </p>
          <div className="d-f jc-cen ai-cen">
            <span className={classes.span}> </span>
          </div>
        </div>
        <div className={clsx("container")}>
          <p className={clsx("text-align-cen", classes.title_2)}>
            МЫ ПРЕДЛАГАЕМ
          </p>
          <div className={classes.grid_2}>
            <div>
              <p>
                Бесплатная компьютерная диагностика автомобиля Mazda каждому
                новому клиенту!
              </p>
            </div>
            <div>
              <p>
                Установка сигнализации и систем дистанционного контроля за
                автомобилем Mazda!
              </p>
            </div>
            <div>
              <p>Ремонт автомобилей Mazda любой сложности!</p>
            </div>
            <div>
              <p>
                Подбор запасных частей и расходных материалов для автомобиля
                Mazda!
              </p>
            </div>
            <div>
              <p>Плановое техническое обслуживание автомобиля Mazda!</p>
            </div>
            <div>
              <p>Шиномонтаж и балансировка для автомобилей Mazda!</p>
            </div>
            <div>
              <p>Чистка и заправка кондиционера автомобилей Mazda!</p>
            </div>
            <div>
              <p>Эвакуация автомобилей Mazda по Москве!</p>
            </div>
          </div>
        </div>
        <span className={clsx("container", classes.span_2)}></span>
        <div className={clsx("container ")}>
          <p className={clsx("text-align-cen", classes.title_2)}>
            НАШИ ПРЕИМУЩЕСТВА
          </p>
          <div className={clsx("d-f jc-cen ai-cen flex-wrap", classes.flex_2)}>
            <div className={clsx("d-f jc-cen ai-cen", classes.flex_3)}>
              <div
                className={clsx(
                  "d-f jc-cen ai-cen pb-15 pt-15 pl-15 pr-15",
                  classes.prei
                )}
              >
                <img src={require("../../../assets/Vector1.png")} />
              </div>
              <div className={classes.divBlock}>
                <p>Гарантия на работы и запасные части для автомобилей Mazda</p>
              </div>
            </div>
            <div className={clsx("d-f jc-cen ai-cen", classes.flex_3)}>
              <div
                className={clsx(
                  "d-f jc-cen ai-cen pb-15 pt-15 pl-15 pr-15",
                  classes.prei
                )}
              >
                <img src={require("../../../assets/Vector2.png")} />
              </div>
              <div className={classes.divBlock}>
                <p>Доступные цены на ремонт и облуживание автомобилей Mazda</p>
              </div>
            </div>
            <div className={clsx("d-f jc-cen ai-cen", classes.flex_3)}>
              <div
                className={clsx(
                  "d-f jc-cen ai-cen pb-15 pt-15 pl-15 pr-15",
                  classes.prei
                )}
              >
                <img src={require("../../../assets/Vector1.png")} />
              </div>
              <div className={classes.divBlock}>
                <p>
                  Свободный доступ в ремзону – отсутствие не согласованных
                  скрытых работ
                </p>
              </div>
            </div>
            <div className={clsx("d-f jc-cen ai-cen", classes.flex_3)}>
              <div
                className={clsx(
                  "d-f jc-cen ai-cen pb-15 pt-15 pl-15 pr-15",
                  classes.prei
                )}
              >
                <img src={require("../../../assets/Vector4.png")} />
              </div>
              <div className={classes.divBlock}>
                <p>Клиентская зона ожидания: WI-FI, ТВ, напитки</p>
              </div>
            </div>
            <div className={clsx("d-f jc-cen ai-cen", classes.flex_3)}>
              <div
                className={clsx(
                  "d-f jc-cen ai-cen pb-15 pt-15 pl-15 pr-15",
                  classes.prei
                )}
              >
                <img src={require("../../../assets/Vector5.png")} />
              </div>
              <div className={classes.divBlock}>
                <p>5 минут пешком до метро и МЦД Шелепиха</p>
              </div>
            </div>
          </div>
          <Promotion />
        </div>
        <RepairSer />
      </div>
    </div>
  );
};
export default Index;

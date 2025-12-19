import React, { useEffect, useState } from "react";
import classes from "../../Services/RepairAuTr/RepairAuTr.module.scss";
import { clsx } from "clsx";
import MyPath from "../../../MyPath";
import MyInput from "../../../MyInput";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../Redux/store";
import {fetchEntry, setName, setPhone} from "../../../../Redux/FormSlice";


type ServiceProps = {
  title: String;
  price: String;
};

type SignsProps = {
  title: String;
  description: String;
};
interface Item {
  _id: string;
  title: string;
  description: string;
  service: ServiceProps[];
  addService: ServiceProps[];
  signs: SignsProps[];
  advice: string;
  repair1: string[];
  repair2: string[];
  image: string;
}
const Index: React.FC = (props) => {
  const { id } = useParams();
  const [data, setData] = useState<Item>();
  const dispatch = useAppDispatch();
  const { name, phone } = useSelector((state: RootState) => state.entry);

  const getForm = (evt: any) => {
    evt.preventDefault();
    if (name && name.length !== 3 && typeof name !== "string") {
      return;
    }
    if (phone && phone.length > 8 && typeof phone !== "string") {
      return;
    }
    dispatch(fetchEntry({ name, phone }));
    dispatch(setName(""));
    dispatch(setPhone(""));
    alert("В ближайшее время мы вам позвоним")
  };
  const getData = async (id: string | undefined) => {
    console.log(id);
    const response = await axios.post("http://localhost:3004/service", {
      id: id,
    });
    setData(response.data);
  };
  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, [id]);
  console.log(data);
  if (!data) {
    return "Загрузка";
  }
  console.log(data.image);
  return (
    <div>
      <div
        className={classes.image__bgc}
        style={{ backgroundImage: `url("${data.image}")` }}
      >
        <div className={clsx("text-align-cen", classes.container)}>
          <MyPath item={data.title} />
          <p>{data.title}</p>
          <p>
            Бесплатная компьютерная диагностика. Эвакуатор до нашего сервиса
          </p>
        </div>
      </div>
      <div className={clsx("container", classes.text)}>
        <p>{data.description}</p>
        <div className={clsx("pl-30 pt-25 pb-25", classes.text2)}>
          Техцентр DVS-Mazda в Москве занимается ремонтом автомобилей
          всего модельного ряда МАЗДА.
        </div>
        <div className={clsx("d-f jc-cen ai-cen mt-50 mb-50", classes.flex)}>
          <div className={clsx(" text-align-cen", classes.block1)}>
            <div className={classes.width_1}>
              <div className={classes.width_2}>
                <p>ОСТАВИТЬ ЗАЯВКУ</p>
                <p>Хотите записаться на ремонт или задать вопрос?</p>
                <p>Позвоните нам или заполните форму</p>
              </div>
            </div>
          </div>
          <div className={clsx("d-f ai-cen jc-cen", classes.block2)}>
            <div className={classes.block2__1}>
              <MyInput placeholder={"Ваше имя"} />
              <MyInput placeholder={"Телефон"} />
              <div className={clsx("d-f ai-cen jc-cen", classes.button__block)}>
                <button
                  className={classes.height}
                  onClick={(evt) => getForm(evt)}
                >
                  ОТПРАВИТЬ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx("text-align-cen pt-10", classes.bgc)}>
        <p className={clsx("", classes.text4)}>ЦЕНЫ НА РЕМОНТ</p>
        <div className={clsx(classes.block_flex2)}>
          <div className={classes.block3}>
            <ul className={clsx("w-100")}>
              <li className={clsx("d-f jc-sp w-100 ai-cen", classes.gap_block)}>
                <div>ОСНОВНЫЕ УСЛУГИ</div> <div>ЦЕНЫ В РУБЛЯХ</div>
              </li>
              {data.service.map((obj, index) => (
                <li
                  className={clsx("d-f jc-sp w-100 ai-cen", classes.gap_block)}
                >
                  <span>{obj.title}</span> <span>{obj.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.block4}>
            <ul className={clsx("w-100")}>
              <li className={clsx("d-f jc-sp w-100 ai-cen", classes.gap_block)}>
                <div>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</div> <div>ЦЕНЫ В РУБЛЯХ</div>
              </li>
              {data.addService.map((obj, index) => (
                <li
                  className={clsx("d-f jc-sp w-100 ai-cen", classes.gap_block)}
                >
                  <span>{obj.title}</span> <span>{obj.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className={clsx("text-align-cen", classes.title)}>
            ПРИЗНАКИ ПОЛОМКИ
          </p>
          <div className="d-f jc-cen ai-cen">
            <span className={classes.span}> </span>
          </div>
        </div>
        <div className={clsx(classes.block_main, "container")}>
          {data.signs.map((obj, index) => (
            <div className={clsx("d-f jc-cen", classes.chield_main)}>
              <div>
                <p>{obj.title}</p>
              </div>
              <div>
                <p>{obj.description}</p>
              </div>
            </div>
          ))}

          <div
            className={clsx(
              "d-f ai-cen jc-cen mt-30 mb-30",
              classes.button__block
            )}
          >
            <button className={classes.height}>ЗАПИСАТЬСЯ</button>
          </div>
          <div className={clsx(classes.border, "mb-50")}>
            <p>{data.advice}</p>
          </div>
        </div>
        <div className={clsx(classes.bgc, "pt-10 pb-100")}>
          <p className={clsx("text-align-cen", classes.title)}>
            КАК ПРОИСХОДИТ РЕМОНТ
          </p>
          <div className="d-f jc-cen ai-cen">
            <span className={classes.span}> </span>
          </div>
          <div className={clsx("d-f jc-cen ai-cen container")}>
            <div className={classes.bgc2}>
              <ul>
                {data.repair1.map((item, index) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <div className={clsx(classes.bgc2, "bl-g")}>
              <ul>
                {data.repair2.map((item, index) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

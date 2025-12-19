import React from "react";
import classes from "../Footer/Footer.module.scss";
import { clsx } from "clsx";
import MyInput from "../MyInput";
import { Link } from "react-router-dom";
import { RootState, useAppDispatch } from "../../Redux/store";
import { useSelector } from "react-redux";
import { fetchEntry, setName, setPhone } from "../../Redux/FormSlice";

const Index: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const { name, phone } = useSelector((state: RootState) => state.entry);
  const getForm = (evt: any) => {
    evt.preventDefault();
    if (typeof name !== "string") {
      return;
    }
    if (typeof phone !== "string") {
      return;
    }
    dispatch(fetchEntry({ name, phone }));
    dispatch(setName(""));
    dispatch(setPhone(""));
    alert("В ближайшее время мы вам позвоним");
  };
  return (
    <footer>
      <div className={clsx("pt-50", classes.que)}>
        <p className={clsx("", classes.text1)}>ОСТАЛИСЬ ВОПРОСЫ?</p>
        <div className={clsx("", classes.text2)}>
          <p>
            Чтобы получить больше информации, позвоните нам или заполните форму
            ниже
          </p>
        </div>
        <form
          className={clsx("d-f jc-cen ai-cen container2 mt-40", classes.form)}
        >
          <MyInput placeholder={"Ваше имя"} />
          <MyInput placeholder={"Телефон"} />
          <div className={clsx("d-f ai-cen", classes.button__block)}>
            <button className={classes.height} onClick={(evt) => getForm(evt)}>
              ОТПРАВИТЬ
            </button>
          </div>
        </form>
      </div>
      <div className={classes.footer2}>
        <div className={clsx("d-f jc-cen ai-cen container")}>
          <div id={"footer"}>
            <p className={classes.min_block}>УСЛУГИ</p>
            <span className={classes.span}></span>
            <div className={clsx("d-f jc-s ai-cen", classes.gap1)}>
              <ul className={classes.ulBlock_2}>
                <li className={classes.liItem}>
                  <Link
                    to={{
                      pathname: "/services/64b54718663ae83b0900aac8",
                      hash: "#header",
                    }}
                  >
                    Техобслуживание
                  </Link>
                </li>
                <li className={classes.liItem}>
                  <Link
                    to={{
                      pathname: "/services/64b54718663ae83b0900aada",
                      hash: "#header",
                    }}
                  >
                    Компьютерная диагностика
                  </Link>
                </li>
                <li className={classes.liItem}>
                  <Link
                    to={{
                      pathname: "/services/64b54718663ae83b0900aad4",
                      hash: "#header",
                    }}
                  >
                    Ремонт АКПП Мазда
                  </Link>
                </li>
                <li className={classes.liItem}>
                  <Link
                    to={{
                      pathname: "/services/64b54718663ae83b0900aaca",
                      hash: "#header",
                    }}
                  >
                    Ремонт двигателя
                  </Link>
                </li>
                <li className={classes.liItem}>
                  <Link
                    to={{
                      pathname: "/services/64b54718663ae83b0900aace",
                      hash: "#header",
                    }}
                  >
                    Ремонт электрики
                  </Link>
                </li>
                <li className={classes.liItem}>
                  <Link
                    to={{
                      pathname: "/services/64b54718663ae83b0900aad2",
                      hash: "#header",
                    }}
                  >
                    Ремонт системы охлаждения
                  </Link>
                </li>
              </ul>
              <ul className={classes.ulBlock_2}>
                <li className={classes.liItem}>
                  <Link
                    to={{
                      pathname: "/services/64b54718663ae83b0900aacc",
                      hash: "#header",
                    }}
                  >
                    Ремонт противоугонных системы
                  </Link>
                </li>
                <li className={classes.liItem}>
                  <Link
                    to={{
                      pathname: "/services/64b54718663ae83b0900aadc",
                      hash: "#header",
                    }}
                  >
                    Сход развал
                  </Link>
                </li>
                <li className={classes.liItem}>
                  <Link
                    to={{
                      pathname: "/services/64b54718663ae83b0900aad8",
                      hash: "#header",
                    }}
                  >
                    Кузовной ремонт
                  </Link>
                </li>
                <li className={classes.liItem}>
                  <Link
                    to={{
                      pathname: "/services/64b54718663ae83b0900aad6",
                      hash: "#header",
                    }}
                  >
                    Ремонт выхлопной системы
                  </Link>
                </li>

                <li className={classes.liItem}>
                  <Link
                    to={{
                      pathname: "/services/64b54718663ae83b0900aacc",
                      hash: "#header",
                    }}
                  >
                    Противоугонные системы
                  </Link>
                </li>
                <li className={classes.liItem}>
                  <Link
                    to={{
                      pathname: "/services/64b54718663ae83b0900aad0",
                      hash: "#header",
                    }}
                  >
                    Заправка и ремонт кондиционеров
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={clsx("d-f ai-start", classes.min_height)}>
            <div className="transition">
              <div className={clsx("d-f jc-sp ai-cen")}>
                <p>+7 (495) 507-96-49</p>
                <div className={classes.gap2}>
                  <img src={require("../../assets/wats.png")} />
                  <img src={require("../../assets/tg.png")} />
                </div>
              </div>
              <span className={classes.span}></span>
              <p className={classes.liItem}>
                123290, г. Москва, Ермакова роща, 7А стр.1. Территория 14 ТМП.
                М. Шелепиха, м. Деловой центр и м. Выставочная.
              </p>
              <p>info@dvs-motors.pro</p>
              <div className={clsx("d-f ai-cen", classes.button__block)}>
                <button className={classes.height}>ОТПРАВИТЬ СООБЩЕНИЕ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Index;

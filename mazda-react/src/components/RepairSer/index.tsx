import React from "react";
import classes from "../RepairSer/RepairSer.module.scss";
import { clsx } from "clsx";
import { Link } from "react-router-dom";

const Index: React.FC = (props) => {
  return (
    <div className={classes.mainDiv}>
      <div className={clsx("container text-align-cen")}>
        <p className={clsx("", classes.text1)}>РЕМОНТ И СЕРВИС МАЗДА</p>
        <div className={clsx("", classes.text2)}>
          <p>
            Обслуживание и ремонт автомобиля Mazda выполняется по установленному
            производителем регламенту
          </p>
        </div>
        <div className={clsx("d-f jc-sp ai-cen", classes.block_flex)}>
          <div className={classes.block1}>
            <p className={classes.text3}>Диагностика автомобилей Mazda</p>
            <p className={classes.text4}>
              При техническом обслуживании наши специалисты проводят
              компьютерную диагностику и визуальный осмотр автомобиля Mazda.
            </p>
            <p className={classes.text4}>
              Выполняется контроль работоспособности основных систем автомобиля
              – рулевое управление, тормозная система, двигатель, коробка
              передач, подвеска, электрика.
            </p>
            <p className={classes.text3}>
              Плановое и внеплановое ТО автомобилей Mazda
            </p>
            <p className={classes.text4}>
              Замена технических жидкостей и расходных материалов согласно
              пробегу автомобиля.
            </p>
          </div>
          <div className={classes.block2}>
            <p className={classes.text3}>Ремонт автомобилей Mazda</p>
            <p className={classes.text4}>
              Мы проводим текущий, а также капитальный ремонт узла с полным
              демонтажем, разборкой и дефектовкой
            </p>
            <div className={clsx("d-f jc-s ai-start", classes.link)}>
              <div>
                <Link
                  to="/services/64b54718663ae83b0900aad4"
                  className={clsx("", classes.link__item)}
                >
                  Ремонт АКПП Мазда
                </Link>
                <Link
                  to="/services/64b54718663ae83b0900aace"
                  className={clsx("", classes.link__item)}
                >
                  Ремонт электрики Мазда
                </Link>

                <Link
                  to="/services/64b54718663ae83b0900aaca"
                  className={clsx("", classes.link__item)}
                >
                  Ремонт двигателя Мазда
                </Link>
                <Link
                  to="/services/64b54718663ae83b0900aac8"
                  className={clsx("", classes.link__item)}
                >
                  Техобслуживание
                </Link>
              </div>
              <div>
                <Link
                  to="/services/64b54718663ae83b0900aad2"
                  className={clsx("", classes.link__item)}
                >
                  Ремонт системы охлаждения Мазда
                </Link>
                <Link
                  to="/services/64b54718663ae83b0900aad6"
                  className={clsx("", classes.link__item)}
                >
                  Ремонт выхлопной системы Мазда
                </Link>

                <Link
                  to="/services/64b54718663ae83b0900aacc
"
                  className={clsx("", classes.link__item)}
                >
                  Ремонт противоугонных системы
                </Link>
              </div>
            </div>
            <p className={classes.text3}>Шиномонтаж</p>
            <div>
              <Link
                to="/services/64b54718663ae83b0900aadc"
                className={clsx("", classes.link__item)}
              >
                Регулировка развала-схождения
              </Link>
            </div>

            <div>
              <Link
                to="/services/64b54718663ae83b0900aad8"
                className={clsx("", classes.link__item)}
              >
                Балансировка дисков
              </Link>
            </div>

            <div>
              <Link
                to="/services/64c047ae2bcfc64aecfba4af"
                className={clsx("", classes.link__item)}
              >
                Мелкий ремонт шин
              </Link>
            </div>
          </div>
        </div>
        <p className={clsx("text-align-cen", classes.title)}>
          ЗАПАСНЫЕ ЧАСТИ ДЛЯ АВТОМОБИЛЕЙ МАЗДА
        </p>
        <div className="d-f jc-cen ai-cen">
          <span className={classes.span}> </span>
        </div>
        <div className={classes.flex2}>
          <div className={classes.flex3}>
            <p>01</p>
            <p>
              На нашем складе всегда имеются основные запасные части,
              комплектующие и технические жидкости для всего модельного ряда
              автомобилей Mazda.
            </p>
          </div>
          <div className={classes.flex3}>
            <p>02</p>
            <p>
              Мы применяем оригинальные и качественные не оригинальные запчасти
              для автомобилей Mazda. На все работы и запасные части мы даем
              гарантию.
            </p>
          </div>

          <div className={classes.flex3}>
            <p>03</p>
            <p>
              Наши мастера имеют многолетний опыт работы с автомобилями Mazda и
              знают специфику всех моделей марки.
            </p>
          </div>
          <div className={classes.flex3}>
            <p>04</p>
            <p>
              Техцентр DVS-Mazda оснащен современными стендами для диагностики и
              ремонта любой сложности автомобилей Mazda.
            </p>
          </div>
        </div>
        <div className={clsx("", classes.text5)}>
          <p>Будем рады обслужить ваш автомобиль мазда в нашем техцентре!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;

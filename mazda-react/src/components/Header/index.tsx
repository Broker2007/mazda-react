import React, {useEffect, useState} from "react";
import logo from "../../assets/1.png";
import wats from "../../assets/wats.png";
import tg from "../../assets/tg.png";
import { clsx } from "clsx";
import classes from "../Header/Header.module.scss";
import {Link, useLocation, useParams} from "react-router-dom";

const Header: React.FC = (props) => {
  let {pathname} = useLocation()
  console.log(useLocation())
  let [path, setPath] = useState<boolean>(false)
  useEffect(() =>{
    if(pathname.includes("services")){
      setPath(true)
    }else{
      setPath(false)

    }
  }, [pathname])
  return (
    <header id={"header"}>
      <div
        className={clsx(
          " jc-s d-f pt-20 pb-20 ai-cen container",
          classes.gap
        )}
      >
        <div>
          <img src={logo} />
        </div>
        <div className={classes.white}>
          <p>+7 (495) 507-96-49</p>
        </div>
        <div className={clsx("d-f ai-cen", classes.button__block)}>
          <button className={classes.height}>Отправить сообщение</button>
        </div>
        <div className={classes.location}>
          <p>Москва, Ермакова роща, 7А стр.1</p>
          <p>М. Шелепиха, м. Деловой центр и м. Выставочная.</p>
        </div>
        <div className={classes.connection}>
          <div>
            <img src={wats} width="20px" height="20px"/>
          </div>
          <div>
            <img src={tg} width="20px" height="20px" />
          </div>
        </div>
      </div>
      <nav >
        <div className="container">
          <ul>
            <li className={clsx(!pathname.includes("service") && 'af')}><Link to={"/"}>Главная</Link></li>
            <li  className={clsx(path && 'af')}><Link to={{pathname: '/', hash: 'service'}} >Услуги</Link></li>
            <li><Link to={{pathname: '/', hash: 'footer'}}>Контакты</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

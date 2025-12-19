import React, { useState } from "react";
import classes from "../MyInput/MyInput.module.scss";
import { clsx } from "clsx";
import { RootState, useAppDispatch } from "../../Redux/store";
import { useSelector } from "react-redux";
import { setName, setPhone } from "../../Redux/FormSlice";
import PhoneInput from 'react-phone-number-input/input'

const Index: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  const dispatch = useAppDispatch();
  const { name, phone } = useSelector((state: RootState) => state.entry);

  const phoneChange = (e:string) =>{
    dispatch(setPhone(e))
  }
  if (placeholder == "Ваше имя") {
    return (
      <input
        className={classes.input}
        placeholder={placeholder}
        type={"text"}
        value={name}
        onChange={(event) => dispatch(setName(event.target.value))}
      />
    );
  } else if (placeholder == "Телефон") {
    return (
    <PhoneInput
        className={classes.input}
        placeholder={placeholder}
        value={phone}
        country="RU"
        onChange={phoneChange}/>
    );
  }
};

export default Index;

import React, {useState} from "react";
import classes from "../MyImage/MyImage.module.scss";
import { clsx } from "clsx";


interface ItemArgs {
    classes: string,
    p1: string,
    p2: string,
    p3: string,
    p4: string
}

type MyImageProps = {
    item:ItemArgs,
    bul: boolean
}
const Index:React.FC<MyImageProps> = ({item, bul}) => {
    let display = false
    setTimeout(() => {
        display = true
    }, 2000)
    return (
        <div className={clsx(item.classes,!bul && 'animate__animated animate__backOutUp',bul && 'animate__animated animate__backInUp',classes.background__mazda, )}>
            <div className={clsx("container", classes.mazda)}>
                <p>{item.p1} </p>
                <p>{item.p2}</p>
                <p>
                    {item.p3} <br/> {item.p4}
                </p>
            </div>
        </div>
    );
};

export default Index;
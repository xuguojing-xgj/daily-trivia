// import clsx from "clsx";
// import Heading from "@theme/Heading";
import styles from "./styles.module.css";
// import AOS from 'aos';
import React, { } from "react";
import VueImg from './images/Vue.png'
import ReactImg from './images/React.png'

const Card = ({id, img, name, describe}) => {
    const options = [
        {
            id,
            img,
            name,
            describe,
        }
    ]
    const res = options.map((item) => (
        <div key={item.id}>
            <img width={'50px'} src={item.img} />
            <h1> {item.name} </h1>
            <p> {item.describe} </p>
        </div>
    ))

    return (
        <div className={styles.card}>
            {res}
        </div>
    )
}

export default function HomepageFeatures() {
    return (
        <div className={styles.mianContainer}>
            <Card id={1} img={VueImg} name={'Vue'} describe={'渐进式 JavaScript 框架'}></Card>
            <Card id={2} img={ReactImg} name={'React'} describe={'渐进式 JavaScript 框架'}></Card>
            <Card id={1} img={img1} name={'Vue'} describe={'渐进式 JavaScript 框架'}></Card>
            <Card id={1} img={img1} name={'Vue'} describe={'渐进式 JavaScript 框架'}></Card>
            <Card id={1} img={img1} name={'Vue'} describe={'渐进式 JavaScript 框架'}></Card>
        </div>
    );
}

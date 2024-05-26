// import clsx from "clsx";
// import Heading from "@theme/Heading";
import styles from "./styles.module.css";
// import AOS from 'aos';
import React, { } from "react";
import VueImg from './images/Vue.png'
import ReactImg from './images/React.png'
import ESLintImg from "./images/eslint.png";
import PrettierImg from './images/prettier.png'
import NodeImg from './images/node.png'
const Card = ({ id, img, name, describe }) => {
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
        <div>
            <div className={styles.topContainer}>
                <Card id={1} img={VueImg} name={'Vue'} describe={'渐进式 JavaScript 框架'}></Card>
                <Card id={2} img={ReactImg} name={'React'} describe={'用于构建 Web 和原生交互界面的库'}></Card>
                <Card id={3} img={ESLintImg} name={'ESLint'} describe={'查找并修复 JavaScript 代码中的问题'}></Card>
                <Card id={4} img={PrettierImg} name={'Prettier'} describe={'一个“有态度”的代码格式化工具'}></Card>

            </div>
            <div className={styles.bottomContainer}>
                <Card id={5} img={NodeImg} name={'Node.js'} describe={'JavaScript 运行时'}></Card>
            </div>
        </div>
    );
}

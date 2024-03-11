// import clsx from "clsx";
// import Heading from "@theme/Heading";
import styles from "./styles.module.css";
// import AOS from 'aos';
import React, { } from "react";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";

// import { CustomEase } from "gsap/CustomEase";

// import { EaselPlugin } from "gsap/EaselPlugin";
// import { TextPlugin } from "gsap/TextPlugin";


// gsap.registerPlugin(useGSAP, EaselPlugin, TextPlugin, CustomEase);
// import gsap from "gsap";
// import hljs from "highlight.js";
// import javascript from "highlight.js/lib/languages/javascript";

// Then register the languages you need
// hljs.registerLanguage("javascript", javascript);
// const FeatureList = [
//   {
//     title: "《梦江南·千万恨》 -- 唐·温庭筠",
//     // Jpg: landscape1,
//     Jpg: require("../../../static/img/landscape1.jpg").default,

//     description: (
//       <>
//         山月不知心里事，水风空落眼前花。
//         <br />
//         {/* 注解: 山上的明月,却一点也不知道我的心事;水面上的轻风,竟故意把我眼前的花吹落。 */}
//       </>
//     ),
//   },
//   {
//     title: "孔子《论语：学而篇》",
//     //   Jpg: landscape2,
//     Jpg: require("../../../static/img/landscape2.jpg").default,
//     description: (
//       <>
//         学而不思则罔，思而不学则殆。
//         <br />
//         {/* 注解: 只学习却不思考,就会感到迷茫而无所适从,只是思考而不学习,就会疑惑而无所得 */}
//       </>
//     ),
//   },
//   {
//     title: "《点绛唇·闲倚胡床》 -- 宋·苏轼",
//     // Jpg: landscape3,
//     Jpg: require("../../../static/img/landscape3.jpg").default,
//     description: (
//       <>
//         闲倚胡床，庾公楼外峰千朵。与谁同坐。明月清风我。
//         <br />
//         {/* 注解: 闲着无事就靠坐着胡床，从庾公楼的窗子朝外望去，只见诸峰如千朵鲜花开放。和哪个一同倚坐？明月、清风、我 */}
//       </>
//     ),
//   },
// ];

// function Feature({ Jpg, title, description }) {
//   return (
//     <div className={clsx("col col--4")}>
//       <div className="text--center">
//         {/* {Jpg} */}
//         <img className={styles.featureJpg} src={Jpg} alt="" />
//         {/* <Svg className={styles.featureSvg} role="img" /> */}
//       </div>
//       <div className="text--center padding-horiz--md">
//         <Heading as="h3">{title}</Heading>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// CodeComponent 定义在组件外部
// const CodeComponent = ({ codeString }) => {
//   useEffect(() => {
//     document.querySelectorAll("pre code").forEach((block) => {
//       hljs.highlightBlock(block);
//     });
//   }, [codeString]); // 添加 codeString 作为依赖项

//   return (
//     <pre>
//       <code>{codeString}</code>
//     </pre>
//   );
// };

export default function HomepageFeatures() {
    // gsap.to('')
    // 注意这里的样式类名已经更正
    return (
        <div className={styles.mianContainer}>


            {/* <div data-aos="zoom-out-up"> 123</div> */}
            {/* 这里使用自闭合标签 */}
            {/* <img
                src={require("../../../static/img/fengche.png").default}
                className={styles.Img}
                alt=""
                ref={boxRef}
            /> */}
            {/* <div className={styles.animationBox} ref={boxRef} /> */}

            {/* <div className={styles.code}>
                <button type="button" className={styles.btn}>
                    React.js
                </button>
                <div>
                    直接渲染 CodeComponent 并传递 codeString
                </div> */}
            {/* </div> */}
        </div>
    );
}

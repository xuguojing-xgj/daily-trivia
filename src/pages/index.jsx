import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import React from "react";
// import Typed from "typed.js";
import Heading from "@theme/Heading";
// import gsap from "gsap";
import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    // gsap.to('.container', { direction: 2, x: 300 })
    // Create reference to store the DOM element containing the animation
    // const el = React.useRef(null);

    // React.useEffect(() => {
    //     const typed = new Typed(el.current, {
    //         strings: [siteConfig.tagline],
    //         typeSpeed: 130,
    //         startDelay: 300, // 开始等待时间 (毫秒)
    //         loop: true, // 是否循环
    //         loopCount: Infinity, // 循环次数 (number) Infinity (默认值)
    //     });

    //     return () => {
    //         // Destroy Typed instance during cleanup to stop animation
    //         typed.destroy();
    //     };
    // }, []);

    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" >
                    {siteConfig.title}
                </Heading>
                {/* <span className="hero__subtitle" ref={el}></span> */}
                <p className="hero__subtitle">{siteConfig.tagline}</p>

                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/leading/html/图片懒加载"
                    >
                        开始学习⏱️
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}

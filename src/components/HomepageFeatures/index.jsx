import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '《梦江南·千万恨》 -- 唐·温庭筠',
    Svg: require('@site/static/img/ab1e6-hfnuw.svg').default,
    description: (
      <>
            山月不知心里事，水风空落眼前花。
            <br />
            {/* 注解: 山上的明月,却一点也不知道我的心事;水面上的轻风,竟故意把我眼前的花吹落。 */}
      </>
    ),
  },
  {
    title: '孔子《论语：学而篇》',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
            学而不思则罔，思而不学则殆。
            <br />
            {/* 注解: 只学习却不思考,就会感到迷茫而无所适从,只是思考而不学习,就会疑惑而无所得 */}
      </>
    ),
  },
  {
    title: '《点绛唇·闲倚胡床》 -- 宋·苏轼',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
             闲倚胡床，庾公楼外峰千朵。与谁同坐。明月清风我。
            <br />
            {/* 注解: 闲着无事就靠坐着胡床，从庾公楼的窗子朝外望去，只见诸峰如千朵鲜花开放。和哪个一同倚坐？明月、清风、我 */}
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
          
    </section>
  );
}

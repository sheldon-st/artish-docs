import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  linkLabel?: string;
  linkTo?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Are you a developer?',
    linkLabel: 'Developer Docs',
    linkTo: '/developer/guides',
    description: (
      <>
        <p></p>
      </>
    ),
  },
  {
    title: 'Are you a user?',
    linkLabel: 'User Guide',
    linkTo: '/users',

    description: <></>,
  },
  {
    title: 'Powered by React',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <></>,
  },
];

function Feature({ title, Svg, description, linkLabel, linkTo }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center"></div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        {linkTo && linkLabel && (
          <Link to={linkTo} className="button button--secondary button--lg">
            {linkLabel}
          </Link>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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

import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import s from './styles.css';

import { increment, decrement } from '../../redux/modules/app/app';

import Visualizer from '../../components/Visualizer';

/**
 * Component
 */

const Main = (props) => {
  const {
    t,
    visualizerIndex,
    increment: incrementAction,
    decrement: decrementAction
  } = props;

  return (
    <div className={s.landing}>
      <div className={s.container}>
        <h1 className={s.title}>{t('common:title')}</h1>
        <h3 className={s.description}>{t('app:description')}</h3>
      </div>

      <div className={s.visualizerPage}>
        <button className={s.button} type="button" onClick={() => decrementAction()}><span>&#60;&#60;Previous</span></button>
        <span className={s.visualizerIndex}></span>
        <button className={s.button} type="button" onClick={() => incrementAction()}><span>Next&#62;&#62;</span></button>
        <div className={s.visualizerContainer}><Visualizer type={visualizerIndex} /></div>
      </div>
    </div>
  );
};

/**
 * Export
 */

const TranslatedComponent = translate('app')(Main);

export default connect(
  (state) => state.app.app,
  {
    increment,
    decrement
  }
)(TranslatedComponent);

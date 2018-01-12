import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import DigitVisualizer from '../../components/DigitVisualizer';
import HistogramVisualizer from '../../components/HistogramVisualizer';

/**
 * Component
 */

const Visualizer = (props) => {
  const {
    type,
  } = props;

  return (
    [<DigitVisualizer />, <HistogramVisualizer />][type]
  );
};

/**
 * Export
 */

const TranslatedComponent = translate('app')(Visualizer);

export default connect(
  (state) => state.app.app,
  {

  }
)(TranslatedComponent);

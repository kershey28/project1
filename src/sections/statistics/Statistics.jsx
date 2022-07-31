import React from 'react';
import classes from './Statistics.module.css';

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from '@syncfusion/ej2-react-charts';

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
  STATISTICS,
} from '../../data/dummy';

import { useElementOnScreenOnce } from '../../utils/observers/useElement';

const Statistics = ({ className }) => {
  // observer
  const [headingRef, isHeadingAppeared] = useElementOnScreenOnce({
    root: null,
    threshold: 1,
  });

  // dynamic classes
  const headingClassRef = isHeadingAppeared ? 'moveInRight' : 'hidden';
  const subheadingClassRef = isHeadingAppeared ? 'moveInLeft' : 'hidden';

  return (
    <section className={`${classes.container} ${className}`}>
      <div className={classes.headingBox} ref={headingRef}>
        <h1 className={`${classes.heading} ${headingClassRef} heading-1`}>
          {STATISTICS.heading}
        </h1>
        <p className={`${classes.subheading} ${subheadingClassRef}`}>
          {STATISTICS.subheading}
        </p>
      </div>

      <div className={classes.chartBox}>
        <div className={classes.chart}>
          <ChartComponent
            id="charts"
            primaryXAxis={barPrimaryXAxis}
            primaryYAxis={barPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            legendSettings={{
              position: 'Top',
              padding: 10,
            }}
            palettes={['#dd7dbd', '#9595cd', '#f3bd77', '#91c9fd']}
            width="100%"
            margin={{ top: 50 }}
          >
            <Inject
              services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
            />
            <SeriesCollectionDirective>
              {barCustomSeries.map((item, index) => (
                <SeriesDirective key={index} {...item} />
              ))}
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

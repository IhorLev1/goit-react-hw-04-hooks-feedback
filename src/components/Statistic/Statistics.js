import PropTypes from 'prop-types';
import s from './Statistic.module.css';
import Notification from '../Feedback/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <div>
          <p className={s.statisticsItem}>Good : {good}</p>
          <p className={s.statisticsItem}>Neutral : {neutral}</p>
          <p className={s.statisticsItem}>Bad : {bad}</p>
          <p className={s.statisticsItem}>Total : {total}</p>
          <p className={s.statisticsItem}>
            Positive feedback :{positivePercentage} %
          </p>
        </div>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;

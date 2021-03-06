import PropTypes from 'prop-types';
import React from 'react';
import dates from './utils/dates';
import TimeGrid from './TimeGrid';
import { navigate } from './utils/constants';

class Day extends React.Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
  };

  render() {
    let { date, ...rest } = this.props;
    let { start, end } = Day.range(date)

    return (
      <TimeGrid {...rest} start={start} end={end} eventOffset={10} />
    );
  }
}

Day.navigate = (date, action)=>{
  switch (action){
    case navigate.PREVIOUS:
      return dates.add(date, -1, 'day');

    case navigate.NEXT:
      return dates.add(date, 1, 'day')

    default:
      return date;
  }
}


Day.range = (date)=> {
  date = dates.startOf(date, 'day')
  return { start: date, end: date }
}


export default Day

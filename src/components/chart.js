import React from'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

function average(array) {
  return _.round(_.sum(array)/array.length)
}
export default (props) => {
  return (
    <div>
      <Sparklines height={120} weidth={120} data={props.data}>
        <SparklinesLine color ={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Average: {average(props.data)} {props.units}</div>
    </div>
  )
}

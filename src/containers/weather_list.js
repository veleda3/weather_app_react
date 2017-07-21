import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map'




class WeatherList extends Component {
  renderWeather(cityData){
    const cityName = cityData.city.name
    const { lon, lat } = cityData.city.coord
    const cityTemperatures = cityData.list.map(weather => weather.main.temp)
    const cityPressures = cityData.list.map(weather => weather.main.pressure)
    const cityHumidities = cityData.list.map(weather => weather.main.humidity)

    return (
      <tr key={cityName}>
        <td><GoogleMap lon={lon} lat={lat}</td>
        <td><Chart data={cityTemperatures} color='red' units='K' /></td>
        <td><Chart data={cityPressures} color='blue' units='hPa' /></td>
        <td><Chart data={cityHumidities} color='orange' unit='%' /></td>
      </tr>
    )
  }
  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (k)</th>
            <th>Presure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>

    )
  }
}

function mapStateToProps(state) {


  return {
    weather: state.weather
  }
}
export default connect (mapStateToProps)(WeatherList)

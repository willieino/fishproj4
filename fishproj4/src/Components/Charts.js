import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Charts.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      viewTrip: false,
      enterTrip: false
    })
    console.log(this.state)

    const Recharts = { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend };
  }

  componentDidMount() {

    console.log("in the nav componentDidMount")
    console.log(this.state)
  }


  render() {

    return (
      <div className="chart-container">
        <form className="nav-chart">
          <div className="container-btn"> <div id="cicon1" className="nav-icon-1" onClick={this.props.chartFishCaught}></div>
            <button className="nav-button-n" value="chartFishCaught" onClick={this.props.chartFishCaught} name="chartFishCaught">By Angler</button>
           
          </div>
          <div className="container-btn"> <div id="cicon2" className="nav-icon-1" onClick={this.props.chartFishType}></div>
          <button className="nav-button-n" value="chartFishType" onClick={this.props.chartFishType} name="chartFishType">By Species</button>
           
          </div>
          <div className="container-btn"> <div id="cicon3" className="nav-icon-1" onClick={this.props.chartFishLunar}></div>
          <button className="nav-button-n" value="chartFishLunar" onClick={this.props.chartFishLunar} name="chartFishLunar">By Lunar</button>
           
          </div>
          <div className="container-btn"><div id="cicon4" className="nav-icon-1" onClick={this.props.chartFishBait}></div>
          <button className="nav-button-n" value="chartFishBait" onClick={this.props.chartFishBait} name="chartFishBait">By Bait Type</button>
            
          </div>
          <div className="container-btn"> <div id="cicon5" className="nav-icon-1" onClick={this.props.chartFishLine}></div>
          <button className="nav-button-n" value="chartFishLine" onClick={this.props.chartFishLine} name="chartFishLine">By Line Type</button>
           
          </div>
          <div className="container-btn"><div id="cicon6" className="nav-icon-1" onClick={this.props.chartFishLocation}></div>
           <button className="nav-button-n" value="chartFishLocation" onClick={this.props.chartFishLocation} name="chartFishLocation">By Location</button>
            
          </div>
          <div className="container-btn"><div id="cicon7" className="nav-icon-1" onClick={this.props.chartFish}></div>
          <button className="nav-button-n" value="chartFish" onClick={this.props.chartFish} name="chartFish">By Style</button>
            
          </div>

        </form>
        <div className="charts">
          <div className="chart-container"> <BarChart width={650} height={400} data={
            [
              { name: 'Jan', fish: 40, pv: 2400, amt: 2400 },
              { name: 'Feb', fish: 30, pv: 1398, amt: 2210 },
              { name: 'Mar', fish: 20, pv: 9800, amt: 2290 },
              { name: 'April', fish: 27, pv: 3908, amt: 2000 },
              { name: 'May', fish: 18, pv: 4800, amt: 2181 },
              { name: 'June', fish: 20, pv: 3800, amt: 2500 },
              { name: 'July', fish: 34, pv: 4300, amt: 2100 },
            ]}>
            <Tooltip /><CartesianGrid strokeDasharray="3 3" /> <XAxis dataKey="name" /> <YAxis label={{ value: 'species', angle: -90, position: 'insideLeft' }} /> <Bar dataKey='fish' fill='#8884d8' />
          </BarChart></div>

        </div>
      </div>
    );
  }
}

export default Charts;
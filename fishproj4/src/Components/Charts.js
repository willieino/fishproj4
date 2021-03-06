import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import '../Css/Charts.css';
//import TripTbl from "../Tables/tripTbl";
import CatchTbl from "../Tables/catchTbl";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      TripTbl: [],
      CatchTbl: [],
      chartToDisplay: "",
      enterTrip: false,
      color: "",
      fishy: [],
      xBar: "",
      xLabel: "",
    })
    console.log(this.state)
    //let fishy = this.fishy
   // const Recharts = { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend };
  }

  componentDidMount() {

    console.log("in the nav componentDidMount")
    console.log(this.state)
  }

  chartBaitType = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.Bait]) {
        tally[item.Bait] = 1;
      } else {
        tally[item.Bait] = tally[item.Bait] + 1;
      }
      return tally;
    }, {});
    var obj = test;
    for (const prop in obj) {
      let fish = {
        Bait: prop,
        Qty: obj[prop]
      }
      tmpArray.push(fish);
    }
    const tmp = "Bait"
    const barColor = '#463dfc';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor }); 
    console.log(this.state)
  }

  chartFishCaught = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.Species]) {
        tally[item.Species] = 1;
      } else {
        tally[item.Species] = tally[item.Species] + 1;
      }
      return tally;
    }, {});
    var obj = test;
    for (const prop in obj) {
      let fish = {
        Species: prop,
        Qty: obj[prop]
      }
      tmpArray.push(fish);
    }
    let tmp = "Species"
    let barColor = '#3da6fc';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor });
  }

  chartAngler = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.Angler]) {
        tally[item.Angler] = 1;
      } else {
        tally[item.Angler] = tally[item.Angler] + 1;
      }
      return tally;
    }, {});
    var obj = test;
    for (const prop in obj) {
      let fish = {
        Angler: prop,
        Qty: obj[prop]
      }
      tmpArray.push(fish);
    }
    let tmp = "Angler"
    let barColor = '#3da6fc';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor });
  }

  chartRodType = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.Rod]) {
        tally[item.Rod] = 1;
      } else {
        tally[item.Rod] = tally[item.Rod] + 1;
      }
      return tally;
    }, {});
    var obj = test;
    for (const prop in obj) {
      let fish = {
        Rod: prop,
        Qty: obj[prop]
      }
      tmpArray.push(fish);
    }
    let tmp = "Rod"
    let barColor = '#463dfc';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor });
  }

  chartLineType = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.LineStyle]) {
        tally[item.LineStyle] = 1;
      } else {
        tally[item.LineStyle] = tally[item.LineStyle] + 1;
      }
      return tally;
    }, {});
    var obj = test;
    for (const prop in obj) {
      let fish = {
        LineStyle: prop,
        Qty: obj[prop]
      }
      tmpArray.push(fish);
    }
    let tmp = "LineStyle"
    let barColor = '#3da6fc';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor });
  }

  chartBaitColor = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.BaitColor]) {
        tally[item.BaitColor] = 1;
      } else {
        tally[item.BaitColor] = tally[item.BaitColor] + 1;
      }
      return tally;
    }, {});
    var obj = test;
    for (const prop in obj) {
      let fish = {
        BaitColor: prop,
        Qty: obj[prop]
      }
      tmpArray.push(fish);
    }
    let tmp = "BaitColor"
    let barColor = '#fc3d8d';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor });
  }

  chartFishStyle = (e) => {
    e.preventDefault();
    let tmpArray = [];
    const test = CatchTbl.reduce((tally, item) => {
      if (!tally[item.Style]) {
        tally[item.Style] = 1;
      } else {
        tally[item.Style] = tally[item.Style] + 1;
      }
      return tally;
    }, {});
    var obj = test;
    for (const prop in obj) {
      let fish = {
        Style: prop,
        Qty: obj[prop]
      }
      tmpArray.push(fish);
    }
    let tmp = "Style"
    let barColor = '#f9fc3d';
    this.setState({ fishy: tmpArray, xBar: tmp, xLabel: tmp, color: barColor });
  }
  render() {

    return (
      <div className="chart-container">
        <form className="nav-chart">
          <div className="container-btn">
            <div id="cicon1" className="nav-icon-1" onClick={this.chartFishCaught}></div>
            <button className="nav-button-n" value="chartFishCaught" onClick={this.chartFishCaught} name="chartFishCaught">By Species</button>
          </div>
          <div className="container-btn">
            <div id="cicon2" className="nav-icon-1" onClick={this.chartBaitType}></div>
            <button className="nav-button-n" value="chartBaitType" onClick={this.chartBaitType} name="chartBaitType">By Bait Type</button>
          </div>
          <div className="container-btn">
            <div id="cicon3" className="nav-icon-1" onClick={this.chartAngler}></div>
            <button className="nav-button-n" value="chartAngler" onClick={this.chartAngler} name="chartAngler">By Angler</button>
          </div>
          <div className="container-btn">
            <div id="cicon4" className="nav-icon-1" onClick={this.chartRodType}></div>
            <button className="nav-button-n" value="chartRodType" onClick={this.chartRodType} name="chartRodType">By Rod Type</button>
          </div>
          <div className="container-btn">
            <div id="cicon5" className="nav-icon-1" onClick={this.chartLineType}></div>
            <button className="nav-button-n" value="chartLineType" onClick={this.chartLineType} name="chartLineType">By Line Type</button>
          </div>
          <div className="container-btn">
            <div id="cicon6" className="nav-icon-1" onClick={this.chartBaitColor}></div>
            <button className="nav-button-n" value="chartFishLocation" onClick={this.chartBaitColor} name="chartBaitColor">By Bait Color</button>
          </div>
          <div className="container-btn">
            <div id="cicon7" className="nav-icon-1" onClick={this.chartFishStyle}></div>
            <button className="nav-button-n" value="chartFishStyle" onClick={this.chartFishStyle} name="chartFishStyle">By Fishing Style</button>
          </div>

        </form>
        <div className="charts">
          <div className="chart-container"> <BarChart width={650} height={400} data={this.state.fishy}>
           
            <Tooltip /><CartesianGrid strokeDasharray="3 3" /> <XAxis dataKey={this.state.xBar} /> <YAxis label={{ value: this.state.xLabel, angle: -90, position: 'insideLeft' }} /> <Bar dataKey='Qty' fill={this.state.color} />
          </BarChart></div>

        </div>
      </div>
    );
  }
}

export default Charts;


//let xls = [];
//let found = "";
//function cb (v, i, arr) {
//    found = arr[i].shirt_size.indexOf("XL");
//    if (found !== -1) {
//        xls.push(arr[i].last_name);
//   }
//}
//runners.forEach(cb);
//console.log(xls);

/* const count = TripTbl.reduce((tally, Species) => {
  tally[Species] = (tally[Species] || 0) + 1;
  return tally;
}, {}) */
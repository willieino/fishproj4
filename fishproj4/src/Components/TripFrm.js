import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TripTbl from "../Tables/tripTbl" 
import '../App.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts" 
/* import AddNewInput from "./AddNewInput"; */

class TripFrm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trip: "",
      startDate: "",
      duration: 0,
      place: "",
      photos: "",
      notes: "",
      anglers: "",
      Gps1: "",
      Gps2: "",
      imgCaption: "",
      viewTrip: "",
      TripTbl: []
    }
    const  Recharts = {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend};

    const data = TripTbl;
    /* const data = [
          {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
          {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
          {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
          {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
          {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
          {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
          {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    ]; */

    /* const TinyBarChart = React.createClass({
      render () {
        return (
          <BarChart width={150} height={40} data={data}>
             <Bar dataKey='uv' fill='#8884d8'/>
           </BarChart>
        );
      }
    }) */
  }

  componentDidMount() {

    this.setState = () => ({ TripTbl: this.props.TripTbl })
    console.log("in the tripfrm component did mount")
    console.log(this.state)
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      TripTbl: TripTbl
    });
  }

  render() {

    return (
      <form className="trip-form" onSubmit={this.props.handleSubmit}>
        <div className="trip-container">
          <div className="input-container"> 
            <div className="trip-header">Enter your trip data. Press Save when finished.</div>
            <div className="trip-text">Trip Name: </div>
            <input type="text" className="trip" value={this.props.value} onChange={this.props.changeHandler} name="Trip" />
            <div className="trip-text">Start Date: </div>
            <input type="text" className="trip" value={this.props.value} onChange={this.props.changeHandler} name="StartDate" />
            <div className="trip-text">Duration: </div>
            <input type="text" className="trip" value={this.props.value} onChange={this.props.changeHandler} name="Duration" />
            <div className="trip-text">Place:</div>
            <select value={this.state.editor} name="editor" onChange={this.handleChange} className="select-place">
              <option value="Lake Murray">Lake Murray</option>
              <option value="Lake Jennings">Lake Jennings</option>
              <option value="Add">Add new Place...</option>
            </select>
            
            <div className="trip-text">Notes: </div>
            <input type="text" className="trip" value={this.props.value} onChange={this.props.changeHandler} name="Notes" />
            <div className="trip-text">Anglers: </div>
            <input type="text" className="trip" value={this.props.value} onChange={this.props.changeHandler} name="Anglers" />
            <div className="trip-text">GPS1: </div>
            <input type="text" className="trip" value={this.props.value} onChange={this.props.changeHandler} name="GPS1" />
            <div className="trip-text">GPS2: </div>
            <input type="text" className="trip" value={this.props.value} onChange={this.props.changeHandler} name="GPS2" />
            <div className="trip-text">Photos: </div>
            <input type="text" className="trip" value={this.props.value} onChange={this.props.changeHandler} name="Photos" />
            <div className="trip-text">Image Caption: </div>
            <input type="text" className="trip" value={this.props.value} onChange={this.props.changeHandler} name="ImgCaption" />
            <button className="save-trip-data" value="SaveTripData" onClick={this.props.handleSubmit} name="SaveTripData">Save Changes</button>
          </div> {/* <div className="chart-container"> <BarChart width={650} height={400} data={
           [
          {name: 'Jan', uv: 4000, pv: 2400, amt: 2400},
          {name: 'Feb', uv: 3000, pv: 1398, amt: 2210},
          {name: 'Mar', uv: 2000, pv: 9800, amt: 2290},
          {name: 'April', uv: 2780, pv: 3908, amt: 2000},
          {name: 'May', uv: 1890, pv: 4800, amt: 2181},
          {name: 'June', uv: 2390, pv: 3800, amt: 2500},
          {name: 'July', uv: 3490, pv: 4300, amt: 2100},
    ] }>
              <Tooltip/><CartesianGrid strokeDasharray="3 3"/> <XAxis dataKey="name"   /> <YAxis label={{ value: 'species', angle: -90, position: 'insideLeft'}} /> <Bar dataKey='uv' fill='#8884d8'/>
           </BarChart></div> */}
        </div>
      </form>
    );
  }
}


export default TripFrm;
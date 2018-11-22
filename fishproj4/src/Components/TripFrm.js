import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import TripTbl from "../Tables/tripTbl" 
import '../App.css';
//import Draggable from 'react-draggable'; // The default
//import {DraggableCore} from 'react-draggable'; // <DraggableCore>
//import Draggable, {DraggableCore} from 'react-draggable'; // Both
//import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts" 
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
    //const  Recharts = {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend};
    //Draggable.create("#dragMe");
       
  }

  componentDidMount() {

    this.setState = () => ({ TripTbl: this.props.TripTbl })
    //console.log("in the tripfrm component did mount")
   // console.log(this.state)
  }

 /*  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  }; */


  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      TripTbl: TripTbl
    });
   // console.log("this state in trip for select", this.state)
  }

  render() {

    return (
      <form className="trip-form" onSubmit={this.props.handleSubmit}>
        <div className="trip-container">
          <div className="input-container"> 
            <div className="trip-header">Enter your trip data. Press Save when finished.</div>
            <div className="trip-text">Trip Name: </div>
            <input type="text" id="dragMe" className="trip" value={this.props.value} onChange={this.props.changeHandler} name="Trip" />
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
          </div>{/*  <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handler"><button className="save-trip-data handle" value="SaveTripData" onClick={this.props.handleSubmit} name="SaveTripData">Save Changes</button></div>
          <div></div>
        </div>
      </Draggable> */}
        </div>
      </form>
    );
  }
}


export default TripFrm;
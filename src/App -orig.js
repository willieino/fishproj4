import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from "./Components/Nav";
import NavLeft from "./Components/NavLeft"
import TripData from "./Components/TripData";
import TripFrm from "./Components/TripFrm";
import TripTbl from "./Tables/tripTbl"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewTrip: false,
      enterTrip: false,
      TripTbl: [],
      StartDate: null,
      ID: null,
      Trip: null,
      Place: null,
    }
console.log("this.state:", this.state)
  }

  //tripTbl = tripTbl(bind(this))
  componentDidMount() {
    this.setState({ TripTbl, TripTbl: TripTbl })
    console.log("in the app component did mount")
    console.log(this.state)
  }
  
  changeHandler = (e) => {
    console.log("e.target.value:", e.target.value)
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  }

  viewTripForm = (e) => {
    e.preventDefault();
    localStorage.removeItem('viewTrip');
   // console.log("e.target.value:", e.target.value)
  //  this.setState({ [e.target.name]: e.target.value });
  this.setState = ({ viewTrip: false, enterTrip: true });
  console.log("viewTripForm", this.state)
  window.location.reload();
  }

  viewTripData = (e) => {
    e.preventDefault();
    localStorage.setItem('viewTrip', true);
   /*  localStorage.setItem('viewTrip') = 'true'; */
    this.setState = ({ viewTrip: true, enterTrip: true });
   
  
  /*   if (!localStorage.getItem('viewTrip')) {
      this.setState({ viewTrip: false });
    } else {
      this.setState({  viewTrip: true});
    } */
  
  //  console.log("e.target.value:", e.target.value)
  //  this.setState({ [e.target.name]: e.target.value });
    console.log("viewTripData", this.state)
    window.location.reload();
  }

  changeSelected = (e) => {
    e.preventDefault();
    // console.log("this.props.changeSelected: ", )
    const currentView = true;

    this.setState = ({ viewTrip: [currentView] })
    console.log("in the app")
    console.log(this.state)
  }

  clickHandler = e => {
    e.preventDefault();
  /*   this.setState(() => ({ enterTrip: true, viewTrip: true })); */

     this.setState = ({ enterTrip: true, viewTrip: true }) 
    //return this.state.viewTrip
    console.log("in theclickhandler:")
    console.log(this.state)
    //display the tripTbl for
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newTripRec = {
      ID: 2,
      Trip: this.state.Trip,
      StartDate: this.state.StartDate,
      Duration: this.state.Duration,
      Place: this.state.Place,
      Photos: this.state.Photos,
      Notes: this.state.Notes,
      Anglers: this.state.Anglers,
      Gps1: this.state.Gps1,
      Gps2: this.state.Gps2,
      ImgCaption: this.state.ImgCaption
    }

    //this.setState = ({ newTripRec: newTripRec})
    
    this.state.TripTbl.push(newTripRec);
    this.setState = ({ TripTbl: this.TripTbl})
    console.log("this.state:", this.state)
    /*  this.setState({ [e.target.name]: e.target.value }); */
    console.log("in the handleSubmit")
  }

  render() {
   if (localStorage.getItem('viewTrip')) 
   /*  if (this.state.viewTrip === true) */
      return <div className="App">
        <header className="App-header">
          <Nav viewTripData={this.viewTripData} viewTrip={this.props.viewTrip} enterTrip={this.props.enterTrip} viewTripForm={this.viewTripForm} />
        </header>
        <div className="main-container"><NavLeft />
        <div className="main-display">{TripTbl.map((trips, index) => {
          return <TripData key={trips.ID} trip={trips.Trip} startDate={trips.StartDate} duration={trips.Duration}
            place={trips.Place} photos={trips.Photos} notes={trips.Notes} anglers={trips.Anglers} gps1={trips.GPS1} gps2={trips.GPS2} imgCaption={trips.ImgCaption} />
        })} </div> </div> </div>;
    return <div className="App">
      <header className="App-header">
        <Nav viewTripData={this.viewTripData} viewTripForm={this.viewTripForm} />
      </header>
      <div className="main-container"><NavLeft />
      <div className="main-display"><TripFrm handleSubmit={this.handleSubmit} TripTbl={this.state.TripTbl}  key={this.ID} Trip={this.props.Trip} StartDate={this.props.StartDate} Duration={this.props.Duration}
            changeHandler={this.changeHandler} Place={this.props.Place} Photos={this.props.Photos} Notes={this.props.Notes} Anglers={this.props.Anglers} Gps1={this.props.GPS1} Gps2={this.props.GPS2} ImgCaption={this.props.ImgCaption}/></div></div> </div>;

  }

 
}

export default App;

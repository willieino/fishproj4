import React, { Component } from 'react';
import TripTbl from "../Tables/tripTbl"
import TableRow from "./TableRow"
import '../App.css';

class TableDisplay extends Component {
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
      gps1: "",
      gps2: "",
      imgCaption: "",
      viewTrip: null,
      enterTrip: false,
      TripTbl: [],
    }
  }

  componentDidMount() {
    console.log("in the tabledisplay component did mount")
    console.log(this.state)
  }

  render() {

    return (
      <div className="table-display"><div className="trip2-header">View of all Trip Information:</div>{TripTbl.map((trips, index) => {
        return <TableRow
          key={trips.ID}
          trip={trips.Trip}
          startDate={trips.StartDate}
          duration={trips.Duration}
          place={trips.Place}
          photos={trips.Photos}
          id={trips.ID}
          notes={trips.Notes}
          anglers={trips.Anglers}
          gps1={trips.GPS1}
          gps2={trips.GPS2}
          imgCaption={trips.ImgCaption} />
      })} </div>
    );
  }
}

export default TableDisplay;
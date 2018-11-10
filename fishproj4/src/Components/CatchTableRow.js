import React, { Component } from 'react';
import '../App.css';

class CatchTableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      species: "",
      catchDate: "",
      trip: "",
      location: "",
      angler: "",
      quantity: "",
      weight: "",
      length: "",
      girth: "",
      fightTime: "",
      outcome: "",
      style: "",
      bait: "",
      baitColor: "",
      notes: "",
      airTemp: "",
      windDirection: "",
      wind: "",
      skyCondition: "",
      lunarPhase: "",
      pressure: "",
      barometer: "",
      waterTemp: "",
      waterDepth: "",
      waterPh: "",
      current: "",
      bottom: "",
      waterColor: "",
      tide: "",
      waterLevel: "",
      seas: "",
      rod: "",
      reel: "",
      hookSize: "",
      hookType: "",
      sinkerWeight: "",
      sinkerStyle: "",
      lineTest: "",
      lineStyle: "",
      lineColor: "",
      imgCation: "",
      photo: "",
      viewTrip: null,
      CatchTbl: [],
    }
  }

  render() {

    return (
      <div className="catch-table-row">
        <div id="id" className="heading column2">{this.props.id}</div>
        <div className="species column2">{this.props.species}</div>
        <div className="catchDate column2">{this.props.catchDate}</div>
        <div className="catchs column2">{this.props.trip}</div>
        <div className="location column2">{this.props.location}</div>
        <div className="angler column2">{this.props.angler}</div>
        <div className="quantity column2">{this.props.quantity}</div>
        <div className="weight column2">{this.props.weight}</div>
        <div className="length column2">{this.props.length}</div>
        <div id="girth" className="girth column2">{this.props.girth}</div>
        <div id="fightTime" className="fightTime column2">{this.props.fightTime}</div>
        <div className="column2">{this.props.outcome}</div>
        <div className="fish-style column2">{this.props.style}</div>
        <div className="bait column2">{this.props.bait}</div>
        <div className="baitColor column2">{this.props.baitColor}</div>
        <div className="notes column2">{this.props.notes}</div>
        <div className="airTemp column2">{this.props.airTemp}</div>
        <div className="windDirection column2">{this.props.windDirection}</div>
        <div className="wind column2">{this.props.wind}</div>
        <div className="skyCondition column2">{this.props.skyCondition}</div>
        <div id="lunarPhase" className="lunarPhase column2">{this.props.lunarPhase}</div>
        <div id="pressure" className="pressure column2">{this.props.pressure}</div>
        <div id="barometer" className="barometer column2">{this.props.barometer}</div>
        <div className="waterTemp column2">{this.props.waterTemp}</div>
        <div className="waterDepth column2">{this.props.waterDepth}</div>
        <div className="waterPh column2">{this.props.waterPh}</div>
        <div className="current column2">{this.props.current}</div>
        <div className="bottom column2">{this.props.bottom}</div>
        <div className="waterColor column2">{this.props.waterColor}</div>
        <div className="tide column2">{this.props.tide}</div>
        <div className="waterLevel column2">{this.props.waterLevel}</div>
        <div id="seas" className="seas column2">{this.props.seas}</div>
        <div id="rod" className="rod column2">{this.props.rod}</div>
        <div id="reel" className="reel column2">{this.props.reel}</div>
        <div className="hookSize column2">{this.props.hookSize}</div>
        <div className="hookType column2">{this.props.hookType}</div>
        <div className="sinkerWeight column2">{this.props.sinkerWeight}</div>
        <div className="sinkerStyle column2">{this.props.sinkerStyle}</div>
        <div className="lineTest column2">{this.props.lineTest}</div>
        <div className="lineStyle column2">{this.props.lineStyle}</div>
        <div className="lineColor column2">{this.props.lineColor}</div>
        <div className="imgCaption column2">{this.props.imgCaption}</div>
        <div id="photo" className="photo column2">{this.props.photo}</div>
      </div>
    );
  }
}

export default CatchTableRow;
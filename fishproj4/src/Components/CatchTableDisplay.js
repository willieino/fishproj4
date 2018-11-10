import React, { Component } from 'react';
import CatchTbl from "../Tables/catchTbl"
import CatchTableRow from "./CatchTableRow"
import '../App.css';

class CatchTableDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  componentDidMount() {
    
  }

  render() {

    return (
      <div className="catch-table-display">{CatchTbl.map((catches, index) => {
        return <CatchTableRow
          key={catches.ID}
          id={catches.ID}
          species={catches.Species}
          catchDate={catches.CatchDate}
          trip={catches.Trip}
          location={catches.Location}
          angler={catches.Angler}
          quantity={catches.Quantity}
          weight={catches.Weight}
          length={catches.Length}
          girth={catches.Girth}
          fightTime={catches.FightTime}
          outcome={catches.Outcome}
          style={catches.Style}
          bait={catches.Bait}
          baitColor={catches.BaitColor}
          notes={catches.Notes}
          airTemp={catches.AirTemp}
          windDirection={catches.WindDirection}
          wind={catches.Wind}
          skyCondition={catches.SkyCondition}
          lunarPhase={catches.LunarPhase}
          pressure={catches.Pressure}
          barometer={catches.Barometer}
          waterTemp={catches.WaterTemp}
          waterDepth={catches.WaterDepth}
          waterPh={catches.WaterPh}
          current={catches.Current}
          bottom={catches.Bottom}
          waterColor={catches.WaterColor}
          tide={catches.Tide}
          waterLevel={catches.WaterLevel}
          seas={catches.Seas}
          rod={catches.Rod}
          reel={catches.Reel}
          hookSize={catches.HookSize}
          hookType={catches.HookType}
          sinkerWeight={catches.SinkerWeight}
          sinkerStyle={catches.SinkerStyle}
          lineTest={catches.LineTest}
          lineStyle={catches.LineStyle}
          lineColor={catches.LineColor}
          imgCaption={catches.ImgCaption}
          photo={catches.Photo} />
      })} </div>
    );
  }
}

export default CatchTableDisplay;
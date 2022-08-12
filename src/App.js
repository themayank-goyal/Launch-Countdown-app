import { Component } from "react";
import "./App.css";
import hills from "./images/pattern-hills.svg";
import stars from "./images/bg-stars.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      day: '',
      hrs: '',
      mins: '',
      secs: '',
    };
  }

  timer = () => {
    const d1 = new Date();
    const d2 = new Date(2023, 7, 6, 19, 30, 0);
    const d = d2 - d1;
    const days = String(Math.trunc(d / 1000 / 60 / 60 / 24)).padStart(2,0);
    const hrs = String(Math.trunc((d / 1000 / 60 / 60) % 24)).padStart(2,0);
    const mins = String(Math.trunc((d / 1000 / 60) % 60)).padStart(2,0);
    const secs = String(Math.trunc((d / 1000) % 60)).padStart(2,0);
    this.setState(() => {
      return { days, hrs, mins, secs };
    });
  };
  render() {
    const { days, hrs, mins, secs } = this.state;
    setInterval(this.timer, 1000);
    return (
      <div>
        <h1 className="title">We're launching soon</h1>
        <div className="count-down">
          <div className="count">{days}</div>
          <div className="count">{hrs}</div>
          <div className="count">{mins}</div>
          <div className="count">{secs}</div>
          <label>DAYS</label>
          <label>HOURS</label>
          <label>MINUTES</label>
          <label>SECONDS</label>
        </div>
        <img className="hills" src={hills} alt="" />
      </div>
    );
  }
}

export default App;

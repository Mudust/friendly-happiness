import React, { Component } from "react";
import RentalTeam from "./RentalTeam";
import Walking from "./Walking";
import "../Index/index.scss";
import Consulting from "./Consulting";

class Index extends Component {
  render() {
    return (
      <div>
        {/* 导航栏 */}
        <Walking></Walking>
        <div className="group">
          <h3 className="title">租房小组</h3>
          <span className="more">更多</span>
        </div>
        {/* 租房小组 */}
        <RentalTeam></RentalTeam>
        {/* 最新咨询 */}

        <Consulting></Consulting>
      </div>
    );
  }
}

export default Index;

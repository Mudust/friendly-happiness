import React, { Component } from "react";
import "../Map/index.scss";
import NavHeader from "../../components/NavHeader";
export default class Map extends Component {
  componentDidMount() {
    // 脚手架中全局对象要用window来访问呢
    const map = new window.BMapGL.Map("container");
    const point = new window.BMapGL.Point(116.404, 39.915);
    map.centerAndZoom(point, 15);

    const myCity = new window.BMapGL.LocalCity();
    myCity.get((res) => {
      console.log(res);
    });
  }

  render() {
    return (
      <div className="map">
        {/* 地图容器 */}
        <NavHeader>地图找房</NavHeader>
        <div id="container"></div>
      </div>
    );
  }
}

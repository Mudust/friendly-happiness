import React from "react"
// 导入要使用的组件
import { Switch, Route, Link, Redirect } from "react-router-dom"
import Home from "./pages/Home";
import CityList from "./pages/CityList";
import Map from './pages/Map'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/citylist" component={CityList}></Route>
        <Route path="/map" component={Map}></Route>
      </Switch>
      <Redirect to="/home"></Redirect>
    </div>
  );
}

export default App;

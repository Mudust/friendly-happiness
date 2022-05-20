import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { TabBar } from "antd-mobile";
import New from "../New";
import Index from "../Index";
import Profile from "../Profile";
import List from "../List";
import "./index.css";

const tabItems = [
  {
    title: "首页",
    icon: "icon-yemian1",
    path: "/home",
  },
  {
    title: "找房",
    icon: "icon-leida",
    path: "/home/list",
  },
  {
    title: "咨询",
    icon: "icon-zixun",
    path: "/home/new",
  },
  {
    title: "我的",
    icon: "icon-wode",
    path: "/home/profile",
  },
];

class Home extends Component {
  state = {
    selectedTab: this.props.location.pathname,
  };

  componentDidUpdate (prevProps) {
    console.log(prevProps);
    console.log(this.props);
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        selectedTab:this.props.location.pathname
      })
    }
  
  }

  renderTabBarItem() {
    return tabItems.map((item) => (
      <TabBar.Item
        title={item.title}
        key={item.title}
        icon={<i className={`iconfont ${item.icon}`} />}
        selectedIcon={<i className={`iconfont ${item.icon}`} />}
        selected={this.state.selectedTab === item.path}
        onPress={() => {
          this.setState({
            selectedTab: item.path,
          });
          // 路由切换
          this.props.history.push(item.path);
        }}
        data-seed="logId"
      ></TabBar.Item>
    ));
  }

  render() {
    return (
      <div className="home">
        {/* 渲染子路由 */}
        <Switch>
          <Route path="/home/new" component={New}></Route>
          <Route exact path="/home" component={Index}></Route>
          <Route path="/home/list" component={List}></Route>
          <Route path="/home/profile" component={Profile}></Route>
        </Switch>
        <TabBar
          tintColor="#21b97a"
          barTintColor="white"
          noRenderContent="true"
          hidden={this.state.hidden}
        >
          {this.renderTabBarItem()}
        </TabBar>
      </div>
    );
  }
}

export default Home;

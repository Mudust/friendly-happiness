import React, { Component } from "react";
// ui框架
import { Carousel, Flex } from "antd-mobile";
import { withRouter } from "react-router";
// axios
import axios from "axios";
import Nav1 from "../../../assets/img/zhengzu.png";
import Nav2 from "../../../assets/img/hezu.png";
import Nav3 from "../../../assets/img/dituzhaofang.png";
import Nav4 from "../../../assets/img/chuzu.png";
import "./index.scss";

const navs = [
  {
    id: 1,
    img: Nav1,
    title: "整租",
    path: "/home/list",
  },
  {
    id: 2,
    img: Nav2,
    title: "合租",
    path: "/home/list",
  },
  {
    id: 3,
    img: Nav3,
    title: "地图找房",
    path: "/map",
  },
  {
    id: 4,
    img: Nav4,
    title: "去租房",
    path: "/home/list",
  },
];

// 轮播图两个问题:1.不会自动播放 2.从其他路由返回高度不对
// 原因:轮播图动态加载,加载完成前后的数量不对
class Walking extends Component {
  state = {
    // 轮播图状态数据
    swipers: [],
    isSwipers: false,
    imgHeight: 156,
  };

  // 获取轮播图数据的方法
  async getSwipers() {
    const res = await axios.get("http://localhost:8009/home/swiper");
    console.log("轮播图数据为：", res);
    // 设置状态
    this.setState(() => {
      return {
        swipers: res.data.body,
        isSwipers: true,
      };
    });
  }

  componentDidMount() {
    // simulate img loading
    this.getSwipers();
  }
  // 渲染轮播图 讲代码逻辑抽离
  renderSwipers() {
    return this.state.swipers.map((item, index) => (
      <a
        key={item.id}
        href="https://www.cudust.cn"
        style={{
          display: "block",
          position: "relative",
          top: this.state.slideIndex === index ? -10 : 0,
          height: this.state.imgHeight,
          boxShadow: "2px 1px 1px rgba(0, 0, 0, 0.2)",
        }}
      >
        <img
          src={`http://localhost:8009${item.imgSrc}`}
          alt=""
          style={{ width: "100%", verticalAlign: "top" }}
        />
      </a>
    ));
  }
  // 渲染导航菜单
  renderNavs() {
    return navs.map((item) => (
      <Flex.Item
        className="nan_list"
        key={item.id}
        onClick={() => {
          this.props.history.push(item.path);
        }}
      >
        <img src={item.img} alt="" />
        <h2>{item.title}</h2>
      </Flex.Item>
    ));
  }

  render() {
    return (
      <div>
        {/* 导航栏 */}
        {this.state.isSwipers ? (
          <Carousel
            className="space-carousel"
            frameOverflow="visible"
            cellSpacing={10}
            slideWidth={0.8}
            autoplay
            infinite
            afterChange={(index) => this.setState({ slideIndex: index })}
          >
            {this.renderSwipers()}
          </Carousel>
        ) : (
          ""
        )}
        {/* 导航菜单 */}
        <Flex className="nav">{this.renderNavs()}</Flex>
      </div>
    );
  }
}
export default withRouter(Walking);

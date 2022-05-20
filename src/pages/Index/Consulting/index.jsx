import React, { Component } from "react";
import axios from "axios";
import { WingBlank, WhiteSpace, Flex } from "antd-mobile";
import "./index.scss";

export default class Consulting extends Component {
  state = {
    consult: [],
  };

  async getConsult() {
    const res = await axios.get("http://localhost:8009/home/news?", {
      params: {
        area: "area=AREA%7C88cff55c-aaa4-e2e0",
      },
    });
    this.setState(() => {
      return {
        consult: res.data.body,
      };
    });
    console.log("咨询", res);
  }
  async getcity() {
    await axios
      .get("http://localhost:8009/area/city?level=2")
      .then((res) => {
        console.log("2223232", res);
      });
  }

  componentDidMount() {
    this.getConsult();
    this.getcity();
  }

  renderconsult() {
    return this.state.consult.map((item) => (
      <div key={item.id}>
        <Flex>
          <Flex.Item>
            <img
              src={`http://localhost:8009${item.imgSrc}`}
              className="Flex_img"
            />
          </Flex.Item>
          <Flex.Item className="Flex_right">
            <Flex.Item>
              <h2>{item.title}</h2>
            </Flex.Item>
            <Flex.Item className="Flex_p">
              <Flex justify="between">
                <p>{item.from}</p>
                <p>{item.date}</p>
              </Flex>
            </Flex.Item>
          </Flex.Item>
        </Flex>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div>
          <h3 className="title">最新咨询</h3>
        </div>
        <WingBlank size="lg">{this.renderconsult()}</WingBlank>
      </div>
    );
  }
}

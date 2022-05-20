import React, { Component } from "react";
import { Grid, Flex } from "antd-mobile";
import axios from "axios";
import "./index.scss";

class RentalTeam extends Component {
  // 租房小组
  state = {
    groups: [],
  };
  async getGroups() {
    const res = await axios.get("http://localhost:8009/home/groups?", {
      params: {
        area: "area=AREA%7C88cff55c-aaa4-e2e0",
      },
    });
    console.log('小组',res);
    this.setState(() => {
      return {
        groups: res.data.body,
      };
    });
  }

  componentDidMount() {
    this.getGroups();
  }
  render() {
    return (
      <div>
        <Grid
          data={this.state.groups}
          columnNum={2}
          square={false}
          hasLine={false}
          renderItem={(item) => (
            <Flex className="group-item" justify="around" key={item.id}>
              <div className="desc">
                <p className="title">{item.title}</p>
                <span className="info">{item.desc}</span>
              </div>
              <img
                className="imgicon"
                src={`http://localhost:8009${item.imgSrc}`}
                alt=""
              />
            </Flex>
          )}
        />
      </div>
    );
  }
}

export default RentalTeam;

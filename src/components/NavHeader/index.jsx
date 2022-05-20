import React from 'react'
import { NavBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import "./index.scss";

function NavNbar(props) {
    console.log(props);
    //设置默认值  点击左侧图标效果
    let onLeftClick = () => props.history.go(-1)
    return (
        <NavBar
            className="NavHeader"
            mode="light"
            icon={< i className='iconfont icon-back' />}
            onLeftClick={props.onLeftClick || onLeftClick}
        > {props.children}
            {/* props.children改为插槽模式 */}
        </NavBar >
    )
}

export default withRouter(NavNbar)
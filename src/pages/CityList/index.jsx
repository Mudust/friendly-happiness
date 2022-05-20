// import React from 'react'
// import axios from '../../utils/https'
// import './index.scss'
// import NavHeader from '../../components/NavHeader/index';
// /**
// * 格式化返回的数据
// * @param {*} list 
// */

// // 封装一个函数用于改造城市列表
// const formatCityData = list => {
//     // 键是首字母，值是一个数组：对应首字母的城市信息
//     let cityList = {}
//     list.forEach(item => {
//         // ❗❗🚩👍通过简写获取到第一个首字母
//         let first = item.short.substr(0, 1)
//         // 判断对象中是否有首字母的数组 我们可以利用对象取值的第二种方式 中括号的方式
//         // cityList[first]为所有的数组
//         if (cityList[first]) {
//             // 如果进入if 代表有这个值，我们只需要直接push进去
//             cityList[first].push(item)
//         } else {
//             // 如果进入else 代表没有这个值，我们初始化这个属性，并且把当前数据设置进去
//             cityList[first] = [item]
//         }
//     })
//     // 接下来我们需要把 cityList里面所有的字母（键key）取出来，放在数组中，充当城市列表右侧的首字母导航条
//     let cityIndex = Object.keys(cityList).sort()
//     return {
//         cityList,
//         cityIndex
//     }
// }
// //------------------------------------------------------------
// export default class CityList extends React.Component {
//     componentDidMount() {
//         this.getCityList()
//     }
//     // 获取所有的城市信息
//     async getCityList() {
//         let res = await axios.get('http://localhost:8009/area/city?level=1')
//         // let hotRes = await axios({
//         //     url:'/area/hot',
//         //     params:{
//         //         name:
//         //     }
//         // })
//         console.log('城市列表数据：', res)
//         const { cityList, cityIndex } = formatCityData(res.data.body)
//         console.log(cityList, cityIndex)
//     }

//     render() {
//         return <div className="CityList">
//             {/* 头部navbar */}
//             <NavHeader>城市选择</NavHeader>
//         </div>
//     }
// }
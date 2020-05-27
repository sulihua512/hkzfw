import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Index from '../Index/index'
import House from '../House/index'
import Profile from '../Profile/index'

/* 
    首页
*/
class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/home/index">Index</Link>
                    <Link to="/home/house">House</Link>
                    <Link to="/home/profile">Profile</Link>
                </div>
                {/* 二级路由的配置 */}
                {/* 默认首页 */}
                <Route path="/home/index" component={Index} />
                {/* 列表找房 */}
                <Route path="/home/house" component={House} />
                {/* 个人中心 */}
                <Route path="/home/profile" component={Profile} />
            </div>
        )
    }
}

export default Home
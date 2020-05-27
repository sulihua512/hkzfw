import React from 'react'
import { Link } from 'react-router-dom'
/* 
    404页面
*/
const NotFound = () => {
    return (
        <div>
            <h1>404页面</h1>
            <p><Link to="/home">回到首页</Link></p>
        </div>
    )
}
export default NotFound
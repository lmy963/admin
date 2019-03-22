import React,{ Component } from "react";
import "./Contain.less";
import {Route} from "react-router-dom";
class Contain extends Component {
    render(){
        return( 
        <div className="contain">
             <Route path="/admin/home" render={()=>{ return <div>这里是首页</div>}}></Route>
             <Route path="/admin/setting" render={()=>{ return <div>这里是设置</div>}}></Route>
             <Route path="/admin/user/add" render={()=>{ return <div>添加用户</div>}}></Route>
             <Route path="/admin/user/root" render={()=>{ return <div>管理员管理</div>}}></Route>
        </div>
        )
    }
}
export default Contain;
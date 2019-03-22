import React, { Component } from "react";
import "./navleft.less"
import {withRouter} from "react-router-dom";
import { Menu, Icon } from 'antd';
import  menuData from "./rootMenu"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default withRouter (class NavLeft extends Component {
    renderMenu(data){
        return data.map((item,index)=>{
            if(item.children){
                return (
                    <SubMenu key={item.id}  title={item.name}>
                        {this.renderMenu(item.children)}
                   </SubMenu> 
                )
            }else{
                return <Menu.Item key={item.id} onClick={this.jump.bind(this,item.path)}>
                            <span>{item.name}</span>
                        </Menu.Item>
            }
        })
    }
    jump(path){
        this.props.history.push({pathname:path})
    }
    render() {
        return (
            <div className="navleft">
                <Menu  mode="vertical">
                        {this.renderMenu.bind(this,menuData.menuData)()}
                </Menu>
            </div>

        )
    }
})

import React, { Component } from "react";
import "./admin.less";
import Contain from "../../components/Contain/contain";
import {Row,Col} from "antd"
import NavLeft from "../../components/NavLeft/navleft";
class Admin extends Component {
    render() {
        return (
           <div className="admin">
            <Row>
                <Col span={4}>
                   <NavLeft></NavLeft>
                </Col>
                <Col span={20}>
                    <Row>
                        <Col span={24}>
                            头部
                        </Col>
                        <Col span={24}>
                        <Contain></Contain>
                        </Col>
                        <Col span={24}>
                            底部
                        </Col>
                    </Row>
                </Col>
            </Row>
           </div>
        )
    }
}
export default Admin;
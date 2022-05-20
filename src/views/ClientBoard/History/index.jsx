import { Row, Col, DatePicker } from "antd"
import { useState } from "react"
import ClientLayout from "../../../layouts/ClientLayout"
import './index.css'

export default () => {

    const [selected, setselected] = useState(0)

    const items = [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    return (
        <>
            <div className="client_board">

                <ClientLayout>
                    <br />
                    <br />
                    <Row>
                        <Col sm={24} xs={24} md={{ span: 16, offset: 4 }} >
                            <Row>
                                <Col sm={24} xs={24} md={12} >
                                    <div style={{ color: 'white', display: 'flex', justifyContent: "center" }} >
                                        <h4 style={{ color: 'white' }}>Historique</h4>
                                    </div>
                                    <br />
                                    <div className="achat_recharge">
                                        <Row gutter={16} >
                                            <Col span={12} >
                                                <button onClick={() => setselected(0)} className={selected === 0 ? "acchat" : "recharge"}  >
                                                    Achat
                                                </button>
                                            </Col>
                                            <Col span={12} >
                                                <button onClick={() => setselected(1)} className={selected === 1 ? "acchat" : "recharge"} >
                                                    Recharge
                                                </button>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row gutter={16} >
                                            <Col span={12} >
                                                <DatePicker style={{ width: "100%", height: "50px", borderRadius: "10px" }} />
                                            </Col>
                                            <Col span={12} >
                                                <DatePicker style={{ width: "100%", height: "50px", borderRadius: "10px" }} />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>

                                <Col sm={24} xs={24} md={12} >

                                    <div className="history_data" >
                                        {
                                            selected === 1
                                                ?
                                                <>
                                                    {
                                                        items.map((item, i) => {
                                                            return (
                                                                <div style={{ color: "white", fontSize: '16px', borderBottom: i < items.length - 1 ? "1px solid white" : "" }} className="achat_history_item">
                                                                    <span>bundle</span>
                                                                    <span>25/25/2154</span>
                                                                    <span>5000 DT</span>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </>
                                                :
                                                <>
                                                    {
                                                        items.map((item, i) => {
                                                            return (
                                                                <div style={{ color: "white", fontSize: '16px', borderBottom: i < items.length - 1 ? "1px solid white" : "" }} className="achat_history_item">

                                                                    <span>25/25/2154</span>
                                                                    <span>5000 DT</span>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </>
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </ClientLayout>
            </div >
        </>
    )
}
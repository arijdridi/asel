import { Col, Row } from "antd"
import ClientLayout from "../../../layouts/ClientLayout"
import './index.css'
export default () => {
    return (
        <>
            <div className="client_board">

                <ClientLayout>

                    <Row>
                        <Col xs={24} sm={24} md={{ span: 12, offset: 6 }} >
                            <br />
                            <div className="title_recharge">
                                <h4>Recharge</h4>
                            </div>
                            <br />
                            <div className="recharge_method">
                                <div className="method_label">
                                    <div className="method_dot">
                                        <div className="dot">

                                        </div>
                                    </div>
                                    <h5>Recharger via voucher</h5>
                                </div>
                                <div className="indication">
                                    <span>Entrez le numéro du voucher</span>
                                </div>

                                <Row style={{ marginTop: "10px" }} gutter={[10, 10]} >
                                    <Col sm={24} md={12} xs={24} >
                                        <div className="recharge_input">
                                            <input type="text" placeholder="**** **** **** **** **" />
                                        </div>
                                    </Col>
                                    <Col sm={24} md={12} xs={24} >
                                        <button className="recharge_button" >
                                            Valider
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                            <br />
                            <br />
                            <div className="recharge_method">
                                <div className="method_label">
                                    <div className="method_dot">
                                        <div className="dot">

                                        </div>
                                    </div>
                                    <h5>Paiement en ligne</h5>
                                </div>
                                <div className="indication">
                                    <span>Montant de recharge</span>
                                </div>

                                <Row style={{ marginTop: "10px" }} gutter={[10, 10]} >
                                    <Col sm={24} md={12} xs={24} >
                                        <div className="recharge_input">
                                            <input type="text" placeholder="**** ****" />
                                            <span style={{ fontWeight: 'bold', color: "#00306D" }} >DT</span>
                                        </div>
                                    </Col>
                                    <Col sm={24} md={12} xs={24} >
                                        <button className="recharge_button" >
                                            Payer
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </ClientLayout>
            </div>
        </>
    )
}
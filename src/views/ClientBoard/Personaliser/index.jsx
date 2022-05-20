import { Col, Row, Slider } from "antd"
import ClientLayout from "../../../layouts/ClientLayout"
import piggy from '../../../assets/img/piggy.png'
import './index.css'
export default () => {
    return (
        <>
            <div className="client_board">
                <ClientLayout>
                    <br />
                    <div style={{ color: 'white', display: 'flex', justifyContent: "center" }} >
                        <h4 style={{ color: 'white' }}>Composer votre offre</h4>
                    </div>

                    <br />
                    <br />


                    <Row>
                        <Col sm={24} xs={24} md={{ span: 6, offset: 9 }} >
                            <div className="piggy">
                                <div className='piggy_desc' >
                                    <h6>Solde du compte</h6>
                                    <b>9999,999 DT</b>

                                </div>
                                <img style={{ width: '70px', height: "70px" }} src={piggy} alt="" />
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <br />


                    <div className='forfait_body' >

                        <Row gutter={[16, 16]} >
                            <Col sm={24} xs={24} md={8}  >
                                <div className="slider_item" >
                                    <div className="slider_item_top" >
                                        <span style={{ color: "white", fontWeight: "bold", fontSize: "16px" }} >Data</span>
                                        <span style={{ color: "rgb(248, 213, 56)", fontWeight: "bold", fontSize: "16px" }} >600 DT</span>
                                    </div>
                                    <Slider
                                        trackStyle={{
                                            background: 'rgb(248, 213, 56)'
                                        }}
                                        defaultValue={30} />
                                </div>
                            </Col>
                            <Col sm={24} xs={24} md={8}  >
                                <div className="slider_item" >
                                    <div className="slider_item_top" >
                                        <span style={{ color: "white", fontWeight: "bold", fontSize: "16px" }}>Voix</span>
                                        <span style={{ color: "violet", fontWeight: "bold", fontSize: "16px" }}>600 DT</span>
                                    </div>
                                    <Slider
                                        trackStyle={{
                                            background: 'violet'
                                        }}
                                        defaultValue={30} />
                                </div>
                            </Col>
                            <Col sm={24} xs={24} md={8}  >
                                <div className="slider_item" >
                                    <div className="slider_item_top" >
                                        <span style={{ color: "white", fontWeight: "bold", fontSize: "16px" }}>SMS</span>
                                        <span style={{ color: "green", fontWeight: "bold", fontSize: "16px" }}>600 DT</span>
                                    </div>
                                    <Slider
                                        trackStyle={{
                                            background: 'green'
                                        }}
                                        defaultValue={30} />
                                </div>
                            </Col>

                        </Row>
                        <br />
                        <Row>
                            <Col sm={24} xs={24} md={{ offset: 4, span: 16 }} >
                                <Row gutter={[10, 10]} >
                                    <Col sm={24} md={12} xs={24} >
                                        <div className="prix_total">
                                            <span className="prix_total_prix" > Prix total :  18.000 DT </span>
                                            <span style={{ color: 'gray' }} >Valide jusqu'à 08/05/2022 </span>
                                        </div>
                                    </Col>
                                    <Col sm={24} md={12} xs={24} >
                                        <button style={{height:"100%"}} className="recharge_button" >
                                            Valider
                                        </button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                    </div>
                </ClientLayout>
            </div>
        </>
    )
}
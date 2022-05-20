import ClientLayout from '../../../layouts/ClientLayout'
import { Row, Col } from 'antd'
import './index.css'
import React, { useState } from 'react';
import { Modal, Button } from 'antd';

export default () => {

    const [selected, setselected] = useState(0)

    const bundles = [1, 2, 3, 4]

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <div className="client_board">
                <ClientLayout>

                    {
                        selected === 0
                        &&
                        <>
                            <br />
                            <br />
                            <div style={{ color: 'white', display: 'flex', justifyContent: "center" }} >
                                <h4 style={{ color: 'white' }}>Achat forfait</h4>
                            </div>
                        </>
                    }
                    <br />
                    <br />
                    <br />
                    <br />

                    <div className='forfait_body' >
                        {
                            selected === 0
                            &&
                            <Row gutter={[10, 10]} >
                                <Col xs={24} sm={24} md={8} >
                                    <div onClick={() => setselected(1)} className="forfait_item">
                                        <span className='forfait_name' >Go</span>
                                        <div className="icons_forfait">
                                            <i class="las la-phone"></i>
                                            <i class="las la-envelope"></i>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={8} >
                                    <div onClick={() => setselected(2)} className="forfait_item">
                                        <span className='forfait_name' >Surf</span>
                                        <div className="icons_forfait">
                                            <i class="las la-wifi"></i>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={8} >
                                    <div onClick={() => setselected(3)} className="forfait_item">
                                        <span className='forfait_name' >Mix & Match</span>
                                        <div className="icons_forfait">
                                            <i class="las la-phone"></i>
                                            <i class="las la-envelope"></i>
                                            <i class="las la-wifi"></i>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        }

                        {
                            selected === 1
                            &&
                            <>
                                <Row gutter={[10, 10]} >
                                    <Col xs={24} sm={24} md={{ offset: 8, span: 8 }} >

                                        <div onClick={() => setselected(1)} className="forfait_item">
                                            <span className='forfait_name' >Go</span>
                                            <div className="icons_forfait">
                                                <i class="las la-phone"></i>
                                                <i class="las la-envelope"></i>
                                            </div>
                                        </div>

                                    </Col>

                                </Row>
                                <br />
                                <Row>
                                    <Col xs={24} sm={24} md={{ span: 12, offset: 6 }} >
                                        <Row gutter={[10, 10]} >
                                            {
                                                bundles.map(bundle => {
                                                    return (
                                                        <Col xs={12} sm={12} md={6} >

                                                            <div className="bundle">
                                                                <span className='bundle_title' >Bundle</span>
                                                                <div className="bundle_options">
                                                                    <span>
                                                                        <i class="las la-phone"></i>
                                                                        <span>45 min</span>
                                                                    </span>
                                                                    <span>
                                                                        <i class="las la-envelope"></i>
                                                                        <span>100 sms</span>
                                                                    </span>
                                                                </div>
                                                                <button onClick={showModal} >Acheter</button>
                                                            </div>
                                                        </Col>
                                                    )
                                                })
                                            }

                                        </Row>
                                    </Col>
                                </Row>

                            </>
                        }
                    </div>

                    <Modal footer={null} title="" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                            <span style={{ color: 'gray', fontSize: '25px' }} >Etes-vous sure ?</span>
                            <span style={{ color: 'gray', fontSize: '16px' }}>Etes-vous sur de vouloir acheter le forfait ... ?</span>
                            <button className='yes_button' >Oui</button>
                        </div>
                    </Modal>
                </ClientLayout>
            </div>
        </>
    )
}
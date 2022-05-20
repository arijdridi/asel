import { Col, DatePicker, Row } from 'antd'
import { useHistory } from 'react-router-dom'
import './index.css'
export default () => {
    const history = useHistory()
    return (
        <>
            <div className="profile">
                <div  className="goback">
                    <i style={{cursor:'pointer'}} onClick={() => history.push('/client')} class="las la-arrow-alt-circle-left"></i>
                </div>

                <div className="avatar_section">
                    <div className="avatar">
                        <i class="las la-user-alt user_logo"></i>
                        <div className='pen' >
                            <i class="las la-pen"></i>
                        </div>
                    </div>
                </div>

                <br />
                <div style={{ color: 'white', display: 'flex', justifyContent: "center" }} >
                    <h4 style={{ color: 'white' }}>Mes informations</h4>
                </div>


                <Row gutter={[30, 30]} >
                    <Col xs={24} sm={24} md={8} >
                        <div className="gray_input">
                            <span>Nom : </span>
                            <input type="text" />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8} >
                        <div className="gray_input">
                            <span>Prénom : </span>
                            <input type="text" />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8} >
                        <div className="gray_input">
                            <span>CIN : </span>
                            <input type="text" />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8} >
                        <div className="white_input">
                            <span>Date de naissance : </span>
                            <DatePicker style={{ width: "100%", height: "40px", borderRadius: "10px" }} />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8} >
                        <div className="white_input">
                            <span>E-mail : </span>
                            <input type="text" />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8} >
                        <div className="white_input">
                            <span>Profession : </span>
                            <input type="text" />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={{ span: 8, offset: 8 }} >
                        <button className="recharge_button" >
                            Valider
                        </button>
                    </Col>

                </Row>
                <br />
                <br />
                <br />
                <Row gutter={[16, 16]} >
                    <Col xs={24} sm={24} md={{ span: 8, offset: 4 }} >
                        <button className='disconnect' >
                            Déconnexion
                        </button>


                    </Col>
                    <Col xs={24} sm={24} md={{ span: 8 }} >
                        <button onClick={() => history.push('/changePassword')} className='change_pass_button' >
                            Modifier mot de passe
                        </button>

                    </Col>

                </Row>
                <br />
            </div>
        </>
    )
}
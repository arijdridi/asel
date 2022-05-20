import { Col, Row } from "antd"
import { useHistory } from "react-router-dom"
import './index.css'
export default () => {
    const history = useHistory()

    return (
        <>
            <div className="changepass">
                <div className="goback">
                    <i style={{cursor:'pointer'}} onClick={() => history.push('/profile')} class="las la-arrow-alt-circle-left"></i>
                </div>

                <div className="avatar_section">
                    <div className="avatar">
                        <i class="las la-user-alt"></i>
                      
                    </div>
                </div>

                <br />
                <div style={{ color: 'white', display: 'flex', justifyContent: "center" }} >
                    <h4 style={{ color: 'white' }}>Modifier mot de passe</h4>
                </div>

                <br />
                <Row gutter={[30, 30]} >


                    <Col xs={24} sm={24} md={8} >
                        <div className="white_input">
                            <span>Mot de passe actuel : </span>
                            <input type="text" />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8} >
                        <div className="white_input">
                            <span>Nouveau mot de passe : </span>
                            <input type="text" />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8} >
                        <div className="white_input">
                            <span>Confirmer mot de passe : </span>
                            <input type="text" />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={{ span: 8, offset: 8 }} >
                        <button className="recharge_button" >
                            Valider
                        </button>
                    </Col>


                </Row>
            </div>
        </>
    )
}
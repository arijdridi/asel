import ClientLayout from '../../layouts/ClientLayout'
import './index.css'
import piggy from '../../assets/img/piggy.png'
import { Col, Row } from 'antd'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
export default () => {

    function onChange(a, b, c) {
        console.log(a, b, c);
    }

    const contentStyle = {
        height: '40px',
        width: '120px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    const items = [
       <div style={{padding : "0px 10px"}} ><div className='offre_element' > <span>offre</span> </div></div> ,
       <div style={{padding : "0px 10px"}} ><div className='offre_element' > <span>offre</span> </div></div> ,
       <div style={{padding : "0px 10px"}} ><div className='offre_element' > <span>offre</span> </div></div> ,
       <div style={{padding : "0px 10px"}} ><div className='offre_element' > <span>offre</span> </div></div> ,
       <div style={{padding : "0px 10px"}} ><div className='offre_element' > <span>offre</span> </div></div> ,
       <div style={{padding : "0px 10px"}} ><div className='offre_element' > <span>offre</span> </div></div> ,
       <div style={{padding : "0px 10px"}} ><div className='offre_element' > <span>offre</span> </div></div> ,
       <div style={{padding : "0px 10px"}} ><div className='offre_element' > <span>offre</span> </div></div> ,
       <div style={{padding : "0px 10px"}} ><div className='offre_element' > <span>offre</span> </div></div> ,
       <div style={{padding : "0px 10px"}} ><div className='offre_element' > <span>offre</span> </div></div> ,
       <div style={{padding : "0px 10px"}} ><div className='offre_element' > <span>offre</span> </div></div> ,
       <div style={{padding : "0px 10px"}} ><div className='offre_element' > <span>offre</span> </div></div> ,
       <div style={{padding : "0px 10px"}} ><div className='offre_element' > <span>offre</span> </div></div> ,
       <div style={{padding : "0px 10px"}} ><div className='offre_element' > <span>offre</span> </div></div> ,
       <div style={{padding : "0px 10px"}} ><div className='offre_element' > <span>offre</span> </div></div> ,
       <div style={{padding : "0px 10px"}} ><div className='offre_element' > <span>offre</span> </div></div> ,
      

    ];


    const responsive =
    {
        0: {
            items: 2,
        },
        1024: {
            items: 6
        }
    }



    return (
        <>
            <div className="client_board">
                <ClientLayout>



                    <Row>
                        <Col sm={24} xs={24} md={{ span: 12, offset: 6 }} >
                            <br />
                            <div className="welcome">
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}  >

                                    <h4 style={{ color: "white" }} >Bienvenue ...</h4>
                                    <h4 style={{ color: "white" }}>(00216) 47 - 000 - 000</h4>
                                </div>
                            </div>
                            <br />
                            <Row gutter={[16, 16]} >
                                <Col xs={24} sm={24} md={12}  >

                                    <div className="piggy">
                                        <div className='piggy_desc' >
                                            <h6>Solde du compte</h6>
                                            <b>9999,999 DT</b>
                                            <button>Recharger</button>
                                        </div>
                                        <img style={{ width: '100px', height: "100px" }} src={piggy} alt="" />
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={12}  >
                                    <div className="tarif">
                                        <div className="appels">
                                            <i class="las la-phone"></i>
                                            <span style={{ fontSize: "10px" }} >Appels</span>
                                            <span style={{ fontSize: "18px", fontWeight: "bold" }} >45</span>
                                            <span style={{ fontSize: "10px" }} >/100 min</span>
                                        </div>
                                        <div className="internet">
                                            <i class="las la-wifi"></i>
                                            <span style={{ fontSize: "10px" }} >Internet</span>
                                            <span style={{ fontSize: "18px", fontWeight: "bold" }} >8 GO</span>
                                            <span style={{ fontSize: "10px" }} >/25 GO</span>
                                        </div>
                                        <div className="sms">
                                            <i class="las la-envelope"></i>
                                            <span style={{ fontSize: "10px" }} >sms</span>
                                            <span style={{ fontSize: "18px", fontWeight: "bold" }} >24</span>
                                            <span style={{ fontSize: "10px" }} >/100</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <br />

                            <AliceCarousel autoPlay disableButtonsControls disableDotsControls  responsive={responsive} mouseTracking items={items} />
                            
                        </Col>
                    </Row>
                </ClientLayout>
            </div>
        </>
    )
}
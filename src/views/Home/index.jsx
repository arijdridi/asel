import { Col, Row } from "antd"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import LoginModal from "../../components/LoginModal"
import OfferCard from "../../components/OfferCard"
import SecondCard from "../../components/SecondCard"
import Slider from "../../components/Slider"
import axios from "../../config/axios"
import { setDataModalData } from "../../features/app/appSlice"

export default () => {



    const [products, setproducts] = useState([])

    const [news, setnews] = useState([])


    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('/products')
            .then(res => {
                console.log(res);
                setproducts(res.data)
            })
        axios.get('/news')
            .then(res => {
                console.log(res);
                setnews(res.data)
            })
    }, [])


    const cards = [1, 2, 3, 4, 5, 6]


    return (
        <>
            <div className="container">
                <Slider />
                <br />
                <br />
                <Row gutter={16} >
                    {
                        products.map(item => {
                            return (
                                <>
                                    <Col onClick={() => dispatch(setDataModalData({ data: { visible: true, data: item } }))} xs={24} sm={12} md={4} >
                                        <OfferCard product={item} />
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
                <br />
                <br />
                <Row gutter={16} >
                    {
                        news.map(item => {
                            return (
                                <>
                                    <Col onClick={() => dispatch(setDataModalData({ data: { visible: true, data: item } }))} xs={24} sm={12} md={4} >
                                        <SecondCard news={item} />
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <br />
                <br />

            </div>
        </>
    )
}
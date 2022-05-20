import { Carousel } from 'antd';
import { useEffect, useState } from 'react';
import image from '../../assets/img/famille_smart.jpg'
import './index.css'
import axios from '../../config/axios'

export default () => {

    function onChange(value) {
        console.log(value);
        setcurrent(value)
    }

    const [current, setcurrent] = useState(0)

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };


    const [posters, setposters] = useState([])

    useEffect(() => {
        axios.get('/posters')
            .then(res => {
                setposters(res.data)
            })
    }, [])


    return (
        <>
            <Carousel
                className='Slider'
                dots={false}
                afterChange={onChange}
                autoplay
            >

                {
                    posters.map(item => {
                        return (
                            <>
                                <div className='slider_item'  >
                                    <img className='slider_item' src={item.path} alt="" />
                                </div>
                            </>
                        )
                    })
                }

            </Carousel>
            <div className="dots">
                {
                    posters.map((item, i) => {
                        return (
                            <>
                                <div className={`dot ${i === current ? 'active_dot' : ""}`}>

                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
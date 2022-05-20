import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setAtiveFooterMenu } from '../../../features/app/appSlice'
import './index.css'
export default () => {

    const navitems = [
        {
            icon: <i class="las la-home"></i>,
            title: "Acceuil",
            path: "/client"
        },
        {
            icon: <i class="las la-money-bill"></i>,
            title: "Recharge",
            path: "/recharge"
        },
        {
            icon: <i class="las la-shopping-cart"></i>,
            title: "Forfait",
            path: "/forfaits"
        },
        {
            icon: <i class="las la-mouse-pointer"></i>,
            title: "Personaliser",
            path: "/personaliser"
        },
        {
            icon: <i class="las la-chevron-circle-left"></i>,
            title: "Historique",
            path: "/historique"
        },

    ]

    //const [active, setactive] = useState(0)

    const active = useSelector(state => state.app.clientFooter.active)
    const dispatch = useDispatch()
    const history = useHistory()
    const handlenavigation = (index, path) => {
        dispatch(setAtiveFooterMenu({ index: index }))
        history.push(path)
    }

    return (
        <>
            <div className="footer_navigation_client">
                {
                    navitems.map((item, i) => {
                        return (
                            <>
                                <div onClick={() => handlenavigation(i, item.path)} className={`navigation_item ${active === i ? "active" : ""}`}>
                                    {item.icon}
                                    {active === i && <span > {item.title}  </span>}
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
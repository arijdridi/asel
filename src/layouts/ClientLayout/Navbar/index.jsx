import './index.css'
import logo from "../../../assets/img/asel.png"
import { useHistory } from 'react-router-dom'
export default () => {

    const history = useHistory()

    return (
        <>
            <div className="client_navbar">
                <div onClick={() => history.push('/profile')} className="client_avatar">

                    <i class="las la-user-alt"></i>

                </div>

            </div>
            <div className="client_navbar_brand">
                <img src={logo} alt="" />
            </div>
        </>
    )
}
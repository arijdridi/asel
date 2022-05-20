import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import logo from '../../assets/img/asel.png'
import { setLocation, setMobileDrwaerVisble } from '../../features/app/appSlice'
import { setBecomeClientModal, setAdminLoginModalVisible, logout, setModalVisible } from '../../features/authentication/authenticationSlice'
import './index.css'

export default () => {

    const dispatch = useDispatch()

    const location = useLocation()

    const history = useHistory()

    useEffect(() => {
        console.log(location);
        dispatch(setLocation({ location: location.pathname }))
    }, [location])

    const auth = useSelector(state => state.authentication.authedClientData)

    return (
        <>
            <div className="container">
                <div className="app_navbar">
                    <img src={logo} className='app_logo' alt="" />
                    <div className="nav_menu">

                        {
                            auth.isauth
                            &&
                            <>
                                <div className="nav_item">
                                    <span onClick={() => history.push('/')}>Acceuil</span>
                                </div>
                                <div className="separator"></div>
                            </>

                        }
                        {
                            ['admin', ''].includes(auth.role)
                            &&
                            <>
                                <div className="nav_item">
                                    <span onClick={() => auth.isauth ? history.push('/admin') : dispatch(setAdminLoginModalVisible({ value: true }))}>Espace Admin</span>
                                </div>
                                <div className="separator"></div>
                            </>

                        }
                        {
                            ['client', ''].includes(auth.role)
                            &&
                            <>
                                <div className="nav_item">
                                    <span onClick={() => auth.isauth ? history.push('/client') : dispatch(setModalVisible({ value: true }))} >Espace Client</span>
                                </div>
                                <div className="separator"></div>
                            </>

                        }

                        {

                            !auth.isauth
                            &&
                            <div className="nav_item">
                                <span onClick={() => dispatch(setBecomeClientModal({ visible: true }))}>Devenir Client</span>
                            </div>
                        }
                        {

                            auth.isauth
                            &&
                            <div className="nav_item">
                                <span onClick={() => { dispatch(logout()); history.push('/') }}>Déxconexion</span>
                            </div>
                        }

                    </div>

                    <i onClick={() => dispatch(setMobileDrwaerVisble({ visible: true }))} class="las la-bars"></i>
                </div>
            </div>
        </>
    )
}
import React from 'react';
import { Drawer } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setMobileDrwaerVisble } from '../../features/app/appSlice';
import { setBecomeClientModal, setModalVisible } from '../../features/authentication/authenticationSlice';
import './index.css'
export default () => {

    const dispatch = useDispatch()


    const onClose = () => {
        dispatch(setMobileDrwaerVisble({ visible: false }))
    };
    const auth = useSelector(state => state.authentication.authedClientData)

    const visible = useSelector(state => state.app.mobileDrawer.visible)

    return (
        <>
            <Drawer title="ASEL" placement="left" onClose={onClose} visible={visible}>
                {
                    auth.isauth
                    &&
                    <>
                        <div className="nav_item_drawer">
                            <span onClick={() => dispatch(setModalVisible({ value: true }))}>Acceuil</span>
                        </div>
                    
                    </>

                }
                {
                    ['admin', ''].includes(auth.role)
                    &&
                    <>
                        <div className="nav_item_drawer">
                            <span onClick={() => dispatch(setModalVisible({ value: true }))}>Espace Admin</span>
                        </div>
                        
                    </>

                }
                {
                    ['client', ''].includes(auth.role)
                    &&
                    <>
                        <div className="nav_item_drawer">
                            <span onClick={() => dispatch(setModalVisible({ value: true }))} >Espace Client</span>
                        </div>
                       
                    </>

                }

                {

                    !auth.isauth
                    &&
                    <div className="nav_item_drawer">
                        <span onClick={() => dispatch(setBecomeClientModal({ visible: true }))}>Devenir Client</span>
                    </div>
                }
            </Drawer>
        </>
    )
}
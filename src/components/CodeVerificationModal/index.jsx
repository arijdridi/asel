import { useDispatch, useSelector } from "react-redux"
import { setBecomeClientModal, setPasswordModalData, setVerificationCodeData } from "../../features/authentication/authenticationSlice"
import { Form, Input, Button, Modal, Alert } from 'antd';
import { BorderlessTableOutlined } from '@ant-design/icons';
import axios from '../../config/axios'
import { useState } from "react";
export default () => {

    const dispatch = useDispatch()
    const verificationstate = useSelector(state => state.authentication.codeVerificationModal)
    const passwordModal = useSelector(state => state.authentication.passwordModal)
    const [error, seterror] = useState('')
    const onFinish = async (values) => {
        console.log('Received values of form: ', values);

        let config = {
            headers: {
                'token': verificationstate.token,
                'Content-Type': 'application/json'
            }

        }
        let data = {
            verificationCode: values.code
        }
        await axios.post('user/verificationsms', JSON.stringify(data), config)
            .then(res => {
                console.log(res);
                console.log("helloe");
                dispatch(setPasswordModalData({
                    data: {
                        token: res.data.token,
                        msg: res.data.msg,
                        visible: true
                    }
                }))
                dispatch(setVerificationCodeData({ token: '', msg: '', visible: false }))
            })
            .catch(err => {
                console.log(err.response);
                seterror(err.response.data.msg);
            })

    };




    return (
        <>
            <Modal closable={false} style={{ borderRadius: '10px' }} onCancel={() => dispatch(setBecomeClientModal({ value: false }))} footer={null} visible={verificationstate.visible}/*  onOk={handleOk} onCancel={handleCancel} */>
                <div className="login">
                    <h3>Verification du code</h3>
                    <span  >{verificationstate.msg}</span>
                </div>
                <br />
                <br />
                {
                    error.length > 0
                    &&
                    <Alert type="error" message={error} />
                }
                <Form
                    style={{ marginTop: "15px" }}
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >

                    <Form.Item
                        name="code"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<BorderlessTableOutlined className="site-form-item-icon" />} placeholder="code de vérification" />
                    </Form.Item>

                    <Form.Item>
                        <Button style={{ width: '100%' }} type="primary" htmlType="submit" className="login-form-button">
                            envoyer
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
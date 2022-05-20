import { Modal, Result } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
import { Form, Input, Button } from 'antd';
import { PhoneOutlined, LockOutlined } from '@ant-design/icons';
import { setPasswordModalData } from '../../features/authentication/authenticationSlice';
import axios from '../../config/axios';
import { useState } from 'react';

export default () => {

    const { passwordModal } = useSelector(state => state.authentication)

    const [success, setsuccess] = useState(false)
    const [successMessage, setsuccessMessage] = useState('')

    const dispatch = useDispatch()

    const onFinish = (values) => {
        setsuccess(false)
        console.log('Received values of form: ', values);

        let data = {
            password: values.password,
            confirmPassword: values.confirm
        }

        let config = {
            headers: {
                'token': passwordModal.token,
                'Content-Type': 'application/json'
            }

        }

        axios.post('user/registerpassword', JSON.stringify(data), config)
            .then(res => {
                console.log(res);
                setsuccess(true)
                setsuccessMessage(res.data.msg)

            })
    };

    return (
        <>
            <Modal closable={false} style={{ borderRadius: '10px' }} footer={null} visible={passwordModal.visible}/*  onOk={handleOk} onCancel={handleCancel} */>
                {
                    success
                        ?
                        <Result
                            status="success"
                            title="Succées"
                            subTitle={successMessage}
                            extra={[
                                <Button onClick={() => dispatch(setPasswordModalData({ data: { ...passwordModal, visible: false } }))} type="primary" key="console">
                                    terminer
                                </Button>
                            ]}
                        />
                        :
                        <>
                            <div className="login">
                                <h3>Password</h3>
                                <i style={{ fontSize: "70px", color: "#40A9FF" }} class="las la-lock"></i>
                                <span> {passwordModal.msg} enter votre mot de passe </span>
                            </div>
                            <br />
                            <br />


                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="password"

                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password placeholder="mot de passe" prefix={<LockOutlined />} />
                                </Form.Item>

                                <Form.Item
                                    name="confirm"

                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please confirm your password!',
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password prefix={<LockOutlined />} placeholder="confirmer votre mot de passe" />
                                </Form.Item>


                                <Form.Item>
                                    <Button style={{ width: '100%' }} type="primary" htmlType="submit" className="login-form-button">
                                        envoyer
                                    </Button>

                                </Form.Item>
                            </Form>
                        </>
                }


            </Modal>
        </>
    )
}
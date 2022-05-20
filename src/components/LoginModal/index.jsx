import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
import { Form, Input, Button } from 'antd';
import { PhoneOutlined, LockOutlined } from '@ant-design/icons';
import { setAuthedClientData, setModalVisible } from '../../features/authentication/authenticationSlice';
import axios from '../../config/axios';
import { useHistory } from 'react-router-dom'
export default (props) => {

    const { loginModal } = useSelector(state => state.authentication)

    const dispatch = useDispatch()

    const history = useHistory()

    const onFinish = (values) => {
        console.log('Received values of form: ', values);

        axios.post('user/login', values)
            .then(res => {
                console.log(res);
                dispatch(setAuthedClientData({ data: { ...res.data, role: 'client', isauth: true } }))
                history.push('/client')
                dispatch(setModalVisible({ value: false }))
            })
    };

    return (
        <>
            <Modal style={{ borderRadius: '10px' }} onCancel={() => dispatch(setModalVisible({ value: false }))} footer={null} visible={loginModal.visible}/*  onOk={handleOk} onCancel={handleCancel} */>
                <div className="login">
                    <h3>S'authentifier</h3>
                    <i style={{ color: "#40A9FF" }} class="las la-user-lock"></i>
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
                        name="phone"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Téléphone" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Mot de passe"
                        />
                    </Form.Item>


                    <Form.Item>
                        <Button style={{ width: '100%' }} type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>

                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
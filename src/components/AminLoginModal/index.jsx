import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { setAuthedClientData, setAdminLoginModalVisible } from '../../features/authentication/authenticationSlice';
import axios from '../../config/axios';
import { useHistory } from 'react-router-dom'

export default (props) => {

    const { AdminLoginModal } = useSelector(state => state.authentication)

    const dispatch = useDispatch()

    const history = useHistory()

    const onFinish = (values) => {

        axios.post('admin/login', values)
            .then(res => {
                dispatch(setAuthedClientData({ data: { ...res.data, role: 'admin', isauth: true } }))
                history.push('/admin') 
                dispatch(setAdminLoginModalVisible({ value: false }))
            })
    };

    return (
        <>
            <Modal style={{ borderRadius: '10px' }} onCancel={() => dispatch(setAdminLoginModalVisible({ value: false }))} footer={null} visible={AdminLoginModal.visible}/*  onOk={handleOk} onCancel={handleCancel} */>
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
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="email" />
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
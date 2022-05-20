import { useDispatch, useSelector } from "react-redux"
import { setBecomeClientModal, setVerificationCodeData } from "../../features/authentication/authenticationSlice"
import { Form, Input, Button, Modal, Alert } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import axios from '../../config/axios'
import { useState } from "react";
export default () => {

    const dispatch = useDispatch()

    const [form] = Form.useForm()
    const [error, seterror] = useState('')
    const onFinish = (values) => {
        console.log('Received values of form: ', values);

        let data = {
            phone: values.phone
        }

        axios.post('user/register', data)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    dispatch(setBecomeClientModal({ visible: false }))
                    dispatch(setVerificationCodeData({ token: res.data.token, msg: res.data.msg, visible: true }))
                }
            })
            .catch(err => {
                console.log(err.response);
                seterror(err.response.data.msg)
            })
    };


    const becomeclientmodal = useSelector(state => state.authentication.beComeClientModal)
    return (
        <>
            <Modal style={{ borderRadius: '10px' }} onCancel={() => dispatch(setBecomeClientModal({ value: false }))} footer={null} visible={becomeclientmodal.visible}/*  onOk={handleOk} onCancel={handleCancel} */>
                <div className="login">
                    <h3>Devenir Client</h3>
                    <i style={{ color: "#40A9FF", fontSize: '70px' }} class="las la-user-circle"></i>

                </div>
                <br />
                <br />
                {
                    error.length > 0
                    &&
                    <Alert message={error} type="error" showIcon />
                }
                <Form
                    name="normal_login"
                    className="login-form"
                    style={{ marginTop: "15px" }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="phone"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Téléphone" />
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
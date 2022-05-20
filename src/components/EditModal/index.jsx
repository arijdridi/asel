import { Button, Input, Upload, Modal, Alert } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { setEditModalData } from "../../features/app/appSlice"
import { InboxOutlined, UploadOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useState } from "react";
import axios from "../../config/axios";
const { Dragger } = Upload;

const { TextArea } = Input
export default () => {

    const editData = useSelector(state => state.app.editModal)
    const dispatch = useDispatch()
    const [image, setimage] = useState(null)


    const handleUplaod = (data) => {
        console.log(data);
        setimage(data.file.originFileObj)
        let d = new FormData()

        d.append('image', data.file.originFileObj)
        axios.post('products/updateImage', d)
            .then(res => {
                dispatch(setEditModalData({
                    data: {
                        ...editData, ['data']: {
                            ...editData.data,
                            ['image']: res.data.image
                        }
                    }
                }))
            })
    }

    const handleCancel = () => {
        dispatch(setEditModalData({ data: { visible: false, data: { _id: '', image: '', description: '' }, type: "" } }))
    }

    const [success, setsuccess] = useState(false)

    const handleOk = () => {
        setsuccess(false)

        let data = {

            image: editData.data.image,
            description: editData.data.description
        }


        if (editData.type === 'product') {
            axios.put('products/' + editData.data._id, data)
                .then(res => {
                    console.log(res);
                    handleCancel()

                })
        } else {
            axios.put('news/' + editData.data._id, data)
                .then(res => {
                    console.log(res);
                    handleCancel()

                })
        }
    }

    const [change, setchange] = useState(false)

    return (
        <>

            <Modal title={`Modifier ${editData.type}`} visible={editData.visible} okText='Modifier' onOk={handleOk} onCancel={handleCancel}>
                {
                    success
                        ?
                        <Alert message={`${editData.type} modfier avec succeés`} type='success' showIcon />
                        :
                        <>

                            {
                                change
                                    ?
                                    <>
                                        <Dragger

                                            itemRender={null}
                                            onChange={handleUplaod}
                                        >

                                            {
                                                image
                                                    ?
                                                    <img style={{ width: "100%", height: "100%" }} src={URL.createObjectURL(image)} alt="" />
                                                    :
                                                    <>
                                                        <p className="ant-upload-drag-icon">
                                                            <InboxOutlined />
                                                        </p>
                                                        <p className="ant-upload-text">Click or drag an Image to this area to upload</p>
                                                    </>
                                            }

                                        </Dragger>
                                        <br />
                                        <br />
                                        <Button style={{ marginTop: '10px' }} onClick={() => setchange(false)} type="ghost" icon={<CloseCircleOutlined />}>
                                            Annuler
                                        </Button>
                                        <br />
                                        <br />
                                    </>
                                    :
                                    <>
                                        <img style={{ width: '100%' }} src={editData.data.image} alt="" />
                                        <br />
                                        <br />
                                        <Button style={{ marginTop: '10px' }} onClick={() => setchange(true)} type="primary" icon={<UploadOutlined />}>
                                            changer image
                                        </Button>
                                        <br />
                                        <br />
                                    </>
                            }
                            <TextArea onChange={e => dispatch(setEditModalData({
                                data: {
                                    ...editData, ['data']: {
                                        ...editData.data,
                                        ['description']: e.target.value
                                    }
                                }
                            }))} rows={3} value={editData.data.description} />
                        </>

                }

            </Modal>

        </>
    )
}
import { Button, Input, Upload, Modal, Alert } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { setDataModalData, setEditModalData } from "../../features/app/appSlice"

const { Dragger } = Upload;

const { TextArea } = Input
export default () => {

    const editData = useSelector(state => state.app.dataModal)
    const dispatch = useDispatch()



    const handleCancel = () => {
        dispatch(setDataModalData({ data: { visible: false, data: { _id: '', image: '', description: '' } } }))
    }


    return (
        <>

            <Modal onCancel={handleCancel} footer={null} closable title={`Détails`} visible={editData.visible} cancelText='fermer'>



                <TextArea
                    readOnly
                    rows={3} value={editData.data.description} />




            </Modal>

        </>
    )
}
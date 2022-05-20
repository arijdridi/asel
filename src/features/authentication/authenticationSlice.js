import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loginModal: {
        visible: false
    },
    AdminLoginModal: {
        visible: false
    },
    beComeClientModal: {
        visible: false
    },
    codeVerificationModal: {
        token: '',
        msg: '',
        visible: false
    },
    passwordModal: {
        visible: false,
        token: '',
        msg: ''
    },
    authedClientData: {
        isauth: false,
        role: ''
    }
}

const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        setModalVisible: (state, action) => {
            const { value } = action.payload
            state.loginModal.visible = value
        },
        setAdminLoginModalVisible: (state, action) => {
            const { value } = action.payload
            state.AdminLoginModal.visible = value
        },
        setBecomeClientModal: (state, action) => {
            state.beComeClientModal.visible = action.payload.visible
        },
        setVerificationCodeData: (state, action) => {
            state.codeVerificationModal = action.payload
        },
        setPasswordModalData: (state, action) => {
            state.passwordModal = action.payload.data
        },
        setAuthedClientData: (state, action) => {
            state.authedClientData = action.payload.data
        },
        logout: (state, action) => {
            state.authedClientData.isauth = false
            state.authedClientData.role = ""
        }
    }
})

export const { setAdminLoginModalVisible, logout, setAuthedClientData, setPasswordModalData, setModalVisible, setBecomeClientModal, setVerificationCodeData } = authenticationSlice.actions

export default authenticationSlice.reducer
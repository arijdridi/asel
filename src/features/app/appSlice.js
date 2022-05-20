import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    location: '/',
    adminBoard: {
        activeUI: 'design'
    },
    mobileDrawer: {
        visible: false
    },
    editModal: {
        visible: false,
        data: {
            _id: '',
            image: '',
            description: ''
        },
        type: ''
    },
    dataModal: {
        visible: false,
        data: {
            _id: '',
            image: '',
            description: ''
        }
    },
    clientFooter: {
        active: 0,
    }

}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLocation: (state, action) => {
            const { location } = action.payload
            state.location = location
        },
        setActiveUserInterface: (state, action) => {
            state.adminBoard.activeUI = action.payload.ui
        },
        setMobileDrwaerVisble: (state, action) => {
            state.mobileDrawer.visible = action.payload.visible
        },
        setEditModalData: (state, action) => {
            state.editModal = action.payload.data
        },
        setDataModalData: (state, action) => {
            state.dataModal = action.payload.data
        },
        setAtiveFooterMenu: (state, action) => {
            state.clientFooter.active = action.payload.index
        }
    }
})

export const {
    setLocation,
    setActiveUserInterface,
    setMobileDrwaerVisble,
    setEditModalData,
    setDataModalData,
    setAtiveFooterMenu
} = appSlice.actions

export default appSlice.reducer
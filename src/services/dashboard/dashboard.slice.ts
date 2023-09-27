import { createSlice, } from '@reduxjs/toolkit'
import { fetchStudentData } from './dashboard.service'

export interface StudentReducer {
    studentList: null | [] | void | {}
    loading: boolean | null
}

const initialState: StudentReducer = {
    studentList: null,
    loading: false,
}

export const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchStudentData.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchStudentData.fulfilled, (state, action) => {
            state.loading = false;
            state.studentList = action.payload
        })
        builder.addCase(fetchStudentData.rejected, (state) => {
            state.loading = false;
        })
    },
})

export const studentReducer = studentSlice.reducer
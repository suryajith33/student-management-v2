import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchStudentData = createAsyncThunk("students/getall", async () => {
    const response = await axios.get("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001").catch((Err) => Err)
    return response.data
});
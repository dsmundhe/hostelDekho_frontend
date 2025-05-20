import {configureStore} from "@reduxjs/toolkit"
import hostelReduce from "../features/showHostelSlice/showHostelSlice";

const store=configureStore({
    reducer:{
        hostelDekho:hostelReduce,
    }
})

export default store;
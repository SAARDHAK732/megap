import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token:"",
    profile:null,

};
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            const {token, profile} = action.payload;
            state.token = token;
            state.profile = profile;
        },
        clearUser:(state)=>{
            state.token="";
            state.profile=null;           
        },
        updateUser:(state,action)=>{
            const{profile} = action.payload;
            state.profile= profile;
        }
    },
});
export const {addUser,clearUser} = userSlice.actions;
export default userSlice.reducer;
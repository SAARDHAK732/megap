import axios from "../../axios"; // Adjust the import path as necessary

const authService = {
    async signUp(body) {
        const response = await axios.post('/auth/signup', body);
        return response;
    },

    async signIn(body) {
        const response = await axios.post('/auth/signin', body);
        return response;
    },

    async forgotPassword(body) {
        const response = await axios.post('/auth/forgot-password', body);
        return response;
    },

    async resetPassword(token, body) {
        const response = await axios.post(`/auth/reset-password/${token}`, body);
        return response;
    },
    // async authPostData(url,data,token){
    //     const response =await axios.post(`/auth/${url}/${token}`,data);
    //     return response;
    // }
};

export default authService;

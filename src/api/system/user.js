import request from "../../utils/request.js";

export function login(userName,password){
    const params = {
        userName:userName,
        password:password
    }
    return request({
        url:"/system/auth/login",
        method:"get",
        params:params
    })

}
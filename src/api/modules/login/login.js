import request from "@/utils/http"
export function login (){
    return request({
        url:'/user',
        method:'GET',
        headers: {
            "content-type": "application/json;charset=UTF-8",
          },
    })
}
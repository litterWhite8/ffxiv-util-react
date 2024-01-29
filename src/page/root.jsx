import {useEffect} from "react";
import "../utils/overlay.js"
import request from "../utils/request.js";

export default function Root() {

    useEffect(()=> {
        request({
            url:"/test"
        })
        addOverlayListener("LogLine",data => {
            console.log(data)
            console.log(1)
        })
        startOverlayEvents()
    })

    return (
       <div>
           1234
       </div>
    );
}
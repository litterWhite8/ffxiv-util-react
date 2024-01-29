import {useEffect} from "react";
import "../utils/overlay.js"
import request from "../utils/request.js";
import EorzeaTimeConverter from "../utils/EorzeaTimeConverter.js";

export default function Root() {


    useEffect(()=> {
        let et = new EorzeaTimeConverter()
        et.startClockUpdate(1000)

        request({
            url:"/test"
        })
        addOverlayListener("LogLine",data => {
            console.log(data)
            console.log(1)
        })
        startOverlayEvents()
    },[])

    return (
       <div>
           1234
       </div>
    );
}
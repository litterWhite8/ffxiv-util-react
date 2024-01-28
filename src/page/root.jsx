import {useEffect} from "react";
import "../util/overlay.js"

export default function Root() {

    useEffect(()=> {
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
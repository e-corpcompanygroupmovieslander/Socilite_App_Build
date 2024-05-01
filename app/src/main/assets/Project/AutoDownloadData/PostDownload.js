import { ANIMATIONAPI, GETPOSTSAPI } from "../../Module/Module.js"

export const AUTOPOSTS=()=>{

    GETPACKAGE(GETPOSTSAPI,'cors',(data)=>{

        STORE('local','Posts',JSON.stringify(data))

    })

}
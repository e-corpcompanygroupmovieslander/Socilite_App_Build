import { ANIMATIONAPI } from "../../Module/Module.js"

export const AUTOPOSTS=()=>{

    GETPACKAGE(ANIMATIONAPI,'cors',(data)=>{

        STORE('local','Posts',JSON.stringify(data))

    })

}
import { useState } from "react"
import App from "../App"


export default function Pages1() {

let[pageback,setpageback]=useState(false)
    
function beckClick(){
setpageback(true)


}
    return<>

{pageback?<App/>:""}
   <div className="pages1">
    <div className="page1info">
        <img src={"Vector.png"} alt="foto"  onClick={()=>beckClick(pageback)}/>
        <p   >პირადი ინფო</p>
        <p>
            1/3
        </p>
        </div>


    </div>
    
    
    </>
}
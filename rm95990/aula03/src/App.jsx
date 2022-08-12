import React from "react"

export default function App(){
    

const parag = {
    color:"pink",
    fontFamily:'Trebuchet',
    fontSize:'10px',
    letterSpacing:'5px',
    TextIndent:'50px'

}
return(

        <div>
            <h1 style={{fontSize: '2em', color:'#ff0000'}}>INICIANDO ESTUDOS COM STATE</h1>
            <div>
                <p style={parag}>As rosas são vermelhas, violetas são azuis!</p>
            </div>
        </div>
    )
}
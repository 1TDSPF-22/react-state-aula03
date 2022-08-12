import React from "react";

export default function App(){

        const parag = {
            color: "black",
            fontFamily: 'Trebuchet',
            fontSize: '10px',
            letterSpacing: '5px',
            textIndent: '50px'

        } 

    return(
        <div>
            <h1 style={{fontSize: '2em', color:"#f6f6f6"}}>INICIANDO ESTUDOS COM STATE</h1>
            <div>
                <p style={parag}>CAVALOOOOO</p>
            </div>        
        </div>
    )
}
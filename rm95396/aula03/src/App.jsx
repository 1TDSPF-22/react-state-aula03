import React from "react";

    const parag ={
        color:"pink",
        fontFamily:'Cambria',
        fontSize: '20px',
        letterSpacing:'10px',
        textIndent: '50px'
    }

export default function App(){
    return(
        <div>
            <h1 style={{fontSize:'2em', color:'#FF0000'}}>Iniciando os estudos!!</h1>
            <div>
                <p style={parag}>Rosas são vermelhas violetas são azuis, esse seu sorriso é o que me seduz.</p>
            </div>
        </div>
    )
}
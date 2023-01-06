import React, {useState} from "react";
import './Conversor.css'
// import styled from "styled-components";

const Conversor = ({favorites, setFavorites}) => {


    const [conversorValue, setConversorValue] = useState({
        number:0,
        inputType:"km",
        result:0,
        resultType: "miles",
    })

    const handleOptions = (e) =>{
        const optionValue = e.target.value;
        
        setConversorValue({
            ...conversorValue,
            inputType:optionValue,
            resultType:optionValue,
            number:0,
            result:0,
        })
    }

    const Results = (number) => {

        if(conversorValue.inputType === "km-miles"){
            return number * Math.floor(0.621371*100)/100
        }else if(conversorValue.inputType === "miles-km"){
            return number * Math.floor(1.609344*100)/100;
        }else if(conversorValue.inputType === "ft-meters"){
            return number * Math.floor(0.3048*100)/100;
        }else if(conversorValue.inputType === "meters-ft"){
            return number * Math.floor(3.280839895*100)/100;
        }else if(conversorValue.inputType === "cm-inch"){
            return number * Math.floor(0.3937007874*100)/100;
        }else if(conversorValue.inputType === "inch-cm"){
            return number * Math.floor(2.54*100)/100;
        }
    }

    const handleType = (e) => {
        setConversorValue({
            ...conversorValue,
            inputType: conversorValue.resultType,
            resultType:conversorValue.inputType,
            number:conversorValue.result,
            result:conversorValue.number,

        })
    }

    const handleInput = (e) => {
        setConversorValue({
            ...conversorValue,
            number:parseInt(e.target.value),
            result:Results(e.target.value).toFixed(2)
        })
    }
    const saveFavorite = () =>{
        setFavorites([...favorites,conversorValue])
        
    }
    

    return(
        <div className="conversor-container">
            <h2 className="title"> Converter </h2>
            <div className="main">
            <div className="conversor-options">
                <select className="select" onChange={handleOptions}>
                    <option value="km-miles" name="km">km-miles</option>
                    <option value="miles-km" name="miles">miles-km</option>
                    <option value="ft-meters" name="ft">ft-meters</option>
                    <option value="meters-ft" name="meters">meters-ft</option>
                    <option value="inch-cm" name="inch">inch-cm</option>
                    <option value="cm-inch" name="cm">cm-inch</option>
                </select>
                <button onClick={handleType}><i className="fa-solid fa-arrow-right-arrow-left"></i></button>
            </div>
            <div className="conversor-results">
                <input type="text" inputMode="numeric"onChange={handleInput} value={conversorValue.number} className="conversion"/>
                <span>{conversorValue.inputType.split("-")[0]}</span>
            </div>
            </div>
            <div className="fav-results">    
                <i className="fa-regular fa-heart" onClick={saveFavorite} id="fav"></i>
                <p className="results">{conversorValue.result}<span>{conversorValue.resultType.split("-")[1]}</span></p>
            </div>
            
            
        </div>
    )
}

export default Conversor



// const DivContainer = styled.div`
//     background: #2E0039;
//     box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.2);
//     border-radius: 21px;

//     .conversor-main {
//         border: 2px solid red;
//     }
// `


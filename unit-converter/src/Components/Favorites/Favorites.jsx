import React from "react";
import './Favorites.css'

const Favorites = ({favorites, setFavorites}) =>{
    
    const deleteFav = (i) => {
        const myFavs = favorites.filter((fav,index)=> index !== i)
        setFavorites(myFavs)
    }
    return (
        <div className="fav-container">
            <h2 className="title-sav"> Saved </h2>
            <div className="favorites">
                <ul>
                    {favorites.map((fav,i)=> {
                        return(
                        <li key={i}>{fav.number} {fav.inputType.split("-")[0]}<span> <i className="fa-solid fa-arrow-right"></i></span>{fav.result} {fav.resultType.split("-")[1]} <button onClick={()=>deleteFav(i)}>X</button></li>
                    )
                    })}

                </ul>
            </div>
        </div>
    )
}

export default Favorites
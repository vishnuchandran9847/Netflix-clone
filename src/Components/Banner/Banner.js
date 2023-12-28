import React,{useEffect, useState} from "react"
import {API_KEY,imageUrl} from "../../Constants/Constants";
import "./Banner.css"
import axios from "../../axios";

function Banner() {

    const [movie, setMovie] = useState()

     useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
        console.log(Response.data.results[0])
        //  setMovie(Response.data.results[6])
         setMovie(Response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])

      })
     
     }, [])
     

  return (
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
     className='banner'>
        <div className="content">
            <h1 className="title">{movie ? movie.title:""}</h1>
        </div>
        <div className="banner_buttons">
            <button className="button">play</button>
            <button className="button">my list</button>
        </div>

        <div className="description">
        {movie ? movie.overview : " "}
        
        </div>
        
        <div className="fadebutton"></div>
            
        
      
    </div>
  )
}

export default Banner

import React, { useEffect, useState } from 'react'

import YouTube from 'react-youtube';

import axios from "../../axios"
// import axios from 'axios';
import { imageUrl,API_KEY } from "../../Constants/Constants";

import "./Rawpost.css"

function Rawpost(props) {

  const [movies, setMovies] = useState([])
  const [urlid, setUrlid] = useState('')

useEffect(() => {

axios.get(props.url).then(Response=>{
  console.log(Response.data)
  setMovies(Response.data.results)
}).catch(err=>{
  alert('network error')
})

}, [])

const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

const handleMovie =(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}###`).then(Response=>{
      if (Response.data.results.length!==0){
        setUrlid(Response.data.results[0])
      }else{
        console.log("trailer is not available")
      }
          
    })
}

  return (
    <div className='row'>
        <h1>{props.title}</h1>
        <div className="posters">

        {movies.map((obj)=>

            <img onClick={()=>handleMovie(obj.id)} className={ props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="title" />
      )}
        </div>

          {  urlid &&  <YouTube videoId={urlid.key} opts={opts} /> }

    </div>
  )
}

export default Rawpost

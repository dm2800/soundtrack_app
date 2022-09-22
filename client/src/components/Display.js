import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'


const Display = (props) => {

    const {id} = useParams()   
    const [songs, setSongs] = useState({})
    

    useEffect(() =>{
        axios.get("http://localhost:8000/api/songs/" + id)
            .then((res) => {
                console.log(res.data)
                setSongs(res.data)
            })
            .catch((err) =>{
            console.log(err)
    })
    }, [])


    return (
        <div>
            <div className= 'container2' >
                <div>
                    <img src = "./images/dojo2.png" alt = 'dojo image' className='icon'/>
                    <h1 className='text-white px-5 pt-5'> Dojo Music </h1>
                </div>
        <br></br>
            <div className='profile d-flex'>
                
                <div>
                <img src={songs.image} />
                </div>
                <div className='viewsong'>
                    <h3> Artist: {songs.artist}</h3>
                    <h3> Song Name: {songs.title}</h3>
                    <h3> Comments: {songs.comment}</h3>
                </div>
                
            </div>
        </div>
        <div className='fixed-bottom pb-3 bg-dark '>
          <Link to = {'/home'} className='text-white mx-4'> Home </Link>
          <Link to = {'/addsong'} className='text-white'> Add Song to PlayList </Link>
        </div>
        </div>
    )
    }

export default Display
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'



const Home = () => {

    const [list, setList] = useState([])
    const [songId, setSongId] = useState("") 



    //api call to get all 
    useEffect(() =>{ 
        axios.get('http://localhost:8000/api/songs')
        .then((res) =>{
            setList(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
       
    }, [])

    // delete handler
    const deleteHandler = (songId) =>{
        axios.delete(`http://localhost:8000/api/songs/${songId}`)
        .then((res) =>{
            const newList = list.filter((song) =>{
                return song._id !== songId
            })
            setList(newList)
        })
        .catch((err) =>{
            console.log(err)
        })

    }


  

  return (
    <div className= 'container2' >
        <div>
          <img src = "./images/dojo2.png" alt = 'dojo image' className='icon'/>
          <h1 className='text-white px-5 pt-5'> SoundTrack App </h1>
        </div>


      <div >
          <table className='content-table'>
            <thead>
              <tr>
                <th className='table-name'>Soundtrack PlayList</th> 
              </tr>
            </thead>

            <tbody>
              {
              list.map((song) =>{
                  return(
                  
                    <tr>
                      <div>
                        <td className='song'>{song.title}</td>
                      </div>
                      <div>
                        <td className='song px-5'>{song.artist}</td>
                      </div>
                      
                      
                      
                      <td>
                          <Link to ={`/viewsong/${song._id}`} ><button className = "button">View </button></Link>
                          <Link to = {`/editsong/${song._id}`} ><button className = "button">Edit </button> </Link> 
                          <button onClick = {()=>deleteHandler(song._id)} className= 'button'>Delete</button>
                      </td>                
                    </tr>          
            )})
        }
            </tbody>
          </table> 
      

        
          
        </div>
        <div className='fixed-bottom pb-3 bg-dark '>
          <Link to = {'/home'} className='text-white mx-4'> Home </Link>
          <Link to = {'/addsong'} className='text-white'> Add Song to PlayList </Link>
        </div>
    </div>
   
   
    )
}

export default Home
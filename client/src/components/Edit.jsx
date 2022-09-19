import React, {useEffect, useState} from 'react'
import axios from "axios"
import {Link, useParams, useNavigate} from "react-router-dom"

const EditSong = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState();
    const [artist, setArtist] = useState();
    const [comment, setComment] = useState();
    const [image, setImage] = useState();
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    
    console.log(id);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/songs/${id}`)
            .then((res)=>{
                console.log(res.data);
                setTitle(res.data.title);
                setArtist(res.data.artist);
                setComment(res.data.comment);
                setImage(res.data.image);
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        
        axios
            .put(`http://localhost:8000/api/songs/${id}`, { title: title, artist: artist, comment: comment, image: image })
            .then((response) => {
                console.log(response);
                navigate("/")
            })
            .catch((error) => {
                console.log(error);
                setErrors(error.response.data.errors);
                });
    };





        return (
            <div className='container'>
                <h1 className='large mw-100 mh-100'>Want to make a change to your post?</h1>
                <h5>Submit edits below</h5>
                    <form onSubmit={submitHandler} className='centered'>
                    <div className="row spaced">
                        <div className='col-12'>
                            <input onChange={(e)=>{setTitle(e.target.value)}} type="text" className="form-control" id="title" placeholder={title} value={title}/>
                            {errors.title ? <p>{errors.title.message}</p> : null} 
                        </div>
                    </div>
                    <div className="row spaced">
                        <div className='col-12'>
                            <input onChange={(e)=>{setArtist(e.target.value)}} type="text" className="form-control" id="artist" placeholder={artist} value={artist}/>
                        </div>
                    </div>
                    {errors.artist ? <p>{errors.artist.message}</p> : null}
                    <div className="row spaced">
                        <div className='col-12'>
                            <input onChange={(e)=>{setImage(e.target.value)}} type="text" className="form-control" id="image" placeholder={image} value={image}/>
                            {errors.image ? <p>{errors.image.message}</p> : null}
                        </div>
                    </div>
                    <div className="row spaced">
                        <div className='col-12'>
                            <textarea onChange={(e)=>{setComment(e.target.value)}} className="form-control" rows={8} id="comment" placeholder={comment} value={comment}/>
                            {errors.comment ? <p>{errors.comment.message}</p> : null}
                        </div>
                    </div>
                        <button type="submit" className="btn btn-outline-light">Edit post</button>
                    </form>
            </div>
    )
}

export default EditSong
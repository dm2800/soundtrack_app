import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
require('./SongForm.css')


const SongForm = () => {

    const [title, setTitle] = useState();
    const [artist, setArtist] = useState();
    const [comment, setComment] = useState();
    const [image, setImage] = useState();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/songs", {title, artist, image, comment})
            .then((response) => {
                console.log(response);
                navigate('/');
            })
            .catch((error) => {
                console.log(error.response.data.errors);
                setErrors(error.response.data.errors);
            });
};

return (
    <div className='container'>
        <h1 className='large mw-100 mh-100'>What have you been listening to?</h1>
        <h5>Add a song to your playlist below</h5>
            <form onSubmit={submitHandler} className='centered'>
            <div className="row spaced">
                <div className='col-12'>
                    <input onChange={(e)=>{setTitle(e.target.value)}} type="text" className="form-control" id="title" placeholder="Song Title" value={title}/>
                    {errors.title ? <p>{errors.title.message}</p> : null} 
                </div>
            </div>
            <div className="row spaced">
                <div className='col-12'>
                    <input onChange={(e)=>{setArtist(e.target.value)}} type="text" className="form-control" id="artist" placeholder="Artist" value={artist}/>
                </div>
            </div>
            {errors.artist ? <p>{errors.artist.message}</p> : null}
            <div className="row spaced">
                <div className='col-12'>
                    <input onChange={(e)=>{setImage(e.target.value)}} type="text" className="form-control" id="image" placeholder="Image URL" value={image}/>
                    {errors.image ? <p>{errors.image.message}</p> : null}
                </div>
            </div>
            <div className="row spaced">
                <div className='col-12'>
                    <textarea onChange={(e)=>{setComment(e.target.value)}} className="form-control" rows={8} id="comment" placeholder="How does this song make you feel?" value={comment}/>
                    {errors.comment ? <p>{errors.comment.message}</p> : null}
                </div>
            </div>
                <button type="submit" className="btn btn-outline-light">Add to playlist</button>
            </form>
    </div>
)
}

export default SongForm
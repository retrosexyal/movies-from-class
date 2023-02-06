import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';



export const LinkedImg = () => {
    const { id } = useParams();
    const slicedId = id.slice(1)
    const [imgs, setImgs] = useState('')
    const [videos, setVideos] = useState('')
    const [isLoading, setisLoading] = useState(false)
    useEffect(() => {
        axios.get(`http://api.themoviedb.org/3/movie/${slicedId}/videos?api_key=d94c83bdcb8a6a3850d8063489961b1f&`)
            .then(data => setVideos(data.data));
        setisLoading(true)
        console.log(videos)
    }, [])
    return (
        <div>
            {isLoading && <YouTube
                videoId={videos.results[0].key}                        
            />}
        </div>
    )
}

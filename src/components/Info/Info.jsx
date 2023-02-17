import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionMovies } from "../../store/actions/moviesAction"
import QRCode from "react-qr-code";

function Info() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const  {info, loading}  = useSelector((state) => state.movies)
    const slicedId = id.slice(1)
    useEffect(() => {
        dispatch(actionMovies.getMoviesInfo(slicedId))
    }, [])
    return (
        <>
        
        {info.homepage && <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
            <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={info.homepage}
                viewBox={`0 0 256 256`}
            />
        </div>}
        </>
    )
}

export default Info
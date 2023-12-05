import React from "react";
import { useDispatch } from "react-redux";
import { hideAdditionalInfo, showAdditionalInfo } from "../store/PostsSlice";

export default function Post( { postInfo }){

    const dispatch = useDispatch()

    const showMoreInfo = () => {
        dispatch(showAdditionalInfo({ id: postInfo.id, body: postInfo.body, title: postInfo.title }))
    }
    
    return(
        <>
            <h1>{ postInfo.title }</h1>
            {postInfo.additionalInfo && (
                <>
                    <div>
                        <p>ID: {postInfo.id}</p>
                        <p>INFO: {postInfo.body}</p>
                    </div>
                </>
            )}
            <button onClick={showMoreInfo}>more info</button>
            <p>-----------------------</p>
        </>
    )
}
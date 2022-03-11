import React from "react"
import Post from "./Post"

const Feed = ({ posts }) => {

    return (
        <>
            {posts.map((post, index) => (
                <Post key={index} {...post} />
            ))}
        </>
    )
}

export default Feed
import React, { useRef, useState } from "react"
import { PostContext } from "../App";
const NewPost = ({ username }) => {

    const  dispatch  = React.useContext(PostContext);

    const [content, setContent] = useState("")
    const image = useRef()

    function handleChangeMessage(event) {
        setContent(event.target.value)
    }

    const handleClickNewPost = () => {
        const newPost = {
            content: content,
            image: image.current.files[0],
            username: username,
            date: new Date(),
            likes: 0
        }

        dispatch({ type: "CRIAR_POST", payload: { post: newPost } })

        

        setContent("")
        image.current.value = ""
    }

    return (
        <div>

            <input value={content} type="text" placeholder="O que você está pensando?" onChange={handleChangeMessage} />
            <input type="file" ref={image} />
            <button onClick={handleClickNewPost}>Post</button>
        </div>
    )
}

export default NewPost
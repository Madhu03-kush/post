import { getPost } from "../Service"
import { useEffect, useState } from "react"
import { getLocalStorage } from "../Local"
function PostCard(props) {
  return (
    <>
      <div style={{ width: "100%", backgroundColor: "green" }}>
        <h1>{props.post.title}</h1>
      </div>
      <div
        style={{
          width: "50%",
          backgroundColor: "orange",
          marginLeft: "25%",
        }}
      >
        {" "}
        <p>{props.post.body}</p>
      </div>
    </>
  )
}

function Posts() {
  const [post, setPost] = useState({})
  const [user, setUser] = useState({})
  useEffect(() => {
    getPost()
      .then((res) => {
        setPost(res.data)
        console.log(res)
      })
      .catch((e) => console.error(e))
    const userDetails = getLocalStorage()
    setUser(userDetails)
  }, [])

  return (
    <>
      {post?.limit && (
        <div>
          <h1>Total Post -{post?.limit}</h1>
          {post?.posts.map((item) => (
            <PostCard post={item}></PostCard>
          ))}
        </div>
      )}
    </>
  )
}

export default Posts

const PostPreview = (props) => {
    console.log(props)
    return (
        <h1> {props.post.title} </h1>
    )
    /*const [posts, setPosts] = useState(exPosts) 
    console.log(posts) 
{posts.map(p => 
     <PostPreview post={p} />) } */

}
export default PostPreview;
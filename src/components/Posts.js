const Posts = (props) => {
    return (
        <div>
            {props.//access props
                posts. //access prop named post
                map(post => //for each item (we referred to them as post) in the array
                    <h1>{post.title}</h1>)//return a h1 element displaying the title field of the item
            }
        </div>
    )
}

export default Posts;

import axios from "axios";
import { useEffect, useState } from "react";
import Comments from "./Comments";


function Ex05(){
    const [posts, setPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState();

    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                const jsonData = await response.data;
                setPosts(jsonData);
            }catch(error){
                console.error('Error Fetching Data;', error);
            }
        };

        fetchPosts();
    },[]);

    return(
        <div>
            <h1>Posts</h1>
            {posts.map(post =>(
                <p key={post.id} onClick={() => setSelectedPostId(post.id)}>{post.title}</p>
            ))}
            {selectedPostId && <Comments postId={selectedPostId} />}
        </div>
    );
}
export default Ex05;
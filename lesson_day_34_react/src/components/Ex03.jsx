import { useEffect, useState } from "react";

function Ex03(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
                const jsonData = await response.json();
                setPosts(jsonData);
            }catch{
                console.error('Error Fetching Data;', error);
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    },[])

    const filteredPosts = posts.filter(post => post.title.includes(searchTerm) || post.body.includes(searchTerm));

    return(
        <div>
            <input type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search Posts ..." name="" id="" />
            <div>
                {filteredPosts.map(post => <p key={post.id}>{post.title}</p>)}
            </div>
        </div>
    );
}
export default Ex03;
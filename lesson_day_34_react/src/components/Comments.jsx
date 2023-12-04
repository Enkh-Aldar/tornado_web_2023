import axios from "axios";
import { useEffect, useState } from "react";

function Comments({ postId }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
                console.log(response)
                const jsonData = await response.data;
                setComments(jsonData);

            } catch (error) {
                console.error('Error Fetching Data;', error);
            }
        };
        fetchComments();
    }, [postId]);
    return (
        <div>
            <h1>Comments</h1>
            {comments.map(comment => {

                return <p>{comment.name}</p>

            }
            )}

        </div>
    );
}
export default Comments;
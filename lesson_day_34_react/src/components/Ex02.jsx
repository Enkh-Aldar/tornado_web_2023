import { useEffect, useState } from "react";

function Ex02() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/');
                const jsonData = await response.json();
                setUsers(jsonData);
            } catch (error) {
                console.error('Error Fetching Data;', error);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
        
    }, []);
    return(
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    );
}
export default Ex02;
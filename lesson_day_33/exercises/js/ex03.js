async function searchPost(keyword) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json();
        console.log(posts);
        const filteredPost = posts.filter(post => post.title.includes(keyword));
        document.getElementById('searchResults').innerHTML = filteredPost.map(post => `<p>${post.title}</p>`).join('');
    } catch (error) {
        console.error('Fetch error:', error);
    }

}

document.getElementById('searchBox').addEventListener('input', (e) => searchPost(e.target.value));
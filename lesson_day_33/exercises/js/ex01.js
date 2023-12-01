async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        displayPost(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
function displayPost(post){
    const container = document.getElementById('post');
    container.innerHTML = `<h1>${post.title}</h1><p>${post.body}</p>`;
}
fetchData();
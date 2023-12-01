async function fetchBlog(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = response.json();
    console.log(posts);
    const post = document.getElementById('posts');
    
}
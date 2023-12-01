let page = 1;

async function fetchPosts(p){
    page = page+1; 
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${p}`);
    const posts = await response.json();
    console.log(posts);
    document.getElementById('posts').innerHTML = posts.map(post => `<p>${post.title}</p>`).join('');
    
}
fetchPosts();
document.getElementById('prev').addEventListener('click', (e) => {
    page = page-1;
    fetchPosts(page);
});

document.getElementById('next').addEventListener('click', (e) => {
    page = page+1;
    fetchPosts(page);
});

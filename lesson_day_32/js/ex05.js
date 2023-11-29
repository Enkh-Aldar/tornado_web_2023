async function getUserAndPosts(userId) {
    try {
        const userResponse = fetch('https://jsonplaceholder.typicode.com/users/${userId}');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        // const postResponce = fetch('https://jsonplaceholder.typicode.com/users/${userId}/posts');
        // if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // const data = await response.json();
        // console.log(data);
        displayData(data);

    } catch (error) {
        console.error('Fetch Error', error);

    }
}
function displayData(data) {
    const container = document.getElementById('data-container');
    container.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
}

getUserAndPosts(2);
getUserAndPosts(5);
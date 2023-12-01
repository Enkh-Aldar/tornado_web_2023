const users = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
    },
    {
        id: 3,
        name: 'Clement Bauch',
        username: 'Samantha',
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
    },
]

const userSlice = users.slice(0, 3);

const userElement = document.createElement('ul');

userSlice.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    userElement.appendChild(li);
});

document.body.appendChild(userElement)
import { people } from './data.js';
export default function List() {
    const chemists = people.filter(person =>
        person.profession === 'physicist'
    );
    const listItems = chemists.map(person =>
        <li>
            <img
                src={person.imageUrl}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return <ul>{listItems}</ul>;
}
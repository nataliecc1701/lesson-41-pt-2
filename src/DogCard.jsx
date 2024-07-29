/** Card page for individual dogs */

import { Link, useParams } from "react-router-dom";

const DogCard = ({dogs}) => {
    const { name } = useParams();
    const dog = dogs.find(d => d.src === name);
    return (<div className="DogCard">
        <h3>{dog.name}</h3>
        <p>Facts:</p>
        <ul>
            <li>Age: {dog.age}</li>
            {dog.facts.map((fact, idx) => {return <li key={idx}>{fact}</li>})}
        </ul>
        <Link to="/dogs">Go back</Link>
    </div>)
}

export default DogCard;
/** Listing page for all dogs */

import { Link } from "react-router-dom";

const DogList = ({dogs}) => {
    return <ul className="DogList">
        {dogs.map((dog) => {
            return <li key={dog.src}><Link to={`/dogs/${dog.src}`}>{dog.name}, age {dog.age}</Link></li>
        })}
    </ul>
}

export default DogList;
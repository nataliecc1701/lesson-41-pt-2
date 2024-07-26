/** Listing page for all dogs */

import { Link } from "react-router-dom";

const DogList = ({dogs}) => {
    <ul className="DogList">
        {dogs.foreach((dog) => {
            return <li><Link to={`/dogs/${dog.src}`}>{dog.name}, age {dog.age}</Link></li>
        })}
    </ul>
}

export default DogList;
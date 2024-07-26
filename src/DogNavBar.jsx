/** nav bar for dog routes */

import { Link } from "react-router-dom";

const DogNavBar = (dogs) => {
    return <nav className="DogNavBar">
        <div>
            <Link to="/dogs">Dogs Index</Link>
        </div>
        {dogs.forEach((dog) => {
            return <div>
                <Link to={`/dogs/${dog.src}`}>{dog.name}</Link>
            </div>})}
    </nav>
}

export default DogNavBar;
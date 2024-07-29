/** nav bar for dog routes */

import { Link } from "react-router-dom";
import "./DogNavBar.css"

const DogNavBar = ({dogs}) => {
    return <nav className="DogNavBar">
        <div>
            <Link to="/dogs">Dogs Index</Link>
        </div>
        {dogs.map((dog) => {
            return <div key={dog.src}>
                <Link to={`/dogs/${dog.src}`}>{dog.name}</Link>
            </div>})}
    </nav>
}

export default DogNavBar;
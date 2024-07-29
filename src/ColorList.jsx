/** Listing page for all colors */

import { Link } from "react-router-dom";

const ColorList = ({colors}) => {
    return (<>
        <div><Link to="/colors/new">Add a color</Link></div>
        <ul>
            {colors.map(color => {
                return <li key={color.name}><Link to={color.name}>{color.name}</Link></li>
                })};
        </ul>
    </>)
}

export default ColorList;
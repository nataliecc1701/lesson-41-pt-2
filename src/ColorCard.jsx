/** Card to display colors */

import { useParams, Link, Navigate } from "react-router-dom";
import "./ColorCard.css"

const ColorCard = ({colors}) => {
    const { name } = useParams();
    
    const colorObj = colors.find(color => color.name === name);
    if (!colorObj) return <Navigate to="/colors" />;
    const color = colorObj.color;
    return (<div className="ColorCard" style={{backgroundColor: color}}>
        <h2>{name}</h2>
        <p><Link to="/colors">Go Back</Link></p>
        </div>)
}

export default ColorCard;
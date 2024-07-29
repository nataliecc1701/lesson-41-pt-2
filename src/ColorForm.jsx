/** Form to add new colors */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ColorForm = ({addColor}) => {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({color: "#4a5ba1", name: ""});
    
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData({...formData, [name]: value});
    }
    
    function handleSubmit(evt) {
        evt.preventDefault();
        addColor(formData);
        navigate("/colors")
    }
    
    return (<form onSubmit={handleSubmit} className="ColorForm">
        <input type="color" name="color" value={formData.color} onChange={handleChange} />
        <input type="text" name="name" value={formData.name} placeholder="name" onChange={handleChange} />
        <input type="submit" />
    </form>)
}

export default ColorForm;
import React, {useState} from 'react';
import "./Newsletter.css";

const Newsletter = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
    }

  return (
    <div className='newsletter section-p'>
        <div className='container'>
            <div className='workprocess-content'>
               
            </div>
        </div>
    </div>
  )
}

export default Newsletter
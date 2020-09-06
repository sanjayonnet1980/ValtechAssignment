import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

 const Button = () => {
     return (
        <div>
            <div className="row">
            <i class="fas fa-edit">
                <button className="btn">EDIT</button></i>
             </div>
             <div className="row">
                 <button className="btn">DELETE</button>
            </div>
        </div>

    )
}
export default Button;
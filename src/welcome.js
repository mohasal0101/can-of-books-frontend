import React from "react";
import "./Styling/Welcome.css";
import "./Styling/Footer.css";

class Welcome extends React.Component {
    render () {
        return (
            <div>
                <h1 className="mid">Welcome to the Book Store</h1>
                <p className="mid1">
                    Please Login.
                </p>
                
            </div>
        );
        
    }
}

export default Welcome;
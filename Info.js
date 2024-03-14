import React from "react"

export default function Info(){
    return(
        <div className="info-container">
            <img src="josh.jpg" alt="Josh Profile Picture" className="profile-pic"/>
            <h1 className="name">Joshua Lee</h1>
            <h2 className="job">Frontend Developer</h2>
            <a href="https://www.joshuaplee.com/" className="website">https://www.joshuaplee.com/</a>
            <div className="btn-container">
                <button className="email"><i className="fa-solid fa-envelope info-icon"></i> Email</button>
                <button className="linkedin"><i className="fa-brands fa-linkedin info-icon"></i> LinkedIn</button>
            </div> 
        </div>
    )
}


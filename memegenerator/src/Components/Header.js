import React from "react"
import Logo from "../Images/Troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img src={Logo}
                className="header--image"
                alt="Logo"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}
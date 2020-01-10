import React from 'react'
import './main.css'

const Main = (props) => {
    return (
        <main className="main">
            <div className="container">
                {props.children}
            </div>
        </main>
    )
}

export default Main;
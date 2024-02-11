import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app">
            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">RCGF</div>
                <div className="nav-links">
                    <span className="feature">Feature 1</span>
                    <span className="feature">Feature 2</span>
                </div>
                <div className="signin">Sign in</div>
            </nav>

            {/* Pink Box */}
            <div className="pink-box">
                <div className="white-box"></div>
            </div>

            {/* Rest of the page */}
            <div className="content">
                {/* Add content here */}
            </div>
        </div>
    );
}

export default App;

import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Book Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80" alt="" />
                </div>
                <div>
                    <p className="about-text">
                    Welcome to your personal Book Library! This platform is designed to help you organize, manage, and enjoy your book collection like never before. Whether you’re an avid reader, a casual book lover, or simply looking to keep track of your favorite titles, Book Library is here to make it easy.<br/>
                        <br/>
                        With Book Library, you can effortlessly add new books to your collection, categorize them by genre, author, or reading status, and explore detailed information on each book. Enjoy the freedom to browse through your library with ease, find exactly what you’re looking for, and keep track of every book you’ve read, want to read, or plan to revisit.<br/>
                        <br/>
                        Empower your reading journey, stay organized, and make your personal book collection more accessible with Book Library. Happy reading!<br/>
                        <br/>
                        <b>Your suggestions for improvement are always welcome!</b>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About

import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://plus.unsplash.com/premium_photo-1676422355165-d809008b8342?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Today's Proverb</h3>
                        <h3>A book is a dream that you hold in your hand.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1555967522-37949fc21dcb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Today's Proverb</h3>
                        <h3>Reading is to the mind what exercise is to the body.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1608454367599-c133fcab1245?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Today's Proverb</h3>
                        <h3>The more you read, the more you know.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider

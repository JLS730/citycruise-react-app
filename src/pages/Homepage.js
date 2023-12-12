import React from 'react'

import '../styling/homepage.css'

import taxiPhoto0 from '../images/taxi_photo_1.jpg'

const Homepage = () => {
  return (
    <div className='homepage-container'>
        <div className="ride-order-container">
            <div className="ride-order-left-container">
                <img className='' src={taxiPhoto0} style={{ borderRadius: '10px' }} alt="" />
                <div className="ride-order-image-tint"></div>
                <h2 className="ride-order-title">Cruise the City</h2>
                <p className="ride-order-slogan">Navigate Life with Ease.</p>
                <p className="ride-order-description">CityCruise, your premier urban transport solution, ensures swift and reliable rides through the heart of the city. With a fleet of modern vehicles and professional drivers, we prioritize punctuality and passenger satisfaction, making every journey smooth and enjoyable. Choose CityCruise for a hassle-free and comfortable ride, whether you're commuting to work, exploring the city, or catching a flight.</p>
                <div className="ride-order-accomplishments-container">
                    <div className="accomplishment-containers">
                        <p className="accomplishments">6500</p>
                        <p className="accomplishments-description-top">Miles</p>
                        <p className="accomplishments-description-bottom"> Driven</p>
                    </div>
                    <div className="accomplishment-containers">
                        <p className="accomplishments">3,789</p>
                        <p className="accomplishments-description-top">Satisfied</p>
                        <p className="accomplishments-description-bottom">Customers</p>
                    </div>
                    <div className="accomplishment-containers">
                        <p className="accomplishments">211</p>
                        <p className="accomplishments-description-top">American</p>
                        <p className="accomplishments-description-bottom">Cities</p>
                    </div>
                </div>
            </div>
            <div className="ride-order-right-container"></div>
        </div>
    </div>
  )
}

export default Homepage
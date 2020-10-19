import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out this epic destinations!</h1>
            <div className="card__container">
                <div className="cards__wrapper">
                    <ul className="cards_item">
                        <CardItem 
                        src="images/img-9.jpg"
                        text="Exploere the hidden watefall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem 
                        src="images/img-2.jpg"
                        text="Travel trough the Islands of Bali in a Private Cruise"
                        label="Luxury"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

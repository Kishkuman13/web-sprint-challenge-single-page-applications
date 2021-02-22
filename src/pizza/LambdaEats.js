import React from 'react'
import { Link } from 'react-router-dom'

export default function PizzaForm(props) {
    return (
        <div className='wrapper'>
            <section className='hero'>
                <div className='hero-img'>
                    <Link to='/pizza'>Pizza?</Link>
                </div>
            </section>
        </div>
    )
}
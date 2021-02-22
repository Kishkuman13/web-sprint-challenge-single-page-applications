import React from 'react'
import { Link } from 'react-router-dom'

export default function PizzaForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, type, checked } = evt.target
    const returnValue = type === 'checkbox' ? checked : value
    change(name, returnValue)
  }

  return (
    <form className='form wrapper' onSubmit={onSubmit}>
      <div className='form-cont'>
        <h2>Place an Order</h2>
        <div className='errors'>
          <div>{errors.crust}</div>
          <div>{errors.size}</div>
          <div>{errors.custname}</div>
          <div>{errors.phone}</div>
        </div>
      </div>

      <div className='form-cont inputs'>
        <h4>Order Information</h4>
        <div className='form-group'>
          <h3>Crust</h3>
          <label>Hand Tossed
            <input
              value='hand-tossed'
              onChange={onChange}
              name='crust'
              type='radio'
              checked={values.crust === 'hand-tossed'}
            />
          </label>
          
          <label>Thin
            <input
              value='thin'
              onChange={onChange}
              name='crust'
              type='radio'
              checked={values.crust === 'thin'}
            />
          </label>
          
          <label>Deep Dish
            <input
              value='deep-dish'
              onChange={onChange}
              name='crust'
              type='radio'
              checked={values.crust === 'deep-dish'}
            />
          </label>
        </div>

        <div className='form-group'>
          <h3>Size</h3>
          <label>Pizza Size
            <select
              value={values.size}
              onChange={onChange}
              name='size'
              >
                <option value=''></option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
                <option value='family'>Family</option>
            </select>
          </label>
        </div>

        <div className='form-group'>
          <h3>Toppings</h3>
          <label>Pepperoni
            <input
              name='pepperoni'
              type='checkbox'
              checked={values.pepperoni}
              onChange={onChange}
            />
          </label>
          
          <label>Ham
            <input
              name='ham'
              type='checkbox'
              checked={values.ham}
              onChange={onChange}
            />
          </label>
          
          <label>Sausage
            <input
              name='sausage'
              type='checkbox'
              checked={values.sausage}
              onChange={onChange}
            />
          </label>
          
          <label>Onions
            <input
              name='onions'
              type='checkbox'
              checked={values.onions}
              onChange={onChange}
            />
          </label>
          
          <label>Olives
            <input
              name='olives'
              type='checkbox'
              checked={values.olives}
              onChange={onChange}
            />
          </label>
          
          <label>Extra Cheese
            <input
              name='extra'
              type='checkbox'
              checked={values.extra}
              onChange={onChange}
            />
          </label>
        </div>

        <div className='form-group'>
          <h3>Would you like this for delivery?</h3>
          <label>Yes, please deliver!
            <input
              checked={values.delivery}
              onChange={onChange}
              name='delivery'
              type='checkbox'
            />
          </label>
        </div>
        <div className='form-group'>
          <h3>Customer Information</h3>
          <label>Name
            <input 
              type='text'
              name='custname'
              onChange={onChange}
              value={values.custname}
              />
          </label>
          
          <label>Phone
            <input 
              type='text'
              name='phone'
              onChange={onChange}
              value={values.phone}
              />
          </label>
          
          <label>Address
            <input 
              type='text'
              name='address'
              onChange={onChange}
              value={values.address}
            />
          </label>

          <label>Special Instructions
            <textarea 
              type='text'
              name='specialIns'
              onChange={onChange}
              value={values.specialIns}
            />
          </label>
          
        </div>
      </div>
    <Link to='/order-confirmation'>
      <button disabled={disabled}>Submit</button>
    </Link>
    </form>
  )
}
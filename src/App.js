import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import { Route, Switch, Link } from 'react-router-dom'
import LambdaEats from './pizza/LambdaEats'
import PizzaForm from './pizza/PizzaForm'
import OrderConfirm from './pizza/Order-Confirmation'
import FormSchema from './formSchema'

const initialFormValues = {
  crust: '',
  size: '',
  pepperoni: false,
  ham: false,
  sausage: false,
  onions: false,
  olives: false,
  extra: false,
  delivery: false,
  custname: '',
  phone: '',
  address: '',
  specialIns: ''
}

const initialFormErrors = {
  crust: '',
  size: '',
  pepperoni: '',
  ham: '',
  sausage: '',
  onions: '',
  olives: '',
  extra: '',
  delivery: '',
  custname: '',
  phone: '',
  address: '',
  specialIns: ''
}

const initialOrder = []
const initialDisabled = true

export default function App () {
  const [order, setOrder] = useState([initialOrder])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const inputChange = (name, value) => {
    yup.reach(FormSchema, name)
      .validate(value)
        .then(() => setFormErrors({...formErrors, [name]: ''}))
        .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const postOrder = newOrder => {
    axios.post('https://reqres.in/api/users', newOrder)
      .then(res => {
        console.log(res)
        setOrder([...order, res.data])
      })
    setFormValues(initialFormValues)
  }
  
  const formSubmit = () => {
    const newOrder = {
      name: formValues.crust.trim(),
      size: formValues.size.trim(),
      pepperoni: !!formValues.pepperoni,
      ham: !!formValues.ham,
      sausage: !!formValues.sausage,
      onions: !!formValues.onions,
      olives: !!formValues.olives,
      extra: !!formValues.extra,
      delivery: !!formValues.delivery,
      custname: formValues.custname.trim(),
      phone: formValues.phone.trim(),
      address: formValues.address.trim(),
      specialIns: formValues.specialIns.trim()
    }
    postOrder(newOrder)
  }
  
  useEffect(() => {
    FormSchema.isValid(formValues)
      .then(isValid => setDisabled(!isValid))
      .catch(err => console.log(err))
  }, [formValues])

  return (
    <div className='wrapper'>
    <header>
        <h1>Lambda Eats</h1>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/help'>Help</Link>
        </nav>
    </header>
      <Switch>
        <Route path='/pizza'>
          <PizzaForm   
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path='/order-confirmation'>
          <OrderConfirm 
            values={formValues}
          />
        </Route>
        <Route path='/'>
          <LambdaEats />
        </Route>
      </Switch>
    </div>
  )
}

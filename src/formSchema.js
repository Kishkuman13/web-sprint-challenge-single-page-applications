import * as Yup from 'yup'

const FormSchema = Yup.object().shape({
  crust: Yup
    .string()
    .trim()
    .required('Please select a crust type'),
  size: Yup
    .string()
    .trim()
    .required('Please select a size'),
  pepperoni: Yup.boolean(),
  ham: Yup.boolean(),
  sausage: Yup.boolean(),
  onions: Yup.boolean(),
  olives: Yup.boolean(),
  extra: Yup.boolean(),
  delivery: Yup.boolean(),
  custname: Yup
    .string()
    .trim()
    .required('Please enter your name')
    .min(2, 'Name must be at least 2 characters'),
  phone: Yup
    .number('Please enter a valid phone number')
    .required('Please enter your phone number'),
  address: Yup
    .string()
    .trim(),
  specialIns: Yup
    .string()
    .trim()
})

export default FormSchema
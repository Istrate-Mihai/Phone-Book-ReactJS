import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';
import agenda from './agenda';
import { Link, useNavigate } from 'react-router-dom';

function Create() {
  let history = useNavigate()
  const [phoneBookEntry, setPhoneBookEntry] = useState({
    name: '',
    tel: ''
  })

  const [warning, setWarning] = useState('')
  
  const handleChange = (e) => {
    // getting the properties values from the calling input field
    const {name, value} = e.target 
    setPhoneBookEntry((prevPhoneBookEntry) => {
      return {
        ...prevPhoneBookEntry,
        [name]: value
      }
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Getting the id of the last entry in phoneBook and increment it for the
    // newly saved entry
    if (phoneBookEntry.name === '' || 
        phoneBookEntry.tel  === '' ||
        isNaN(Number(phoneBookEntry.tel))) {
      setWarning('Name or phone not valid please try again!')
      return
    }
    // If all the previous entries from the agenda have been deleted
    // set the new entry as the first one having with id 0 
    let new_entry_id = agenda.length !== 0 ? 
                       agenda[agenda.length - 1].id + 1 : 0
    agenda.push(
      {
        id: new_entry_id,
        name: phoneBookEntry.name,
        tel: phoneBookEntry.tel
      }
    )
    // Redirecting to Home After Entry was successfully saved
    history('/')
  }

  return (
    <div >
      <Form className="d-grid gap-2" style={{margin:'15rem'}}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            onChange={e => handleChange(e)} 
            type="text"
            name="name"
            value={phoneBookEntry.name}
            placeholder="Enter Name" required
          /> 
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            onChange={e => handleChange(e)} 
            type="text"
            name="tel"
            value={phoneBookEntry.tel}
            placeholder="Enter Tel" required
          />
        </Form.Group>

        <Button 
          onClick={e => handleSubmit(e)}
          variant="primary" type="submit"
        >
          Submit
        </Button>

        {/* Redirecting back to home page */}
        <Link className="d-grid gap-2 anchor" to='/'>
          <Button variant="info" size="lg">
            Home
          </Button>
        </Link>
        <div>{warning}</div>
      </Form>
    </div>
  )
}

export default Create

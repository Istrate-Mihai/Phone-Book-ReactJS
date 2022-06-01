import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import agenda from './agenda';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function Edit() {
  let history = useNavigate()

  const [phoneBookEntry, setPhoneBookEntry] = useState({
    id: localStorage.getItem('id'),
    name: localStorage.getItem('name'),
    tel: localStorage.getItem('tel')
  })

  const [warning, setWarning] = useState('')

  const handleChange = (e) => {
    // getting the properties values from the calling input field
    const {name, value} = e.target 
    setPhoneBookEntry((prevPhoneBookEntry) => {
      return {
        ...prevPhoneBookEntry,
        [name]: value.trim()
      }
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Getting the id of the last entry in phoneBook and increment it for the
    // newly saved entry
    let regExp = /[a-zA-Z]/g; // pattern for any letters
    if (phoneBookEntry.name === '' || phoneBookEntry.tel  === '' || regExp.test(phoneBookEntry.tel)) {
      // if name or tel are empty or if letters are found in tel than set warning
      setWarning(`Name or phone are not valid, please try again!
                  Fields can't be empty and telephone can't contain letters!
                 `)
      return
    }
    // Get the same object element from the agenda array and
    // modify it's properties
    agenda[phoneBookEntry.id].name = phoneBookEntry.name
    agenda[phoneBookEntry.id].tel = phoneBookEntry.tel
    // Redirecting to Home After Entry was successfully saved
    history('/')
  }
  
  return (
    <div>
      <Form className="d-grid gap-2" style={{margin:'2rem'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control 
            onChange={e => handleChange(e)}  
            type="text" 
            name="name"
            value={phoneBookEntry.name}
            placeholder="Enter Name" 
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onChange={e => handleChange(e)} 
            type="text" 
            name="tel"
            value={phoneBookEntry.tel}
            placeholder="Enter Tel"
          />
        </Form.Group>

        <Button
          onClick={e => handleSubmit(e)}
          variant="primary" type="submit" size="lg">
            Update Contact
        </Button>

        <Link className="d-grid gap-2 anchor" to='/'>
          <Button variant="warning" size="lg">Back To Agenda</Button>
        </Link>
        <div style={{color: 'red', fontWeight: 'bold'}}>{warning}</div>
      </Form>
    </div>
  )
}

export default Edit

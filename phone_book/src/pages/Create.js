import React, { useState } from 'react' 
import { Button, Form } from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link, useNavigate } from 'react-router-dom';

function Create() {
  const [phoneBookEntry, setPhoneBookEntry] = useState({
    id: '',
    name: '',
    tel: ''
  })
  let history = useNavigate()
  
  const handleChange = (e) => {
    console.log(e.target.value)
    setPhoneBookEntry()
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Getting the id of the last entry in phoneBook and increment it for the
    // newly saved entry
    let new_entry_id = array[array.length - 1].id + 1
    let new_entry_name = phoneBookEntry.name
    let new_entry_tel = phoneBookEntry.tel
    array.push(
      {
        id: new_entry_id,
        name: new_entry_name,
        tel: new_entry_tel
      }
    )
    // Redirecting to Home After Entry was saved
    history('/')
  }

  return (
    <div >
      <Form className="d-grid gap-2" style={{margin:'15rem'}}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            onChange={e => handleChange(e)} 
            type="text"
            placeholder="Enter Name" required
          /> 
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            onChange={e => handleChange(e)} 
            type="text"
            placeholder="Enter Tel" required
          />
        </Form.Group>

        <Button 
          onClick={e => handleSubmit(e)}
          variant="primary" type="submit">
          Submit
        </Button>

        {/* Redirecting back to home page */}
        <Link className="d-grid gap-2" to='/'>
          <Button variant="info" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  )
}

export default Create

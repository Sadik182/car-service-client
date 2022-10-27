import React from "react";
import { useRef } from "react";
import { Button, Form } from "react-bootstrap";

const AddService = () => {
  const nameRef = useRef('');
  const priceRef = useRef('');
  const descriptionRef = useRef('');
  const imageRef = useRef('');
  const handleAddService = e => {
    e.preventDefault();
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const description = descriptionRef.current.value;
    const image = imageRef.current.value;
    const data = { name, price, description, image}
    console.log('Service Added', data);

    const url = `http://localhost:5000/Services`
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      if(data) {
        window.alert('Data is added Successfully')
      }
    })
  }
  return (
    <div>
      <h1 className="text-center my-2"> Add New Service</h1>
      <Form onSubmit={handleAddService} className="w-50 mx-auto mt-3 border p-4 rounded-3">
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Service Title</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="Enter Service Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Service Price</Form.Label>
          <Form.Control ref={priceRef} type="number" placeholder="Enter Service Price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Service Description</Form.Label>
          <Form.Control ref={descriptionRef} type="text" placeholder="Enter Service Description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImg">
          <Form.Label>Service Image</Form.Label>
          <Form.Control ref={imageRef} type="text" placeholder="Enter Service Image" />
        </Form.Group>
        <Button variant="primary" type="submit" className="d-block w-100">
          Add Service
        </Button>
      </Form>
    </div>
  );
};

export default AddService;

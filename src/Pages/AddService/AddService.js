import React from "react";
import { Button, Form } from "react-bootstrap";

const AddService = () => {
  return (
    <div>
      <h1 className="text-center my-2"> Add New Service</h1>
      <Form className="w-50 mx-auto mt-3 border p-4 rounded-3">
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Service Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Service Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Service Price</Form.Label>
          <Form.Control type="number" placeholder="Enter Service Price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Service Description</Form.Label>
          <Form.Control type="text" placeholder="Enter Service Description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImg">
          <Form.Label>Service Description</Form.Label>
          <Form.Control type="file" placeholder="Enter Service Image" />
        </Form.Group>
        <Button variant="primary" type="submit" className="d-block w-100">
          Add Service
        </Button>
      </Form>
    </div>
  );
};

export default AddService;

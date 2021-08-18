import React from "react";
import { Row, Col, Image, Button, Form, FormControl } from "react-bootstrap";
const SearchBox = () => {
  return (
    <div>
      <Form inline style={{ background: "#2F88BD" }}>
        <Form.Control
          className='m-2 p-2 my-3 mx-3'
          as='select'
          defaultValue='All District'
          onChange={() => console.log("changed")}
        >
          <option>All District...</option>
          <option>Dhaka</option>
          <option>Chittagong</option>
          <option>Bogura</option>
        </Form.Control>
        <Form.Control
          className='m-2 p-2'
          as='select'
          defaultValue='All Location'
          onChange={() => console.log("changed")}
        >
          <option>All Location...</option>
          <option>...</option>
        </Form.Control>
        <Form.Control
          className='m-2 p-2'
          as='select'
          defaultValue='All Classes'
          onChange={() => console.log("changed")}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </Form.Control>
        <Form.Control
          className='m-2 p-2'
          as='select'
          defaultValue='All Subject'
          onChange={() => console.log("changed")}
        >
          <option>All Subject...</option>
          <option>Bangla</option>
          <option>English</option>
          <option>Physics</option>
          <option>Math</option>
        </Form.Control>
        <Button className='mx-3' variant='success'>
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchBox;

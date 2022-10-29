import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/Services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="service d-flex">
        <img className="w-100" src={service.img} alt="" />
        <div>
        <h2>{service.name}</h2>
        <p>Price: {service.price}</p>
        <p>
          <small>{service.description}</small>
        </p>
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './uhome.css';
import { useNavigate } from 'react-router-dom';
import Unavbar from './Unavbar';
import Footer from '../Components/Footer';

function Myorders() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios
        .get(`http://localhost:4000/getorders/${user.id}`)
        .then((response) => {
          const taskData = response.data;
          setCars(taskData);
          console.log(taskData);
        })
        .catch((error) => {
          console.error('Error fetching tasks: ', error);
        });
    } else {
      console.log('ERROR');
    }
  }, []);

  // Function to calculate the status based on the delivery date
  const calculateStatus = (Delivery) => {
    const currentDate = new Date();
    const formattedDeliveryDate = new Date(Delivery);

    if (formattedDeliveryDate >= currentDate) {
      return "On the way";
    } else {
      return "Delivered";
    }
  };

  return (
    <div>
      <Unavbar />
   
      <div>
        <h1 className="text-center" style={{marginTop:"100px"}}>My Orders</h1>
        <div className="table-responsive">
          <table className="table table-bordered my-orders-table" style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
            <thead>
              <tr className="table-header">
                <th>Product Name</th>
                <th>Order ID</th>
                <th>Address</th>
                <th>Seller</th>
                <th>Booking Date</th>
                <th>Delivery By</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((item, index) => {
                const status = calculateStatus(item.Delivery);
                return (
                  <tr key={item._id} className={index % 2 === 0 ? 'table-row-even' : 'table-row-odd'}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={`http://localhost:4000/${item.itemImage}`} alt={`${item.itemtype} Image`} style={{ height: '50px', marginRight: '10px' }} />
                        {item.itemname} - {item._id.slice(3, 7)}
                      </div>
                    </td>
                    <td>{item._id.slice(0, 10)}</td>
                    <td>{item.flatno},<br />{item.city}, ({item.pincode}),<br />{item.state}</td>
                    <td>{item.seller}</td>
                    <td>{item.BookingDate}</td>
                    <td>{item.Delivery}</td>
                    <td>${item.totalamount}</td>
                    <td>{status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Myorders;

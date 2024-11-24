import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Snavbar from './Snavbar';

function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch items data
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios.get(`http://localhost:4000/getsellerorders/${user.id}`)
        .then((response) => {
          setOrders(response.data);
        })
        .catch((error) => {
          console.error('Error fetching bookings: ', error);
        });
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
      <Snavbar />
      <br />
      <div style={{ paddingTop: '100px' }}>
        <h3 className="text-3xl font-semibold mb-4 text-center">Orders</h3>
        <div className="table-container">
          <table className="order-table" style={{ width: '80%', margin: 'auto', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#4CAF50', color: 'white' }}>
              <tr>
                <th>Product Name</th>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Address</th>
                <th>Booking Date</th>
                <th>Delivery By</th>
                <th>Warranty</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, index) => {
                const status = calculateStatus(item.Delivery);
                return (
                  <tr key={item._id} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'white' }}>
                    <td style={{ padding: '10px', textAlign: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={`http://localhost:4000/${item?.itemImage}`} alt={`${item.itemtype} Image`} style={{ height: '50px', marginRight: '10px' }} />
                        {item.itemname}
                      </div>
                    </td>
                    <td style={{ padding: '10px', textAlign: 'center' }}>{item._id.slice(0, 10)}</td>
                    <td style={{ padding: '10px', textAlign: 'center' }}>{item.userName}</td>
                    <td style={{ padding: '10px' }}>
                      {item.flatno},<br />{item.city}, ({item.pincode}),<br />{item.state}
                    </td>
                    <td style={{ padding: '10px', textAlign: 'center' }}>{item.BookingDate}</td>
                    <td style={{ padding: '10px', textAlign: 'center' }}>{item.Delivery}</td>
                    <td style={{ padding: '10px', textAlign: 'center' }}>1 Year</td>
                    <td style={{ padding: '10px', textAlign: 'center' }}>${item.totalamount}</td>
                    <td style={{ padding: '10px', textAlign: 'center' }}>{status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Orders;

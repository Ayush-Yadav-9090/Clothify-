import React, { useState, useEffect } from 'react';
import './profile.css'; // Optional styling

export const Profile = () => {

  const [user, setUser] = useState(null);
  const [date, setdate] = useState(new Date())


  useEffect(() => {

    const fetchUserData = async () => {

      // Dummy Data 
      const mockUser = {
        name: 'Ayush Yadav',
        email: 'ayush@example.com',
        img: 'https://images.pexels.com/photos/18593901/pexels-photo-18593901/free-photo-of-man-sitting-and-posing-in-black-jacket.jpeg?auto=compress&cs=tinysrgb&w=600',
        orders: [
          { id: 1, date: date.toDateString(), total: 100 },

        ],
      };
      setUser(mockUser);
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (

    <div className="profile-container">
      <div className='xyz'>
        <img src={user.img} alt='user_image'></img>
        <h1>{user.name}</h1>
        <p>Email: {user.email}</p>
      </div>
      <h3>Order History</h3>
      <ul>
        {user.orders.map((order) => (
          <li key={order.id}>
            Order #{order.id} - {order.date} - Total: ${order.total}
          </li>
        ))}
      </ul>
    </div>
  );
};

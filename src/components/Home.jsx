import React from 'react'
import  { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      
      <table border="1" cellPadding="10" >
        <thead>
          <tr >
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Home;

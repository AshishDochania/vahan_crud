import React, { useState } from 'react';

function Form3() {
  const [data, setData] = useState([]);
  const [van,changevan]=useState("block");
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/read', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      let result = await response.json();

      result = result.map(user => {
        const formattedDate = new Date(user.dob).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        return { ...user, dob: formattedDate };
      });

      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  function vanish(){
    changevan("none")
  }

  return (
    <div className="App">
      <button onClick={()=>{
        fetchData();
        vanish();
      }}
      style={{display:van}}
      className='midbut'>Fetch Data</button>
        <div style={{ maxHeight: '60vh', overflowY: 'auto',marginLeft:"10px",marginBottom:"10px",marginTop:"10px"}}>
      {data.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone_number}</td>
                <td>{user.dob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </div>
    </div>
  );
}

export default Form3;

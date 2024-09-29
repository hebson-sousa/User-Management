import React, { useEffect, useState } from 'react';

const ApiStatus = () => {
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const fetchApiStatus = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok) {
          setStatus('online');
        } else {
          setStatus('offline');
        }
      } catch (error) {
        setStatus('offline');
      }
    };

    fetchApiStatus();
  }, []);

  return <div>API Status: {status}</div>;
};

export default ApiStatus;
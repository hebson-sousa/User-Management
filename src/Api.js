export const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
  };
  
  export const addUser = async (user) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return response.json();
  };  
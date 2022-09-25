const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  
  const getUsers = async () => {
    try {
      const response = await fetch(
        'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all',
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
      );
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export default getUsers;
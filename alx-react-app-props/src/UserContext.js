import { createContext } from 'react';

const UserContext = createContext({
  name: 'Ediga Idu',
  age: 30,
  bio: 'Software developer from Abuja.',
});

export default UserContext;
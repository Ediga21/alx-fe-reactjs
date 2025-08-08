import { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const { name, email } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

export default UserProfile;
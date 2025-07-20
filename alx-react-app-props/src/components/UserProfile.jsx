import { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const { name, age, bio } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Bio:</strong> {bio}</p>
    </div>
  );
}

export default UserProfile;
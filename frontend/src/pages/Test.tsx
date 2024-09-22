import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'; //

export const Test = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Welcome to the Protected Page!</h1>
    </div>
  );
};

export default Test;

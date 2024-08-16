import { useAuth } from "../AuthContext";

const AdminDashboard = () => {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return <p>Loading...</p>; // or you can display a fallback UI or redirect
  }
  return (
    <div className="flex items-start justify-start h-full p-6">
      <div className="flex flex-col items-center justify-center">
        <h1>Login As : {currentUser.userType} </h1>
        <p>Email : {currentUser.email}</p>
        <p>Name : {currentUser.name}</p>
      </div>
    </div>
  );
};

export default AdminDashboard;

import { Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext"


const ProtectedRoute = () => {
    const {loading, isAuthenticathed} = useAuth();
    //console.log(loading,isAuthenticathed);
    if (loading) return <div>Loading...</div>;
    if(!loading && !isAuthenticathed) return <Navigate to='/login' replace/>
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default ProtectedRoute

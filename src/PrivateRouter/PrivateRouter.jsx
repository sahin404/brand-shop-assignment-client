import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRouter = ({children}) => {
    const {user} = useContext(AuthContext);
    if(user){
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

PrivateRouter.propTypes = {
    children:PropTypes.node
}
export default PrivateRouter;
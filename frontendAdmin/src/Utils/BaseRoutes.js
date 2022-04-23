import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom'

const BaseRoute = ({children}) => {
    const session = useSelector((state) => state.session);
    const { authenticated } = session;
    let location = useLocation()
  
    if(!authenticated){
        return <Navigate
            replace 
            to = "/login"
            state= {{
                from: location
            }}
        />
    }else{
        return children
    }

}

export default BaseRoute
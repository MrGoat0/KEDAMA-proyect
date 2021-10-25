import { Route, Redirect } from "react-router-dom"
import { isExpired, decodeToken } from "react-jwt"

const PrivateRoute = ({ children, ...rest }) => {

    let auth = localStorage.getItem("token")
    const dec = decodeToken(auth)
    const isExp = isExpired(auth)

    return (
        <Route
            {...rest}
            render={({ location }) => dec && !isExp ? (children) :
                (<Redirect to={{ pathname: "/", state: { from: location } }} />)
            }
        />
    )
}

export default PrivateRoute;
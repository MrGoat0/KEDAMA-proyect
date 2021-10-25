import { Route, Redirect } from "react-router-dom"
import { isExpired, decodeToken } from "react-jwt"

const PrivateRouteRoles = ({ validate, setValidate, children, ...rest }) => {

    let auth = localStorage.getItem("token")
    const dec = decodeToken(auth)
    const isExp = isExpired(auth)

    return (
        <Route
            {...rest}
            render={({ location }) => (dec && !isExp && validate) ? (children) :
                (<Redirect to={{ pathname: "/categories/", state: { from: location } }} />)
            }
        />
    )
}

export default PrivateRouteRoles;
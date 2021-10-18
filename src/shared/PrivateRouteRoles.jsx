import { Route, Redirect } from "react-router-dom"
import { isExpired, decodeToken } from "react-jwt"
import React, { useEffect } from "react"
import api from "../api"


const PrivateRouteRoles = ({ validate, setValidate, children, ...rest }) => {

    let auth = localStorage.getItem("token")
    const dec = decodeToken(auth)
    const isExp = isExpired(auth)

    useEffect(() => {

        const fetchRole = async () => {
            const response = await api.users.validateRole({
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    authorization: "Bearer " + localStorage.getItem('token'),
                },
            })
            setValidate(response.isValidated)

        }

        fetchRole()

    }, [validate, setValidate])

    return (
        <Route
            {...rest}
            render={({ location }) => (dec && !isExp && validate) ? (children) :
                (<Redirect to={{ pathname: "/categories", state: { from: location } }} />)
            }
        />
    )
}

export default PrivateRouteRoles;
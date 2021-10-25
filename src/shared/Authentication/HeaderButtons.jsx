import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import api from "../../api"
import { useState } from "react"
import { isExpired, decodeToken } from "react-jwt"

const HeaderButtons = (props) => {
    const { isLoggedIn, setLogin, setValidate } = props;
    const [userInfo, setUserInfo] = useState({ state: null })

    const login = async (response) => {
        localStorage.setItem('token', response.tokenId)
        await api.users.getUser().then(res => {
            if (res.state) {
                setLogin(true)
                setValidate(res.role === 'admin')
            } else {
                logout()
                setUserInfo({
                    email: res.email,
                    state: res.state
                })

            }
        })
    }

    const logout = () => {
        setLogin(false)
        localStorage.removeItem("token");
    };

    const loginError = (err) => {
        console.log(err);
    };

    if (isLoggedIn) {
        return (
            <>

                <span className="d-flex justify-content-between mr-5 just-font">
                    {!isExpired(localStorage.getItem("token")) ? decodeToken(localStorage.getItem("token")).email : logout()}
                </span>


                <Link to="/categories" >
                    <button type="button" className="btn btn-light mx-2">
                        Menú
                    </button>
                </Link>

                <button type="button" onClick={logout} className="btn btn-outline-light mx-2">
                    Cerrar sesión
                </button>
            </>
        )
    } else {
        return (
            <>
                <span className="d-flex justify-content-between mr-5 just-font">
                    {userInfo.state === null ? "" : `${userInfo.email} (inactivo)`}
                </span>
                <GoogleLogin
                    clientId="758311109371-ard4nkmjub93unf80oe101fp4anqbr8f.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={login}
                    onFailure={loginError}
                    cookiePolicy={'single_host_origin'}
                    href="/categories"
                />
            </>
        )
    }

}

export default HeaderButtons;
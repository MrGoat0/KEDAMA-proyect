import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import api from "../../api"
import { useState } from "react"
import { decodeToken } from "react-jwt"


const HeaderButtons = (props) => {
    const { isLoggedIn, setLogin } = props;
    const [userInfo, setUserInfo] = useState({ state: "temp" });

    const login = async (response) => {
        localStorage.setItem('token', response.tokenId)
        await api.users.getUser(
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    authorization: "Bearer " + localStorage.getItem('token'),
                },
            }).then(res => {
                if (res.state) {
                    setUserInfo({
                        email: res.email,
                        state: res.state,
                        role: res.role
                    })
                    setLogin(true)
                } else {
                    setUserInfo({
                        email: res.email,
                        state: res.state,
                        role: res.role
                    })
                    logout()
                }
            })
    }

    const logout = () => {
        localStorage.removeItem("token");
        setLogin(false)
    };

    const loginError = (err) => {
        console.log(err);
    };

    if (isLoggedIn) {
        return (
            <>

                <span className="d-flex justify-content-between mr-5 just-font">
                    {decodeToken(localStorage.getItem("token")).email}
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
                    {userInfo.state ? "" : `${userInfo.email} (inactivo)`}
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
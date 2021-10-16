import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";

const HeaderButtons = (props) => {
    const { isLoggedIn, setLogin } = props;

    const login = (response) => {
        setLogin(true);
        localStorage.setItem('token', response.tokenId)
    }

    const logout = () => {
        setLogin(false);
        localStorage.removeItem("token");
    };

    const loginError = (err) => {
        console.log(err);
    };

    if (isLoggedIn) {
        return (
            <>
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
                <Link to="/categories" >
                    <GoogleLogin
                        clientId="758311109371-ard4nkmjub93unf80oe101fp4anqbr8f.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={login}
                        onFailure={loginError}
                        cookiePolicy={'single_host_origin'}
                        href="/categories"
                    />
                </Link>
                {/* <Link to="/PageNotFound" >
                    <button type="button" className="btn btn-outline-light mx-2">
                        Sign-up
                    </button>
                </Link> */}
            </>
        )
    }

}

export default HeaderButtons;
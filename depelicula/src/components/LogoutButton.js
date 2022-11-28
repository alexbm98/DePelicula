import { Link } from 'react-router-dom';

export function LogoutButton() {
    return(
        <Link to={"/login"}>
            <input className="btn btn-danger me-md-3" type="button" value="Log out"></input>
        </Link>
    )
}
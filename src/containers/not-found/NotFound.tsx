import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="row">
            <div className="col-12 col-sm-6 offset-sm-3">
                <div className="alert alert-danger mt-4">
                    <div>Not Found</div>
                    <Link to="/" className="btn btn-danger btn-sm">Go to home</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound

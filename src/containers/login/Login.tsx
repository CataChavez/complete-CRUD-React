import { useContext, useState } from "react"
import { Redirect, useHistory } from "react-router-dom"
import ContextLogin from "../../contexts/ContextLogin"

const Login = () => {
    const contextLogin = useContext(ContextLogin)
    const [username, setUsename] = useState('')
    const history = useHistory()

    const handlerChange = ({ target }: any) => {
        setUsename(target.value)
    }

    const handlerSubmit = (event: any) => {
        event.preventDefault()
        contextLogin.logIn(username, () => {/* Agregar redireccionamiento aquí */})
        history.push('/list')
    }

    const disabled = () => username === ''

    return !contextLogin.isLogin ? (
        <div className="col-md-4 offset-md-4 mt-4" onSubmit={handlerSubmit}>
            <div className="card">
                <form>
                    <div className="card-body">
                        <label>Username (juan.123)</label>
                        <input className="form-control" value={username} onChange={handlerChange} />
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary" disabled={disabled()}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    ) : (<Redirect to="/list" />)
}

export default Login

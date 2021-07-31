import { useHistory } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import styles from './FormularioCreacion.module.css'

interface FormProps {
    onSubmit: (product: any) => void;
}

const FormularioCreacion = ({ onSubmit }: FormProps) => {
    const [name, setName, setNameValue] = useInput('')
    const [price, setPrice, setPriceValue] = useInput('0')
    const disabled = () => name === '' || price === ''
    const history = useHistory()

    const validNumber = (p: string) => {
        if (p === '') return '';
        const n = Number.parseInt(p) * 1
        return n
    }

    const handlerSubmit = (event: any) => {
        event.preventDefault()
        onSubmit({
            name,
            price,
        })
        setNameValue('')
        setPriceValue('0')
        history.push('/')
    }
    return (
        <div>
            <form onSubmit={handlerSubmit} className={styles.form}>
                <div className="card mt-4">
                    <div className={styles.cardHeader}>
                        Add new Product
                    </div>
                    <div className="card-body">
                        <label className={styles.label}>Name</label>
                        <input className="form-control" value={name} onChange={setName} />
                        <label className={styles.label}>Price</label>
                        <input className="form-control" min={0} type="number" value={validNumber(price)} onChange={setPrice} />
                    </div>
                    <div className={styles.cardFooter}>
                        <button className="btn btn-primary" disabled={disabled()}>Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormularioCreacion;

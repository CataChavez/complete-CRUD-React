import { useState, useContext, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ContextProduct from "../../contexts/ContextProduct"

const Detail = () => {
    const { id }: { id: string } = useParams()
    const [product, setProduct]: any = useState({})
    const context = useContext(ContextProduct)

    useEffect(() => {
        const p: any = context.getProduct(Number.parseInt(id))
        setProduct(p)
    }, [context, id])

    return (
        <div className="row">
            <div className="col-12 col-sm-6 offset-sm-3">
                {product ? (
                    <div className="card mt-4">
                        <div className="card-header">{product.name} ({product.id})</div>
                        <div className="card-body">
                            price: {product.price}
                        </div>
                        <div className="card-footer">
                            <Link to="/" className="btn btn-primary btn-sm">Go to home</Link>
                        </div>
                    </div>
                ) : (
                    <div className="alert alert-danger mt-4">
                        <div>Not Found</div>
                        <Link to="/" className="btn btn-danger btn-sm">Go to home</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Detail

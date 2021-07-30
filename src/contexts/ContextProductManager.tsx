import { useState } from 'react'
import ContextProduct from './ContextProduct'

interface ContextProductManagerProps {
    children: JSX.Element;
}

function ContextProductManager({ children }: ContextProductManagerProps) {
    const [products, setProducts] = useState<any>([{
        id: 1,
        name: 'Platano',
        price: 500,
    }])

    const addProduct = (product: any) => {
        // generamos un id a partir de la fecha para luego poder buscar
        // ademas de esta manera no se repetira
        const id = new Date().getTime()
        console.log(id)
        const newData = [...products, { id, ...product }]
        setProducts(newData)
    }

    const delProduct = (id: any) => {
        console.log(`delete ${id}`);
        const newData = products.filter((e: any) => e.id !== id)
        setProducts(newData)
    }

    const getProduct = (id: any) => {
        return products.find((e: any) => e.id === id)
    }

    const updateProduct = (product: any) => {
        console.log(product);
        const newData = products.map((p: any) => {
            if (p.id === product.id) {
                return ({ ...product })
            }
            return p
        })
        setProducts(newData)
    }

    return (
        <ContextProduct.Provider value={{
            products,
            addProduct,
            delProduct,
            getProduct,
            updateProduct,
        }}>
            {children}
        </ContextProduct.Provider >
    );
}

export default ContextProductManager

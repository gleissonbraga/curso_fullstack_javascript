import { createBrowserRouter  } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import AdminHome from "./pages/admin/AdminHome"
import RootLayout from "./pages/RootLayout"
import Product from "./pages/Product"
import loadProduct from "./loaders/products"
import ProductBoundary from "./errors/ProductBoundary"

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "products/:productId",
                element: <Product />,
                // função para carregar os dados para que a rota funcione
                loader: loadProduct,
                errorElement: <ProductBoundary />
            }, 
            {
                path: "cart",
                element: <Cart />
            },

        ]
    },
    {
        path: "/admin",
        element: <AdminHome />
    }
])

export default router
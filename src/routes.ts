import Dashboard from "./screens/Dashboard";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import Splash from "./screens/Splash";
import Home from "./screens/tabs/Home";
import Products from "./screens/tabs/Products";
import ProductDetails from "./screens/tabs/ProductDetails";
import Cart from "./screens/tabs/Cart";
import About from "./screens/tabs/About";

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    /*    {
            path: '/home',
            component:
        },*/
    {
        path: '/products',
        component: Products
    },
    {
        path: '/productDetails',
        component: ProductDetails
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/about',
        component: About
    }

]

/*export const routes = () => (
    <Route>
        <Route exact
path = "/sessionstate1"
component = {Template1}
/>
< Route
exact
path = "/sessionstate2"
component = {Template2}
/>
< Route
exact
path = "/sessionstate3"
component = {Template3}
/>
< /Route >
)*/

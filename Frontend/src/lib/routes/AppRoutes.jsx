import { createBrowserRouter } from "react-router-dom"
import Index from "../../Pages/Index/Index";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
    }
]);

export default router;
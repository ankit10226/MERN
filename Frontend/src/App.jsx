import { RouterProvider } from "react-router-dom";
import router from "./lib/routes/AppRoutes"; 
import AuthContextProvider from "./lib/context/AuthContextProvider";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#C7CEE0] to-[#E2E5EE]">
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </div>
  );
}

export default App;

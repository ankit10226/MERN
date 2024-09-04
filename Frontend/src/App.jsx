import { RouterProvider } from "react-router-dom";
import router from "./lib/routes/AppRoutes";
import AuthContext from "./lib/context/AuthContext";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#C7CEE0] to-[#E2E5EE]">
      <AuthContext>
        <RouterProvider router={router} />
      </AuthContext>
    </div>
  );
}

export default App;

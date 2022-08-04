import AppRoutes from "./routes"
import GlobalStyles from "./styles/global"
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <div>
        <AppRoutes />
      <GlobalStyles />
    </div>
  );
}

export default App;
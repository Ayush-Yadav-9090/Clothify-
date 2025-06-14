import { Navbar } from './Components/Layout/Navbar';
import { Footer } from './Components/Layout/footer';
import { Outlet } from 'react-router-dom';
import { CartProvider } from './Operation/AddCart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {



  return (
    <>
      < ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"

      />
      <CartProvider>
        <Navbar /> 
        <Outlet />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App

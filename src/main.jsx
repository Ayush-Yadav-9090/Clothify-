import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Home} from './Components/Home/Home.jsx'
import { ABOUT } from './Components/About/AboutUs.jsx'
import { Contact } from './Components/Contact/Contact.jsx'
import { Collection } from './Components/Policy/CollectionPath.jsx'
import { Product_discribtion } from './Components/Collections/ProductDescription.jsx'
import { Product_List } from './Components/Collections/ProductList.jsx'
import { Policypage } from './Components/Policy/Policypage.jsx';
import { Profile } from './Components/Collections/MyProfile.jsx'
import { Login } from './Components/Login/Login.jsx'




// Create all  Routes

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="my_profile" element={<Profile />} />
      <Route path="login" element={<Login />} />
      <Route path="collection" element={<Collection />} />
      <Route path="product/:id" element={<Product_discribtion />} />
      <Route path="about" element={<ABOUT />} />
      <Route path="contact" element={<Contact />} />
      <Route path='product_list' element={<Product_List/>}/>
      <Route path="policypage" element={<Policypage />} />


    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)

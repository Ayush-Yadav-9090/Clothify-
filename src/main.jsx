import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import {Home }from './components/Home.jsx'
import { ABOUT } from './components/About/About_us.jsx'
import { Contact } from './components/Contact/Contact.jsx'
import { Collection } from './components/Collection.jsx'
import { Product_discribtion } from './components/collections/Product_discribtion.jsx'
import { Product_List } from './components/collections/Product_List.jsx'
import {Policypage} from'./components/policy/Policypage.jsx'
import { Profile } from './components/collections/My_Profile.jsx'
import { Login } from './components/Login.jsx'



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

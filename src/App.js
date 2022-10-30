import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import PostItem from './components/PostItem';
import USERS from "./data/USERS.json"
import POSTS from "./data/POSTS.json"
import Tabs from './components/Tabs';
import MarketDisplay from './components/MarketDisplay';
import Gaming from './components/Gaming';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Debug from './components/Debug';
import { useEffect, useState } from 'react';
import News from './components/News';
import ViewChats from './components/ViewChats';

function App() {
  const [marketCart, setMarketCart] = useState([])

  useEffect(() => {
    const getItem = window.localStorage.getItem("CART")
    const target = JSON.parse(getItem)
    if (target !== null && target.length > 0) setMarketCart(cart => JSON.parse(getItem))
  }, [])


  useEffect(() => {
    const setItem = window.localStorage.setItem("CART", JSON.stringify(marketCart))

    return setItem
  }, [marketCart])

  return (

    <BrowserRouter>
      <div className="text-white bg-gray-800">
        <Navbar />

        <Tabs
          marketCart={marketCart} />

        <Contacts users={USERS} />

        <ViewChats />


        <div className='py-5 lg:py-24'>
          <Routes>

            <Route path='/mock-socialmedia-app/'
              element={<>
                <PostItem users={USERS} posts={POSTS} />
              </>}>
            </Route>

            <Route path='/mock-socialmedia-app/marketplace'
              element={
                <>
                  <MarketDisplay users={USERS}
                    marketCart={marketCart}
                    setMarketCart={setMarketCart} />
                </>} >
            </Route>

            <Route path='/mock-socialmedia-app/gaming'
              element={
                <>
                  <Gaming />
                </>} >
            </Route>

            <Route path='/mock-socialmedia-app/news'
              element={<News />} >
            </Route>

            <Route path='/mock-socialmedia-app/debug'
              element={<Debug />} >
            </Route>

          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;

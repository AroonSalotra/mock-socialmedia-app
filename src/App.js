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
import { useState } from 'react';
import News from './components/News';

function App() {
  const [marketCart, setMarketCart] = useState([])
  return (
    <BrowserRouter>
      <div className="text-white bg-gray-800">
        <Navbar />

        <Tabs
          marketCart={marketCart}
        />
        <div className='py-5 lg:py-24'>

          <Routes>

            <Route path='/mock-socialmedia-app/home'
              element={<>
                <Contacts users={USERS} />
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

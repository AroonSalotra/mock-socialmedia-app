import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import PostItem from './components/PostItem';
import USERS from "./data/USERS.json"
import POSTS from "./data/POSTS.json"
import Tabs from './components/Tabs';
import MarketDisplay from './components/MarketDisplay';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="text-white bg-gray-800">
        <Navbar />
        <div className='py-36'>

          <Routes>

            <Route path='/mock-socialmedia-app/home'
              element={<>
                <Contacts users={USERS} />
                <Tabs />
                <PostItem users={USERS} posts={POSTS} />
              </>}>
            </Route>

            <Route path='/mock-socialmedia-app/marketplace'
              element={
                <>
                  <MarketDisplay  users={USERS} />
                </>
              } >

            </Route>

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

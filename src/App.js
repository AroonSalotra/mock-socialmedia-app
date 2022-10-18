import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import ListPost from './render-components/ListPost';
import USERS from "./data/USERS.json"
import POSTS from "./data/POSTS.json"
import Tabs from './components/Tabs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="text-white bg-gray-800">
        <Navbar />
        <Routes>
          <Route path='/mock-socialmedia-app/home'
            element={<>
              <div className='py-20'>
                <Contacts users={USERS} />
                <Tabs />
                <ListPost users={USERS} posts={POSTS} />
              </div>
            </>} >
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import ListPost from './render-components/ListPost';
import USERS from "./data/USERS.json"
import POSTS from "./data/POSTS.json"
import Tabs from './components/Tabs';

function App() {


  return (
    <>
      <div className="text-white bg-gray-800">

        <Navbar />
        <div className='py-20'>
          <Contacts users={USERS} />
          <Tabs />
          <ListPost users={USERS} posts={POSTS} />
        </div>
      </div>
    </>
  );
}

export default App;

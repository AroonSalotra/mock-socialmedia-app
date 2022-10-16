import Comment from './components/Comment';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import Post from './components/Post';
import ListPost from './render-components/ListPost';
import Status from './components/Status';
import UserDisplay from './components/UserDisplay';
import USERS from "./data/USERS.json"
import Tabs from './components/Tabs';

function App() {

  return (
    <>
      <div className="text-white bg-gray-800">

        <Navbar />
        <div className='lg:py-20'>
          <Contacts users={USERS} />
          <Tabs />
          <ListPost users={USERS} />
        </div>
      </div>
    </>
  );
}

export default App;

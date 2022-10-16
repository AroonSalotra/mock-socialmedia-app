import Comment from './Components/Comment';
import Contacts from './Components/Contacts';
import Navbar from './Components/Navbar';
import Post from './Components/Post';
import ListPost from './render-components/ListPost';
import Status from './Components/Status';
import UserDisplay from './Components/UserDisplay';
import USERS from "./data/USERS.json"
import Tabs from './Components/Tabs';

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

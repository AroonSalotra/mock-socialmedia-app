import Comment from './Comment';
import Contacts from './Contacts';
import logo from './logo.svg';
// import './App.css';
// import './index.css';
import Navbar from './Navbar';
import Post from './Post';
import RecursiveComponent from './RecursiveComponent';
import ListPost from './render-components/ListPost';
import Status from './Status';
import Tabs from './Tabs';
import UserDisplay from './UserDisplay';
// src/data/USERS.json
import USERS from "./data/USERS.json"

function App() {

  const recursiveTarget = {
    a: 1,
    b: {
      b1: 4,
      b2: {
        b23: 'Hello',
      },
      b3: {
        b31: {
          message: 'Hi',
        },
        b32: {
          message: 'Hi',
        }
      }
    },
    c: {
      c1: 2,
      c2: 3,
    }
  }

  // https://www.dailymail.co.uk/sport/boxing/article-11320987/Referee-intervenes-STOP-Caleb-Plants-gravedigging-celebration-rival-KOd.html

  return (
    <>
      <div className="text-white bg-gray-800">
      
        <Navbar />
        <div className='lg:py-20'>
          <Contacts users={USERS} />
          {/* <Comment /> */}
          {/* <Status /> */}
          <Tabs />
          <ListPost users={USERS} />
        </div>
      </div>
    </>
  );
}

export default App;

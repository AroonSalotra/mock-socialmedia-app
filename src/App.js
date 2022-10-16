import Comment from './Comment';
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

  const userImg = "https://images.unsplash.com/photo-1665615839740-f9cfcc9568f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"

  return (
    <>
      <div className="text-white bg-gray-800">
        <Navbar />
        <div className='lg:py-20'>
          {/* <Comment /> */}
          <Status />
          <Tabs />
          <ListPost />
        </div>
      </div>
    </>
  );
}

export default App;

import Post from "./Post";
import POSTS from "../data/POSTS.json"
import USERS from "../data/USERS.json"

const ListPost = () => {

    // const { users, posts } = props;


    return (
        <section className="flex flex-col gap-16">
            {POSTS.map(({ postDate, postImg, postText, posterID, postLink }) => {
                return <Post
                    userName={USERS[posterID].userName}
                    userImg={USERS[posterID].userImg}
                    postDate={postDate}
                    postImg={postImg}
                    postText={postText}
                    postLink={postLink}
                    userId={posterID}
                    key={postDate + posterID + postText}
                    showComments={true}
                    imgClass="w-full h-auto"
                />
            })}
        </section>
    );
}

export default ListPost;
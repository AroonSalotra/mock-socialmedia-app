import Post from "../components/Post";

const ListPost = (props) => {

    const { users, posts } = props;


    return (
        <section>
            {posts.map(({ postDate, postImg, postText, posterID, postLink }) => {
                return <Post
                    userName={users[posterID].userName}
                    userImg={users[posterID].userImg}
                    postDate={postDate}
                    postImg={postImg}
                    postText={postText}
                    postLink={postLink}
                    key={postDate + posterID + postText}
                />
            })}
        </section>
    );
}

export default ListPost;
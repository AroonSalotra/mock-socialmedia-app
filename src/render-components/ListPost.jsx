import Post from "../Post";
import UserDisplay from "../UserDisplay";

const ListPost = (props) => {

    const { users } = props;

    const POSTS = [
        {
            posterID: 0,
            postDate: "14/10/2022",
            postText: "Lovely day at the beach",
        },
        {
            posterID: 1,
            postDate: "12/10/2022",
            postText: "Austria 2018",
            postImg: "https://images.unsplash.com/photo-1665440659316-c290791ccbca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        },
        {
            posterID: 2,
            postText: "My name is Lewis!",
        },

    ]

    return (
        <section>
            {POSTS.map(({ postDate, postImg, postText, posterID }) => {
                return <Post
                    userName={users[posterID].userName}
                    userImg={users[posterID].userImg}
                    postDate={postDate}
                    postImg={postImg}
                    postText={postText}
                />
            })}
        </section>
    );
}

export default ListPost;
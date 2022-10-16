import Post from "../Components/Post";
import UserDisplay from "../Components/UserDisplay";

const ListPost = (props) => {

    const { users } = props;

    const POSTS = [
        {
            posterID: 0,
            postDate: "14/10/2022",
            postText: "Lovely day at the beach",
        },
        {
            posterID: 3,
            postDate: "15/10/2022",
            postText: "Skiing Holiday",
            postImg: "https://images.unsplash.com/photo-1665859223778-25a4e39b259e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        },
        {
            posterID: 2,
            postText: "My name is Lewis!",
        },
        {
            posterID: 1,
            postDate: "12/10/2022",
            postText: "Austria 2018",
            postImg: "https://images.unsplash.com/photo-1665440659316-c290791ccbca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        },
        {
            posterID: 4,
            postLink: "https://www.dailymail.co.uk/sport/boxing/article-11320987/Referee-intervenes-STOP-Caleb-Plants-gravedigging-celebration-rival-KOd.html"
        }

    ]

    return (
        <section>
            {POSTS.map(({ postDate, postImg, postText, posterID, postLink }) => {
                return <Post
                    userName={users[posterID].userName}
                    userImg={users[posterID].userImg}
                    postDate={postDate}
                    postImg={postImg}
                    postText={postText}
                    postLink={postLink}
                />
            })}
        </section>
    );
}

export default ListPost;
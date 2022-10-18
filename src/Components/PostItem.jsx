import Post from "./Post";

const ListPost = (props) => {

    const { users, posts } = props;


    return (
        <section className="flex flex-col gap-16">
            {posts.map(({ postDate, postImg, postText, posterID, postLink }) => {
                return <Post
                    userName={users[posterID].userName}
                    userImg={users[posterID].userImg}
                    postDate={postDate}
                    postImg={postImg}
                    postText={postText}
                    postLink={postLink}
                    key={postDate + posterID + postText}
                    imgClass="w-full h-auto"
                />
            })}
        </section>
    );
}

export default ListPost;
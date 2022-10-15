import Post from "../Post";
import UserDisplay from "../UserDisplay";

const ListPost = () => {

    // const { userName, postDate, userImg, postImg } = props


    const DATA = [
        {
            userName: "Henrietta",
            userImg: "https://images.unsplash.com/photo-1665615839740-f9cfcc9568f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            postDate: "14/10/2022",
            postText: "Lovely day at the beach",
            postImg: "https://images.unsplash.com/photo-1665586072574-56b4dd11b941?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        },
        {
            userName: "Lucie",
            userImg: "https://images.unsplash.com/photo-1665615836594-614dc9187ee0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            postDate: "12/10/2022",
            postText: "Austria 2018",
            postImg: "https://images.unsplash.com/photo-1665440659316-c290791ccbca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        }

    ]

    return (
        <>
            {DATA.map(({ userName, userImg, postDate, postImg, postText }) => {
                return <Post
                    userName={userName}
                    userImg={userImg}
                    postDate={postDate}
                    postImg={postImg}
                    postText={postText}
                />
            })}

        </>
    );
}

export default ListPost;
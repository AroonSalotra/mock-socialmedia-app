import ListItem from "./render-components/ListItem";
import UserDisplay from "./UserDisplay";
import Comment from "./Comment";

const Post = (props) => {
    const { userName, postDate, userImg, postImg, postText } = props

    const postInteraction = [
        { text: "Like" },
        { text: "Comment" },
        { text: "Share" },
    ]

    const userClass = "flex"

    return (
        <>
            <div
                className="flex flex-col bg-gray-800 text-white items-center m-auto rounded-t-lg mt-4 md:w-50rem">

                <UserDisplay
                    userName={userName}
                    userImg={userImg}
                    showName={true}
                />

                <p className="text-gray-400">{`Posted on ${postDate}`}</p>

                {/* <p className="text-white font-normal px-4 py-2 text-lg">{postText}</p> */}

                <img
                    className="w-full h-auto"
                    src={postImg}
                    alt={`${postImg}'s post on ${postDate}`}
                />


                <hr className="w-11/12 mt-4" />

                <ListItem
                    classList={"flex justify-around w-full py-2"}
                    data={postInteraction} />

                <hr className="w-11/12" />


                <Comment
                    userImg={userImg}
                />


            </div>
        </>
    );
}

export default Post;
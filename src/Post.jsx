import ListItem from "./render-components/ListItem";
import UserDisplay from "./UserDisplay";
import Comment from "./Comment";

const Post = (props) => {
    const { userName, postDate, userImg, postImg, postText } = props

    return (
        <>
            <div
                className="flex flex-col bg-gray-900 text-white items-center m-auto rounded-t-lg mt-4 md:w-50rem">

                <div className="py-2">
                    <UserDisplay
                        userName={userName}
                        userImg={userImg}
                        showName={true} />

                    <p className="text-gray-400 text-center">
                        {`Posted on ${postDate}`}</p>
                </div>

                <p className="text-xl p-4">
                    {postText}
                </p>

                {postImg ?
                    <img
                        className="w-full h-auto"
                        src={postImg}
                        alt={`${postImg}'s post on ${postDate}`} />
                    :
                    null}
                <hr className="w-11/12" />

                <Comment
                    userImg={userImg}
                />


            </div>
        </>
    );
}

export default Post;
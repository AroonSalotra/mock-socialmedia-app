import ListItem from "../render-components/ListItem";
import UserDisplay from "./UserDisplay";
import Comment from "./Comment";

const Post = (props) => {
    const { userName, postDate, userImg, postImg, postText, postLink } = props

    return (
        <>
            <div
                className="flex flex-col bg-gray-900 text-white items-center m-auto rounded-t-lg mb-4 shadow-md shadow-slate-900 md:w-50rem lg:mt-4">

                <div className="py-2 px-8 bg-gray-800 rounded-b-lg lg:">
                    <UserDisplay
                        userName={userName}
                        userImg={userImg} />

                    <p className="text-gray-400 text-center">
                        {`Posted on ${postDate}`}</p>
                </div>

                <p className="text-xl p-4 w-full lg:pl-12">
                    {postText}
                </p>

                {postImg ?
                    <img
                        className="w-full h-auto"
                        src={postImg}
                        alt={`${postImg}'s post on ${postDate}`} />
                    :
                    null}

                {postLink ?
                    <a href={postLink} target="_blank" rel="noreferrer">
                        Link
                    </a>
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
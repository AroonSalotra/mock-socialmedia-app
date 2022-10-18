import UserDisplay from "./UserDisplay";
import Comment from "./Comment";
import ListItem from "./ListItem";

const Post = (props) => {
    const { userName, postDate, userImg, postImg, imgClass,
        postText, postLink, customClass, postType, item, price, lineBreak } = props

    const checkClass = customClass ? customClass : "flex flex-col bg-gray-900 text-white items-center m-auto rounded-t-lg mb-4 shadow-md shadow-slate-900 w-full lg:w-50rem mt-4"

    return (
        <>
            <div className={checkClass}>

                <div className="py-2 px-8 bg-gray-800 rounded-b-lg lg:">
                    <UserDisplay
                        userName={userName}
                        userImg={userImg} />

                    <p className="text-gray-400 text-center">
                        {`Posted on ${postDate}`}</p>
                </div>

                <p
                // className="text-xl p-4 w-full lg:pl-12"
                >
                    {postText}
                </p>

                {postImg ?
                    <img
                        className={imgClass}
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

                {lineBreak ?
                    <hr className="w-11/12" />
                    : null}


                {postType === "market" ?
                    <ul>
                        <li>{item}</li>
                        <li>£{price}</li>
                    </ul>
                    :
                    <Comment
                        userImg={userImg} />}

            </div>
        </>
    );
}

export default Post;
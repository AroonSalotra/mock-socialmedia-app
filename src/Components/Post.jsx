import UserDisplay from "./UserDisplay";
import Comment from "./Comment";
import USERS from "../data/USERS.json"

const Post = (props) => {
    const { postDate, postImg, imgClass,
        postText, postLink, customClass, postType, item, price,
        lineBreak, showComments, userId, userImg, userName, customName,
        showUser } = props

    const checkClass = customClass ? customClass : "flex flex-col bg-gray-900 text-white items-center m-auto rounded-t-lg mb-4 shadow-md shadow-slate-900 w-full transition-all animate-fade-in lg:w-50rem mt-4"

    // console.log(userId)

    return (
        <>
            <div className={checkClass}>

                <div className="py-2 px-8 bg-gray-800 rounded-b-lg">

                    {showUser ? <UserDisplay
                        userImg={userImg}
                        userId={userId}
                        showName={true}
                        customName={customName ? customName : null}
                    />
                        : null}

                    <p className="text-gray-400 text-center">
                        {`Posted on ${postDate}`}</p>
                </div>

                <p className="py-4">
                    {postText}
                </p>

                {postImg ?
                    <img
                        className={`${imgClass}`}
                        src={postImg}
                        alt={`${postImg}'s post on ${postDate}`} />
                    :
                    null}

                {postLink ?
                    <a href={postLink}
                        target="_blank"
                        rel="noreferrer" >
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
                    : showComments ?
                        <Comment userImg={userImg ?
                            userImg : USERS[userId].userImg} />
                        : null}

            </div>
        </>
    );
}

export default Post;
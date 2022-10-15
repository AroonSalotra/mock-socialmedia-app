import UserDisplay from "./UserDisplay";
import { useEffect, useState } from "react";
import ViewComments from "./ViewComments";
import { BsArrowBarUp } from "react-icons/bs"
import ListItem from "./render-components/ListItem";

const Comment = (props) => {
    const [currentComment, setCurrentComment] = useState("")
    const [prevComment, setPrevComment] = useState([])
    const [showInput, setShowInput] = useState("hidden")

    const handleShowInput = () => {
        const checkState = showInput === "hidden"
        setShowInput(
            checkState ? "block" : "hidden"
        )
    }

    const postInteraction = [
        { text: "Like" },
        { text: "Comment", clickEffect: handleShowInput },
        { text: "Share" },
    ]

    const handleChange = (e) => {
        setCurrentComment(e.target.value)
    }

    const handleClick = () => {

        if (currentComment.length) {
            setPrevComment(current => [...current, currentComment])
            setCurrentComment("")
        } return null
    }



    console.log(currentComment)

    const tempImg = "https://st4.depositphotos.com/11634452/41441/v/600/depositphotos_414416674-stock-illustration-picture-profile-icon-male-icon.jpg"

    return (
        <>
            <ListItem
                classList={"flex justify-around w-full"}
                data={postInteraction} />

            <ViewComments>
                {prevComment}
            </ViewComments>

            <div className={`flex gap-x-4 py-2 ${showInput}`}>

                <UserDisplay
                    userImg={tempImg}
                    showName={false} />

                <form action=""
                    onSubmit={(e) => e.preventDefault(e)}>


                    <input
                        className="text-white font-semibold h-fit p-2.5 rounded-full items-baseline w-10/12 resize-none bg-gray-600 lg:w-96"
                        type="text"
                        onChange={(e) => handleChange(e)}
                        value={currentComment} />

                    <button
                        onClick={() => handleClick()}
                        type="submit">
                        <span className="text-4xl hidden md:block">
                            <BsArrowBarUp />
                        </span>
                    </button>

                </form>

            </div>
        </>
    );
}

export default Comment;

/* 
<textarea
                 className="text-white font-semibold h-fit p-2.5 rounded-full items-baseline w-10/12 resize-none bg-gray-600 lg:w-96"
                 placeholder="Comment on this post"
                 name=""
                 id=""
                 cols="30"
                 rows="1"
                 onChange={(e) => handleChange(e)}
                 value={currentComment}
             /> 
             */
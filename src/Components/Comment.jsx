import UserDisplay from "./UserDisplay";
import { useState } from "react";
import ViewComments from "./ViewComments";
import ListItem from "./ListItem";

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
        { text: "Comments", clickEffect: handleShowInput },
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

    return (
        <>
            <ListItem
                ulClass={"flex justify-around w-full"}
                data={postInteraction} />

            <ViewComments
                classList={showInput} >
                {prevComment}
            </ViewComments>

            <div className={`flex gap-x-4 py-2 ${showInput}`}>

                <UserDisplay
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
                        {/* <span className="text-4xl hidden md:block">
                            <BsArrowBarUp />
                        </span> */}
                    </button>

                </form>

            </div>
        </>
    );
}

export default Comment;
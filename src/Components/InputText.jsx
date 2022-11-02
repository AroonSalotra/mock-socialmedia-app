import { useState } from "react"
import ViewComments from "./ViewComments"

const InputText = (props) => {
    const [currentComment, setCurrentComment] = useState("")
    const [prevComment, setPrevComment] = useState([])

    const { type } = props;

    const { setPlaceholder, addClass } = props;

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

            <form action=""
                onSubmit={(e) => e.preventDefault(e)}>

                <input
                    className={`text-white m-auto font-semibold h-fit rounded-md items-baseline w-10/12 p-1 resize-none bg-gray-700 ${addClass}`}
                    type="text"
                    placeholder={setPlaceholder ? setPlaceholder : ""}
                    onChange={(e) => handleChange(e)}
                    value={currentComment}
                />

                <button
                    onClick={() => handleClick()}
                    type="submit">
                </button>

            </form>

            <ViewComments
                type={type ? type : null}
                classList={`${addClass}`}>
                {prevComment}
            </ViewComments>
        </>
    );
}

export default InputText;
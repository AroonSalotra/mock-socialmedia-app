import { GrCheckmark, GrClose } from "react-icons/gr"
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai"
import { useState } from "react"

const SelectButtons = () => {
    const [bgCheck, setBgCheck] = useState("")
    const [bgCross, setBgCross] = useState("")

    const selectIcon = (target) => {
        if (target === "check" & bgCheck === "") {
            setBgCheck(current => "bg-lime-700")
            setBgCross(current => "")
        } if (target === "cross") {
            setBgCross(current => "bg-red-600")
            setBgCheck(current => "")
        }
    }

    return (
        <>
            <div className="flex justify-center text-4xl gap-5 pt-4 cursor-pointer">

                <AiOutlineCheck
                    onClick={() => selectIcon("check")}
                    className={`text-gray-200 stroke-white stroke-2 border-4 border-lime-500 rounded-lg px-2 ${bgCheck} hover:bg-lime-600 active:scale-110`} />

                <AiOutlineClose
                    onClick={() => selectIcon("cross")}
                    className={`text-gray-200 stroke-white stroke-2 border-4 border-red-900 rounded-lg px-2 ${bgCross} hover:bg-red-600 active:scale-110`} />


            </div>
        </>
    );
}

export default SelectButtons;
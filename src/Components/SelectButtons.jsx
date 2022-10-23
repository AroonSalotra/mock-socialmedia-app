import { GrCheckmark, GrClose } from "react-icons/gr"
import { useState } from "react"

const SelectButtons = () => {
    const [bgCheck, setBgCheck] = useState("")
    const [bgCross, setBgCross] = useState("")

    const selectIcon = (target) => {
        if (target === "check" & bgCheck === "") {
            setBgCheck(current => "bg-lime-300")
            setBgCross(current => "")
        } if (target === "cross") {
            setBgCross(current => "bg-red-500")
            setBgCheck(current => "")
        }
    }

    return (
        <>
            <div className="flex justify-center text-5xl gap-5 pt-4 cursor-pointer">

                <GrCheckmark
                    onClick={() => selectIcon("check")}
                    className={`border-4 border-lime-500 rounded-lg px-2 ${bgCheck} hover:bg-lime-300`} />
                <GrClose
                    onClick={() => selectIcon("cross")}
                    className={`border-4 border-red-900 rounded-lg px-2 ${bgCross} hover:bg-red-500`} />

            </div>
        </>
    );
}

export default SelectButtons;
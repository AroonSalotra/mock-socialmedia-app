import DebugComponent from "./DebugComponent";
import { useEffect, useRef, useState } from "react";

const Debug = () => {

    const [isActive, setIsActive] = useState(false)

    const myData = [
        { id: 0, addClass: "red" },
        { id: 1, addClass: "lime" },
        { id: 2, addClass: "amber" },
    ]

    return (
        <>
            {/* <div className={`flex gap-5 justify-center`}>
                {myData.map(({ id, addClass }) => {
                    return <>
                        <DebugComponent
                            id={id}
                            addClass={addClass} />
                    </>
                })}
            </div> */}

            <div className="flex justify-center gap-5 border-2">
                <DebugComponent />
                <DebugComponent />
                <DebugComponent />
            </div>
        </>

    );
}

export default Debug;
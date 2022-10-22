import DebugComponent from "./DebugComponent";
import { useEffect, useRef } from "react";

const Debug = () => {
    return (
        <>
            <div>
                <DebugComponent
                    MyComponent={"Market"}
                 />
            </div>
        </>

    );
}

export default Debug;
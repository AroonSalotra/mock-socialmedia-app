import { Link } from "react-router-dom";

const DebugComponent = (props) => {

    const { text, tag } = props;


    const CustomTag = tag ? tag : "h1"


    return (
        <div className="text-center text-4xl">
            <h1>
                {text}
            </h1>

            <CustomTag>
                Debug Child
            </CustomTag>



        </div>
    );
}

export default DebugComponent;
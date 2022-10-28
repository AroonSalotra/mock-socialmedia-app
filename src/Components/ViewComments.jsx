import UserDisplay from "./UserDisplay";

const ViewComments = (props) => {

    const { classList, type, children } = props;

    // console.log(props.children.length)

    // console.log(type)

    // console.log(typeof (children) === "object")

    return (
        <div className={`flex flex-col gap-2 w-8/12 w-screen overflow-auto max-h-60 md:w-11/12 ${classList}`}>

            {/* {(typeof (children) === "object") ?
                children.map((comment) => {
                    return <div
                        key={comment.length + props.children.length}
                        className="flex items-center gap-5 bg-gray-700 p-2 px-8 rounded-lg">
                        <p>
                            {comment}
                        </p>
                    </div>
                })
                : null} */}

            {type === undefined ? children.map((comment) => {
                return <div
                    key={comment.length + props.children.length}
                    className="flex items-center gap-5 bg-gray-700 p-2 px-8 rounded-lg">
                    <p>
                        {comment}
                    </p>
                </div>
            }) : type === "chatMsg" ? "test"
                : null}
        </div>
    );
}

export default ViewComments;
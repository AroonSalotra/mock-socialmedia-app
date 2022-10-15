import UserDisplay from "./UserDisplay";

const ViewComments = (props) => {

    return (
        <div className="flex flex-col gap-2 w-8/12 w-screen overflow-auto max-h-60 md:w-8/12">
            {props.children.map((comment) => {
                return <div
                    key={comment.slice(0, 4)}
                    className="flex items-center gap-5 bg-gray-700 p-2 px-8 rounded-lg">
                    <span>
                        <UserDisplay />
                    </span>
                    <p>
                        {comment}
                    </p>
                </div>
            })}
        </div>
    );
}

export default ViewComments;
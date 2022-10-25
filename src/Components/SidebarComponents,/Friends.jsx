import UserDisplay from "../UserDisplay";
import USERS from "../../data/USERS.json"

const Friends = () => {
    return (
        <div>
            <h3 className="text-2xl font-semibold p-5">
                Your Friends</h3>

            {USERS.map(({ userId }) => {
                return <UserDisplay
                    userId={userId}
                    showName={true}
                />
            })}
        </div>
    );
}

export default Friends;
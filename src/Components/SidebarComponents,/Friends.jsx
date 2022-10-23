import UserDisplay from "../UserDisplay";
import USERS from "../../data/USERS.json"

const Friends = () => {
    return (
        <div>
            <h3 className="text-3xl font-semibold">
                Friends</h3>

            {USERS.map(({ userId }) => {
                return <UserDisplay
                    userId={userId}
                />
            })}
        </div>
    );
}

export default Friends;
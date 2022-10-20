import UserDisplay from "../UserDisplay";
import USERS from "../../data/USERS.json"

const Friends = () => {
    return (
        <div>
            <h3 className="text-3xl font-semibold">
                Friends</h3>

            {USERS.map(({ userName, userImg }) => {
                return <UserDisplay
                    userName={userName}
                    userImg={userImg}
                />
            })}
        </div>
    );
}

export default Friends;
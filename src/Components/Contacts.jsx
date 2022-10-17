import ListItem from "../render-components/ListItem";
import UserDisplay from "./UserDisplay";

const Contacts = (props) => {
    const { users } = props;

    const userFilter = users.slice(0)

    return (
        <section className="fixed right-1 hidden py-2 xl:block">
            <h3 className="text-2xl font-semibold">Online Contacts</h3>

            <div className="flex flex-col gap-5 py-4">
                {userFilter.map(({ userName, userImg, userId }) => {
                    return <UserDisplay
                        userImg={userImg}
                        showStatus={true}
                        userName={userName}
                        hoverEffect={true}
                        userClass={"w-64"}
                        key={userId}
                    />
                })}
            </div>
        </section>
    );
}

export default Contacts;
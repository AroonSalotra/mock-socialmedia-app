import ListItem from "./render-components/ListItem";
import UserDisplay from "./UserDisplay";

const Contacts = (props) => {
    const { users } = props;

    const userFilter = users.slice(0, 5)

    return (
        <section className="fixed right-10 hidden lg:block">
            <h3 className="text-2xl font-semibold">Online Contacts</h3>

            <div className="flex flex-col gap-5 py-4">
                {userFilter.map(({ userName, userImg, userId }) => {
                    return <UserDisplay
                        userImg={userImg}
                        showStatus={true}
                        userName={userName}
                        userClass={"w-60"}
                    />
                })}
            </div>
        </section>
    );
}

export default Contacts;
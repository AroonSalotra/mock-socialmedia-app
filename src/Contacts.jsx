import ListItem from "./render-components/ListItem";
import UserDisplay from "./UserDisplay";

const Contacts = () => {
    const DATA = [
        {
            userName: "Henrietta",
            userImg: "https://images.unsplash.com/photo-1665615839740-f9cfcc9568f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
            userName: "Lucie",
            userImg: "https://images.unsplash.com/photo-1665615836594-614dc9187ee0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
            userName: "Tom Harry",
            userImg: "https://images.unsplash.com/photo-1665808044552-102b98dbdda6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
        },
        {
            userName: "Minch Clark",
            userImg: "https://images.unsplash.com/photo-1665751461693-e3fd01d63645?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
            userName: "Sam Bollocks",
            userImg: "https://plus.unsplash.com/premium_photo-1661713771405-09e2b484fdc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
            userName: "Spaffalos",
            userImg: "https://plus.unsplash.com/premium_photo-1664875849353-883c251a5898?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        }
    ]

    return (
        <section className="fixed right-20">
            <h3 className="text-2xl">Online Contacts</h3>
            <div className="flex flex-col gap-5 py-4">
                {DATA.map(({ userName, userImg }) => {
                    return <UserDisplay
                        userImg={userImg}
                        showStatus={true}
                        // userName={userName}
                    />
                })}
            </div>
        </section>
    );
}

export default Contacts;
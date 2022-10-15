import UserDisplay from "./UserDisplay";

const Comment = (props) => {
    const tempImg = "https://st4.depositphotos.com/11634452/41441/v/600/depositphotos_414416674-stock-illustration-picture-profile-icon-male-icon.jpg"
    return (
        <>
            <div className="flex gap-x-4 py-2">
                <UserDisplay
                    userImg={tempImg}
                    showName={false}
                />

                <textarea
                    className="text-black h-fit p-2.5 rounded-full items-baseline w-10/12 lg:w-96"
                    placeholder="Comment on this post"
                    name=""
                    id=""
                    cols="30"
                    rows="1" />
            </div>
        </>
    );
}

export default Comment;
import UserDisplay from "../UserDisplay";

const Events = () => {

    const data = [
        {
            date: "06/11/2022",
        }
    ]

    return (
        <div className="text-center">
            {data.map(({ date }) => {
                return <div>
                    <p>{date}</p>
                    <UserDisplay />
                </div>
            })}
        </div>
    );
}

export default Events;

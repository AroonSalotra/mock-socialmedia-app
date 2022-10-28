const ViewChat = (props) => {
    const { data } = props;

    console.log(data)

    return (
        <section>
            <ul className="flex flex-col gap-1 pr-4 h-60 overflow-y-auto">
                {data.map(({ to, from }, index) => {
                    return <>
                        {(to.length > from.length ? to : from)
                            .map((elem, index) => {
                                return <>
                                    {to[index] ? <li className="bg-lime-700 mr-10 rounded-md rounded-bl-none">
                                        {to[index]}
                                    </li> : null}

                                    {from[index] ? <li className="bg-gray-700 ml-10 rounded-md rounded-br-none">
                                        {from[index]}
                                    </li> : null}
                                </>
                            })}
                    </>
                })}
            </ul>
        </section>
    );
}

export default ViewChat;
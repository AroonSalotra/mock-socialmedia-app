const StyledButton = (props) => {

    const { children, clickFunction } = props;

    let ButtonTag = `button`

    // let Array = []
    // Array.push(props)

    // console.log(props)

    return (
        <>
            <button className="w-fit bg-gray-900 py-1 px-4 font-semibold rounded-md hover:bg-slate-400 active:scale-95"
                onClick={clickFunction ? clickFunction : null}>
                {children}
            </button>
        </>
    );
}

export default StyledButton;

{/* <ButtonTag
    className="w-fit bg-slate-500 py-1 px-4 font-semibold rounded-md hover:bg-slate-400 active:scale-95">
    {children}
</ButtonTag> */}
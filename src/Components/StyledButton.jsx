const StyledButton = (props) => {

    const { children, clickFunction, addClass } = props;

    return (
        <>
            <button className={`w-fit bg-gray-900 py-1 px-4 font-semibold rounded-md hover:bg-slate-400 active:scale-105 ${addClass}`}
                onClick={clickFunction ? clickFunction : null}>
                {children}
            </button>
        </>
    );
}

export default StyledButton;
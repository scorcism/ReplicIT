



const Message = ({ op,error }) => {

    

    return (
        <>
            <div style={{
                position:"absolute",
                top:"6rem",
                right:"3rem",
                padding: "5px 25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "capitalize",
                border:"1px solid black",
                borderRadius:"9px",
                zIndex:"999",
                opacity:`${op}`,
                transition: "ease-in 0.5s",

            }}
            className="alert w-32 bg-red-500 font-bold  h-14">

                <div className="">
                    {error}
                </div>

            </div>

        </>
    )
}

export default Message
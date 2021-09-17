const SmallPopUps = ({ title }) => {
    return (
        <div>
            {
                title ? <h1 className="font-bold">{title}</h1> : <></>
            }
        </div>
    )
}

export default SmallPopUps
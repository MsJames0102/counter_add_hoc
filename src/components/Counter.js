const Counter = ({upCount, downCount}) => {
const handleClick = () => {
    upCount()
}
const handleClickOne = () => {
    downCount()
}

    return (<>
    <button onClick={handleClick}>Up</button>
    <button onClick={handleClickOne}>Down</button>
    </>)

}

export default Counter
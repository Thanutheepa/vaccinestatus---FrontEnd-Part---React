
export default (props)=>{
    const {name, address} = props
    console.log("name, address", name, address)

    return <>
        <p>{name}={address}</p>
    </>
}
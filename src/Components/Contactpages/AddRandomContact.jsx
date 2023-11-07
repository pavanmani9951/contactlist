import { getUser } from "../../Utilities/Api"

const getRandomContact = async (props)=>{
    const responseFromApi = await getUser();
console.log(responseFromApi);
return props.handleAddRandomContact({
    name:responseFromApi.data.first_name+" "+responseFromApi.data.last_name,
    email:responseFromApi.data.email,
    phone:responseFromApi.data.phone_number,

})
}

const AddRandomContact = (props) =>{
    return(<div> 
        <button className="btn btn-success form-control" onClick={()=>getRandomContact(props)}>Add Random Contact</button>
    </div>)
}

export default AddRandomContact
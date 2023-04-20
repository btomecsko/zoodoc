import { useParams } from "react-router-dom";

const PetProfile = () => {
    const name  = useParams().name;
    console.log(name)

    return(
        <h1>Hello</h1>
    )

}

export default PetProfile;
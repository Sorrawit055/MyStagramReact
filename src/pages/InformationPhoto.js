import React from "react"
import Profile from "../components/Profile";

const InformationPhoto = (props) => {
    return(
<>
    <Profile id={props.match.params.id} />
</>
    );                 //id={props.match.params.id}
}; 
export default InformationPhoto;
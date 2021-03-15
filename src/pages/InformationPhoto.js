import React from "react"
import Profile from "../components/Profile";

const InformationPhoto = (props) => {//ส่งprops id ไป
    return(
<>
    <Profile id={props.match.params.id} />
</>
    );                 //id={props.match.params.id}
}; 
export default InformationPhoto;
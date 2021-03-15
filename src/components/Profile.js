import unsplash from '../api/unsplash'
import '../App.css'
import React, { useState, useEffect } from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import Collection from './Collection/Collection';

const Profile = ({id}) => {
    const [profile, setprofile] = useState([]);
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
    useEffect(() => {
        unsplash.get('/photos/'+id)
          .then((response)=>{
            setprofile([...profile,{...profile ,...response.data}]);
          });
      }, [id]);

      const [collection, setCollection] = useState([]);
          const updateCollection = () =>{
            unsplash.get('/photos/random?count=15')
            .then((response)=>{
              setCollection([...collection ,...response.data]);
            });
          };
          useEffect(() => {
            updateCollection();
          }, []);
          
    return (
     <div>
    {profile.map((profile) => (
      <center>

      <Container>
      <Row>
       
        <h1 class="h1">PROFILE</h1>
        <img src= {profile.urls.small} alt="" class="photo__file" />
        <h3 class="h3">Name : {profile.user.first_name} {profile.user.last_name}</h3>
        <h3 class="h3">Like : {profile.likes}</h3>
        <h3 class="h3">City/Country : {profile.location.city},{profile.location.country}</h3>
        <h3 class="h3">Instagram : {profile.user.instagram_username} </h3>
        <h3 class="h3">Twitter : {profile.twitter_username} </h3>
        <h3 class="h3">links : <a href={profile.user.links.html}> My Profile in Unsplash </a></h3>
        <h3 class="h3">Photo : {profile.user.total_photos} </h3>
        <h3 class="h3">Views : {profile.views} </h3>
        <h3 class="h3">Downloads : {profile.downloads} </h3>
        <h3 class="h3">RelatedCollections : {profile.related_collections.total} {profile.related_collections.type}</h3>

    
      </Row>
   
      </Container>  

            </center>
    ))}
 

    <Collection />
    </div>
    



     
    )
}
export default Profile;
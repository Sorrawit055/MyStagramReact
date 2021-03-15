import unsplash from '../../api/unsplash'
import React, { useState, useEffect } from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

const Collection = () => {
    const [profile, setprofile] = useState([]);
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

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
 <center>
          <div class="collection">  <h1 class="h1">Collection</h1>
    {collection.map((collection) => (

            <img src= {collection.urls.small} alt="" class="photo__file" /> 

    ))}
       </div> &nbsp;&nbsp;
    
    </center>
    </div>
    



     
    )
}
export default Collection;
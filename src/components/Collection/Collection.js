import unsplash from '../../api/unsplash'
import React, { useState, useEffect } from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

const Collection = () => {//เป็นตัวเเก้ขัดไว้ก่อนเพราะ ไม่รู้ว่าดุง ตัว collection จากที่ไหน /user/username/collection ก็ไม่ได้
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

      const [collection, setCollection] = useState([]);//setstate แบบอาจารณ์ ที่ทำเอง โดยเก็บค่าไว้ที่ collection
          const updateCollection = () =>{
            unsplash.get('/photos/random?count=15') //ตัวดึง api 
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
    {collection.map((collection) => (//เอามาวนลูป

            <img src= {collection.urls.small} alt="" class="photo__file" /> 

    ))}
       </div> &nbsp;&nbsp;
    
    </center>
    </div>
    



     
    )
}
export default Collection;
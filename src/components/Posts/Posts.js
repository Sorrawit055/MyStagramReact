import React from 'react'
import './Posts.css'
import {
  Container,Row,Center
} from 'reactstrap';

const Photo = (props) => { //ดึงข้อมูลโดย props หรือเปล่าไม่รู้ 
  let photo = null

  if (props.photo) {
    photo = (
<Container>        
    {props.photo.data.map((photo) => ( //เอามาวนลูป เป็นรูปเเละข้อมูลจากที่ดึงมาใน photo
      <center>
    <div>
        <Row>
        <section class="photo">
    <header class="photo__header">
   
      <div class="photo__header-column">
       <a href = "" >
        <img class="photo__avatar" src={photo.user.profile_image.small}/> 
        </a>
      </div>
      <div class="photo__header-column">
        <span class = "photo__username" >
         <a href ={"/informationphoto/" + photo.id} >{photo.user.first_name}{photo.user.last_name} </a></span>
      </div>
     
    </header>
    <div class="photo__file-container">
      <img src={photo.urls.regular} alt="" class="photo__file" />
    </div>
    <div class="photo__info">
     
      <span class="photo__likes">likes : {photo.likes}</span>
      <div class="photo__comments">
        <div class="photo__comment">
          <span class="photo__comment-author"><a href = {"/informationphoto/" + photo.id} >{photo.user.first_name}{photo.user.last_name}</a>:{photo.alt_description}</span>
        </div>
      </div>
    </div>
  </section>
      </Row>
  
          </div>
          </center>
          ))}
          </Container>  
    )
  }
  
  return (//คืออะไรไม่รู้ เเต่เข้าใจว่า เอาไอตัวข้างบนมา return มาดูอีกที
    <React.Fragment> 
      {photo}
    </React.Fragment>
  )
}

export default Photo
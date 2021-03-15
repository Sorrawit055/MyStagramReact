import React, { Component } from 'react'
import unsplash from '../api/unsplash'
import Error from './Error/Error'
import History from './History/History'
import Posts from './Posts/Posts'
import Search from './Search/Search'
import '../App.css'

class Home extends Component {
  constructor (props) {
    super(props)
    this.searchInput = React.createRef()
  }

  state = { //state ที่จะใส่
    errors: [],
    history: [],
    photo: null,
    query: { //ตัว เก็บคำที่ค้นหา
      placeholder: 'e.g. water',
      search: ''
    },
    searching: false,
  }

  /**
   * Submit Form Handler
   * @param event
   */
  submitHandler = (event) => { // เป็น Event ในการกดค้นหา ของ search
    event.preventDefault()

    let search = this.searchInput.current.value.trim() 

    if (search !== '') {
      this.searchHandler(search)
      this.setState({ //set state ที่ไม่เหมือน อาจารณ์เลย งงๆ --
        query: {//คือ ตัว state ที่ ทำไว้ เพื่อดูคำที่ เขียนใน ช่่องค้นหา
          search: search
        },
        searching: true
      })
    }
  }

 
  searchHandler = (search) => { //เป็น ตัว ดึงapi ที่ดึงมาจาก โฟลเดอร์ api อีก ชื่อ unsplash เเละ ดึง /photos/random?count=15
    unsplash.get('/photos/random?count=15', {
      params: {
        'query': search
      }
    })
      .then(response => {
        this.setState((prevState) => {//set state ที่ไม่เหมือน อาจารณ์เลย งงๆ --
          return {
            errors: [],
            history: [...new Set([...prevState.history, search])], //เพิ่มเฉพาะข้อความค้นหาที่ไม่ซ้ำกัน
            photo: response,
            searching: false,
          }
        })
      })
      .catch(error => {
        // ตัวตรวจจับข้อผิดพลาดที่โคตรงง
        this.setState({
          errors: JSON.parse(error.response.request.response).errors,
          photo: null,
          searching: false,
        })
      })
  }

 
  historyHandler = (search) => () => { //เป็นตัว บอกประวัติการค้นหา
    this.searchInput.current.value = search
    this.setState({
      query: { //คือ ตัว state ที่ ทำไว้ เพื่อดูคำที่ เขียนใน ช่่องค้นหา
        search: search
      },
      searching: true
    }, () => {
      this.searchHandler(search)//เมื่อกดค้นหา ตัวนี้จะทำงาน
    })
  }


  removeHistoryHandler = (search) => () => { //เป็นตัวลบข้อมูลที่ค้นหา
    this.setState((prevState) => ({
      history: prevState.history.filter(previousQuery =>
        previousQuery !== search
      )
    }), () => {
      if (this.state.history.length === 0) {//ถ้า state hitory เท่ากับ 0 ก็จะไปที่ตัวเคลียร์ต่อ
        this.clearSearch()
      }
    })
  }

  /**
   * Clear Search
   */
  clearSearch = () => { //ตัวเคลียร์งานที่ทำงานต่อจากตัวบน
    this.searchInput.current.value = ''
    this.setState({
      photo: null, //ทำให้ photo เท่ากับ null
      query: {
        search: ''
      }
    })
  }

  render () {
    return (
      <main className="App">
        <section className="App-section">
          <h1 className="App-title">MYSTAGRAM</h1>
        </section>

        <section className="App-section">
          <Search
            query={this.state.query.search} //น่าจะส่งค่าไป
            setSearchInputRef={this.searchInput}//น่าจะส่งค่าไป
            submitHandler={this.submitHandler}//น่าจะส่งค่าไป
          />
          <History
            history={this.state.history}//น่าจะส่งค่าไป
            historyHandler={this.historyHandler}//น่าจะส่งค่าไป
            removeHistoryHandler={this.removeHistoryHandler}//น่าจะส่งค่าไป
          />
          <Error errors={this.state.errors}  />
        </section>
        <section className="App-section App-section--full">
          <Posts
            photo={this.state.photo}//น่าจะส่งค่าไป
          />
        </section>
      </main>
    )
  }
}

export default Home

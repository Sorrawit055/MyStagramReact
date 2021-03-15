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

  state = {
    errors: [],
    history: [],
    photo: null,
    query: {
      placeholder: 'e.g. water',
      search: ''
    },
    searching: false,
  }

  /**
   * Submit Form Handler
   * @param event
   */
  submitHandler = (event) => {
    event.preventDefault()

    let search = this.searchInput.current.value.trim()

    if (search !== '') {
      this.searchHandler(search)
      this.setState({
        query: {
          search: search
        },
        searching: true
      })
    }
  }

 
  searchHandler = (search) => {
    unsplash.get('/photos/random?count=15', {
      params: {
        'query': search
      }
    })
      .then(response => {
        this.setState((prevState) => {
          return {
            errors: [],
            history: [...new Set([...prevState.history, search])], // Only add unique queries
            photo: response,
            searching: false,
          }
        })
      })
      .catch(error => {
        // TODO: implement proper error handling
        this.setState({
          errors: JSON.parse(error.response.request.response).errors,
          photo: null,
          searching: false,
        })
      })
  }

 
  historyHandler = (search) => () => {
    this.searchInput.current.value = search
    this.setState({
      query: {
        search: search
      },
      searching: true
    }, () => {
      this.searchHandler(search)
    })
  }


  removeHistoryHandler = (search) => () => {
    this.setState((prevState) => ({
      history: prevState.history.filter(previousQuery =>
        previousQuery !== search
      )
    }), () => {
      if (this.state.history.length === 0) {
        this.clearSearch()
      }
    })
  }

  /**
   * Clear Search
   */
  clearSearch = () => {
    this.searchInput.current.value = ''
    this.setState({
      photo: null,
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
            placeholder={this.state.placeholder}
            query={this.state.query.search}
            setSearchInputRef={this.searchInput}
            submitHandler={this.submitHandler}
          />
          <History
            history={this.state.history}
            historyHandler={this.historyHandler}
            removeHistoryHandler={this.removeHistoryHandler}
          />
          <Error errors={this.state.errors} />
        </section>
        <section className="App-section App-section--full">
          <Posts
            photo={this.state.photo}
            searching={this.state.searching}
          />
        </section>
      </main>
    )
  }
}

export default Home

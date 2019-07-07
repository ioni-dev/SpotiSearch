import React from 'react';
import hash from './components/hash';
import './styles/App.css';
import Login from './components/Login';
import Main from './components/Main';
import { BASE_URL } from './common/Constants';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      token: null,
      offset: 0,
      tracks: []
    }
    this.onSearch = this.onSearch.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
  }

  componentDidMount() {
    // getting the token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token
      });

    }
  }
  // Getting the value from the searchbox to the state
  onSearchChange = (e) => {
    e.preventDefault();
    this.setState({
      searchField: e.target.value
    });
  }
  // Fetching the spotify api 
  onSearch = async (props) => {
    const { searchField, offset, token } = this.state;

    const FETCH_URL = `${BASE_URL}q=${encodeURIComponent(searchField)}&type=track&offset=${offset}`;

    await fetch(FETCH_URL, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token }
    })
      .then(res => res.json())
      .then(data => this.setState({
        tracks: data.tracks.items
      }))
      .catch((error) => {
        console.error(error)
      })
  }

  // Setting the offset from the button, this will change the page from the spotify api
  onPageChange = (props) => {

    let { offset } = this.state;

    if (props === 'next') {
      this.setState({ offset: (offset += 10) });
      // and calling this function, in this way i can fetch the api with the new offset value
      this.onSearch();
    }
    if (props === 'previous') {
      if (this.state.offset > 0) {
        this.setState({ offset: (offset -= 10) })
        this.onSearch();
      } else console.log('offset is already 0');
    }


  }
  render() {
    const { tracks } = this.state;
    return (
      <div className="App">
        {!this.state.token ? <Login /> : <Main onSearch={this.onSearch} onSearchChange={this.onSearchChange} tracksAvailable={tracks} onPageChange={this.onPageChange} />}
      </div>
    );
  }
}

export default App;

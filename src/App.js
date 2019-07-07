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
  }
  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token
      });

    }
  }
  onSearchChange = (e) => {
    e.preventDefault();
    this.setState({
      searchField: e.target.value
    });
  }

  onSearch = async () => {
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

  render() {
    const { tracks } = this.state;
    return (
      <div className="App">
        {!this.state.token ? <Login /> : <Main onSearch={this.onSearch} onSearchChange={this.onSearchChange} tracksAvailable={tracks} />}
      </div>
    );
  }
}

export default App;

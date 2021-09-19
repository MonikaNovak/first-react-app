import "./App.css";
import React from "react";
import SearchForm from './SearchForm';

//webpack is already used (to implement CSS)

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
      jokes: [],
      s: false,
    };

    // to bind the method to component:
    this.onSearchChange = this.onSearchChange.bind(this);
    this.searchJokes = this.searchJokes.bind(this);
  }

  // a hook to trigger action when component is inserted/rendered
  // componentDidMount() {
  //   this.searchJokes();
  // }

  searchJokes(limit = 20) {
    this.setState({ s: true });

    fetch(`https://icanhazdadjoke.com/search?term=${this.state.searchTerm}&limit=${limit}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const jokes = json.results;
        this.setState({
          jokes,
          s: false,
        });
      });
  }

  onSearchChange(value) {
    this.setState({ searchTerm: value });
  }

  // onSearchSubmit(event) {
  //   event.preventDefault(); // to prevent the page from reloading
  //   this.searchJokes();
  // }

  renderJokes() {
    return (
      <ul className="jokes-list">
        {this.state.jokes.map((item) => (
          <li key={item.id}>{item.joke}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        <img className="logo" src="/google-dad-jokes-logo.png"/>
        <SearchForm
          onFormSubmit={this.searchJokes}
          onSearchValueChange={this.onSearchChange}
          isSearching={this.state.isFetchingJokes}
          onSingleSearchClick={() => this.searchJokes(1)}
        />
        
          

        {this.state.s
          ? "searching for jokes..."
          : this.renderJokes()}
      </div>
    );
  }

  // return (
  //   <button onClick={onTellJoke}>Tell me a joke</button>
  // );
}

export default App;

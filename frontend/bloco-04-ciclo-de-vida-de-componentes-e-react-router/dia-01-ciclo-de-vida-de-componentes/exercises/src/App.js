import React from "react";
import "./App.css";
import PersonCard from "./components/PersonCard";
import Loading from "./components/Loading";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      personObj: '',
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    this.setState({ loading: true }, () => {
      fetch("https://api.randomuser.me/")
        .then((dataJson) => dataJson.json())
        .then((data) => {
          this.setState({
            personObj: data.results[0],
            loading: false,
          });
        });
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if(nextState.personObj === '') {
      return false
    }
    return nextState.personObj.dob.age <= 50;
  }

  render() {
    const { loading, personObj } = this.state;
    return (
      <div>
        {loading ? <Loading /> : <PersonCard personObj={ personObj } />}
        <button onClick={this.fetchData}>Next Person</button>
      </div>
    );
  }
}

export default App;

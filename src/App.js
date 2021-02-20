import React, { Component } from 'react';
import './App.css';
import Discord from './Components/DiscordBox/Discord';
import StatusCard from './Components/StatusCards/StatusCards';

class App extends Component {
  state = {
    outrunSatus: ""
  }

  async componentDidMount() {
    //let response = await fetch();
    //let body = await response.json();
    //this.setState({ charts: body, isLoading: true });
  }

  render(){
    //TODO: agregar componentes individuales para cada bot
    return (
      <div className="App">
        <h1>Revival Status Page</h1>
        <div className="cards">
          <h2>Server</h2>
          <StatusCard title={"Outrun"} text={"Working"} severity={"default"}/>
          <h2>Services</h2>
          <StatusCard title={"Yacker Bot"} text={"Network issues"} severity={"critical"}/>
          <StatusCard title={"The Miles Electric Bot"} text={"Server overloaded"} severity={"warning"}/>
        </div>
        <p>Welcome to the Revival Status Page.<br/>All the content shown on this page depends on the actual server to be available. 
        If this page is not loading, please let us know at our Discord server.</p>
        <Discord source={"https://canary.discord.com/widget?id=587965482452385792&theme=dark"}/>
      </div>
    );
  }
}
export default App;

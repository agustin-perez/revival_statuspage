import React, { Component } from 'react';
import './App.css';
import Discord from './Components/DiscordBox/Discord';
import StatusCard from './Components/StatusCards/StatusCards';

class App extends Component {
  state = {
    outrunSatus: false,
    isLoading: true
  }

  

  async componentDidMount() {
    const endpointURL = "https://sonic.runner.es/statusAPI/generate204";
    let response = await fetch(endpointURL);
    console.log(response.status);
    if (response.status === 204){
      this.setState({outrunSatus: true, isLoading: false});
    }
    this.setState({isLoading: false});
  }

  render(){
    //TODO: agregar componentes individuales para cada bot
    if(this.state.isLoading){
      return(
          <div className="App">
              <h1>Fetching data...</h1>
          </div>
      )
    }
    return (
      <div className="App">
        <h1>Revival Status Page</h1>
        <div className="cards">
          <h2>Server</h2>
          <StatusCard title={(this.state.outrunSatus ? ("Outrun") : ("Outrun ⚠"))} text={(this.state.outrunSatus ? ("Working") : ("Server down"))} severity={(this.state.outrunSatus ? ("default") : ("critical"))}/>
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

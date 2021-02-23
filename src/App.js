import React, { Component } from 'react';
import './App.css';
import Discord from './Components/DiscordBox/Discord';
import StatusCard from './Components/StatusCards/StatusCards';

class App extends Component {
  state = {
    outrunStaus: false,
    yackerStatus: false,
    milesStatus: false,
    isLoading: true
  }

  

  async componentDidMount() {
    const endpointURL = "https://sonic.runner.es/statusAPI/generate204";
    let response = await fetch(endpointURL);
    console.log(response.status);
    if (response.status === 204){
      this.setState({outrunStatus: true, isLoading: false});
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
          <StatusCard title={(this.state.outrunStatus ? ("Outrun") : ("Outrun ⚠"))} text={(this.state.outrunStatus ? ("Working") : ("Server down"))} severity={(this.state.outrunStatus ? ("default") : ("critical"))}/>
          <h2>Services</h2>
          <StatusCard title={(this.state.yackerStatus ? ("Yacker") : ("Yacker ⚠"))} text={(this.state.yackerStatus ? ("Working") : ("Unknown"))} severity={(this.state.yackerStatus ? ("default") : ("warning"))}/>
          <StatusCard title={(this.state.milesStatus ? ("The Miles Electric") : ("The Miles Electric ⚠"))} text={(this.state.milesStatus? ("Working") : ("Unknown"))} severity={(this.state.milesStatus ? ("default") : ("warning"))}/>
        </div>
        <p>Welcome to the Revival Status Page.<br/>All the content shown on this page depends on the actual server to be available. 
        If this page is not loading, please let us know at our Discord server.</p>
        <Discord source={"https://canary.discord.com/widget?id=587965482452385792&theme=dark"}/>
      </div>
    );
  }
}
export default App;

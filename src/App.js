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
    const outrunEndpointURL = "https://sonic.runner.es/statusAPI/generate204";
    const yackerEndpointURL = "https://sonic.runner.es/botLogAPI/logs/";
    let outrunPromise = await fetch(outrunEndpointURL);
    let yackerPromise = await fetch(yackerEndpointURL);
    if (outrunPromise.status === 204){
      this.setState({outrunStatus: true, isLoading: false});
    }
    if (yackerPromise.status === 404){
      this.setState({yackerStatus: true, isLoading: false});
    }
    this.setState({isLoading: false});
  }

  render(){
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
          <StatusCard title={(this.state.yackerStatus ? ("Yacker") : ("Yacker ⚠"))} text={(this.state.yackerStatus ? ("Working") : ("Bot not available"))} severity={(this.state.yackerStatus ? ("default") : ("critical"))}/>
        </div>
        <p>Welcome to the Revival Status Page.<br/>All the content shown on this page depends on the actual server to be available. 
        If this page is not loading, please let us know at our Discord server.</p>
        <Discord source={"https://canary.discord.com/widget?id=587965482452385792&theme=dark"}/>
      </div>
    );
  }
}
export default App;

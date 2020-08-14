import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loading from "./Loading";
import './App.css';

/* Use Geo API to find user location
 * https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
 */

class App extends React.Component {

  state = { latitude: null, errorMessage: null, loading: true };

  getErrorMessage()
  {
    if (this.state.errorMessage != null) {
      return 'Error: ' + this.state.errorMessage
    }
    return null
  }


  getLatitude()
  {
    if (this.state.latitude != null) {
      return 'Latitude: ' + this.state.latitude;
    }
    return null
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      ( position ) => {
        this.setState( { loading: false, latitude: position.coords.latitude });
      },
      ( error ) => {
        this.setState( { loading: false, errorMessage: error.message });
      }
    );
  }

  render() {
    if ( this.state.loading )
      return <Loading show={ this.state.loading } message={ ' Loading Location ' }/>;

    if ( this.state.errorMessage )
      return <div> { this.getErrorMessage() } </div>;

    return  <SeasonDisplay latitude={ this.state.latitude  }/>;
  }
}
export default App;

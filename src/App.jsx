import React from 'react';

import AuthComponent from './components/AuthComponent.jsx';
import ItemComponent from './components/ItemComponent.jsx';


const App = React.createClass({

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(function(state) {
      state[name] = value;
    });
  },

  componentWillMount() {
    localStorage.removeItem('PITM_params');
  },

  handleSubmit() {
    localStorage.setItem('PITM_params', JSON.stringify(this.state));
    window.close();
  },

  render() {
    return (
      <div className="page">
        <div className="action-card">
          <header className="action-card__header">
            <h2> Augment your request </h2>
          </header>
          <div className="action-card__content">
            <AuthComponent onInputChange={this.handleInputChange}/>
            <ItemComponent onInputChange={this.handleInputChange}/>
            <div className="action-card__footer">
              <button onClick={this.handleSubmit}
                      className="button button--is-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default App;

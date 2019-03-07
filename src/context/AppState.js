import React, { Component } from 'react';

class AppState extends Component {
    state = {
        overlayMenu: [
            {item: 'me', icon: 'user', key: 'mi1', active: true},
            {item: 'work', icon: 'briefcase', key: 'mi3', active: false},
            {item: 'contact', icon: 'envelope', key: 'mi4', active: false}
        ]
    }
    render() {
        return(
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }    
}

const AppContext = React.createContext();

export default AppState;
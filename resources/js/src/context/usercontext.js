import React, { createContext } from 'react';

// Create a new user context and define 
// what it will contain. 
const UserContext = createContext({
  user: '',
  updateUser: () => {},
});

export class UserProvider extends React.Component {
  state = {
    user: null,
    updateUser: this.updateUser,
  };

  updateUser = (user) => {
    this.setState({ user });
  };

  render() {
    const { children } = this.props;
    return (
      
      // This provider will wrap the rest of the tree and we pass in the user in the 
      // state and the updateUser function as well. 
      <UserContext.Provider value={this.state}>
        {children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;
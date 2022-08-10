import React from 'react'
export const contextname = React.createContext();
const Context = (props) => {
    const [users,setUsers] = React.useState([{name:"Akash",mail:"akash@co.in",pass:"1234"}]);
    const [login,setLogin] = React.useState('');
    
  return (
    <contextname.Provider value={{users:users,setUsers:setUsers,login:login,setLogin:setLogin}}>
        {props.children}
    </contextname.Provider>
  )
}

export default Context
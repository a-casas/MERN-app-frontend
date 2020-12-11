import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SignUp = (props)=>{
  // const {submitSignUp, newUser, changeHandlerSignUp} = props
  return(
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={props.submitSignUp}>

        <label htmlFor="username">Username: </label>
        <input 
          type="text" 
          name="username" 
          value={props.newUser.username} 
          onChange={(event)=>props.changeHandlerSignUp(event.target)}
        />

        <label htmlFor="password">Password: </label>
        <input 
          type="password" 
          name="password" 
          value={props.newUser.password} 
          onChange={(event)=>props.changeHandlerSignUp(event.target)}
        />

        <button class="button is-primary" type="submit">Crear Usuario</button>

      </form>
    </div>
  )
}

export default SignUp
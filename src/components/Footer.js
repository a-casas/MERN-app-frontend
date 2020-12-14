import React from 'react'

const Footer = (props)=>{
  // const {submitSignUp, newUser, changeHandlerSignUp} = props
  return(
<div>
<footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>MERN-stack Web Application</strong> by <a
            href="https://github.com/a-casas/custom-RPG-cards">Adrián Casas</a>. Developed for the
          final project at 
          <a href="https://ironhack.com/en">IronHack</a>. I hope you like it! <span><i class="far fa-lg fa-smile-wink"></i></span>
        </p>

      </div>
      <div class="">
        <div class="field is-grouped is-grouped-multiline has-addons has-addons-centered">
          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">node.JS</span>
              <span class="tag is-success">express</span>
            </div>
          </div>

          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">mongo</span>
              <span class="tag is-primary">DB</span>
            </div>
          </div>

          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">npm</span>
              <span class="tag is-danger"></span>
            </div>
          </div>

          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">Passport</span>
              <span class="tag is-warning">JS</span>
            </div>
          </div>

          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">React</span>
              <span class="tag is-warning">JS</span>
            </div>
          </div>

          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">Axios</span>
              <span class="tag is-danger"></span>
            </div>
          </div>

          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">Rest</span>
              <span class="tag is-primary">API</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

    )
}

export default Footer
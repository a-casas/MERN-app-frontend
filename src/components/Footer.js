import React from 'react'

const Footer = (props)=>{
  return(
<div>
<footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          <strong>MERN-stack Web Application</strong> by <a
            href="https://github.com/a-casas/custom-RPG-cards">Adrián Casas</a>. Developed for the
          final project at 
          <a href="https://ironhack.com/en">IronHack</a>. I hope you like it! <span><i className="far fa-lg fa-smile-wink"></i></span>
        </p>

      </div>
      <div className="">
        <div className="field is-grouped is-grouped-multiline has-addons has-addons-centered">
          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-dark">node.JS</span>
              <span className="tag is-success">express</span>
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-dark">mongo</span>
              <span className="tag is-primary">DB</span>
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-dark">npm</span>
              <span className="tag is-danger"></span>
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-dark">Passport</span>
              <span className="tag is-warning">JS</span>
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-dark">React</span>
              <span className="tag is-warning">JS</span>
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-dark">Axios</span>
              <span className="tag is-danger"></span>
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-dark">Rest</span>
              <span className="tag is-primary">API</span>
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
const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="/css/images/error.webp" alt="Funny Dog Picture" />
                <div>
                  Photo by <a href="https://www.belindarichards.com/">Belinda Richards</a>
                </div>
              </div>

          </main>
      </Def>
    )
  }
  

module.exports = error404

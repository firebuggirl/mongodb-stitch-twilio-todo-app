` npm install --save serve `//deleted this

` heroku login `

` heroku create mongodb-stitch-todo `


` heroku git:remote -a mongodb-stitch-todo `


`  heroku config:add NODE_ENV=production `

  ` heroku logs `//check for deployment errors

  * add `Node Buildpack` via Heroku UI

      - OR via bash:

      ` heroku buildpacks:set heroku/nodejs `

 * Add environment variables to Heroku UI

 * Whitelist Heroku URL via Facebook, Google

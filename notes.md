https://docs.mongodb.com/stitch/tutorials/todo-web/


    ` cd stitch-examples/todo/import/Todo_Web_App_With_Twilio `



    - Login using stitch-cli

       ` stitch-cli login --username=cloud.username@email.com --api-key=my-api-key `



    -  From within the `todo`-initial directory

        ` stitch-cli import `

        - NOTE: Atlas `Group ID` is synonymous with `Project ID` -> find on `Settings` page



### Set up Facebook Auth:


    ` https://docs.mongodb.com/stitch/authentication/facebook/ `


    - Redirect UI:

        ` http://localhost:8001/ `//make sure to include trailing slash


### Set up Google Auth:    

        ` https://docs.mongodb.com/stitch/authentication/google/ `

        - Redirect UI:

            - same as above


###  Set up Your Web Application


    - Connect to Stitch app from client:

        - On line 14 of `/todo/src/index.js` , find `<your-app-id>` -> change it to App ID of your Stitch App

                - find ID via `clients` page in Stitch UI


    - From `todo` directory:

        ` nvm use 10.15.0 `

        ` npm install `

        ` npm start `

        - visit `  http://localhost:8001/ `



## Integrate the ToDo App with Twilio

https://docs.mongodb.com/stitch/tutorials/todo-twilio-web/


### NOTE:

      - ES6 functions will not work in Stitch UI `UNTIL` update the UI....this is part of the reason why I was getting errors....fixed for now...

            - `Logs` tab in Stitch UI very helpful.... + check `Debugger` tab in Twilio UI

      - TODO: update Stitch UI

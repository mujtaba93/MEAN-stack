#Mean Stack APP
**This App has been built on MEAN Stack - MongoDB, Express JS, Node JS and Angular JS.**
It uses 'gulp' build tool in order to start the node server.

Steps to run the app:

1. Clone the repository in some location.
2. Once cloned, you can `cd` into MEAN-stack folder.
3. Open command prompt and run `npm install` in order to install all the dependencies required by the app to run.
4. Once all the dependencies are installed, you can do `gulp` to start the node server and navigate to `http://localhost:9000` in order to see the UI.

**Pre-requisites**
1. You need to have MongoDB and NodeJS installed on your system.
2. Make sure that mongo shell is up and running.
3. On starting the server, the app will add few records to the Mongo Table, which will be visible right away.

**How to run the API calls**
1. You will need to install Postman, a free Chrome extension. You can get it from here -> https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en
2. In order to perform `GET` request, just navigate to 
` http://localhost:9000/api/books/`
    using Postman.
3. For `POST` request, navigate to the same link and add the following to request body (sample)
```{
        "genre": "Fiction",
        "author": "Paulo Coelho",
        "title": "The Alchemist"
    }
    ```
4. For `PUT` request, navigate to the following link and add the following to request body
`http://localhost:9000/api/books/{id}`

**Note:** You can get the ID from any of the books by issuing `GET` command.

```{
        "genre": "Fiction",
        "author": "Paulo Coelho",
        "title": "The Alchemist",
        "read": true
    }
```
    The `Read` property will get updated from false to true, keeping all other properties unchanged.

5. For `PATCH` request, you will have to get the ID by doing `GET` command and visit the link - `http://localhost:9000/api/books/{id}` and add the change to be made to request body. refer below
    {
        "title": "My Book",
    }

7. In order to `DELETE` a resource, you need to visit the same link as above and just select `DELETE` verb from the       postman dropdown menu
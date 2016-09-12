# server
All back-end files for ironic anagrams

**Log In**
----
  Logs user in and returns session ID

* **URL**

  /api/signin

* **Method:**
  

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  `username=[string]`<br />
  `password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ token: [string] }`
 
* **Error Response:**

  * **Code:** 404  <br />
    **Content:** `{ error : "User does not exist" }`

  OR

  * **Code:** 404 <br />
    **Content:** `{ error : "Incorrect password" }`

* **Sample Call:**

  ```javascript
    fetch('http://localhost:3000/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        username: 'foo',
        password: 'bar'
      }
    })
  ```

**Sign Up**
----
  Creates user and returns session ID

* **URL**

  /api/signup

* **Method:**
  
  `POST`
  
*  **URL Params**

   None

* **Data Params**

  `username=[string]`<br />
  `fullname=[string]`<br />
  `password=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ token: [string] }`
 
* **Error Response:**

  * **Code:** 404  <br />

* **Sample Call:**

  ```javascript
    fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        username: 'foo',
        fullname: 'John Smith',
        password: 'bar'
      }
    })
  ```
  
**Fetch Entries**
----
  Returns all entries that belong to one user

* **URL**

  /api/entries

* **Method:**
  
  `GET`
  
*  **URL Params**

   **Optional:**
 
   `userId=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    `[
      { 
        id: [integer],
        userId: [integer],
        text: [string],
        createdAt: [timestamp],
        updatedAt: [timestamp] 
      }
    ]`
 
* **Error Response:**

  * **Code:** 404  <br />
  **Content:** `{ error: 'you are not friends'}`

* **Sample Call:**

  ```javascript
    fetch('http://localhost:3000/api/signup', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
      }
    })
  ```


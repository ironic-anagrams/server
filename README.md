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
# server
All back-end files for ironic anagrams

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


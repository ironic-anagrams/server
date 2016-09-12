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
  Returns all entries that belong to a user

* **URL**

  /api/entries

* **Method:**
  
  `GET`
  
*  **Request Headers**

   **Required:**
 
   `x-access-token`
  
*  **URL Params**

   **Optional:**
 
   `userId=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** Array of Entry objects
    
    ```javascript
    [
      { 
        id: [integer],
        userId: [integer],
        text: [string],
        location: [string],
        createdAt: [timestamp],
        updatedAt: [timestamp] 
      }
    ]
    ```
 
* **Error Response:**

  * **Code:** 404  <br />
  **Content:** `{ error: 'you are not friends'}`

* **Sample Call:**

  ```javascript
    fetch('http://localhost:3000/api/entries', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoidGVzdDUiLCJwYXNzd29yZCI6InBhc3MiLCJmdWxsbmFtZSI6ImhlbGxvIiwiY3JlYXRlZEF0IjoiMjAxNi0wOS0wNFQyMzo0MToyNS41NDJaIiwidXBkYXRlZEF0IjoiMjAxNi0wOS0wNFQyMzo0MToyNS41NDJaIn0.yjfFIaKJJxHzp5UPegVwzL9rMWXsALgLTo3emwJV0-w'
      }
    })
  ```
  
**Create Entry**
----
  Creates an Entry

* **URL**

  /api/entries

* **Method:**
  
  `POST`
  
*  **URL Params**

   None
   
*  **Request Headers**

   **Required:**
 
   `x-access-token`

* **Data Params**

  `text=[string]`<br />
  `location=[string]`<br />

* **Success Response:**

  * **Code:** 200 <br />
 
* **Error Response:**

  * **Code:** 404  <br />

* **Sample Call:**

  ```javascript
    fetch('http://localhost:3000/api/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoidGVzdDUiLCJwYXNzd29yZCI6InBhc3MiLCJmdWxsbmFtZSI6ImhlbGxvIiwiY3JlYXRlZEF0IjoiMjAxNi0wOS0wNFQyMzo0MToyNS41NDJaIiwidXBkYXRlZEF0IjoiMjAxNi0wOS0wNFQyMzo0MToyNS41NDJaIn0.yjfFIaKJJxHzp5UPegVwzL9rMWXsALgLTo3emwJV0-w'
      },
      body: {
        text: 'Hello World!',
        location: 'San Francisco, California'
      }
    })
  ```
  
**Fetch Friends**
----
  Returns an array of User objects

* **URL**

  /api/friends

* **Method:**
  
  `GET`
  
*  **Request Headers**

   **Required:**
 
   `x-access-token`
  
*  **URL Params**

   None

* **Data Params**

   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** Array of User objects
    
    ```javascript
    [
      { 
        id: [integer],
        username: [string],
        fullname: [string],
      }
    ]
    ```
 
* **Error Response:**

  * **Code:** 404  <br />

* **Sample Call:**

  ```javascript
    fetch('http://localhost:3000/api/friends', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoidGVzdDUiLCJwYXNzd29yZCI6InBhc3MiLCJmdWxsbmFtZSI6ImhlbGxvIiwiY3JlYXRlZEF0IjoiMjAxNi0wOS0wNFQyMzo0MToyNS41NDJaIiwidXBkYXRlZEF0IjoiMjAxNi0wOS0wNFQyMzo0MToyNS41NDJaIn0.yjfFIaKJJxHzp5UPegVwzL9rMWXsALgLTo3emwJV0-w'
      }
    })
  ```


# Journal app API documentation

**Table of Contents** 

- [**Log In**](#log-in)
- [**Sign Up**](#sign-up)
- [**Fetch Entries**](#fetch-entries)
- [**Create Entry**](#create-entry)
- [**Fetch Friends**](#fetch-friends)
- [**Find Users**](#find-users)
- [**Submit Friend Request**](#submit-friend-request)
- [**Get Friend Requests**](#get-friend-requests)
- [**Accept Friend Request**](#accept-friend-request)
- [**Reject Friend Request**](#reject-friend-request)

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

**Find Users**
----
  Returns an array of User objects that match 'username' param

* **URL**

  /api/users

* **Method:**
  
  `GET`
  
*  **Request Headers**

   **Required:**
 
   `x-access-token`
  
*  **URL Params**

   **Required:**
   `username=[string]`

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
    fetch('http://localhost:3000/api/users?username=foo', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoidGVzdDUiLCJwYXNzd29yZCI6InBhc3MiLCJmdWxsbmFtZSI6ImhlbGxvIiwiY3JlYXRlZEF0IjoiMjAxNi0wOS0wNFQyMzo0MToyNS41NDJaIiwidXBkYXRlZEF0IjoiMjAxNi0wOS0wNFQyMzo0MToyNS41NDJaIn0.yjfFIaKJJxHzp5UPegVwzL9rMWXsALgLTo3emwJV0-w'
      }
    })
  ```

**Submit Friend Request**
----
  Creates a friend request

* **URL**

  /api/friendreq

* **Method:**
  
  `POST`
  
*  **URL Params**

   None
   
*  **Request Headers**

   **Required:**
 
   `x-access-token`

* **Data Params**

  `requestReceiver=[integer]`<br />

* **Success Response:**

  * **Code:** 201 <br />
 
* **Error Response:**

  * **Code:** 404  <br />

* **Sample Call:**

  ```javascript
    fetch('http://localhost:3000/api/friendreq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoidGVzdDUiLCJwYXNzd29yZCI6InBhc3MiLCJmdWxsbmFtZSI6ImhlbGxvIiwiY3JlYXRlZEF0IjoiMjAxNi0wOS0wNFQyMzo0MToyNS41NDJaIiwidXBkYXRlZEF0IjoiMjAxNi0wOS0wNFQyMzo0MToyNS41NDJaIn0.yjfFIaKJJxHzp5UPegVwzL9rMWXsALgLTo3emwJV0-w'
      },
      body: {
        requestReceiver: 25,
      }
    })
  ```
  
**Get Friend Requests**
----
  Returns all all inbound friend requests

* **URL**

  /api/friendreq

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
    **Content:** Array of Request objects
    
    ```javascript
    [
      {
  	    id: [integer],
   		requestReceiver: [integer],
    	createdAt: [timestamp],
    	updatedAt: [timestamp],
    	userId: [integer],
    	user: {
    	  fullname: [string]
    	}
	  }
    ]
    ```
 * **Error Response:**

  * **Code:** 404  <br />

* **Sample Call:**

  ```javascript
    fetch('http://localhost:3000/api/friendreq', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoidGVzdDUiLCJwYXNzd29yZCI6InBhc3MiLCJmdWxsbmFtZSI6ImhlbGxvIiwiY3JlYXRlZEF0IjoiMjAxNi0wOS0wNFQyMzo0MToyNS41NDJaIiwidXBkYXRlZEF0IjoiMjAxNi0wOS0wNFQyMzo0MToyNS41NDJaIn0.yjfFIaKJJxHzp5UPegVwzL9rMWXsALgLTo3emwJV0-w'
      }
    })
  ```

**Accept Friend Request**
----
  Sets status of friend request to accepted and adds records to friends table

* **URL**

  /api/friendreq

* **Method:**
  
  `POST`
  
*  **URL Params**

   None
   
*  **Request Headers**

   **Required:**
 
   `x-access-token`

* **Data Params**
   
   **Required:**

  `requestId=[integer]`<br />

* **Success Response:**

  * **Code:** 201 <br />
 
* **Error Response:**

  * **Code:** 404  <br />
    **Content:** `{ error : "Request not found" }`

  OR
  
  **Code:** 404  <br />
    **Content:** `{ error : "You are not receiver of this request" }`

* **Sample Call:**

  ```javascript
    fetch('http://localhost:3000/api/friendreq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoidGVzdDUiLCJwYXNzd29yZCI6InBhc3MiLCJmdWxsbmFtZSI6ImhlbGxvIiwiY3JlYXRlZEF0IjoiMjAxNi0wOS0wNFQyMzo0MToyNS41NDJaIiwidXBkYXRlZEF0IjoiMjAxNi0wOS0wNFQyMzo0MToyNS41NDJaIn0.yjfFIaKJJxHzp5UPegVwzL9rMWXsALgLTo3emwJV0-w'
      },
      body: {
        requestId: 325,
      }
    })
  ```
  
**Reject Friend Request**
----
  Sets status of friend request to accepted and adds records to friends table

* **URL**

  /api/friendreq

* **Method:**
  
  `DELETE`
  
*  **URL Params**

   None
   
*  **Request Headers**

   **Required:**
 
   `x-access-token`

* **Data Params**
   
   **Required:**

  `requestId=[integer]`<br />

* **Success Response:**

  * **Code:** 201 <br />
 
* **Error Response:**

  * **Code:** 404  <br />
    **Content:** `{ error : "The request was not found in the database." }`

  OR
  
  * **Code:** 500  <br />
    **Content:** `{ error : "There was an error deleting this request from the database." }`


* **Sample Call:**

  ```javascript
    fetch('http://localhost:3000/api/friendreq', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoidGVzdDUiLCJwYXNzd29yZCI6InBhc3MiLCJmdWxsbmFtZSI6ImhlbGxvIiwiY3JlYXRlZEF0IjoiMjAxNi0wOS0wNFQyMzo0MToyNS41NDJaIiwidXBkYXRlZEF0IjoiMjAxNi0wOS0wNFQyMzo0MToyNS41NDJaIn0.yjfFIaKJJxHzp5UPegVwzL9rMWXsALgLTo3emwJV0-w'
      },
      body: {
        requestId: 325,
      }
    })
  ```
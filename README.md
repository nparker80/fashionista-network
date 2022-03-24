# Fashionista Network API

This application is an API for a social network built using MongoDB (Mongoose). API routes have been created for managament of User and Thought collections using CRUD operations.

A walkthrough of the API functionality is shown in these videos: 


Video 1 Post/Get/Put: https://drive.google.com/file/d/1A0O8iNyx8GeXE-djme0pcq0K-wI_dPmJ/view

Video 2 Delete: https://drive.google.com/file/d/1pUGANih910caZoNWRk3N5Mw3CNAzV9Fd/view

The application is build using the following tools & packages:

- Mongoose
- Express
- Node.js

## Application Functionality

The following API routes have been generated:

### For Users:

- GET:
  - Return all users in the database
  - Return one user by id
- POST:
  - Create a new user
  - Add a friend (other user) to a user's friend list
- PUT:
  - Update a user by id
- DELETE:
  - Remove a user by id
  - Remove a friend from a user's friend list

### For Thoughts:

- GET:
  - Return all thoughts in the database
  - Return one thought by id
- POST:
  - Create a new thought by specific user
  - Create a reaction to a thought
- PUT:
  - Update a thought by id
- DELETE:
  - Delete a thought by id
  - Delete a reation by id

## Usage

To test the API routes, use a tool like Insomnia.


Create User
![image](https://user-images.githubusercontent.com/91171412/159835480-fd702a77-9ab7-432a-a1cd-02dec0ff3280.png)

Create Thought
![image](https://user-images.githubusercontent.com/91171412/159835518-75979e17-36e8-4380-9368-deedd0b4ceb1.png)

Create Reaction
![image](https://user-images.githubusercontent.com/91171412/159835554-de933fd2-01f3-4636-bddc-0a7bb0d0d389.png)


## References

- Mongoose: https://mongoosejs.com/
- Express: https://expressjs.com/
- Node.js: https://nodejs.org/en/

# serverless-api

## Project

Lab 18 - DynamoDB

### Process

#### Feature Tasks & Requirements

Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services.

Database: DynamoDB

1 Table required.

#### Routing: API Gateway

POST
/people - Given a JSON body, inserts a record into the database.
returns an object representing one record, by its id (##).
GET
/people - returns an array of objects representing the records in the database.
/people/## - returns an object representing one record, by its id (##).
PUT
/people/## - Given a JSON body and an ID (##), updates a record in the database.
returns an object representing one record, by its id (##).
DELETE
/people/## - Given an id (##) removes the matching record from the database.
returns an empty object.
CRUD Operation Handlers: Lambda Functions
Implementation Notes
Work in a non-main branch in a new repository called ‘serverless-api’. While your code will all reside in a single repo, your functions will need to be individually .zipped and deployed using common libraries (node_modules) and schema files.

#### Implementation notes

Create one table for one data model at Dynamo DB.
Create a Dynamoose schema to define the structure of your table.
Write lambda functions that will separately perform the proper CRUD operation on the database.
Create your routes using API Gateway.
Routes should integrate with the appropriate Lambda function to perform the operation.

### Documentation

Had some issues with uploading the zip files. They were 4.2mb but should've been small enough to able to code in the editor on aws. Approached that issue by uploading seperate zip files for each of the methods and just coding on my local. Was having issues with accessibility as well, even though all of my roles have full access dynamodb permissions. Met up with Ryan Gallaway over the weekend to find a solution but wasn't able to figure out why it wasn't recognizing that.

**What is the root URL to your API?**
[Root URL](https://uoagvvssjh.execute-api.us-east-2.amazonaws.com/test)

**What are the routes?**
My routes are listed above

**What inputs do they require?**
Only the methods GET, PUT, and DELETE require an ID to the API gateway to execute their functionality.

**What output do they return?**
Output is stated above within the routes

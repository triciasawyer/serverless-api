# Serverless API with DynamoDB

## Overview

This project involves the creation of a single-resource REST API using AWS Cloud Services, specifically AWS Lambda, API Gateway, and DynamoDB. The goal is to construct a robust API with CRUD (Create, Read, Update, Delete) functionality.

### Database: DynamoDB

One table is required to store the data model.

### API Routes

#### POST `/people`

- Inserts a record into the database.
- Expects a JSON body.
- Returns an object representing the inserted record by its ID.

#### GET `/people`

- Returns an array of objects representing all records in the database.

#### Get `/people/##`

- Returns an object representing one record by its ID (##).

#### PUT `/people/##`

- Updates a record in the database.
- Expects a JSON body and an ID (##).
- Returns an object representing the updated record by its ID.

#### DELETE `/people/##`

- Removes a record from the database by its ID (##).
- Returns an empty object.

### Implementation Steps

1. Create a single DynamoDB table for your chosen data model.
2. Define the table structure using a Dynamoose schema.
3. Write Lambda functions for each CRUD operation.
4. Configure routes using API Gateway.
5. Ensure that routes integrate with the appropriate Lambda function to perform CRUD operations.

### Documentation

Issues related to uploading zip files and accessibility were encountered during development. Despite the zip files being within the size limit, the issue persisted. To work around this problem, separate zip files for each method were uploaded, and code modifications were made locally.

<!-- [Serverless API Root URL](https://uoagvvssjh.execute-api.us-east-2.amazonaws.com/test) -->

### Input Requirements

For GET, PUT, and DELETE methods, an ID is required in the API Gateway to execute their functionality.

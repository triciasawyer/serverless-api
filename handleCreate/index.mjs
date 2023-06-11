import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
    "id": String,
    "name": String
});

const people = dynamoose.model('people', schema)

export const handler = async (event) => {
    // TODO implement
    const response = { statusCode: null, body: null, };

    try {

    } catch (err) {
        response.body = JSON.stringify(err.message);
        response.statusCode = 500;
    }
    return response;
};
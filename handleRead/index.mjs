import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
"id": String,
"name": String
});

const people = dynamoose.model('people', schema)

export const handler = async(event) => {
    console.log('this is the body', event.body);
    // TODO implement
    const response = {statusCode: null, body: null,};

try {
    let results = await people.scan().exec();
    // console.log('results----', results);
    response.body = JSON.stringify('watermelon');
response.statusCode = 200;
}catch(err){
    response.body = JSON.stringify(err.message);
    response.statusCode = 500;
}

// original response
//     const response = {
//         statusCode: 200,
//         body: JSON.stringify('Hello from Lambda!'),
//     };
    return response;
};

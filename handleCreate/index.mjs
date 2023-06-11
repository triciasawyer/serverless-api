import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
    "id": String,
    "name": String
});

const people = dynamoose.model('people', schema);

export const handler = async(event) => {
  let parsedBody = JSON.parse(event.body)
  const response = {statusCode: null, body: null,};
  
  try {
    let results = await people.create(parsedBody);
    console.log('results:', results);
    response.body = JSON.stringify(results);
    response.statusCode = 200;

  }catch(err){
    response.body = JSON.stringify(err.message);
    response.statusCode = 500;
  }
  return response;
};

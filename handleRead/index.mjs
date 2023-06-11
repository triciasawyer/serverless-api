import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
    "id": String,
    "name": String
});

const people = dynamoose.model('people', schema);

export const handler = async(event) => {

  const response = {statusCode: null, body: null,};
  
  try {
    let results = await people.scan().exec();
    response.body = JSON.stringify(results);
    response.statusCode = 200;
  }catch(err){
    response.body = JSON.stringify(err.message);
    response.statusCode = 500;
  }
  return response;
};

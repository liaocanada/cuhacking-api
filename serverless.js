const getEducationStats = require("./api/education-statistics.js");

exports.handler = async (event, context, callback) => {

    let career = event["queryStringParameters"]['career'];
    let city = event["queryStringParameters"]['city'];
    let province = event["queryStringParameters"]['province'];
    let country = event["queryStringParameters"]['country'];
    let experience = event["queryStringParameters"]['experience'];
    let position = event["queryStringParameters"]['position'];

    // Mandatory fields not provided
    if (!career) {
        callback('No career entered!');
        return;
    }
    if (!city) {
        callback('No city entered!');
        return;
    }

    // Mandatory fields are provided
    let responseBody = await getEducationStats(career, city, province, country, experience, position);
    let response = {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},  // For CORS
        "body": JSON.stringify(responseBody),
        "isBase64Encoded": false  // TODO
    };
    callback(null, response);
}

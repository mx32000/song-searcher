// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  // try {
  //   const subject = event.queryStringParameters.name || 'World'
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({ message: `Hello ${process.env.CLIENT_ID}` }),
  //     // // more keys you can return:
  //     // headers: { "headerName": "headerValue", ... },
  //     // isBase64Encoded: true,
  //   }
  // } catch (error) {
  //   return { statusCode: 500, body: error.toString() }
  // }
  var $ = require('jquery');
  let whereami = ""
  try {
    whereami = "step1";
    const settings = {
      "url": "https://accounts.spotify.com/api/token",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Authorization": "Basic NDQ2NzczMTI1OTNmNDZhOGE4ODBmZjkwOTlkMDM5Njk6MjE3NWRmYWM1MjRkNGU5NWJmMDVjNjEwNjgwMTE1MzM=",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "data": {
        "grant_type": "client_credentials"
      }
    };
    whereami = "step2";
    const response = await $.ajax(settings);
    whereami = "step3";
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${response.access_token}` })
    }
  }
  catch (error) {
      return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }

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
  const { JSDOM } = require( "jsdom" );
  const { window } = new JSDOM( "" );
  const $ = require( "jquery" )( window );
  let whereami = ""
  try {
    whereami = "step1";
    const settings = {
      "url": "https://accounts.spotify.com/api/token",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Authorization": `Basic ${Buffer.from(process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET).toString('base64')}`,
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
      body: JSON.stringify({ token: response.access_token })
    }
  }
  catch (error) {
      return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }

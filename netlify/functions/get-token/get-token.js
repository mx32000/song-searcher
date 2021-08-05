const handler = async (event) => {
  const { JSDOM } = require( "jsdom" );
  const { window } = new JSDOM( "" );
  const $ = require( "jquery" )( window );
  try {
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
    const response = await $.ajax(settings);
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

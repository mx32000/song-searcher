// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${process.env.CLIENT_ID}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
  // try {
  //   const settings = {
  //     "url": "https://accounts.spotify.com/api/token",
  //     "method": "POST",
  //     "timeout": 0,
  //     "headers": {
  //       "Authorization": "Basic NDQ2NzczMTI1OTNmNDZhOGE4ODBmZjkwOTlkMDM5Njk6MjE3NWRmYWM1MjRkNGU5NWJmMDVjNjEwNjgwMTE1MzM=",
  //       "Content-Type": "application/x-www-form-urlencoded"
  //     },
  //     "data": {
  //       "grant_type": "client_credentials"
  //     }
  //   };
  //   const response = await $.ajax(settings);
  //   console.log(response);
  //   return {
  //     statusCode: 200,
  //     body: response.access_token
  //   }
  // }
  // catch (error) {
  //   console.log(error.response.status);
  //   return {
  //     statusCode: 500,
  //     body: error.toString()
  //   }
  // }
}

module.exports = { handler }

// const artistForm = document.querySelector("#artist-select");

// artistForm.addEventListener("submit", e => {
//   e.preventDefault();
// })

async function getToken() {
  try {
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
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }
  catch (error) {
    console.error(error);
  }
}

getToken();

const url = 'https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02/top-tracks?&market=US';


async function test(token) {
  try {
    const res = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
const artistForm = document.querySelector("#artist-select");
const artistInput = document.querySelector(".artist-input");
const tracksDiv = document.querySelector(".track-list")

artistForm.addEventListener("submit", e => {
  e.preventDefault();
  const token = getToken();
})

async function performOperations(query) {
  try {
    const token = await getToken();
    console.log("token",token);
    const artistID = await getArtistID(token, query);

  } catch {
    console.error(error);
  }
}

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
      console.log(response.access_token);
      getArtistID(response.access_token)
      return response.access_token;
    });
  }
  catch (error) {
    console.error(error);
  }
}

async function getArtistID(token, query) {
  try {
    const query = artistInput.value.replace(" ", "%20");
    console.log("artist", query);
    const url = `https://api.spotify.com/v1/search?q=${query}&type=artist`;
    // const url = "https://api.spotify.com/v1/search?q=Katy%20Perry&type=artist";
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log(response.data.artists.items[0].id);
    getTopSongs(token, response.data.artists.items[0].id);
    return response.data.artists.items[0].id;
  } catch (error) {
    console.error(error);
  }
}

// const url = 'https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02/top-tracks?&market=US';

async function getTopSongs(token, artistID) {
  try {
    deleteSongs(tracksDiv);
    const url = `https://api.spotify.com/v1/artists/${artistID}/top-tracks?&market=US`;
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log(response.data);
    response.data.tracks.forEach(track => {
      const trackDiv = document.createElement("div");
      //name
      const nameEl = document.createElement("h2");
      nameEl.textContent = track.name;
      //image
      const imgEl = document.createElement("img");
      imgEl.setAttribute("src", track.album.images[1].url);
      //artists
      const artistsEl = document.createElement("p");
      const artists = track.artists.map(artist => artist.name);
      const artistString = artists.join(", ");
      artistsEl.textContent = artists.join(", ");
      //album
      const albumEl = document.createElement("p");
      albumEl.textContent = `Album: ${track.album.name}`;

      trackDiv.append(nameEl, artistsEl, albumEl, imgEl);
      tracksDiv.append(trackDiv);
    })
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

function deleteSongs(parent) {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}
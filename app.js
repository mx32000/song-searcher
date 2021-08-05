const artistForm = document.querySelector("#artist-select");
const artistInput = document.querySelector(".artist-input");
const tracksDiv = document.querySelector(".track-list")
const toTop = document.querySelector("#to-top");
const showMore = document.querySelector("#others");
const resultsUl = document.querySelector("#more-results");
const errorDisplay = document.querySelector(".error");
const spotifyLogo = document.querySelector("#spotify-logo")

artistForm.addEventListener("submit", async e => {
  e.preventDefault();
  const token = await getToken();
  const artistResults = await getArtistID(token, artistInput.value);
  if (artistResults.length ===0) {
    alert(`NO ARTISTS FOUND FOR QUERY: ${artistInput.value}`);
    return;
  }
  const topSongs = await getTopSongs(token, artistResults[0].id, artistResults.length > 1);
})

async function getToken() {
  try {
    const response = await axios.get("https://gracious-gates-c0f47a.netlify.app/.netlify/functions/get-token");
    return response.data.token;
  } catch (error) {
    console.log(error.response.data);
    console.error(error);
  }
}

async function getArtistID(token, input) {
  try {
    const query = encodeURIComponent(input);
    showMore.setAttribute("data-value", query);
    const url = `https://api.spotify.com/v1/search?q=${query}&type=artist`;
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data.artists.items;
  } catch (error) {
    console.error(error);
  }
}

async function getTopSongs(token, artistID, moreOptionsAvailable) {
  try {
    deleteChildren(tracksDiv);
    deleteChildren(resultsUl);
    spotifyLogo.classList.remove("show");
    const url = `https://api.spotify.com/v1/artists/${artistID}/top-tracks?&market=US`;
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    //check for whether show more button should show
    if (moreOptionsAvailable ^ (showMore.classList.contains("show"))) {
      showMore.classList.toggle("show");
    }
    const tracks = response.data.tracks;
    //if artist has no top tracks
    if (tracks.length === 0) {
      const artist = await getArtistByID(token, artistID);
      alert(`NO TOP TRACKS FOUND FOR ARTIST: ${artist.name}`);
      return response.data;
    }
    spotifyLogo.classList.add("show");
    //grab how many songs from select input
    const limit = document.querySelector("#song-number").value;
    tracks.slice(0,limit).forEach(track => {
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
      artistsEl.textContent = artists.join(", ");
      //album
      const albumEl = document.createElement("p");
      albumEl.textContent = `Album: ${track.album.name}`;

      trackDiv.append(nameEl, artistsEl, albumEl, imgEl);
      tracksDiv.append(trackDiv);
    })
    //check for whether to top button should show
    if ((tracksDiv.children.length > 1) ^ (toTop.classList.contains("show"))) {
      toTop.classList.toggle("show");
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

function deleteChildren(parent) {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}

showMore.addEventListener("click", async e => {
  e.preventDefault();
  displayMore(showMore.dataset.value);
})

async function displayMore(query) {
  const token = await getToken(query,false);
  const url = `https://api.spotify.com/v1/search?q=${query}&type=artist`;
  const response = await axios.get(url, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  spotifyLogo.classList.add("show");
  response.data.artists.items.forEach(artist => {
    const artistLi = document.createElement("li");
    const liA = document.createElement("a");
    liA.href = "#";
    liA.textContent = artist.name;
    liA.setAttribute("data-value", artist.id);
    liA.setAttribute("data-token", token);
    liA.addEventListener("click", async e => {
      e.preventDefault();
      const newToken = await getToken();
      
      getTopSongs(newToken, e.target.dataset.value, true);
    })
    let avatar = null;
    if (artist.images.length > 0) {
      avatar = document.createElement("img");
      avatar.setAttribute("src", artist.images[artist.images.length - 1].url);
    } else {
      avatar = document.createElement("div");
      avatar.textContent = "(No image available)";
      avatar.classList.add("blank-image");
    }
    artistLi.append(avatar, liA);
    resultsUl.append(artistLi);
  })
}

async function getArtistByID(token, artistID) {
  try {
    const url = `https://api.spotify.com/v1/artists/${artistID}`;
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data
  } catch (error) {
    console.error(error);
  }
}
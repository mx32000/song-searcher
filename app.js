const artistForm = document.querySelector("#artist-select");
const artistInput = document.querySelector(".artist-input");
const tracksDiv = document.querySelector(".track-list")
const toTop = document.querySelector("#to-top");
const showMore = document.querySelector("#others");
const resultsUl = document.querySelector("#more-results");

artistForm.addEventListener("submit", async e => {
  e.preventDefault();
  const token = await getToken();
  const artistID = await getArtistID(token, artistInput.value);
  const topSongs = await getTopSongs(token, artistID);
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
    return response.data.artists.items[0].id;
  } catch (error) {
    console.error(error);
  }
}

async function getTopSongs(token, artistID) {
  try {
    deleteChildren(tracksDiv);
    deleteChildren(resultsUl);
    const url = `https://api.spotify.com/v1/artists/${artistID}/top-tracks?&market=US`;
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const limit = document.querySelector("#song-number").value;
    response.data.tracks.slice(0,limit).forEach(track => {
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
    if ((tracksDiv.children.length > 1) ^ (toTop.classList.contains("show"))) {
      toTop.classList.toggle("show");
    }
    if ((tracksDiv.children.length > 0) ^ (showMore.classList.contains("show"))) {
      showMore.classList.toggle("show");
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
      getTopSongs(newToken, e.target.dataset.value);
    })
    const imgEl = document.createElement("img");
    if (artist.images.length > 0) {
      imgEl.setAttribute("src", artist.images[artist.images.length - 1].url);
    }
    artistLi.append(imgEl, liA);
    resultsUl.append(artistLi);
  })
}


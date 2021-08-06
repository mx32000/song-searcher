# Project Overview

## Song Searcher

[Song Searcher](https://gracious-gates-c0f47a.netlify.app)

## Project Description

Uses the Spotify API to display top songs and song info for a searched artist.

## API and Data Sample

 - [Spotify API](https://developer.spotify.com/documentation/web-api/)
 - [Reference Guide](https://developer.spotify.com/documentation/web-api/reference/)

```json
{
  "tracks" : [ {
    "album" : {
      "album_type" : "album",
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
        },
        "href" : "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
        "id" : "06HL4z0CvFAxyc27GXpf02",
        "name" : "Taylor Swift",
        "type" : "artist",
        "uri" : "spotify:artist:06HL4z0CvFAxyc27GXpf02"
      } ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/2QJmrSgbdM35R67eoGQo4j"
      },
      "href" : "https://api.spotify.com/v1/albums/2QJmrSgbdM35R67eoGQo4j",
      "id" : "2QJmrSgbdM35R67eoGQo4j",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/ab67616d0000b273c79b600289a80aaef74d155d",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/ab67616d00001e02c79b600289a80aaef74d155d",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/ab67616d00004851c79b600289a80aaef74d155d",
        "width" : 64
      } ],
      "name" : "1989",
      "release_date" : "2014-10-27",
      "release_date_precision" : "day",
      "total_tracks" : 13,
      "type" : "album",
      "uri" : "spotify:album:2QJmrSgbdM35R67eoGQo4j"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
      },
      "href" : "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
      "id" : "06HL4z0CvFAxyc27GXpf02",
      "name" : "Taylor Swift",
      "type" : "artist",
      "uri" : "spotify:artist:06HL4z0CvFAxyc27GXpf02"
    } ],
    "disc_number" : 1,
    "duration_ms" : 231826,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "USCJY1431309"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/1p80LdxRV74UKvL8gnD7ky"
    },
    "href" : "https://api.spotify.com/v1/tracks/1p80LdxRV74UKvL8gnD7ky",
    "id" : "1p80LdxRV74UKvL8gnD7ky",
    "is_local" : false,
    "is_playable" : true,
    "name" : "Blank Space",
    "popularity" : 72,
    "preview_url" : null,
    "track_number" : 2,
    "type" : "track",
    "uri" : "spotify:track:1p80LdxRV74UKvL8gnD7ky"
  }, 
```

## Wireframes

[Mobile Wireframe](https://whimsical.com/song-searcher-J1NeKcXJmW7KxEacAMTJmk)

### MVP/PostMVP

#### MVP 

- Make calls and get data from external API
- Enable user to search for an artist
- Display artist's top songs using flexbox or grid

#### PostMVP  

- "Not what you were looking for?" button to show top 3 results of search instead of automatically selecting first
- Separate tab for selecting a random song from the first however many albums
- "To top" button on mobile layout
- Error messages for bad searches
- Selection bar to show how many (up to 10) top songs to show
- Refresh token if it expires (lasts an hour)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 30| Wireframes / Priority Matrix / Timeframes / Make successful API call | Complete
|August 2| Project Approval / Core Application Structure (HTML, CSS, etc.) / Figure out how to hide client credentials | Complete (August 4)
|August 3| JS / dynamic content | Complete
|August 4| Responsiveness / MVP | Complete
|August 5| Finishing touches / Post MVP | Complete
|August 6| Presentations | Incomplete

## Priority Matrix

[Priority Matrix](https://whimsical.com/6bKrpH2dsS3dJFzn7z4S2A)

## Timeframes

### MVP

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Make successful call to API with Postman | H | 3hrs| 2hrs | 2hrs |
| Make successful call to API in VSCode | H | 3hrs| 4hrs | 4hrs |
| Hide credentials from Github | H | 5hrs| 5hrs | 5hrs |
| Text and search bar/submit | H | 3hrs| 1hr | 1hr |
| Make search call and get artist | H | 2hrs| 2.5hrs | 2.5hrs |
| Make call for top songs and format data | H | 2hrs| 2hrs | 2hrs |
| Render data on page using Flexbox / Grid | H | 3hrs| 2hrs | 2hrs |
| Adjust for medium screens | L | 3hrs| 1hr | 1hr |
| Adjust for larger screens | M | 3hrs| 1.5hrs | 1.5hrs |
| Deploy site | H | 2hrs| 1hr | 1hr |
| Total | H | 29hrs| 22hrs | 22hrs |


### Post MVP

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Selection menu to choose how many songs to display | M | 1hr| .5hrs | .5hrs |
| "To Top" button on mobile screen | M | 1hr| 1hr | 1hr |
| Create tabs for multiple functions | L | 3hrs| 0hrs | 0hrs |
| Implement search for random song from artist | L | 3hrs| 0hrs | 0hrs |
| Handle token expired error | L | 2hrs| 2hrs | 2hrs |
| Handle no search results error | H | 2hrs| 1.5hrs | 1.5hrs |
| Option to see more artists that fit search | L | 3hrs| 4hrs | 4hrs |
| Follow Spotify design guidelines | M | 3hrs| 1hr | 1hr |
| Total | H | 18hrs| 10hrs | 10hrs |

## Code Snippet

Inside getTopSongs(artistID, moreOptionsAvailable): Checks for buttons, handling no top tracks, showing the logo if there are tracks, limiting the number of tracks, and creating the components.

``` javascript
    //check for whether show more button should show
    if (moreOptionsAvailable ^ (showMore.classList.contains("show"))) {
      showMore.classList.toggle("show");
    }
    //if artist has no top tracks
    if (tracks.length === 0) {
      const artist = await getArtistByID(artistID);
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
```

## Change Log
Decided not to add tabs because I liked the simplicity as is
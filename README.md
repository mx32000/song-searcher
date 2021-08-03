# Project Overview

## Song Searcher

The name of your project with deployed URL.

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
|August 2| Project Approval / Core Application Structure (HTML, CSS, etc.) / Figure out how to hide client credentials | Incomplete
|August 3| JS / dynamic content | Incomplete
|August 4| Responsiveness / MVP | Incomplete
|August 5| Finishing touches / Post MVP | Incomplete
|August 6| Presentations | Incomplete

## Priority Matrix

[Priority Matrix](https://whimsical.com/6bKrpH2dsS3dJFzn7z4S2A)

## Timeframes

### MVP

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Make successful call to API with Postman | H | 3hrs| 2hrs | 0hrs |
| Make successful call to API in VSCode | H | 3hrs| 4hrs | 0hrs |
| Hide credentials from Github | H | 5hrs| 3hrs | 0hrs |
| Text and search bar/submit | H | 3hrs| 1hrs | 0hrs |
| Make search call and get artist | H | 2hrs| 2.5hrs | 0hrs |
| Make call for top songs and format data | H | 2hrs| 2hrs | 0hrs |
| Render data on page using Flexbox / Grid | H | 3hrs| 2hrs | 0hrs |
| Adjust for medium screens | L | 3hrs| 0hrs | 0hrs |
| Adjust for larger screens | M | 3hrs| 0hrs | 0hrs |
| Deploy site | H | 2hrs| 0hrs | 0hrs |
| Total | H | 29hrs| 6hrs | 0hrs |


### Post MVP

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Selection menu to choose how many songs to display | M | 1hr| .5hrs | 0hrs |
| "To Top" button on mobile screen | M | 1hr| .5hrs | 0hrs |
| Create tabs for multiple functions | L | 3hrs| 0hrs | 0hrs |
| Implement search for random song from artist | L | 3hrs| 0hrs | 0hrs |
| Handle token expired error | L | 2hrs| 0hrs | 0hrs |
| Handle no search results error | H | 2hrs| 0hrs | 0hrs |
| Option to see more artists that fit search | L | 3hrs| 0hrs | 0hrs |
| Follow Spotify design guidelines | M | 3hrs| 0hrs | 0hrs |
| Total | H | 18hrs| 0hrs | 0hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

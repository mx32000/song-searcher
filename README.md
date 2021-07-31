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

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Find and use external api 
- Render data on page 
- Allow user to choose favorites 

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Add second API
- Use local storage to save user favorites

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|July 30| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|August 2| Project Approval / Core Application Structure (HTML, CSS, etc.) | Incomplete
|August 3| Pseudocode / actual code | Incomplete
|August 4| Initial Clickable Model  | Incomplete
|August 5| MVP | Incomplete
|August 6| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

# [RhythMetrix]

Created by Ryan Ramirez and Cindy Nguyen.

## 🚀 Mission statement

Our application, RhythMetrix is for people who want to find new music. It allows users to create a custom playlist based on artists they choose.

## API & React Router

This application will use the Spotify API. Below are the documentation and specific endpoints we intend to use and the front-end pages that will use them.

- Link to API documentation: (https://developer.spotify.com/documentation/web-api)
- https://api.spotify.com/v1/artists
  - This will fetch an array of artists which will be filtered based on their associated genre
  - For each artist, I want the `id`, `name` and `images`
- https://api.spotify.com/v1/artists/{id}/top-tracks
  - This is fetch an object of tracks with their specific infomation
  - For each track, I want the `name of the track`, `artist`, and `images`
- https://api.spotify.com/v1/search/?q=${query}&type=artist
  -   - This will fetch an array of artists based off the search query
  - For each artist, I want the `id` and `name`

This API requires a key which will be fetched through a POST method.

**Example:**
- https://api.artic.edu/api/v1/artworks](https://api.spotify.com/v1/artists
  - This will fetch an array of artists which will be filtered based on their associated genre
  - For each artist, I want the `id` and `images`
- https://api.artic.edu/api/v1/artworks/{id}](https://api.spotify.com/v1/artists/{id}/top-tracks
  - This will fetch a single artwork object
  - I will use the `id`, `title`, `short_description`, `medium_display`, `place_of_origin` and `image_id`
- https://api.artic.edu/api/v1/artworks/search?q={query}
  - This will fetch a list of artworks that relate to the search query
  - For each artwork, I will use the `id` and `title`

## 👩‍💻 MVP User Stories & Frontend Routes

The application will feature the following frontend routes and core features:

* On the `/` page, users can search up an artist or select a genre to find specific artists
* On the `/artists/` page, users can find artists of that genre and click on the artists to add to their playlist generator
* On the `/playlist` page, users can view the songs of that will be generated from the artists selected.

**Example:**
- On the `/artworks` page, users can view a grid of all artwork
- On the `/artworks` page, users can click on a piece of art in the grid, taking them to the details page for that piece of art.
- On the `/artworks/:artworkId` page, users can view additional details for a single piece of art
- On the `/` page, users can search for artwork titles related to a search term.

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

* Users will be able to change the color scheme of the website from light mode to dark mode
* Users will be able to save and view playlists using local storage
* Users will be able to...

**Example:**
* Users will be able to save and view favorited artworks using local storage
* Users will be able to change the color scheme of the website from light mode to dark mode

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1**
- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 2**
- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 3** (MVP due by the end of the day)
- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 4**
- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 5**
- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

[Wireframe for page 1]

[Wireframe for page 2]

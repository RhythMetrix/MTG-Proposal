# [RhythMetrix]

Created by Ryan Ramirez and Cindy Nguyen.

## 🚀 Mission statement

Our application, RhythMetrix is for people want to conceptualize a Magic of the Gathering card deck. It allows users to create a custom playing deck based on cards found in the game.

## API & React Router

This application will use the Magic of the Gathering API. Below are the documentation and specific endpoints we intend to use and the front-end pages that will use them.

- Link to API documentation: (https://docs.magicthegathering.io/#documentationgetting_started))
- https://api.magicthegathering.io/v1/cards
  - This will fetch an array of all the cards available
  - For each artist, I want the `multiverseid`
- https://api.magicthegathering.io/v1/cards/:id
  - This will fetch an indiviual card's information
  - For each card, I want the `name`, `imageURL`,`originalText` and `originalType`
- https://api.magicthegathering.io/v1/sets or https://api.magicthegathering.io/v1/types
  -   - This will fetch an array of exists sets and types
  - For each fetch, I want to grab a limited number of sets or types to act as form

This API does not require a key.

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

* On the `/` page, users filter through cards through existing sets or types in MotG
* On the `/card` page, users can find indiviual card information and have the ability to add that card to their 'deck'
* On the `/deck` page, users can view all the cards that they've added to their deck.

**Example:**
- On the `/artworks` page, users can view a grid of all artwork
- On the `/artworks` page, users can click on a piece of art in the grid, taking them to the details page for that piece of art.
- On the `/artworks/:artworkId` page, users can view additional details for a single piece of art
- On the `/` page, users can search for artwork titles related to a search term.

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

* Users will be able to change the color scheme of the website from light mode to dark mode
* Users deck will be saved with local storage
* Users will be able to remove cards from their custom deck
* Users will be able to change the card limit of their deck
* Users will be able to randomize the cards on the home page

**Example:**
* Users will be able to save and view favorited artworks using local storage
* Users will be able to change the color scheme of the website from light mode to dark mode

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1**
- [x] Create basic page components
    - Includes: nav bar, side bar for filters (form), showcase for cards
- [x] Create boiler plate for fetches and test if fetches work
      - Cards, Types, and Sets endpoints

**Day 2**
- [x] Create useState and useEffect
- [x] Integrate fetches

**Day 3** (MVP due by the end of the day)
- [x] Implement a list/grid of 100 cards
- [x] Implement clickability to cards in grid to show card details
- [x] Implement add button to cards 

**Day 4**
- [x] Work on CSS
- [x] Work on toggling light/dark mode
- [x] Work on button to randomize the cards on the home page

**Day 5**
- [ ] Local storage for the deck and removability function
- [x] Refactor
- [ ] Debug and Refactor again

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:
https://drive.google.com/file/d/1B29_aPhtEEyKhHoH8ywb8-MLi7F63Pux/view?usp=sharing

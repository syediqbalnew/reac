# SuperTunes-Boiler-Plate

# Getting Started
Fork the project and clone it on your local machine. On your terminal, npm install to install packages and npm run start to start the server.

# Key Skills
The intent of this exercise is to give you a thorough workout on the following React features: Building class components Building presentational function components State management and manipulation using this.setState() Methods Rendering lists & setting the key attribute Using props Implementing prop-type validators

# Expected Output
The app loads up with the screen shown below. As you can see, it displays a list of song titles with the thumbnail, title, artist and rating: Super Tunes Users can also click on the ‘Sort by Title’ and ‘Sort by Rating’ buttons to actively sort this list. 
![image](https://github.com/Dharini-MernStack/SuperTunes-Boiler-Plate/assets/76996610/a8ce35b9-e6da-4fb6-b695-1afd2c058e2b)

# Important Points

# General Notes
Except the App.js, create all components in the /src/components folder Stylesheet for the assignment is provided to you and comes imported into the index.js file. Take the look at the design specification documents for all components to understand how the UIs are to be built and the exact CSS selectors to use so that components render correctly. 
# Design Specification
![image](https://github.com/Dharini-MernStack/SuperTunes-Boiler-Plate/assets/76996610/a3dd62be-6787-46ab-9de1-c7ae61d0d142)

# Design Specification 2
![image](https://github.com/Dharini-MernStack/SuperTunes-Boiler-Plate/assets/76996610/6205e15c-f5be-44ec-952f-4ccad247fb6d)


# Notes for Component - App
The App Component is the main component that renders the Application and is also responsible for state management & manipulation.

The App component must be built as a class component The array of songs and data can be imported from /services/songs file. Simply use an import statement: import songs from "./services/songs"; Create a state variable named songs which can be set to the array imported from the songs service module as mentioned above. For sorting by rating, you can use the following expression: [...this.state.songs.sort((a, b) => b.rating - a.rating)] For sorting by title, use the following expression: [...this.state.songs.sort((a, b) =>a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1)]

# Notes for ComponenT- songCard
The SongCard component renders a row with the thumbnail, title, artist and rating values for a song.
This component must be a function component Include a prop named ‘data’ which should be an object with the following shape: { thumb: String, title: String, artist: String, rating: Number } Implement prop-type validators

# Notes for Component- Rating
This component accepts a number as a prop and renders the equivalent number of star icons on the UI. This component must be a function component Include a prop named ‘stars’ which should bring in a number that translates to the number of stars that you should render. The actual star icon is a div with the class-name ‘start’. To be able to use the .map() method to render instances of the above said div, you can use this expression: [...Array(Math.round(stars <= 5 ? stars : 0)).keys()].map();

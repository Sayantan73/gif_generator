# GIF Generator

A ReactJS application for generating random GIFs.

## Features

* Displays a random GIF on the screen
* Allows users to generate a new random GIF
* Supports filtering GIFs by tags
* Includes a navigation bar and a filter component

## Usage

1. Clone the repository to your local machine
2. Install the required dependencies using `npm install` or `yarn install`
3. Start the application using `npm start` or `yarn start`
4. Open the application in a web browser at `http://localhost:3000`

## Code Structure

The code is organized into the following folders:

* `src`: contains the source code for the application
* `src/components`: contains reusable React components
* `src/hooks`: contains custom hooks for data fetching
* `src/assets`: contains static assets such as images

## Components

The following components are used in the application:

* [App](cci:1://file:///c:/Users/HP/OneDrive/Desktop/DotBatchProjects/selfPractice/Reactjs/GIFGenerator/src/App.jsx:7:0-23:1): the main application component
* [Random](cci:1://file:///c:/Users/HP/OneDrive/Desktop/DotBatchProjects/selfPractice/Reactjs/GIFGenerator/src/components/Random.jsx:7:0-37:1): the component for displaying a random GIF
* [Tags](cci:1://file:///c:/Users/HP/OneDrive/Desktop/DotBatchProjects/selfPractice/Reactjs/GIFGenerator/src/components/Tags.jsx:7:0-41:1): the component for filtering GIFs by tags

## Hooks

The application uses a custom hook for data fetching:

* `useGif`: a hook that fetches a random GIF from the Giphy API based on the provided tag

## API

The application uses the Giphy API for fetching GIF data. The API is accessed using the `axios` library.

## License

This code is licensed under the MIT License.
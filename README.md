# Drones
## Welcome to Drones
| | | |
|:-------------------------:|:-------------------------:|:-------------------------:|
|<img width="1604" src="/frontend/public/res/screenshots/sys.png" /> |  <img width="1604"  src="/frontend/public/res/screenshots/selection.png" /> | <img width="1604"  src="/frontend/public/res/screenshots/pilot.png" /> |

<p>Drones is a live realtime virtual drone viewer and controller. Observe your fleet of drones on a larger geographical scale or take control, become a drone pilot and navigate your way accross the scapes.</p>

# Installation
## Docker
<p>Drones is preferebly installed through a docker container but manual installation is also easily achieved. To install with docker cd into the app's root directory and run the following in your bash terminal:
</p>

```bash
docker build -t tropicalbastos/live-drones .
```

<p>Then to run the container with the correct port mappings run the following:</p>

```bash
docker run -p 8080:8080 -p 8090:8090 -d tropicalbastos/live-drones
```
<p>That will map the app's http port of 8080 with the host's port of 8080 and also map the socket service port which will be registered by the app on 8090</p>

## Conventional Environemnt
<p>Installing this node app and running it on your machine requires the following (assuming node and npm are configured on your machine). First clone the repo:</p>

```bash
git clone https://github.com/TropicalBastos/Drones
```

<p>Then cd into the newly cloned app and run an install</p>

```bash
npm install
```

<p>Finally the app can be run</p>

```bash
npm start
```

# Testing

<p>To run tests simply run `npm test` and the test suite which is based on `mocha` and `enzyme` will go through the backend and frontend tests in that order. More frontend tests need to be made as there are a lot of components to deal with, especially third party ones like Leaflet.</p>
<p>The Enzyme test suite is not compatible with React 16's context api which makes frontend testing with React-Leaflet's map api cumbersome, needs a workaround.</p>

# Development
## Backend Architecture

<p>Drones' backend is based on Express and takes inspiration from the acclaimed Laravel framework. The code follows the MVC pattern and the logic is split up into models (data models), controllers and a single view (which is worked by the React frontend side).</p>

<p>The models at play are the DataProvider class and the InMemoryDataPersistor - given the small scale of the app the data persistor works an internal array in memory which is consumed by the DataProvider which in turn sends that data to the controller of whom called it.</p>

<p>The currently single controller DroneController takes requests from Express and returns either a file or a json response based on the route.</p>

<p>The routes are agregated by a ligtweight provider which injects them into express automagically. Thus, all routes are contained within an isolated and maintanable file, and if needed can be sharded into many different files for increased scalability.</p>

## Frontend Architecture

<p>Perhaps more bulky than the backend, the React-Redux based frontend is split up into four main modules: Core, Intro, DronePilot and DroneSys, each module representing each side of the app, with Core being well, the core engine.</p>

<p>For the current scale of the app, redux might seem overkill. However, given how apps are subject to scale outwards so pervasively nowadays, its always good to have that in mind so that when the time comes the process is just that bit easier.</p>

<p>The entire application is a single page application with React Router being the underlying engine behind the transitional page changes. Each module is routed by React Router and thus the components pertaining to that module are rendered according to the current route.</p>

## Data Handling

<p>One of the objectives of this task was to ration the data and be as inexpensive as possible with the transfering of data. Each drone entity only needs 3 main key/value pairs of data to fully function in the app: its id, its latitude and its longitude. I've also added a name in there to give them cool aliases, but thats besides the point.</p>

<p>The communication between the server and the system administrator doesn't require optimisation because that will likely  be a broadband-style, mega-bandwidth connection between the central server and the user on the app. The part of the app that requires data efficiency is the communication between the drone and the central server. To factor in a real-time feed of the drones' location and make it data efficient, the drone only sends out an emission when the pilot has completed the move sequence, and only sends that emission if the current location differs from the server's record of its location. These two checksums ensure that the there is a compromise between as real-time of a feed as you can get with data rationing, albeit on a higher level than usual.</p>
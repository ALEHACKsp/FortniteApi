This project is built using Create-React-App. 

## Local Dev

In the project directory, you can run:

### `npm start`

### `npm run build`

## Deployment

### `npm run deploy`

The application build is stored on AWS S3 bucket. Fortnite-stats-app and you can update its contents by running 'npm run deploy'.

## Distribution 

The application is distributed using AWS CloudFront and Route 53 domain management.

## Protocol 

Is using custom domain HTTPS SSL certificates 

## Architecture 

### Front End   

https://github.com/jcharnley/FortniteApi

## Back End   

https://github.com/jcharnley/FortniteExpress

## Front-End File Structure

<img width="262" alt="Screenshot 2019-06-21 at 11 09 41" src="https://user-images.githubusercontent.com/25176118/59915939-c01f1f80-9415-11e9-955b-eedaf2ead4d7.png">

#### Important

src/componants/fortniteApi  - is App.js level and calls the backend that returns the API calls

Package.json - proxy: "https://localhost:8080" is the Express backend port

src/pages - holds all the apps pages which are routed via RouterComponent.js

Two navigation componants one for the main page and one for src/pages/stats

Includes prettierc and eslintrc files

Use Style components throughout


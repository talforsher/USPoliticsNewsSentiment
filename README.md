# USPoliticsNewsSentiment



## Description
This project is a web application for viewing news regarding US politics. It requires an API token for accessing the data. Users can select their favorite candidate to view particular news articles.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:

   git clone https://github.com/rangeva/USPoliticsNewsSentiment/tree/workspace/navrinder


2. Navigate to the project directory

    cd project-directory


3. Install dependencies using npm
    npm install


    To view the project in a local environment, use the following commands

 4.  Adding .env File
 For configuring environment variables, create a .env file in the root directory of the project and add variable given below
 
REACT_APP_BASE_URL =https://api.webz.io


5. Start the development server
    npm start 

Once the server is running, open your web browser and go to http://localhost:3000 

Upon loading the application, a popup will appear prompting for an API token. Click the "Get Token" button to acquire the token. Enter the token in the provided input field to access website data.

If the token is valid, you will be redirected to the landing page where you can view news regarding US politics.

Select your favorite candidate to view particular news articles related to them.

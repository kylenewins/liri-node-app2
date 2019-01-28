# liri-node-app
<h1>My Liri Node App!</h1>
<p> The hardest part of this App (for me) was properly linking all of the endpoint APIs, once all of them were properly integrated, the rest of the project flowed smoothly. I initially set up the app to work with a variety of if statements that read the value of process.argv[2] and ran different functions accordingly. However, after I got all of the commands functioning properly, I found it was more efficient to write them in separate functions and then call those functions based off of a switch/case that passes the arg1 value (process.argv[2]) as a parameter. The functions operate as follows...</p>
<h2>Concert-this</h2>
<p>The concertThis() function is called whenever the arg1 value (process.argv[2]) is "concert-this". Once the function is called, the following things happen</p>
<ul>
    <li>The Function builds an endpoint link by passing the User Query (arg2 AKA process.argv[3]) into the Bands in Town API Url </li>
    <li>An axios call is made that returns the JSON data into the "response" variable</li>
    <li>From there I simply console.log all of the individual data points that I need by referencing them through the response variable</li>
    <li>Moment is used to convert the concert's timestamp into something more usable</li>
    <li>I also included a catch command that checks for an error and then logs it to the console</li>
</ul>
<h2>Movie-this</h2>
<p>This function operates almost identically to the concert-this function. Whenever arg1 is "movie-this" the following things happen</p>
<ul>
    <li>An Endpoint URL is built with my custom API key and the users Query</li>
    <li>An axios call is made to the endpoint Url that calls back the JSON Data</li>
    <li>The JSON data is referenced and logged to the console</li>
    <li>I included an identical catch command to log any errors</li>
</ul>
<h2>Spotify-this-song</h2>
<p>This one was a little tricky because the spotify API operates differently than the previous APIS. Because we are making requests to the API directly through node, no axios call is necessary. Whenever arg1 is "spotify-this-song" the spotifyThis() function is called and the following hings happen</p>
<ul>
    <li>A new constructor is made with the template of Spotify. This references both the node spotify package as well as the .env file where I stored my spotify credentials. The spotify variable holds the formatting info as well as my user credentials to become a pseudo endpoint, in and of itself.</li>
    <li>A .search method is called from the previously constructed spotify variable. All of the parameters for this search are built into the spotify variable automatically (from the node package)</li>
    <li>An error check is put in place to log any errors to the console</li>
    <li>The response is stored in the "response" variable and the data points are referenced accordingly"</li>
</ul>
<h2>Do-what-it-says</h2>
<p>Lastly, the do-what-it-says function operates differently from the rest of the functions. This function essentially performs the following tasks</p>
<ul>
    <li>Uses the fs node package to read the files in my system and find the random.txt file</li>
    <li>Logs any errors to the console</li>
    <li>Separates the data in the random.txt file every time there is a comma, and then stores the parsed data segments into an array</li>
    <li>Rewrites the arg1 and arg2 variables to the values of the first two items in the array</li>
    <li>Runs the runApp() function with the newly rewritten arg1 and arg2</li>
</ul>
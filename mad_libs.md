JS Events: Mad Libs
 Submit Assignment
Due Tuesday by 10am  Points 10  Submitting a website url
Due Sunday June 26 by 10AM

Submit a link to your github repo

------

Start with this webpage, which has several input elements and a button:
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <title></title>
 </head>
 <body>
 
 <h1>Mad Libs</h1>
 
 <ul>
  <li>Noun: <input type="text" id="noun">
  <li>Adjective: <input type="text" id="adjective">
  <li>Someone's Name: <input type="text" id="person">
 </ul>
 
 <button id="lib-button">Lib it!</button>
  
 <div id="story"></div>
  
 </body>
</html>
Add a script tag to the bottom of the page for your code.
Add an event listener to the button so that it calls a makeMadLib function when clicked.
In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")
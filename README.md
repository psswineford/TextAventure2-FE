Text Adventure Game  - Shawn Swineford

Objective

I want to create an interactive “text adventure game”.  I have a passion for tabletop games and storytelling. My inspiration is to take the old Zork style text adventure games and update them with some interactivity. There would be 4 screens. One with a map showing where you are and where you can go. Another with a character information screen. One with clickable buttons that allow you to interact with the area. And the final screen would be a text area that updates as you move through the game.

Current Tech Stack:

Front-end
Angular for state, displaying to the HTML front end, and sending requests to the back end
HTML to display
CSS for formatting

Back-end
MSSQL Express running in a docker container
.Net Core 6 , Entity Framework


User Stories

As a user I want to be able to see character information update as I get items and fight monsters in the world
As a user I want to see a text description of the current area I’m in
As a user I want to have clickable buttons that allow me to interact with the world (IE search the area, move to a new area, fight a monster)
As a user I want to login and create and select characters
As a user I want to logout and have the game save my current state


Early goals:

My initial idea is to create a simple map with 4 rooms.  Each area will contain a description of the room, and things in it. You can retrieve items by searching and use them to advance. This should help me start simple and hopefully get me to a point where I’m ready to scale up.




Long goals:

Add monsters to fight. 
Add character types (IE knight, wizards etc).  
Add items to enhance each character type.  
Scale up the dungeon for more rooms.


Bugs:
Update character card properly when item is picked up without needing to refresh the page
Don’t allow for options to work if you don’t have an item.  IE you should not be able to get the jewel if you don’t have the ring to put into the slot on the fireplace

Project Tracking is being done on Trello.  
Design was done with Figma






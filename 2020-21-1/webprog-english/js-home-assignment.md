# Jacvascript home assignment - SET
Your task is to implement an old card game called SET as a browser application.

## Rules
The goal og the game is to find SETs of three cards from the twelve cards placed on the desk. All cards have four properties:
- **SHAPE**: oval, squiggle, diamond
- **COLOR**: red, green, purlple
- **NUMBER**: 1,2, or 3 shapes
- **SHADING**: solid, striped or outlined shapes

Every SET consist of three cards, where all properties are:
- the same on all of the cards
- different on all of the cards.

The selected cards have to adhere to these rules for ALL properties. Worded differently: if the three cards have the same number of shapes, or 1 2 and 3; if the color is the same, or all three colors; if all shapes are solid, or one solid, striped and empty, etc...

[Correct and incorrect SETs](https://www.masterbaboon.com/wp-content/uploads/2010/09/sets_examples1-1024x586.png)

[Game rules](https://www.setgame.com/sites/default/files/instructions/SET%20INSTRUCTIONS%20-%20ENGLISH.pdf) - NOTE: on page 2, the ruleset incorrectly labels [[one green **striped** squiggle], [two purple **striped**ovals], [three red **striped** diamonds]] as a SET.

## The game
### Starting page
On the game's starting page, show:
- The name of the game
- The rules of the game (As text, as a link, as a dropdown, etc.)
- An option to set the difficulty
- An option to set the number (and names) of players
- An option to set the game mode
- And other, miscellaneous options.

The **difficulty** of the game denotes the number of card properties:
- the *Starter* difficulty doesn't consider the shading of the cads and only displays solid shapes, so we have 3×3×3 = 27 total cards.
- the *Advanced* difficulty considers shading, so we have 3×3×3×3 = 81 total cards.

By default, the *Advanced* difficulty should be selected.

The **number of players** can be set from 1 to 10, the default is 1. Display changeable names for the selected number of players! The default names should be *Player1*, *Player2*, ..., *PlayerN*.

There are two **game modes**:
- *Practice*: All options are available, and in a one-player game, there is no timer.
- *Competitive*: The miscellaneous options aren't available, and the one-player game has the timer enabled as well.

The **miscellaneous** options:
- Enable or disable a button which tells if there is a SET in the current deal (*Competitive*: disabled)
- Enable or disable a button which highligts a SET (*Competitive*: disabled)
- Automatic or button-based deal method for three new cards after no SET was discovered (*Competitive*: automatic)

The programo should store **two lists** in local storage. These lists should be displayed on the starting page:
- The 10 best times, grouped by difficulty for *One-player Competitive* games
- The last 10 multiplayer results, using total scores

Pressing a button labeled **Start** starts the game.

### The game
- On start, generate a deck according to the difficulty setting, shuffle it, and display the cards in the console.
- Following that, display 12 cards (preferably in a 3×4 layout)
- The players in front of the computer examine the table, and if someone finds a SET, they can declare it:
  1. The player tells the computer it's their action (clicking on their name on the interface, or pressing an assigned button on the keyboard)
  2. A timer of 10 seconds starts. If the timer expires before the player makes a selection, the game considers the player made a wrong selection.
  3. While declaring a SET, clicking on a card should select it. Clicking on an already selected card should remove the selection. Any number of cards can be selected or unselected until the player select their third card, when the game switches to evaluation.
- If the player made a wrong selection, they loose a point, and the other players can try finding a set. The original player can't make a new action until someone discovers a SET or all players fail the turn.
- If the player made a correct selection, the three selected cards disappear from the table and the player gets a point. All players who made a wring selection this turn are re-eanbled, and the table draws three new cards.
- Dealing new cards onto the table wotks until there is at least one card in the deck. Display the number of remaining cards in the deck!
- If the table has no valid SET, the game ends. The program should check for this automatically.
- If all players fail to find a SET, three new cards are dealed (automatically or by button, based on the option). If they find a SET in the expanded table, the extra cards are discarded for the next turn.
- Two types of hints are available (if enabled in the settings):
  - Asking the program if there is a valid SET on the current table
  - Asking the program to show a valid SET
- At the end of the game, the program should display a list of players ordered by their score and an option to play again with these players.  
  - If the rematch is selected, at the end of the next game, display scores for the last game and the total scores including previous games.
  - If there's no rematch, get the player back to the starting page.
- If there's only one player, measure the time since the start of the game. In this case, the player is automatically selected (no need to tell the computer whose action is happening).

## Help

Design is important. Your submission doesn't have to be really pretty and filled with frills, but it should look nice on a screen of at least 
1024×768 pixels; the shapes on the cards should be centered and displayed in a recognisable size.<br>You can use minimalist design, custom CSS with extra graphical elements or a CSS framework.

There's no mandatory technology for displaying the game: you can use `table`s, `div`s, and `canvas` freely.

Criteria for function and presentation isn't set in stone, there's flexibility in the grading as long as your game is playable well and the tasks described above work in some way.

The shapes on cards can be created or displayed any way (`canvas`, inline `svg`, bacground pictures)

## Grading
The assignment is worth 20 points. There is a set of minimum requirements, without those, the assignment is not acceptable.

### Minimum requirements
- The `README.md` file from the *Other requerements* section is filled with your data and included with your solution (0&nbsp;points)
- The game page is displayed (0&nbsp;points)
- A deck of 27 cards consists of cards using a permutation of the three card properties (0.5&nbsp;points)
- The first deal of 12 cards is displayed,in a 3×4 arrangement (0.5&nbsp;points)
- Three cards can be selected (0.5&nbsp;points)
- After selecting three cards, the program decides if the SET is correct or not (1&nbsp;point)
- After a correct SET, the three cards are discarded and three new cards are drawn (0.5&nbsp;points)
- The game repeats until the deck runs out (0.5&nbsp;points)
- If there is no SET on the table, the game ends.

### Further points
- The rules are accessible from the starting page (0.5&nbsp;points)
- The options are displayed on the starting page (0.5&nbsp;points)
- Selecting *Competitive* mode hides the miscellaneous options (0.5&nbsp;points)
- The name pf the players can be set, the number of fields matches the number og players, there is a default name for each player (0.5&nbsp;points)
- The starting page displays the two lists correctly (0.5&nbsp;points)
- The game mode with 4 cards properties is available
- The player who is declaring a SET can be selected (1&nbsp;point)
- If playing a one-player game, the player is always selected (1&nbsp;point)
- When declaring a set, a selected card can be unselected (0.5&nbsp;points)
- The timer of 10 seconds (during a player declaring a SET) works (1&nbsp;point)
- Declaring a correct SET gives the player a point (0.5&nbsp;points) 
- Declaring an incorrect SET subtracts a point from the player (0.5&nbsp;points)
- The selection of players is working properly (e.g. after declaring, the selection gets reset, a player declaring an incorrect SET is disabled unil next turn) (1&nbsp;point)
- The *Is there a SET?* button displays according to the settings and works properly (1&nbsp;point)
- The *Show me a SET* button displays according to the settings and works properly (0.5&nbsp;points)
- The *Plus three cards* button displays according to the settings and works properly (0.5&nbsp;points)
- Drawing *Plus three cards* automatically when there's no SET works (1&nbsp;point)
- A rematch can be started with the same players (1&nbsp;point)
- Scores are displayed during and after the game (current and total scores) (0.5&nbsp;points)
- The result gets saved (1&nbsp;point)
- No bigger errors, no way to cause weird bugs (0.5&nbsp;points)
- Nice, well-designed interaface (1&nbsp;point)
- **Missing the deadline by a week (-3&nbsp;points)**
- **Missing the deadline by two weeks (-6&nbsp;points)**
- **Missing the deadline by more than two weeks (rejected&nbsp;assignment&nbsp;and&nbsp;no&nbsp;grade)**

### Other requirements
- The assignment should be compressed into an archive containing all necessary files AND the `README.md` file in the root folder of the program, and uploaded to Canvas by the deadline.
- You cannot use any external, third-party JavaScript libraries.
- The `README.md` file has the following requirements:
  - You fill in your own data at the start of the file (marked by `< >` signs)
  - You mark all (partyally) finished subtasks with an `x` in place of the space between the square brackets `[ ]` in the file.

#### The `README.md` file

```markdown
<student's name>
<student's NEPTUN code>
Web-programming - JavaScript home assignment
This solution was submitted by the stundent named above for a Web-programming assignment.

Hereby I declare that the solution is my own work. I did not copy or use solutions from a third party. I did not share this solution with fellow students and I did not publish it. 

According to the Academic Regulations for Students (Eötvös Loránd University Organisational and Operational Regulations – Volume 2, Section 74/C), a student purpoting the intellectual property of others as their own [...] is committing a disciplinary offence.

The worst result of a disciplinary offence can be the expulsion of the student.

### Minimum requirements
 - [ ] The `README.md` file from the *Other requerements* section is filled with your data and included with your solution (0 points)
 - [ ] The game page is displayed (0 points)
 - [ ] A deck of 27 cards consists of cards using a permutation of the three card properties (0.5 points)
 - [ ] The first deal of 12 cards is displayed,in a 3×4 arrangement (0.5 points)
 - [ ] Three cards can be selected (0.5 points)
 - [ ] After selecting three cards, the program decides if the SET is correct or not (1 point)
 - [ ] After a correct SET, the three cards are discarded and three new cards are drawn (0.5 points)
 - [ ] The game repeats until the deck runs out (0.5 points)
 - [ ] If there is no SET on the table, the game ends.

### Further points
 - [ ] The rules are accessible from the starting page (0.5 points)
 - [ ] The options are displayed on the starting page (0.5 points)
 - [ ] Selecting *Competitive* mode hides the miscellaneous options (0.5 points)
 - [ ] The name pf the players can be set, the number of fields matches the number og players, there is a default name for each player (0.5 points)
 - [ ] The starting page displays the two lists correctly (0.5 points)
 - [ ] The game mode with 4 cards properties is available
 - [ ] The player who is declaring a SET can be selected (1 point)
 - [ ] If playing a one-player game, the player is always selected (1 point)
 - [ ] When declaring a set, a selected card can be unselected (0.5 points)
 - [ ] The timer of 10 seconds (during a player declaring a SET) works (1 point)
 - [ ] Declaring a correct SET gives the player a point (0.5 points) 
 - [ ] Declaring an incorrect SET subtracts a point from the player (0.5 points)
 - [ ] The selection of players is working properly (e.g. after declaring, the selection gets reset, a player declaring an incorrect SET is disabled unil next turn) (1 point)
 - [ ] The *Is there a SET?* button displays according to the settings and works properly (1 point)
 - [ ] The *Show me a SET* button displays according to the settings and works properly (0.5 points)
 - [ ] The *Plus three cards* button displays according to the settings and works properly (0.5 points)
 - [ ] Drawing *Plus three cards* automatically when there's no SET works (1 point)
 - [ ] A rematch can be started with the same players (1 point)
 - [ ] Scores are displayed during and after the game (current and total scores) (0.5 points)
 - [ ] The result gets saved (1 point)
 - [ ] No bigger errors, no way to cause weird bugs (0.5 points)
 - [ ] Nice, well-designed interaface (1 point)
```
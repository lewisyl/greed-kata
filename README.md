# Greed Kata
Live Demo: [Greed-Kata](https://lewisyl.github.io/greed-kata/)\
I just made this most simple and ugly react app only for showing how this game and the logic behind the sense work. Everything is in the App.js.

## During Development (For Interview Reviewers Only)

### Questions that I came up with
- The first question after I saw the rules but before examples was if the triple rule only applied on consecutive same numbers. (If yes, I'm not going to play this game for sure...)
- Dictionary or 6 int variables to hold the face counts?
- If I set 6 keys from 1 - 6 as the faces of dice, how to increase the counts(values).
- After having a dictionary of the counts of current array, which statement I should use to make the main logic? `switch` or `foreach` statement?
- After counting triple's points, how to count the rest two values if there is 1 or 5 without re-counting the counted ones?

   After moving project to React App:
- After moving my project to React, `forEach` didn't work anymore, need to come up with something else(ended up with for loops)

### Assumptions I made
- I chose to use dictionary because it is fast and clean.
- I decided to use `foreach` because it makes my code shorter.
- 


### The different paths or solutions I contemplated
- Without using dictionary, we can instead use multiple for loops and if statement, but the code would be super long. 
    - let faceOne = 0, faceTwo = 0, ..., faceSix = 0, sum = 0;
    - Loop thru the arr, add 1 to the relevant ones as the counts
    - long if-else statement to go thru all rules, add points to sum if any
- Switch statement would also work fine for solving this problem.

## Game Description

Greed is a press-your-luck dice rolling game. In the game, the roller will be rolling dice trying to earn as many points as possible. For the purposes of this kata, we will just be scoring a single roll of five dice.

## Game Rules

Dice(s)                 | Points Earn
----------------------- | -----------
A single 1              | 100
A single 5              | 50
Triple 1s (\[1, 1, 1\]) | 1000
Triple 2s (\[2, 2, 2\]) | 200
Triple 3s (\[3, 3, 3\]) | 300
Triple 4s (\[4, 4, 4\]) | 400
Triple 5s (\[5, 5, 5\]) | 500
Triple 6s (\[6, 6, 6\]) | 600

### Examples

\[1, 1, 1, 5, 1\] = 1150 points\
\[2, 3, 4, 6, 2\] = 0 points\
\[3, 4, 5, 3, 3\] = 350 points\
\[1, 5, 1, 2, 4\] = 250 points\
\[5, 5, 5, 5, 5\] = 600 points
# Greed Kata(with logics)
Description\
Greed is a press-your-luck dice rolling game. In the game, the roller will be rolling dice trying to earn as many points as possible. For the purposes of this kata, we will just be scoring a single roll of five dice.
## Rules

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

## During Development

### Questions that I came up with


### Assumptions I made


### The different paths or solutions I contemplated
- Without using dictionary, we can instead use multiple for loops and if statement, but the code would be super long. 
    - let faceOne = 0, faceTwo = 0, ..., faceSix = 0, sum = 0;
    - Loop thru the arr, add 1 to the relevant ones as the counts
    - long if-else statement to go thru all rules, add points to sum if any
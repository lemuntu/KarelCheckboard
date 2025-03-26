# Karel Checkerboard Pattern

This is a Karel the Robot program that creates a perfect checkerboard pattern. Karel starts at position (1,1) and places beepers in a checkerboard pattern throughout the world.

## Pattern Description
- First row starts with an empty space, followed by a beeper
- Second row starts with a beeper, followed by an empty space
- This pattern continues, creating perfect diagonal lines of beepers

## Functions
- `main()`: Controls the overall pattern creation
- `makeFirstRow()`: Creates rows starting with an empty space
- `makeSecondRow()`: Creates rows starting with a beeper
- `moveToNextRow()`: Moves Karel to the next row
- `turnAround()`: Helper function to turn Karel around

## How to Run
1. Open your Karel IDE: https://stanford.edu/~cpiech/karel/ide.html
2. Copy the code from `Checkerboard.js`
3. Run the program
4. Watch as Karel creates a perfect checkerboard pattern!

## Visual Example
The final pattern will look like this:
```
_ B _ B _ B
B _ B _ B _
_ B _ B _ B
B _ B _ B _
```
Where:
- B represents a beeper
- _ represents an empty space 

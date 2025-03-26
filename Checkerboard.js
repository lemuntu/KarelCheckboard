function main() {
    makeFirstRow();
    moveToNextRow();
    while (frontIsClear()) {
        makeSecondRow();
        moveToNextRow();
        if (frontIsClear()) {
            makeFirstRow();
            moveToNextRow();
        }
    }
}

function makeFirstRow() {
    move();
    putBeeper();
    while (frontIsClear()) {
        move();
        if (frontIsClear()) {
            move();
            putBeeper();
        }
    }
}

function makeSecondRow() {
    putBeeper();
    while (frontIsClear()) {
        move();
        if (frontIsClear()) {
            move();
            putBeeper();
        }
    }
}

function moveToNextRow() {
    turnLeft();
    if (frontIsClear()) {
        move();
        turnLeft();
        while (frontIsClear()) {
            move();
        }
        turnAround();
    }
}

function turnAround() {
    turnLeft();
    turnLeft();
}

function createPattern() {
    putBeeper();
    while (frontIsClear()) {
        move();
        if (frontIsClear()) {
            move();
            putBeeper();
        }
    }
    
    if (facingEast()) {
        turnLeft();
        if (frontIsClear()) {
            move();
            turnLeft();
            moveToStart();
            createNextRow();
        }
    }
}

function createNextRow() {
    while (frontIsClear()) {
        move();
        if (frontIsClear()) {
            move();
            putBeeper();
        }
    }
    if (facingWest()) {
        turnRight();
        if (frontIsClear()) {
            move();
            turnRight();
            moveToStart();
            createPattern();
        }
    }
}

function moveToStart() {
    while (frontIsClear()) {
        move();
    }
}

function turnForClearLeftRow() {
    turnLeft();
    if (frontIsClear()) {
       move();
       turnLeft();
    }
}
 
function turnForClearRightRow() {
    turnRight();
    if (frontIsClear()) {
       move();
       turnRight();
    }
}
 
function putBeeperRow() {
    while (frontIsClear()) { 
       if (noBeepersPresent()) {
          putBeeper();
       }
       move();
       if (frontIsClear()) {
          move();
       }
    }
    
    // Place beeper at last position if needed
    if (noBeepersPresent()) {
       putBeeper();
    }
}
 
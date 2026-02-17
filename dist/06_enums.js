// Enums
// Group of named constans
// TypeScript Speacial Feature Not Available in JavaScript
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
function getUserDirection(direction) {
    if (direction === Direction.UP) {
        console.log("User is going Up");
    }
    else if (direction === Direction.DOWN) {
        console.log("User is going Down");
    }
    else if (direction === Direction.LEFT) {
        console.log("User is going Left");
    }
    else if (direction === Direction.RIGHT) {
        console.log("User is going Right");
    }
}
export {};

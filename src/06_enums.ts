// Enums
// Group of named constans
// TypeScript Speacial Feature Not Available in JavaScript

enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

function getUserDirection(direction: Direction): void {
  if (direction === Direction.UP) {
    console.log("User is going Up");
  } else if (direction === Direction.DOWN) {
    console.log("User is going Down");
  } else if (direction === Direction.LEFT) {
    console.log("User is going Left");
  } else if (direction === Direction.RIGHT) {
    console.log("User is going Right");
  }
}

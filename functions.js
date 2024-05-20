
// A function that generates a random ID from 1 to 10000
function generateRandomID() {
  // Returns a generated Random ID
  return Math.floor(Math.random() * 10000).toString();
}

// Exporting Functions
export default generateRandomID
```
function capitalizeWords(str) {
    return str
        .trim()                   // Remove any leading or trailing spaces
        .split(/\s+/)             // Split on any whitespace (one or more spaces)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');               // Join words with a single space
}

// Example usage
console.log(capitalizeWords("  hello   world  ")); // Output: "Hello World"
console.log(capitalizeWords("javaScript is awesome")); // Output: "JavaScript Is Awesome"

```
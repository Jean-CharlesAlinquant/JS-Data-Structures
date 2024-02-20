const beasts = ["Centaur", "Godzilla", "Mosura", "Minotaur", "Hydra", "Nessie"];

// Linear, O(n)
console.log(beasts.indexOf("Godzilla"));

// Linear, O(n)
console.log(beasts.findIndex((item) => {
    return item === "Godzilla";
}));

// Linear, O(n)
console.log(beasts.find((item) => {
    return item === "Godzilla";
}));

// Linear, O(n)
console.log(beasts.includes("Godzilla"));

// Array.includes() is generally faster than Array.indexOf() due to some optimization.
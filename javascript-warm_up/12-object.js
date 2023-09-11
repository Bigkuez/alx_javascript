const languages = ["C is fun", "Python is cool", "JavaScript is amazing"];

for (let i = 0; i < languages.length; i++) {
  if (languages[i] === "Python is cool") {
    languages[i] = "Python is awesome";
  }
}

for (let i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}

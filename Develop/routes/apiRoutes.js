const router = require("express").Router();
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Create an `/add` route that returns `add.html`
//
router.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "add.html"));
});

router.get("/api/characters", (req, res) => {
  return res.json(characters);
});

router.get("/api/characters/:character", (req, res) => {
  const chosen = req.params.character;

  console.log(chosen);

  for (let i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.json(false);
});

router.post("/api/characters", (req, res) => {
  console.log("Hello World");
  const newCharacter = req.query;
  console.log(req);
  // BONUS: Use a RegEx Pattern to remove spaces from newCharacter
  // Your code here

  // newCharacter.routeName = newCharacter.name.replace(/\s/g , "");

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});

module.exports = router;

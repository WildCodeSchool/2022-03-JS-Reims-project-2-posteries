const express = require("express");

const { ScoreController } = require("./controllers");

const router = express.Router();

router.get("/scores", ScoreController.browse);
router.get("/scores/:id", ScoreController.read);
router.put("/scores/:id", ScoreController.edit);
router.post("/scores", ScoreController.add);
router.delete("/scores/:id", ScoreController.delete);

module.exports = router;

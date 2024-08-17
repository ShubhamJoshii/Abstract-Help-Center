const express = require("express");
const CardModel = require("./models/Card");
const router = express.Router();

router.get("/ping", async (req, res) => {
  res.status(200).send("Server active");
});

router.post("/cards", async (req, res) => {
  const { title, description } = req.body;
  try {
    const cardTitleExist = await CardModel.findOne({
      title: new RegExp(`${title}$`, "i"),
    });
    if(!cardTitleExist){
        const cardData = new CardModel({ title, description });
        const saveData = await cardData.save();
        return res.status(200).json(saveData);
    }
    res.status(404).json({msg:"Card Title already exists"});
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

router.get("/cards", async (req, res) => {
  try {
    const allCards = await CardModel.find({});
    if (allCards.length <= 0) {
      return res.status(404).json({ msg: "No Such Card Found" });
    }
    res.status(200).json({ data: allCards });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

router.get("/cards/:title", async (req, res) => {
  const { title } = req.params;
  let searchCards;
  try {
    if(title.length > 0){
      searchCards = await CardModel.findOne({
        title: new RegExp(`${title}$`, "i"),
      });
    }else{
      searchCards = await CardModel.find();
    }
    if (!searchCards) {
      return res.status(200).json({ msg: "No Such Card Found" });
    }
    res.status(200).json({ data: searchCards });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;

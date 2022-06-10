var express = require("express");
var router = express.Router();

const db = require("../db/models");

const { csrfProtection, asyncHandler } = require("./utils");

// grab a hauntlist???
router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    const hauntListId = req.params.id; //grab the id
    const hauntList = await db.HauntList.findOne({
      where: { id: hauntListId },
      include: [{ model: db.Haunt }],
    });
    const haunts = hauntList.Haunts;
    // const haunts = await db.Haunt.findAll({
    //   where: { id: hauntListId }, //fix finding haunts in hauntlist
    //   include: [{ model: db.HauntList }],
    // });
    res.render("hauntlist", { haunts, hauntList });
  })
);

// update a hauntlist by deleting a haunt from it
router.patch(
  "/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    const hauntListId = req.params.id;
    const hauntId = req.body.hauntId;

    const hauntJoinList = await db.HauntJoinList.findOne({
      where: { hauntListId, hauntId },
    });
    hauntJoinList.destroy();
    console.log("destroyed");
  })
);

// add a haunt to a hauntlist (this is made for the haunts/:id page)
// user is clicking a button that sends the request for each time they want to add haunt to hauntlist
router.post(
  "/:id(\\d+)",
  csrfProtection, // remind Patrick to add a csrfToken to his haunt status thing? idk if needed for a button tbh
  asyncHandler(async (req, res, next) => {
    const hauntListId = req.params.id;
    const hauntId = req.body.hauntId; // OR retrieve button id/option id via dom selector
    console.log(hauntListId);ß
    console.log(hauntId);

    const hauntJoinList = await db.HauntJoinList.findOne({
      where: { hauntListId, hauntId },
    });

    // if the input is valid, let's create a new object & save it
    if (hauntJoinList) {
      await db.HauntJoinList.create({
        hauntListId,
        hauntId
      });
      res.end();
    }
    // else must build an error
}));

// fetch request to add to front end for each button click to add a haunt to the haunt list
/*
(async function() {
  const addToHauntList = await fetch(`/hauntlists/${hauntListId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return addToHauntList.json();
});
*/

module.exports = router;

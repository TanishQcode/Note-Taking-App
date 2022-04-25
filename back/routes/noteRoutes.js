const express=require('express');
const { getNotes, createNote, getNoteById, UpdateNote, DeleteNote } = require('../controllers/notesControllers');
const { protect } = require('../middlewares/authMiddleware');




// import {
//   getNoteById,
//   getNotes,
//   CreateNote,
//   DeleteNote,
//   UpdateNote,
// } from "../controllers/noteController.js";
const router = express.Router();
//  import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(protect, getNotes);
router.route("/:id")
  .get(getNoteById)
  .put(protect, UpdateNote)
  .delete(protect, DeleteNote);
router.route("/create").post(protect, createNote);

module.exports=router;

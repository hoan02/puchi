import mongoose from "mongoose";

const userProgressSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  activeCourseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  userName: {
    type: String,
    required: true,
    default: "User",
  },
  userImgSrc: {
    type: String,
    required: true,
    default: "/logo.svg",
  },
  hearts: {
    type: Number,
    required: true,
    default: 5,
  },
  points: {
    type: Number,
    required: true,
    default: 0,
  },
  gems: {
    type: Number,
    required: true,
    default: 0,
  },
});

const UserProgress =
  mongoose.models?.UserProgress ||
  mongoose.model("UserProgress", userProgressSchema);

export default UserProgress;

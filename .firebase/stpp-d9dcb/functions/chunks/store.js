import { w as writable } from "./index.js";
let slideToggle = writable(false);
let infoId = writable(0);
let searchViewId = writable(-1);
let allCategories = [
  "Biology",
  "Cheat Sheets",
  "Guides",
  "Chemistry",
  "Formulas",
  "History",
  "Notes",
  "Exams",
  "Mathematics",
  "Handbook",
  "English",
  "Essays",
  "Templates",
  "Physics",
  "Problem Solving",
  "Literature",
  "Summaries"
].map((category) => category.toLowerCase());
let allSubjects = [
  "Math",
  "Science",
  "History",
  "Literature",
  "Physics",
  "Biology",
  "Chemistry",
  "Art",
  "Music",
  "Geography",
  "Physical Education",
  "Computer Science"
].map((subject) => subject.toLowerCase());
let allSchools = [
  "Greenwood High",
  "Springfield Academy",
  "Hilltop School",
  "Riverside College",
  "Maplewood Academy",
  "Sunnyvale Institute",
  "Oakridge School",
  "Pine Valley High",
  "Cedarwood Academy"
].map((school) => school.toLowerCase());
function formatFirestoreTimestamp(timestamp) {
  const date = timestamp.toDate();
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}
export {
  allCategories as a,
  allSubjects as b,
  allSchools as c,
  searchViewId as d,
  formatFirestoreTimestamp as f,
  infoId as i,
  slideToggle as s
};

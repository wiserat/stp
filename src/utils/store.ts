import { writable } from "svelte/store";
import type { Timestamp } from "firebase/firestore";

export let slideToggle = writable(false);
export let infoId = writable(0);

export let searchViewId = writable(-1);

export let allCategories = [
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
].map(category => category.toLowerCase());

export let allSubjects = [
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
].map(subject => subject.toLowerCase());

export let allSchools = [
    "Greenwood High",
    "Springfield Academy",
    "Hilltop School",
    "Riverside College",
    "Maplewood Academy",
    "Sunnyvale Institute",
    "Oakridge School",
    "Pine Valley High",
    "Cedarwood Academy"
].map(school => school.toLowerCase());

export function formatFirestoreTimestamp(timestamp: Timestamp): string {
    const date = timestamp.toDate();
    const day = date.getDate().toString().padStart(2, "0");
    // Get short month name, e.g., "Mar"
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
}
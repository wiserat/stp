import {writable} from "svelte/store";

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
  ];

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
];

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
];

export function reformatTimestamp(timestamp: string): string {
    const date = new Date(timestamp);
    return `${date.getUTCDate()}.${date.getUTCMonth() + 1}.${date.getUTCFullYear().toString().slice(-2)}`;
}
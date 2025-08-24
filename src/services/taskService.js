import { delay } from '../utils/helpers.js';


let tasks = [
{ id: 1, title: "Build ESM Project", done: false },
{ id: 2, title: "Push to GitHub", done: true }
];


export async function getTasks() {
await delay(100); // simulate DB call
return tasks;
}

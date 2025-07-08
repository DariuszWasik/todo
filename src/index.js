// src/index.js
import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);

import odinImage from "./odin.png";
   
const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);


//////

import { init } from "./scripts/project-todo manager";

init();
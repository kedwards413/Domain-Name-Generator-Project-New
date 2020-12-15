/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "my", "her"];
  let adj = ["great", "big", "tiny", "silly"];
  let noun = ["jogger", "racoon", "puppy", "bird"];
  let dtl = [".com", ".net", ".gov", ".biz"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dtl.length; l++) {
          document.querySelector("#domain_name").innerHTML +=
            '<li class="py-2 text-secondary"><h3> www.' +
            pronoun[i] +
            adj[j] +
            noun[k] +
            dtl[l];
          (" </h3></li>");
        }
      }
    }
  }
};

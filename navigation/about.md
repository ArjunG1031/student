---
layout: post
title: About
permalink: /about/
comments: true
---

## As a Conversation Starter

Here is where I live and the music I like.

<comment>
Images are from Wikipedia
</comment>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
}

.grid-item {
  text-align: center;
}

.grid-item img {
  width: 100%;
  height: 100px;
  object-fit: contain;
}

.grid-item p {
  margin: 5px 0;
}
</style>

<div class="grid-container" id="grid_container"></div>

<script>
var container = document.getElementById("grid_container");

// DATA (California + Songs)
var living_in_the_world = [
  {
    "image": "http://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg",
    "title": "California",
    "subtitle": "Been here my entire life"
  },
  {
    "image": "/images/about/COME N GO - YEAT.png",
    "title": "COME N GO",
    "subtitle": "Yeat"
  },
  {
    "image": "/images/about/Butterfly Effect - Travis Scott.png",
    "title": "Butterfly Effect",
    "subtitle": "Travis Scott"
  },
  {
    "image": "/images/about/Bad Time - Lil Tecca.png",
    "title": "Bad Time",
    "subtitle": "Lil Tecca"
  },
  {
    "image": "/images/about/New Drop - Don Toliver.png",
    "title": "New Drop",
    "subtitle": "Don Toliver"
  }
];

// Build grid
for (const item of living_in_the_world) {
  var gridItem = document.createElement("div");
  gridItem.className = "grid-item";

  var img = document.createElement("img");
  img.src = item.image;
  img.alt = item.title;

  var title = document.createElement("p");
  title.textContent = item.title;
  title.style.fontWeight = "bold";

  var subtitle = document.createElement("p");
  subtitle.textContent = item.subtitle;
  subtitle.style.fontStyle = "italic";
  subtitle.style.opacity = "0.7";

  gridItem.appendChild(img);
  gridItem.appendChild(title);
  gridItem.appendChild(subtitle);
  container.appendChild(gridItem);
}
</script>

---

### Journey Through Life

- 🏫 Went to Morning Creek Elementary School  
- 🏫 Went to Oak Valley Middle School  
- 🏫 Currently at Del Norte High School  
- 🏀 I’ve played basketball my entire life  
- 💻 Member of the CyberAegis club  

### Family, Friends, and Fun

- Born in the U.S., family is from India  
- Family of 4: me, my sister, my mom, and my dad  

<comment>
Gallery of pics (scroll if more are added later)
</comment>

<div class="image-gallery">
  <img src="{{site.baseurl}}/images/about/Arjun.jpeg" alt="Me">
</div>

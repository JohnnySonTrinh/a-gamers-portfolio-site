const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// local reviews data
const reviews = [
  {
    id: 1,
    name: 'se7enfh',
    rank: 'Gold III',
    text: "He helped me a lot with the ground theory of the play, positioning, mastering my aim, and taught me what is great to do given the situation. I'm really glad I chose him.",
  },
  {
    id: 2,
    name: 'Charm',
    rank: 'Platium I',
    text: 'Very nice explanation, easy to understand, funny but serious at the same time, highly recommend if you are looking for a coach, really good advice.',
  },
  {
    id: 3,
    name: 'Pappa Erl',
    rank: 'Bronze I',
    text: 'Great coach that helped me with my gunplay and controller fundamentals. Will definitely book again! Super friendly and down to earth.',
  },
  {
    id: 4,
    name: 'Kream',
    rank: 'Immortal ',
    text: 'I learn SOO much every time i do a session with him and i have a GREAT time playing would definitely recommend if you want someone to help you improve as fast as possible while also having a good time',
  },
  {
    id: 5,
    name: 'RogueN1nja',
    rank: 'Gold II',
    text: 'Great coaching! Pointed out all of my mistakes and always had a solution on how to fix them. Able to diagnose problems which helped in the coaching process.',
  },
  {
    id: 6,
    name: 'PixelSword',
    rank: 'Platinum I',
    text: 'Domestico was great, very helpful. Impressive coaching sessions, explaining the game in different ways, friendly, and patient.',
  },
  {
    id: 7,
    name: 'ShadowHawk',
    rank: 'Diamond III',
    text: 'Great coach, explained things very well, helped a lot with understanding the game, improving my aim. A great guy overall.',
  },
  {
    id: 8,
    name: 'GhostlySniper',
    rank: 'Silver I',
    text: 'Did aim training, which went pretty well. Gave me a warmup routine and tips on implementing movement in my practice.',
  },
  {
    id: 9,
    name: 'ArcaneMage',
    rank: 'Bronze I',
    text: 'Thank you for being patient and clear with the tips and aspects I needed to focus on. Looking forward to the next session.',
  },
  {
    id: 10,
    name: 'BlazeAssault',
    rank: 'Radiant',
    text: 'Learned a lot, whiffed a lot, and also had a lot of fun. Very helpful and knowledgeable, good at describing how to do things correctly.',
  },
  {
    id: 11,
    name: 'CrimsonFury',
    rank: 'Diamond I',
    text: 'Best coach, very nice guy, taught me a lot to understand the game better. Very good at going straight to the point on your weaknesses.',
  },
  {
    id: 12,
    name: 'ValkyrieWings',
    rank: 'Gold III',
    text: '10/10! Lots of communication, pointed out my strengths and weaknesses with advice on how to improve. Hooked me up with a new warmup to improve my aim.',
  },
  {
    id: 13,
    name: 'NightTerror',
    rank: 'Ascendent III',
    text: 'A coach that actually understands coaching, not just watching you play. The starter kit is invaluable.',
  },
  {
    id: 14,
    name: 'MysticWarrior',
    rank: 'Iron II',
    text: 'Amazing coach, goes through everything in detail, explains clearly and tells you about what to improve on. If you want to improve, coach Domestico is the way to go!',
  },
];
// select items
const author = document.getElementById('author');
const rank = document.getElementById('rank');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  author.textContent = item.name;
  rank.textContent = item.rank;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  author.textContent = item.name;
  rank.textContent = item.rank;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('click');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

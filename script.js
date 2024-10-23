// Sample data for options
const lolchamps = [
  "+",
  "Aatrox",
  "Ahri",
  "Akali",
  "Akshan",
  "Alistar",
  "Amumu",
  "Anivia",
  "Annie",
  "Aphelios",
  "Ashe",
  "Aurelion Sol",
  "Aurora",
  "Azir",
  "Bard",
  "Bel'Veth",
  "Blitzcrank",
  "Brand",
  "Braum",
  "Briar",
  "Caitlyn",
  "Camille",
  "Cassiopeia",
  "Cho'Gath",
  "Corki",
  "Darius",
  "Diana",
  "Dr. Mundo",
  "Draven",
  "Ekko",
  "Elise",
  "Evelynn",
  "Ezreal",
  "Fiddlesticks",
  "Fiora",
  "Fizz",
  "Galio",
  "Gangplank",
  "Garen",
  "Gnar",
  "Gragas",
  "Graves",
  "Gwen",
  "Hecarim",
  "Heimerdinger",
  "Hwei",
  "Illaoi",
  "Irelia",
  "Ivern",
  "Janna",
  "Jarvan IV",
  "Jax",
  "Jayce",
  "Jhin",
  "Jinx",
  "K'Sante",
  "Kai'Sa",
  "Kalista",
  "Karma",
  "Karthus",
  "Kassadin",
  "Katarina",
  "Kayle",
  "Kayn",
  "Kennen",
  "Kha'Zix",
  "Kindred",
  "Kled",
  "Kog'Maw",
  "LeBlanc",
  "Lee Sin",
  "Leona",
  "Lillia",
  "Lissandra",
  "Lucian",
  "Lulu",
  "Lux",
  "Malphite",
  "Malzahar",
  "Maokai",
  "Master Yi",
  "Milio",
  "Miss Fortune",
  "Mordekaiser",
  "Morgana",
  "Naafiri",
  "Nami",
  "Nasus",
  "Nautilus",
  "Neeko",
  "Nidalee",
  "Nilah",
  "Nocturne",
  "Nunu & Willump",
  "Olaf",
  "Orianna",
  "Ornn",
  "Pantheon",
  "Poppy",
  "Pyke",
  "Qiyana",
  "Quinn",
  "Rakan",
  "Rammus",
  "Rek'Sai",
  "Rell",
  "Renata Glasc",
  "Renekton",
  "Rengar",
  "Riven",
  "Rumble",
  "Ryze",
  "Samira",
  "Sejuani",
  "Senna",
  "Seraphine",
  "Sett",
  "Shaco",
  "Shen",
  "Shyvana",
  "Singed",
  "Sion",
  "Sivir",
  "Skarner",
  "Smolder",
  "Sona",
  "Soraka",
  "Swain",
  "Sylas",
  "Syndra",
  "Tahm Kench",
  "Taliyah",
  "Talon",
  "Taric",
  "Teemo",
  "Thresh",
  "Tristana",
  "Trundle",
  "Tryndamere",
  "Twisted Fate",
  "Twitch",
  "Udyr",
  "Urgot",
  "Varus",
  "Vayne",
  "Veigar",
  "Vel'Koz",
  "Vex",
  "Vi",
  "Viego",
  "Viktor",
  "Vladimir",
  "Volibear",
  "Warwick",
  "Wukong",
  "Xayah",
  "Xerath",
];

const lolroles = ["+", "Top", "Jungle", "Mid", "ADC", "Support"];

const owheroes = [
  "+",
  "Ana",
  "Ashe",
  "Baptiste",
  "Bastion",
  "Brigitte",
  "Cassidy",
  "D.Va",
  "Doomfist",
  "Echo",
  "Genji",
  "Hanzo",
  "Illari",
  "Junker Queen",
  "Junkrat",
  "Juno",
  "Kiriko",
  "Lifeweaver",
  "Lúcio",
  "Mauga",
  "Mei",
  "Mercy",
  "Moira",
  "Orisa",
  "Pharah",
  "Ramattra",
  "Reaper",
  "Reinhardt",
  "Roadhog",
  "Sigma",
  "Sojourn",
  "Soldier: 76",
  "Sombra",
  "Symmetra",
  "Torbjörn",
  "Tracer",
  "Venture",
  "Widowmaker",
  "Winston",
  "Wrecking Ball",
  "Zarya",
  "Zenyatta",
];

const owroles = ["+", "Tank", "DPS", "Support"];

const control = [
  "Antarctic Peninsula",
  "Busan",
  "Ilios",
  "Lijiang Tower",
  "Nepal",
  "Oasis",
  "Samoa",
];

const escort = [
  "Circuit Royal",
  "Dorado",
  "Havana",
  "Junkertown",
  "Rialto",
  "Route 66",
  "Shambali Monastery",
  "Watchpoint: Gibraltar",
];

const flashpoint = ["New Junk City", "Suravasa"];
const owmaptypes = [
  "+",
  "Control",
  "Hybrid",
  "Push",
  "Flashpoint",
  "Escort",
  "Clash",
];
const hybrid = [
  "Blizzard World",
  "Eichenwalde",
  "Hollywood",
  "King's Row",
  "Midtown",
  "Numbani",
  "Paraíso",
];
const push = ["Colosseo", "Esperança", "New Queen Street", "Runasapi"];
const clash = ["Hanaoka", "Throne of Anubis"];

const owmaps = ["+"].concat(control, hybrid, escort, push, flashpoint, clash);
const valmaps = [
  "+",
  "Lotus",
  "Pearl",
  "Fracture",
  "Breeze",
  "Icebox",
  "Bind",
  "Haven",
  "Split",
  "Ascent",
];

const valagents = [
  "+",
  "Brimstone",
  "Phoenix",
  "Sage",
  "Sova",
  "Viper",
  "Cypher",
  "Reyna",
  "Killjoy",
  "Breach",
  "Omen",
  "Jett",
  "Raze",
  "Skye",
  "Yoru",
  "Astra",
  "Kayo",
  "Chamber",
  "Neon",
  "Fade",
  "Harbor",
  "Gekko",
  "Deadlock",
  "Iso",
  "Clove",
  "Vyse",
];

valroles = ["+", "Sentinel", "Duelist", "Controller", "Initiator"];
// Function to generate select options based on values
document.addEventListener("DOMContentLoaded", function () {
  function updateGameSelection() {
    const gameSelect = document.getElementById("game"); // Assuming a dropdown for game selection
    gameSelect.addEventListener("change", (event) => {
      localStorage.setItem("game", event.target.value); // Save the selected game to localStorage
      generateSelectOptions(); // Re-generate select options based on the game
    });
  }

  function generateSelectOptions() {
    const selectElements = document.querySelectorAll(
      ".w-auto.bg-gray-800.h-3.rounded-md"
    );
    const roleElements = document.querySelectorAll(
      ".w-auto.bg-gray-700.h-3.rounded-md"
    );
    const maptypeElements = document.querySelectorAll(
      ".w-13.bg-gray-800.h-6.rounded-md"
    );
    const mapElements = document.querySelectorAll(
      ".w-16.bg-gray-800.h-6.rounded-md"
    );

    selectElements.forEach((selectElement) => {
      // Clear existing options
      selectElement.innerHTML = "";

      selectElement.classList.add("fixed-width-select");
      if (localStorage.getItem("game") === "lol") {
        lolchamps.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          selectElement.appendChild(option);
        });
      } else if (localStorage.getItem("game") === "ow2") {
        owheroes.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          selectElement.appendChild(option);
        });
      } else if (localStorage.getItem("game") === "val") {
        valagents.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          selectElement.appendChild(option);
        });
      }
    });

    maptypeElements.forEach((selectElement) => {
      // Clear existing options
      selectElement.innerHTML = "";
      selectElement.classList.add("fixed-width-select");
      if (localStorage.getItem("game") === "ow2") {
        owmaptypes.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          selectElement.appendChild(option);
        });
      }
    });

    mapElements.forEach((selectElement) => {
      // Clear existing options
      selectElement.innerHTML = "";

      selectElement.classList.add("fixed-width-select");
      if (localStorage.getItem("game") === "ow2") {
        owmaps.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          selectElement.appendChild(option);
        });
      } else if (localStorage.getItem("game") === "val") {
        valmaps.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          selectElement.appendChild(option);
        });
      }
    });

    roleElements.forEach((selectElement) => {
      // Clear existing options
      selectElement.innerHTML = "";

      selectElement.classList.add("fixed-width-select");
      if (localStorage.getItem("game") === "lol") {
        lolroles.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          selectElement.appendChild(option);
        });
      } else if (localStorage.getItem("game") === "ow2") {
        owroles.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          selectElement.appendChild(option);
        });
      } else if (localStorage.getItem("game") === "val") {
        valroles.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          selectElement.appendChild(option);
        });
      }
    });
  }

  // Call this function once after the DOM is loaded to set the event listener
  updateGameSelection();

  // Also call generateSelectOptions on page load to populate based on the stored game in localStorage
  document.addEventListener("DOMContentLoaded", generateSelectOptions);

  function swapTeams(match) {
    const team1Name = document.getElementById(`${match}-team1-name`);
    const team2Name = document.getElementById(`${match}-team2-name`);
    swapValues(team1Name, team2Name);

    const team1Logo = document.getElementById(`${match}-team1-logo`);
    const team2Logo = document.getElementById(`${match}-team2-logo`);
    swapValues(team1Logo, team2Logo);

    const team1Info = document.getElementById(`${match}-team1-info`);
    const team2Info = document.getElementById(`${match}-team2-info`);
    swapValues(team1Info, team2Info);

    for (let i = 1; i <= 5; i++) {
      const player1Index = i; // Team 1 players: player1 to player5
      const player2Index = i + 5; // Team 2 players: player6 to player10

      // Swap player names
      const player1Name = document.getElementById(
        `${match}-p${player1Index}-name`
      );
      const player2Name = document.getElementById(
        `${match}-p${player2Index}-name`
      );
      swapValues(player1Name, player2Name);

      // Swap player roles
      const player1Role = document.getElementById(
        `${match}-p${player1Index}-role`
      );
      const player2Role = document.getElementById(
        `${match}-p${player2Index}-role`
      );
      swapValues(player1Role, player2Role);

      // Swap player characters
      const player1Character = document.getElementById(
        `${match}-p${player1Index}-character`
      );
      const player2Character = document.getElementById(
        `${match}-p${player2Index}-character`
      );
      swapValues(player1Character, player2Character);

      const team1Input = document.getElementById(`${match}-map${i}-t1`);
      const team2Input = document.getElementById(`${match}-map${i}-t2`);
      swapValues(team1Input, team2Input);
    }
  }

  // Helper function to swap values between two elements
  function swapValues(element1, element2) {
    const temp = element1.value;
    element1.value = element2.value;
    element2.value = temp;
  }

  // Attach swap functionality to the button
  document
    .getElementById("swap-button-m1")
    .addEventListener("click", function () {
      swapTeams("m1");
    });
  document
    .getElementById("swap-button-m2")
    .addEventListener("click", function () {
      swapTeams("m2");
    });

  document
    .getElementById("swap-button-m3")
    .addEventListener("click", function () {
      swapTeams("m3");
    });

  // Call the function to generate options
  generateSelectOptions();
});

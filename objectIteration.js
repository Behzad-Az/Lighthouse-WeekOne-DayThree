var planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14
};

for (var planet in planetMoons) {
  console.log(planet);
  if (planetMoons.hasOwnProperty(planet)) {
    var numberOfMoons = planetMoons[planet];
    //console.log("WTH");
  }

  console.log("Planet: " + planet + ", # of Moons: "+ numberOfMoons);
}
$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(1350, 400, 50, 50, "red");
    createPlatform(200, 625, 175, 10, "blue");
    createPlatform(400, 500, 175, 10, "blue");
    createPlatform(600, 370, 200, 10, "blue");
    createPlatform(900, 500, 175, 10, "blue");
    createPlatform(1125, 625, 175, 10, "blue");



    // TODO 3 - Create Collectables
     createCollectable("steve", 1300,400);
     createCollectable("diamond", 700, 170, 0.5, 0.7);
     createCollectable("database", 500, 466,)


    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 750)
    createCannon("left", 300, 750)
    createCannon("right", 500, 750)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

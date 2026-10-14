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
    createPlatform(200, 625, 175, 10, "#B7410E");
    createPlatform(400, 500, 175, 10, "#B7410E");
    createPlatform(600, 370, 200, 10, "#B7410E");
    createPlatform(900, 500, 175, 10, "#B7410E");
    createPlatform(1125, 625, 175, 10, "#B7410E");
    createBadPlatform(600, 625, 175, 10, "#420c09");
    createPlatform(1300, 0, 10, 150, "#B7410E", 1300, 1300,100, 0,700, 20);



    // TODO 3 - Create Collectables
     createCollectable("steve", 1300,400);
     createCollectable("diamond", 700, 170, 0.5, 0.7);
     createCollectable("database", 500, 466,)
     createCollectable("grace",990,460, 0, 0, 900, 1050, 5);
     


    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 750)
    createCannon("left", 300, 750)
    createCannon("right", 500, 750)
    createCannon("bottom", 200, 2000, 20, 10, 15, 700, 2)


    // TODO 5 - Create Projectiles
     createProjectile("bottom", 700, 750, 5, 100)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

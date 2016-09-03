var game = new Phaser.Game(800,600, Phaser.AUTO, 'Clicker', {preload: preload, create: create, render: render});

function preload() {
    game.load.spritesheet('explorebtn', 'assets/killbtn.png', 180, 45,2);
    game.load.spritesheet('resetbtn', 'assets/resetbtn.png', 107, 47, 2);
}

//assets
var explorebtn;
var resetbtn;

//resources
var kills = 0;
var materials = 0;
var food = 0;
var survivors = 0;
var totalZombies = 100000;
var remainingZombies = 100000;
var rndExplore;

//display
var style = {fontSize: '16px', fill: '#fff' };
var killText;
var materialText;
var foodText;
var survivorText;
var dummyText;


function create() {
    game.stage.backgroundColor = '#000034';

//create the buttons
     explorebtn = game.add.button(game.world.centerX, game.world.centerY - 50, 'explorebtn', explore, this, 0, 0, 1, 0 );
     resetbtn = game.add.button(20,500, 'resetbtn', resetScore, this, 0,0,1,0);

//add the text
    killText = game.add.text(10,10, 'Kills: 0', style);
    materialText = game.add.text(10,30, 'Materials: 0', style);
    foodText = game.add.text(10,50, 'Food: 0', style);
    survivorText = game.add.text(10,70, 'Survivors: 0', style);
    dummyText = game.add.text(10,200, 'Random: 0', style);

    
}



function explore () {
    rndExplore = game.rnd.integerInRange(1, 6);   
    //rndExplore = 4;

    switch(rndExplore) {
        case 4:
            food ++;
            foodText.text = "BULLSHIT " + food;
            break;
        case 5:
            materials ++;
            materialText.text = "Materials: " + materials;
            break;
        case 6:
            survivors ++;
            survivorText.text = "Survivors: " + survivors;
            break;
        default:
            kills ++;
            killText.text = "Kills: " + kills;           
    }

    dummyText.text = "Random: " + rndExplore;
}

function resetScore() {
    
    kills = 0;
    killText.text = "Kills: 0";
    materials =0;
    materialText.text = "Materials: 0";
    food = 0;
    foodText.text = "Food: 0";
    survivors = 0;
    survivorText.text = "Survivors: 0";
}

function render() {
//    game.debug.inputInfo(32, 32);
//    game.debug.spriteInputInfo(button, 32, 130);
//    game.debug.pointer( game.input.activePointer );
    
}

function update() {

    
}


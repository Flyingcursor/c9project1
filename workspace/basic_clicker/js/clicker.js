var game = new Phaser.Game(800,600, Phaser.AUTO, 'Clicker', {preload: preload, create: create, render: render});

function preload() {
    game.load.spritesheet('killbtn', 'assets/killbtn.png', 180, 45,2);
    game.load.spritesheet('resetbtn', 'assets/resetbtn.png', 107, 47, 2);
}

var killbtn;
var resetbtn;
var kills = 0;
var scoreText;


function create() {
    game.stage.backgroundColor = '#000034';
    
     killbtn = game.add.button(10,10, 'killbtn', killZombie, this, 0, 0, 1, 0 );
     resetbtn = game.add.button(10,60, 'resetbtn', resetScore, this, 0,0,1,0);

    
    scoreText = game.add.text(game.world.centerX, game.world.centerY, 'Kills: 0', {fontSize: '32px', fill: '#fff' });

    
}



function killZombie () {
     kills ++;
     scoreText.text = "Kills: " + kills;
    
}

function resetScore() {
    kills = 0;
    scoreText.text = "Kills: 0";
}

function render() {
//    game.debug.inputInfo(32, 32);
//    game.debug.spriteInputInfo(button, 32, 130);
//    game.debug.pointer( game.input.activePointer );
    
}

function update() {

    
}


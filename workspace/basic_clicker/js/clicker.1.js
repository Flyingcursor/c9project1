var game = new Phaser.Game(800,600, Phaser.AUTO, 'Clicker', {preload: preload, create: create, render: render});

function preload() {
    game.load.spritesheet('button', 'assets/button1.png', 243, 98);
}

var button;
var kills = 0;
var scoreText;

function create() {
    game.stage.backgroundColor = '#000034';
    
    button = game.add.sprite(100,100,'button');
    button.scale.setTo(0.5,0.5);
    button.anchor.set(0.5);
    button.inputEnabled = true;
    button.events.onInputDown.add(listener,this);
    
    scoreText = game.add.text(16,16, 'Kills: 0', {fontSize: '32px', fill: '#fff' });

    
}

function listener () {
     kills ++;
     scoreText.text = "Kills: " + kills;
    
}

function render() {
//    game.debug.inputInfo(32, 32);
//    game.debug.spriteInputInfo(button, 32, 130);
//    game.debug.pointer( game.input.activePointer );
    
}

function update() {

    
}


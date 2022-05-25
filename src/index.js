
const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1250,
    height: 560,
    scene: [
        new Mainscene({key:'Mainscene'}),
        new BanqueScene({key:'Banquescene'}),
        new interfaceScene({key:'interfacescene'}),
        new hopitalrdc({key:'hopitalrdc'}),
        new hopitaletg2({key:'hopitaletg2'}),
        new hopitaletg1({key:'hopitaletg1'}),
        new etg0_aep({key:'etg0_aep'}),
        new etg1_aep({key:'etg1_aep'}),
        new tour2controle({key:'tour2controle'})],

    physics:{
        default:"arcade",
        arcade:{
            //debug:true,
        }
    },
    matter: {
        debug:true,
    }
};



let game = new Phaser.Game(config);

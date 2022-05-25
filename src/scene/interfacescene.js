
class interfaceScene extends Phaser.Scene {

    preload() { 

        this.load.image('piece', 'src/map/asset/piece1.png');

      
    }

    

    create() {

        
        //bar securite
        this.barsecurite = new Phaser.GameObjects.Graphics(this);
        this.add.existing(this.barsecurite);
        this.barsecurite.fillStyle(0x103ec4);

        this.rsecurite = this.add.rectangle(52, 44, 84, 20);
        this.rsecurite.setStrokeStyle(2, 0x080808);
    
        this.barsecurite.fillRect(10,34,statTab[2].securite,20);

        
        //Energie
        this.barenergie = new Phaser.GameObjects.Graphics(this);
        this.add.existing(this.barenergie);
        this.barenergie.fillStyle(0x176a0e);

        this.renergie = this.add.rectangle(49, 84, 78, 20);
        this.renergie.setStrokeStyle(2, 0x080808);
        this.barenergie.fillRect(10,73,statTab[0].energie, 20);

        //confort

        this.barconfort = new Phaser.GameObjects.Graphics(this);
        this.add.existing(this.barconfort);
        this.barconfort.fillStyle(0xd82424);

        this.rconfort = this.add.rectangle(60, 124, 100, 20);
        this.rconfort.setStrokeStyle(2, 0x080808);
        this.barconfort.fillRect(10,115,statTab[1].confort, 20);
        
        



        this.add.sprite(1100,32, 'piece');



        




        //gestion 

        this.text = this.add.text(1150, 25, coinscore[0].score);
        


        
    }

    update() {

        this.text.destroy();
        this.text = this.add.text(1150, 25, coinscore[0].score);



        
}






}



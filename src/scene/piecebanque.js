


var map;

var keys;

var textanim1;
var textanim2;

var boolstop = true; 

var isenter;
var enteronce;


class BanqueScene extends Phaser.Scene{

    
 

    preload(){    

        this.load.tilemapTiledJSON('mapmaison', 'src/map/mapmaison.json');

        this.load.bitmapFont('gem', 'src/map/asset/gem.png', 'src/map/asset/gem.xml');

        this.load.image('characterA', 'src/map/asset/character.png');
        this.load.image('carpet', 'src/map/asset/carpet1.png');
        this.load.image('wall', 'src/map/asset/wall1.png');
        this.load.image('armoirB', 'src/map/asset/armoir_bleue.png');
        this.load.image('key1', 'src/map/asset/keyanim1.png');
        this.load.image('key2', 'src/map/asset/keyanim2.png');
        this.load.image('perso1', 'src/map/asset/perso1.png');
        this.load.image('perso2', 'src/map/asset/perso2.png');
        this.load.image('perso3', 'src/map/asset/perso3.png');
        this.load.image('perso4', 'src/map/asset/perso4.png');
        this.load.image('perso5', 'src/map/asset/perso5.png');
        this.load.image('perso6', 'src/map/asset/perso6.png');
        this.load.image('perso7', 'src/map/asset/perso7.png');
        this.load.image('perso8', 'src/map/asset/perso8.png');



    

    }



    create(){

      //reset var 


      isenter = false;

      enteronce = false;


        keys = this.input.keyboard.addKeys("E");


        
        map = this.make.tilemap({ key: 'mapmaison' });

        this.tilesetcarpet = map.addTilesetImage('carpetA','carpet');
        this.tilesetwall = map.addTilesetImage('wallA','wall');
        this.tilesetarmoir = map.addTilesetImage('armoir','armoirB');



        this.laysol = map.createLayer('sol',this.tilesetcarpet);
        this.laymur = map.createLayer('mur',this.tilesetwall);
        this.layarmoir = map.createLayer('armoir', this.tilesetarmoir); 


        if(piece[0].isbuild == true){
          this.layarmoir.setAlpha(1);
        }
        else{
          this.layarmoir.setAlpha(0.5);
        }



        //text 





        console.log(piece);

        

        //player
        
        const spawnPoint = map.findObject("object", obj => obj.name === "spawn");
        
        this.player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "characterA");

        this.physics.world.setBounds(0, 0, this.laysol.width, this.laysol.height, true, true, true, true);

        this.player.body.setCollideWorldBounds(true);
        this.player.body.onWorldBounds = true;


     




        this.cameras.main.startFollow(this.player);


        Align.scaleToGameW(this.player,0.035, this);

        this.cursors=this.input.keyboard.createCursorKeys();




        //zonearmoir

        const armoir = map.findObject("object", obj => obj.name === "armoir");

        this.armoirZone = this.physics.add.existing(
          this.add.zone(armoir.x, armoir.y, armoir.width, armoir.height)
        );
        
        this.physics.world.enable(this.armoirZone);

        this.armoirZone.setOrigin(0);

        //animation

           //animation walk

        
           this.anims.create({ 
            key: 'walk1',
            frames: [
                { key: 'perso1'},
                { key: 'perso4'}
            ],
            repeat:-1,
            frameRate: 3,
            //hideOnComplete : true
          });

          
        this.anims.create({ 
            key: 'walk2',
            frames: [
                { key: 'perso2'},
                { key: 'perso5'}
            ],
            repeat:-1,
            frameRate: 3,
            //hideOnComplete : true
          });

          
        this.anims.create({ 
            key: 'walk3',
            frames: [
                { key: 'perso3'},
                { key: 'perso7'}
            ],
            repeat:-1,
            frameRate: 3,
            //hideOnComplete : true
          });

          
        this.anims.create({ 
            key: 'walk4',
            frames: [
                { key: 'perso8'},
                { key: 'perso6'}
            ],
            repeat:-1,
            frameRate: 3,
            //hideOnComplete : true
          });
  
        
        this.anims.create({ 
          key: 'keypress',
          frames: [
              { key: 'key1'},
              { key: 'key2'}
          ],
          repeat:-1,
          //duration: 7500,
          frameRate: 3,
          hideOnComplete : true
        });


      const porteA = map.findObject("object", obj => obj.name === "porte");

      const porteAZone = this.physics.add.existing(
          this.add.zone(porteA.x, porteA.y, porteA.width, porteA.height)
        );

      porteAZone.setOrigin(0);

      this.physics.add.overlap(this.player,porteAZone,function(BanqueScene){
          BanqueScene.scene.scene.stop();
          BanqueScene.scene.scene.launch('Mainscene');
      });


}


    
    update() {

  
      if(this.physics.overlapCirc(229, 188, 50,true).length == 2){


        if(enteronce == false && piece[0].isbuild == false){

            
            this.animstart = this.add.sprite( 170, 130, 'key1')
            this.animstart.play('keypress');
            var text = "to upgrade";
            textanim1 = this.add.bitmapText(200, 120, 'gem', text,20);
            isenter = true;
            enteronce = true;
        }
          
      }
      else{
        if(isenter == true && piece[0].isbuild == false){
            
          this.animstart.destroy();
          textanim1.destroy();
          this.layarmoir.setAlpha(0.5);
          isenter = false;
          enteronce = false;
      
        }
        
      }


      console.log(isenter, enteronce);
      


      if (keys.E.isDown) {  


        this.layarmoir.setAlpha(1);
        textanim1.destroy();
        this.animstart.destroy();
        piece[0].isbuild = true;
        boolstop = false;
        var buy = "purchased";
        this.buyanim = this.add.bitmapText(200, 120, 'gem', buy,20);
        
      }
      
  

      this.player.setVelocityY(0);
      this.player.setVelocityX(0);


      if (this.cursors.up.isDown==true)
      {
        this.player.setVelocityY(-100);
        this.player.play('walk2', true);
      }
      if (this.cursors.down.isDown==true)
      {
        this.player.setVelocityY(100);
        this.player.play('walk1', true);
      }
       if (this.cursors.right.isDown==true)
      {
        this.player.setVelocityX(100);
        this.player.play('walk3', true);
      }
      if (this.cursors.left.isDown==true)
      {
        this.player.setVelocityX(-100);
        this.player.play('walk4', true);
      }
      if(this.cursors.up.isDown == true && this.cursors.left.isDown == true){
          this.player.play('walk1', true);
      }
      
      
      if(this.player.body.velocity.x == 0 && this.player.body.velocity.y == 0){

       this.player.anims.stop();
       }


    }

}





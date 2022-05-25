
var map;
var layer;
var porte;
var debugGraphics;
var porteouverte = false;

let scoretemp = true;

let coins;

class Align
{
	static scaleToGameW(obj,per,scene)
	{
		obj.displayWidth=scene.sys.game.config.width*per;
		obj.scaleY=obj.scaleX;
	}
	static centerH(obj,scene)
	{
		obj.x=scene.sys.game.config.width/2-obj.displayWidth/2;
	}
	static centerV(obj,scene)
	{
		obj.y=scene.sys.game.config.height/2-obj.displayHeight/2;
	}


	static center2(obj,scene)
	{
		obj.x=scene.sys.game.config.width/2-obj.displayWidth/2;
		obj.y=scene.sys.game.config.height/2-obj.displayHeight/2;
	}
	static center(obj,scene)
	{
		obj.x=scene.sys.game.config.width/2;
		obj.y=scene.sys.game.config.height/2;
	}
}


class Mainscene extends Phaser.Scene {
  
    
    preload()
{

	// load the PNG file
    this.load.image('characterA', 'src/map/asset/perso1.png');
    this.load.image('aeroport1', 'src/map/asset/aeroport.png');
    this.load.image('plan1', 'src/map/asset/plan.png');
    this.load.image('arbre1', 'src/map/asset/arbre.png');
    this.load.image('arbuste1', 'src/map/asset/arbuste.png');
    this.load.image('avion1', 'src/map/asset/avion.png');
    this.load.image('bancsheet1', 'src/map/asset/bancsheet.png');
    this.load.image('banque1', 'src/map/asset/banque.png');
    this.load.image('betonsheet1', 'src/map/asset/betonsheet.png');
    this.load.image('cheminsheet1', 'src/map/asset/cheminsheet.png');
    this.load.image('eausheet1', 'src/map/asset/eausheet.png');
    this.load.image('bureau1', 'src/map/asset/bureau.png');
    this.load.image('grillagesheet1', 'src/map/asset/grillagesheet.png');
    this.load.image('eolienne1', 'src/map/asset/eolienne.png');
    this.load.image('fontaine1', 'src/map/asset/fontaine.png');
    this.load.image('haies1', 'src/map/asset/haies.png');
    this.load.image('hopital1', 'src/map/asset/hopital.png');
    this.load.image('magasin1', 'src/map/asset/magasin.png');
    this.load.image('hopital1', 'src/map/asset/hopital.png');
    this.load.image('pelouse', 'src/map/asset/pelouse1.png');
    this.load.image('piece', 'src/map/asset/piece1.png');
    this.load.image('rouage1', 'src/map/asset/rouage.png');
    this.load.image('tourdecontrole1', 'src/map/asset/tourdecontrole.png');
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
    this.load.image('coin2', 'src/map/asset/coin2.png');
    this.load.image('coin3', 'src/map/asset/coin3.png');
    this.load.image('coin4', 'src/map/asset/coin4.png');
    this.load.image('coin5', 'src/map/asset/coin5.png');
    this.load.image('coin6', 'src/map/asset/coin6.png');

    this.load.image('coin21', 'src/map/asset/coin/coin1.png');
    this.load.image('coin31', 'src/map/asset/coin/coin2.png');
    this.load.image('coin41', 'src/map/asset/coin/coin3.png');
    this.load.image('coin51', 'src/map/asset/coin/coin4.png');
    this.load.image('coin61', 'src/map/asset/coin/coin5.png');
    this.load.image('coin71', 'src/map/asset/coin/coin6.png');



    
         
       














	// load the JSON file
    this.load.tilemapTiledJSON('tilemap', 'src/map/carte.json');

}


    // Set name of tileset and name of tilemap layer
    create() {





        



        map = this.make.tilemap({ key: 'tilemap' });

        this.tilesetBanque = map.addTilesetImage('banque','banque1');
        this.tilesetaeroport = map.addTilesetImage('aeroport','aeroport1');
        this.tilesetarbre = map.addTilesetImage('arbre','arbre1');
        this.tilesetarbuste = map.addTilesetImage('arbuste','arbuste1');
        this.tilesetavion = map.addTilesetImage(    'avion','avion1');
        this.tilesetbancsheet = map.addTilesetImage('bancsheet','bancsheet1');
        this.tilesetbetonsheet = map.addTilesetImage('betonsheet','betonsheet1');
        this.tilesetbureau = map.addTilesetImage('bureau','bureau1');
        this.tilesetcheminsheet = map.addTilesetImage('cheminsheet','cheminsheet1');
        this.tileseteausheet = map.addTilesetImage('eausheet','eausheet1');
        this.tileseteolienne = map.addTilesetImage('eolienne','eolienne1');
        this.tilesetgrillagesheet = map.addTilesetImage('grillagesheet','grillagesheet1');
        this.tilesethaies = map.addTilesetImage('haies','haies1');
        this.tilesetplan = map.addTilesetImage('plan','plan1');
        this.tilesethopital = map.addTilesetImage('hopital','hopital1');
        this.tilesetpelouse = map.addTilesetImage('pelouse1','pelouse');
        //this.tilesetpiece = map.addTilesetImage('piece1','piece');
        this.tilesettourdecontrole = map.addTilesetImage('tourdecontrole','tourdecontrole1');
        this.tilesetfontaine = map.addTilesetImage('fontaine','fontaine1');
 


        this.scene.launch('interfacescene');





        



        let tilesetbat = [
            this.tilesetBanque,
            this.tilesetbureau,
            this.tilesethopital,
            this.tilesetgrillagesheet,
            this.tilesetfontaine,
            this.tilesetbancsheet,
            this.tilesetarbre,
            this.tilesethaies,
            this.tilesetavion,
            this.tileseteolienne,
            this.tilesetplan,
            this.tilesettourdecontrole,
            this.tilesetaeroport
        ]

        let tilesetsolchemin = [
            this.tilesetcheminsheet,
            this.tileseteausheet,
            this.tilesetpelouse,
            this.tilesetbetonsheet
        ]   




         


        this.layer3 = map.createLayer('sol',tilesetsolchemin);
        this.layer2 = map.createLayer('batiments',tilesetbat);



        keys = this.input.keyboard.addKeys("Z,Q,S,D");










         
      


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
                { key: 'perso6'}
            ],
            repeat:-1,
            frameRate: 3,
            //hideOnComplete : true
          });

          
        this.anims.create({ 
            key: 'walk4',
            frames: [
                { key: 'perso7'},
                { key: 'perso8'}
            ],
            repeat:-1,
            frameRate: 3,
            //hideOnComplete : true
          });
          

        this.anims.create({
            key:'coin',
            frames:[
                {key:'piece'},
                {key:'coin2'},
                {key:'coin3'},
                {key:'coin4'},
                {key:'coin5'},
                {key:'coin6'}
            ],
            frameRate:8,
            repeat:-1

        })

        this.anims.create({
            key:'coinv2',
            frames:[
                {key:'coin21'},
                {key:'coin31'},
                {key:'coin41'},
                {key:'coin51'},
                {key:'coin61'},
                {key:'coin71'},

            ],
            frameRate:8,
            repeat:-1

        })
  

        
        const spawnPoint = map.findObject("object", obj => obj.name === "spawn");
        const spawnPointC = map.findObject("object", obj => obj.name === "spawnC");
        const spawnPointD = map.findObject("object", obj => obj.name === "spawnD");
        const spawnPointE = map.findObject("object", obj => obj.name === "spawnE");

        console.log
        

        
        if(where[0].mainscene==false)this.player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "characterA");where[0].mainscene=true;
        if(where[3].mainscenefromhpt) this.player = this.physics.add.sprite(spawnPointC.x, spawnPointC.y, "characterA");where[0].mainscenefromhpt=false;
        if(where[1].mainscenefromaep) this.player = this.physics.add.sprite(spawnPointD.x, spawnPointD.y, "characterA");where[0].mainscenefromaep=false;
        if(where[2].mainscenefromt2c) this.player = this.physics.add.sprite(spawnPointE.x, spawnPointE.y, "characterA");where[0].mainscenefromt2c=false;



        console.log(this.player);
        
        //const collisionobj = map.findObject("object", obj => obj.name === "collision");

        var layerobj = map.getObjectLayer('collide');

        const zones = this.physics.add.staticGroup();



        layerobj.objects.forEach(element => {

            zones.add(this.add.zone(element.x, element.y, element.width, element.height).setOrigin(0));
       
        });

        this.physics.add.collider(this.player, zones);


        //collideworld

        this.physics.world.setBounds(0, 0, this.layer3.width, this.layer3.height, true, true, true, true);




        //collison layer

         //coins


         this.coins = this.physics.add.group();

         
         for(let i = 0; i<=16;i++){
            this.coins.create(coinsarray[i].x*33, coinsarray[i].y*32.2,this.coins.playAnimation('coinv2', true));            
         }


         this.physics.add.overlap(this.player, this.coins,(player, coinstance)=>{
            coinscore[0].score++;
            this.coins.killAndHide(coinstance);
            this.coins.remove(coinstance);
            console.log(coinscore[0].score);
         });

    
        this.cameras.main.zoom = 1.5;

        this.cameras.main.startFollow(this.player);


        //Align.scaleToGameW(this.player, 0.015 , this);

        this.cursors=this.input.keyboard.createCursorKeys();

        
        //where[0].porteaep=true;

        this.player.body.setCollideWorldBounds(true);
        this.player.body.onWorldBounds = true;


        this.physics.add.collider(this.player, this.layer2);

        this.layer2.setCollisionByProperty({ collides: true });


    

    const porteC = map.findObject("object", obj => obj.name === "porteC");


    const porteCZone = this.physics.add.existing(
        this.add.zone(porteC.x, porteC.y, porteC.width, porteC.height)
      );

    porteCZone.setOrigin(0);
    
    this.physics.add.overlap(this.player,porteCZone,function(Mainscene){
        Mainscene.scene.scene.stop();
        where[0].hopital = true;
        Mainscene.scene.scene.launch('hopitalrdc');

    });
    

    
    const porteD = map.findObject("object", obj => obj.name === "porteD");


    const porteDZone = this.physics.add.existing(
        this.add.zone(porteD.x, porteD.y, porteD.width, porteD.height)
      );

    porteDZone.setOrigin(0);
    
    this.physics.add.overlap(this.player,porteDZone,function(Mainscene){
        where[0].porteaep = true;
        Mainscene.scene.scene.stop();
        Mainscene.scene.scene.launch('etg0_aep');
    });


    const porteE = map.findObject("object", obj => obj.name === "porteE");


    const porteEZone = this.physics.add.existing(
        this.add.zone(porteE.x, porteE.y, porteE.width, porteE.height)
      );

    porteEZone.setOrigin(0);
    
    this.physics.add.overlap(this.player,porteEZone,function(Mainscene){
        Mainscene.scene.scene.stop();
        Mainscene.scene.scene.launch('tour2controle');
    });

}

    update() {



        if (this.player.body.velocity.y == 0) {
            if (this.player.body.velocity.x < 0) {
                this.player.play('walk4', true);
            } else if (this.player.body.velocity.x > 0) {
                this.player.play('walk3', true);
            }
            this.player.body.velocity.x = 0;
        }
        if (this.player.body.velocity.x == 0) {
            if (this.player.body.velocity.y < 0) {
                this.player.play('walk2', true);
            } else if (this.player.body.velocity.y > 0) {
                this.player.play('walk1', true);
            }
            this.player.body.velocity.y = 0;
        }
        if (this.player.body.velocity.x !== 0 && this.player.body.velocity.y !== 0) {     
            this.player.body.velocity.set(0, 0);
        }
        if (this.cursors.left.isDown) {
            this.moved = true;
            this.player.body.velocity.x = -300;
        }
        if (this.cursors.right.isDown) {
            this.moved = true;
            this.player.body.velocity.x = 300;
        }
        if (this.cursors.up.isDown) {
            this.moved = true;
            this.player.body.velocity.y = -300;
        }
        if (this.cursors.down.isDown) {
            this.moved = true;
            this.player.body.velocity.y = 300;
        }
        
         if (keys.Q.isDown) {
            this.moved = true;
            this.player.body.velocity.x = -300;
         }
         if (keys.D.isDown) {
             this.moved = true;
             this.player.body.velocity.x = 300;
         }
         if (keys.Z.isDown) {
             this.moved = true;
             this.player.body.velocity.y = -300;
         }
         if (keys.S.isDown) {
             this.moved = true;
            this.player.body.velocity.y = 300;
         }


       


    }


}

function drawDebug ()
{
    debugGraphics.clear();
    map.renderDebug(debugGraphics, { tileColor: null });
}

    


var map;



class tour2controle extends Phaser.Scene {


    preload(){


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

        this.load.image('characterA', 'src/map/asset/perso1.png');
        this.load.image('interieur', 'src/map/asset/interieur.png');
        this.load.image('mur_ext', 'src/map/asset/mur_ext_iso_0.png');
        this.load.image('carreaux', 'src/map/asset/solpetitscarreaux.png');
        this.load.image('sol_hpt', 'src/map/asset/sol_hpt.png');
        this.load.image('sol_sdb', 'src/map/asset/sol_sdb.png');

        
        this.load.tilemapTiledJSON('tour2controle', 'src/map/tour2controle.json');
    }

x

    create(){

        map = this.make.tilemap({key:'tour2controle'});

        this.tilesetinter = map.addTilesetImage('interieur','interieur');
        this.tilesetmur = map.addTilesetImage('mur_ext_iso_0','mur_ext');
        this.tilesetcarreaux = map.addTilesetImage('solpetitscarreaux','carreaux');
        this.tilesetsolhpt = map.addTilesetImage('sol_hpt','sol_hpt');
        this.tilesetsolsdb = map.addTilesetImage('sol_sdb','sol_sdb');


        this.layer1 = map.createLayer('sol',this.tilesetcarreaux);
        this.layer2 = map.createLayer('mur_int',this.tilesetsolhpt);
        this.layer3 = map.createLayer('CH_1',this.tilesetinter);
        this.layer4 = map.createLayer('BR_1',this.tilesetinter);
        this.layer5 = map.createLayer('PC_1',this.tilesetinter);
        this.layer6 = map.createLayer('BR_2',this.tilesetinter);
        this.layer7 = map.createLayer('PC_2',this.tilesetinter);
        this.layer8 = map.createLayer('CH_2',this.tilesetinter);
        this.layer9 = map.createLayer('CH_3',this.tilesetinter);
        this.layer10 = map.createLayer('BR_3',this.tilesetinter);
        this.layer11 = map.createLayer('PC_3',this.tilesetinter);
        this.layer12 = map.createLayer('BR_4',this.tilesetinter);
        this.layer13 = map.createLayer('PC_4',this.tilesetinter);
        this.layer14 = map.createLayer('CH_4',this.tilesetinter);
        this.layer15 = map.createLayer('meuble et escalier',this.tilesetinter);
        this.layer16 = map.createLayer('mur_ext',this.tilesetmur);
        this.layer17 = map.createLayer('fen',this.tilesetinter);





        const spawnPoint = map.findObject("objet", obj => obj.name === "spawn");


        this.player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "characterA");

        this.cameras.main.startFollow(this.player);
        this.cursors=this.input.keyboard.createCursorKeys();



        //tp ext

        const porteE = map.findObject("objet", obj => obj.name === "porteE");
    
        const porteEZone = this.physics.add.existing(
            this.add.zone(porteE.x, porteE.y, porteE.width, porteE.height)
          );
    
        porteEZone.setOrigin(0);
    

        this.physics.add.overlap(this.player,porteEZone,function(tour2controle){
            where[0].mainscenefromt2c = true;
            tour2controle.scene.scene.stop();
            tour2controle.scene.scene.launch('Mainscene');
        });



        // COLLISIONS
        var layerobj = map.getObjectLayer('collide');


        const zones = this.physics.add.staticGroup();



        layerobj.objects.forEach(element => {

            zones.add(this.add.zone(element.x, element.y, element.width, element.height).setOrigin(0));

        });

        this.physics.add.collider(this.player, zones);

        layerobj = false;

    }



    update(){

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
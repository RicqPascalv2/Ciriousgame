var map;



class hopitaletg2 extends Phaser.Scene {


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
        
        this.load.image('coin21', 'src/map/asset/coin/coin1.png');
        this.load.image('coin31', 'src/map/asset/coin/coin2.png');
        this.load.image('coin41', 'src/map/asset/coin/coin3.png');
        this.load.image('coin51', 'src/map/asset/coin/coin4.png');
        this.load.image('coin61', 'src/map/asset/coin/coin5.png');
        this.load.image('coin71', 'src/map/asset/coin/coin6.png');


        this.load.image('characterA', 'src/map/asset/perso1.png');
        this.load.image('animation1', 'src/map/asset/animation.png');
        this.load.image('interieur', 'src/map/asset/interieur.png');
        this.load.image('mur_ext', 'src/map/asset/mur_ext_iso_0.png');
        this.load.image('carreaux', 'src/map/asset/solpetitscarreaux.png');
        this.load.image('sol_hpt', 'src/map/asset/sol_hpt.png');
        this.load.image('sol_sdb', 'src/map/asset/sol_sdb.png');

        
        this.load.tilemapTiledJSON('etg2_hpt', 'src/map/etg2_hpt.json');
    }

x

    create(){


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
  

        map = this.make.tilemap({key:'etg2_hpt'});

        this.tilesetanim = map.addTilesetImage('annimation', 'animation1');
        this.tilesetinter = map.addTilesetImage('interieur','interieur');
        this.tilesetmur = map.addTilesetImage('mur_ext_iso_0','mur_ext');
        this.tilesetcarreaux = map.addTilesetImage('sol petits carreaux','carreaux');
        this.tilesetsolhpt = map.addTilesetImage('sol_hpt','sol_hpt');
        this.tilesetsolsdb = map.addTilesetImage('sol_sdb','sol_sdb');

        let tilesetsol = [ 
            this.tilesetsolhpt,
            this.tilesetsolsdb
        ]

        let tilesetmur_int = [
            this.tilesetsolhpt,
            this.tilesetsolsdb
        ]

        let tilesetmursup = [
            this.tilesetsolhpt,
            this.tilesetmur
        ]

        let tilesetmur_ext = [
            this.tilesetmur,
            this.tilesetsolhpt
        ]

        this.layer1 = map.createLayer('sol',tilesetsol);
        this.layer2 = map.createLayer('mur_int',tilesetmur_int);
        this.layer3 = map.createLayer('sup0 sur le mur',this.tilesetinter);
        this.layer4 = map.createLayer('sup1 derriere le bureau',this.tilesetinter);
        this.layer5 = map.createLayer('sup2 bureau',this.tilesetinter);
        this.layer6 = map.createLayer('sup3 sur le bureau',this.tilesetinter);
        this.layer7 = map.createLayer('sup4 devant le bureau',this.tilesetinter);
        this.layer8 = map.createLayer('sup5 lits',this.tilesetinter);
        this.layer9 = map.createLayer('6',this.tilesetinter);
        this.layer10 = map.createLayer('ascenseur_fond',this.tilesetanim);
        this.layer11 = map.createLayer('mur_sup',tilesetmursup);
        this.layer12 = map.createLayer('mur_ext',tilesetmur_ext);
        this.layer13 = map.createLayer('ascenseur',this.tilesetanim);
        this.layer14 = map.createLayer('escalator',this.tilesetanim);
        this.layer15 = map.createLayer('bord_escalator',this.tilesetanim);
        this.layer16 = map.createLayer('portes',this.tilesetanim);  
        this.layer17 = map.createLayer('fenêtre',this.tilesetinter);
        this.layer18 = map.createLayer('sur fenêtre',this.tilesetanim);
        this.layer19 = map.createLayer('cam',this.tilesetinter);
        this.layer20 = map.createLayer('detect',this.tilesetinter);
        this.layer21 = map.createLayer('vent',this.tilesetinter);



        
        this.layer21.alpha = 0;
        this.layer20.alpha = 0;
        this.layer19.alpha = 0;
        this.layer18.alpha = 0;
        this.layer15.alpha = 0;
        this.layer14.alpha = 0;
        // this.layer12.alpha = 0;
        this.layer10.alpha = 0;




        const spawnPoint = map.findObject("objet", obj => obj.name === "spawn");


        this.player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "characterA");

        this.cameras.main.zoom = 2;


        this.cameras.main.startFollow(this.player);
        this.cursors=this.input.keyboard.createCursorKeys();


         //collision


         var layerobj = map.getObjectLayer('collide');

         const zones = this.physics.add.staticGroup();
 
 
 
         layerobj.objects.forEach(element => {
 
             zones.add(this.add.zone(element.x, element.y, element.width, element.height).setOrigin(0));
        
         });
 
         this.physics.add.collider(this.player, zones);

         //gestion portes

        const tp_etg1 = map.findObject("objet", obj => obj.name === "tp_etg1");
    
        const tp_etg1Zone = this.physics.add.existing(
            this.add.zone(tp_etg1.x, tp_etg1.y, tp_etg1.width, tp_etg1.height)
          );
    
        tp_etg1Zone.setOrigin(0);
        
        this.physics.add.overlap(this.player,tp_etg1Zone,function(hopitaletg2){
            hopitaletg2.scene.scene.stop();
            hopitaletg2.scene.scene.launch('hopitaletg1');
        });


        this.coins = this.physics.add.group();

         
        for(let i = 23; i<=27;i++){
            console.log("test");
           this.coins.create(coinsarray[i].x, coinsarray[i].y,this.coins.playAnimation('coinv2', true));            
        }


        this.physics.add.overlap(this.player, this.coins,(player, coinstance)=>{
           coinscore[0].score++;
           this.coins.killAndHide(coinstance);
           this.coins.remove(coinstance);
           console.log(coinscore[0].score);
        });

        //gestion amélioration


        if(isameliorate[0].fenetre == true){
            var voletanim1 = this.add.sprite(80,370,'startvol2');
            var voletanim2 = this.add.sprite(80+96,370,'startvol2');
            var voletanim3 = this.add.sprite(80+192, 370, 'startvol2');
            var voletanim4 = this.add.sprite(80+288, 370, 'startvol2');
            var voletanim5 = this.add.sprite(80+384, 370, 'startvol2');
            var voletanim6 = this.add.sprite(80+480, 370, 'startvol2');
            voletanim1.play('voletanim2', true);
            voletanim2.play('voletanim2',true);
            voletanim3.play('voletanim2', true);
            voletanim4.play('voletanim2', true);
            voletanim5.play('voletanim2', true);
            voletanim6.play('voletanim2', true);

        }

        
        if(isameliorate[3].ascenceur == true){
            this.layer10.alpha = 1;
            var ascanim1 = this.physics.add.sprite(400,80,'startasc');
            this.physics.add.overlap(this.player, ascanim1,()=>{
                ascanim1.play('ascanim1', true);
            });

            const portetage= map.findObject("objet", obj => obj.name === "tpetg1v2");


            const portetageZone = this.physics.add.existing(
                this.add.zone(portetage.x, portetage.y, portetage.width, portetage.height)
              );
        
            portetageZone.setOrigin(0);
            
            this.physics.add.overlap(this.player,portetageZone,function(Mainscene){
                Mainscene.scene.scene.stop();
                Mainscene.scene.scene.launch('hopitaletg1');
            });
            
        }


    }



    update(){


        if(isameliorate[2].vent == true){
            this.layer21.alpha = 1;
        }


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
            this.player.body.velocity.x = -150;
        }
        if (this.cursors.right.isDown) {
            this.moved = true;
            this.player.body.velocity.x = 150;
        }
        if (this.cursors.up.isDown) {
            this.moved = true;
            this.player.body.velocity.y = -150;
        }
        if (this.cursors.down.isDown) {
            this.moved = true;
            this.player.body.velocity.y = 150;
        }


        
    }






}
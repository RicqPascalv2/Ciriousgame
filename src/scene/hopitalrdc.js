
var map;

var enteronce;

var alreadyentered;


class hopitalrdc extends Phaser.Scene {


    preload(){


        this.load.image('piece', 'src/map/asset/piece1.png');
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
        this.load.image('key1', 'src/map/asset/keyanim1.png');
        this.load.image('key2', 'src/map/asset/keyanim2.png');
        this.load.image('characterA', 'src/map/asset/perso1.png');
        this.load.image('animation1', 'src/map/asset/animation.png');
        this.load.image('interieur', 'src/map/asset/interieur.png');
        this.load.image('mur_ext', 'src/map/asset/mur_ext_iso_0.png');
        this.load.image('carreaux', 'src/map/asset/solpetitscarreaux.png');
        this.load.image('sol_hpt', 'src/map/asset/sol_hpt.png');
        this.load.image('sol_sdb', 'src/map/asset/sol_sdb.png');
        this.load.image('exclam', 'src/map/asset/exclamation.png');
        this.load.bitmapFont('gem', 'src/map/asset/gem.png', 'src/map/asset/gem.xml');
        this.load.image("volet1", "src/map/asset/startvol.png");
        this.load.spritesheet("volet", "src/map/asset/animationvolet2.png", {frameWidth:64, frameHeight:32});
        
        this.load.image('coin21', 'src/map/asset/coin/coin1.png');
        this.load.image('coin31', 'src/map/asset/coin/coin2.png');
        this.load.image('coin41', 'src/map/asset/coin/coin3.png');
        this.load.image('coin51', 'src/map/asset/coin/coin4.png');
        this.load.image('coin61', 'src/map/asset/coin/coin5.png');
        this.load.image('coin71', 'src/map/asset/coin/coin6.png');



        
        this.load.tilemapTiledJSON('etg0_hpt', 'src/map/etg0_hpt.json');
    }



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
  

        enteronce = false;

        map = this.make.tilemap({key:'etg0_hpt'});

        this.tilesetanim = map.addTilesetImage('animation', 'animation1');
        this.tilesetinter = map.addTilesetImage('interieur','interieur');
        this.tilesetmur = map.addTilesetImage('mur_ext_iso_0','mur_ext');
        this.tilesetcarreaux = map.addTilesetImage('sol petits carreaux','carreaux');
        this.tilesetsolhpt = map.addTilesetImage('sol_hpt','sol_hpt');
        this.tilesetsolsdb = map.addTilesetImage('sol_sdb','sol_sdb');

        let tilesetsol = [ 
            this.tilesetcarreaux,
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

        this.layer1 = map.createLayer('sol',tilesetsol);
        this.layer2 = map.createLayer('mur_int',tilesetmur_int);
        this.layer3 = map.createLayer('signal de vie [sup0]',this.tilesetinter);
        this.layer4 = map.createLayer('separateur arr [sup1]',this.tilesetinter);
        this.layer5 = map.createLayer('sup2 bureau et lits',this.tilesetinter);
        this.layer6 = map.createLayer('sup3 derri',this.tilesetinter);
        this.layer7 = map.createLayer('sup4 devant bureau',this.tilesetinter);
        this.layer8 = map.createLayer('sup5',this.tilesetinter);
        this.layer9 = map.createLayer('sup6',this.tilesetinter);
        this.layer10 = map.createLayer('ascenseur_fond',this.tilesetanim);
        this.layer11 = map.createLayer('mur_sup',tilesetmursup);
        this.layer12 = map.createLayer('ascenseur',this.tilesetanim);
        this.layer13 = map.createLayer('mur_ext',this.tilesetmur);
        this.layer14 = map.createLayer('escalator',this.tilesetanim);
        this.layer15 = map.createLayer('bord_escalator',this.tilesetanim);
        this.layer16 = map.createLayer('portes',this.tilesetanim);
        this.layer17 = map.createLayer('fenêtres',this.tilesetinter);
        this.layer18 = map.createLayer('sur fenêtre',this.tilesetanim);
        this.layer19 = map.createLayer('cam',this.tilesetinter);
        this.layer20 = map.createLayer('detect',this.tilesetinter);
        this.layer21 = map.createLayer('vent',this.tilesetinter);


        //opacity

        this.layer21.alpha = 0;
        this.layer20.alpha = 0;
        this.layer19.alpha = 0;
        this.layer18.alpha = 0;
        this.layer15.alpha = 0;
        this.layer14.alpha = 0;
        this.layer12.alpha = 0;
        this.layer10.alpha = 0;

        //animation


        this.anims.create({
            key:'voletanim',
            frameRate:4 ,
            frames:this.anims.generateFrameNumbers('volet', {start:0, end:6}),
            repeat:-1
        })




        if(isameliorate[0].fenetre == false)var exclam1 = this.add.sprite(120,374,'exclam').setScale(0.09);


        const spawnPoint1 = map.findObject("objet", obj => obj.name === "spawn1");

        const spawnPoint2 = map.findObject("objet", obj => obj.name === "spawn2");



        if(where[0].mainscene)this.player = this.physics.add.sprite(spawnPoint1.x, spawnPoint1.y, "characterA"); where[0].mainscene = false;

        if(where[0].etage1)this.player = this.physics.add.sprite(spawnPoint2.x, spawnPoint2.y, "characterA"); where[0].etage1 = false;


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


        
        this.coins = this.physics.add.group();

         
        for(let i = 13; i<=19;i++){
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


        
        const fenetreup = map.findObject("objet", obj => obj.name === "fenetreup");

         const fenetreupZone = this.physics.add.existing(
            this.add.zone(fenetreup.x, fenetreup.y, fenetreup.width, fenetreup.height)
          );

        fenetreupZone.setOrigin(0);
        
            this.physics.add.overlap(this.player,fenetreupZone,()=>{
                if(enteronce==false && isameliorate[0].fenetre == false){
                    Swal.fire({
                        title: "Tu veux débloquer l'amélioration 'automatisation ombrage'?",
                        text:"Un système d'ombrage automatique intelligent qui règle automatiquement les stores (stores vénitiens, volets roulants) en fonction de la température ambiante et qui utilise l'énergie du soleil pour chauffer les pièces à moindre coût. Celui-ci est aussi contrôlable par téléphone et permet de maintenir la chaleur à l'intérieur en hiver. Il fonctionne à l'énergie verte grâce à une batterie et un panneau photovoltaïque.",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'oui!'
                      }).then((result) => {
                        if (result.isConfirmed && coinscore[0].score >= 2) {
                          Swal.fire(
                            'Obtenue!',
                            'Amélioration débloquée',
                            'success',
    
                          )
                          var voletanim1 = this.add.sprite(65,12*33.5,'volet1');
                          var voletanim2 = this.add.sprite(65+95,12*33.5,'volet1');
                          var voletanim3 = this.add.sprite(65+190, 12*33.5, 'volet1');
                          var voletanim4 = this.add.sprite(65+320, 12*33.5, 'volet1');
                          var voletanim5 = this.add.sprite(65+415, 12*33.5, 'volet1');
                          var voletanim6 = this.add.sprite(65+510, 12*33.5, 'volet1');
                          voletanim1.play('voletanim', true);
                          voletanim2.play('voletanim',true);
                          voletanim3.play('voletanim', true);
                          voletanim4.play('voletanim', true);
                          voletanim5.play('voletanim', true);
                          voletanim6.play('voletanim', true);
                          isameliorate[0].fenetre = true;
                          statTab[0].energie += 10;
                          statTab[0].confort += 5;
                          exclam1.destroy();


                        }
                        if(result.isConfirmed && coinscore[0].score <= 2 && isameliorate[0].fenetre == false){
                            Swal.fire(
                                "Vous n'avez pas assez de pièces, allez en collecter sur la map!!"
                            )

                        }
                      })
                }
                enteronce=true;


        });


        if(isameliorate[0].fenetre == true){
            var voletanim1 = this.add.sprite(65,12*33.5,'volet1');
            var voletanim2 = this.add.sprite(65+95,12*33.5,'volet1');
            var voletanim3 = this.add.sprite(65+190, 12*33.5, 'volet1');
            var voletanim4 = this.add.sprite(65+320, 12*33.5, 'volet1');
            var voletanim5 = this.add.sprite(65+415, 12*33.5, 'volet1');
            var voletanim6 = this.add.sprite(65+510, 12*33.5, 'volet1');
            voletanim1.play('voletanim', true);
            voletanim2.play('voletanim',true);
            voletanim3.play('voletanim', true);
            voletanim4.play('voletanim', true);
            voletanim5.play('voletanim', true);
            voletanim6.play('voletanim', true);

        }

        
        if(isameliorate[3].ascenceur == true){
            this.layer10.alpha = 1;
            var ascanim1 = this.physics.add.sprite(400,80,'startasc');
            this.physics.add.overlap(this.player, ascanim1,()=>{
                ascanim1.play('ascanim1', true);
            });

            const portetage2= map.findObject("objet", obj => obj.name === "tpetg1v2");

            const portetageZone2 = this.physics.add.existing(
                this.add.zone(portetage2.x, portetage2.y, portetage2.width, portetage2.height)
              );
        
            portetageZone2.setOrigin(0);
            
            this.physics.add.overlap(this.player,portetageZone2,function(Mainscene){
                Mainscene.scene.scene.stop();
                Mainscene.scene.scene.launch('hopitaletg1');
            });
            
        }





        //gestion porte


        const porteExt = map.findObject("objet", obj => obj.name === "porteExt");


        const porteExtZone = this.physics.add.existing(
            this.add.zone(porteExt.x, porteExt.y, porteExt.width, porteExt.height)
          );
    
        porteExtZone.setOrigin(0);
        
             this.physics.add.overlap(this.player,porteExtZone,function(Mainscene){
            Mainscene.scene.scene.stop();
            where[0].mainscenefromhpt = true;
            Mainscene.scene.scene.launch('Mainscene');
        });

        const portetage= map.findObject("objet", obj => obj.name === "tp_etg1");


        const portetageZone = this.physics.add.existing(
            this.add.zone(portetage.x, portetage.y, portetage.width, portetage.height)
          );
    
        portetageZone.setOrigin(0);
        
        this.physics.add.overlap(this.player,portetageZone,function(Mainscene){
            Mainscene.scene.scene.stop();
            Mainscene.scene.scene.launch('hopitaletg1');
        });
        
        

    }



    update(){



        if((this.physics.overlapCirc(129, 363, 50,true).length == 2)== false)enteronce=false;


        //Check amelioration

        if(isameliorate[0].fenetre == true){
            this.layer18.alpha = 1;
        }

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
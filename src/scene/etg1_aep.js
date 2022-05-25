var map;
var enteronce;


class etg1_aep extends Phaser.Scene {

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


        this.load.image('exclam', 'src/map/asset/exclamation.png');
        this.load.image('characterA', 'src/map/asset/perso1.png');
        this.load.image('animation1', 'src/map/asset/animation.png');
        this.load.image('interieur', 'src/map/asset/interieur.png');
        this.load.image('mur_ext', 'src/map/asset/mur_ext_iso_0.png');
        this.load.image('mur_ext_iso_1', 'src/map/asset/mur_ext_iso_1.png');
        this.load.image('mur_ext_iso_2', 'src/map/asset/mur_ext_iso_2.png');
        this.load.image('carreaux', 'src/map/asset/solpetitscarreaux.png');
        this.load.image('sol_aep', 'src/map/asset/sol_aep.png');
        // this.load.image('sol_sdb', 'src/map/asset/sol_sdb.png');

        this.load.tilemapTiledJSON('etg1_aep', 'src/map/etg1_aep.json');




    }
    create(){
        enteronce = false;


        map = this.make.tilemap({key:'etg1_aep'});

        this.tilesetanim = map.addTilesetImage('animation', 'animation1');
        this.tilesetinter = map.addTilesetImage('interieur','interieur');
        this.tilesetmurextiso = map.addTilesetImage('mur_ext_iso_0','mur_ext');
        this.tilesetmurextiso_1 = map.addTilesetImage('mur_ext_iso_1', 'mur_ext_iso_1');
        this.tilesetmurextiso_2 = map.addTilesetImage('mur_ext_iso_2', 'mur_ext_iso_2');
        this.tilesetcarreaux = map.addTilesetImage('solpetitscarreaux','carreaux');
        this.tilesetsolaep = map.addTilesetImage('sol_aep','sol_aep');
        // this.tilesetsolsdb = map.addTilesetImage('sol_sdb','sol_sdb');


        let tilesetsol = [ 
            this.tilesetcarreaux,
            this.tilesetsolaep
        ]

        this.layer1 = map.createLayer('sol',tilesetsol);
        this.layer2 = map.createLayer('mur_int',this.tilesetsolaep);
        this.layer3 = map.createLayer('bancs',this.tilesetinter);
        this.layer4 = map.createLayer('escalator',this.tilesetanim);
        this.layer5 = map.createLayer('bord_escalator',this.tilesetanim);
        this.layer6 = map.createLayer('mur_ext',this.tilesetmurextiso);
        this.layer6_1 = map.createLayer('mur_ext_iso_mine', this.tilesetmurextiso_1);
        this.layer6_2 = map.createLayer('mur_ext_iso_natur', this.tilesetmurextiso_2);
        this.layer7 = map.createLayer('porte',this.tilesetanim);
        this.layer8 = map.createLayer('cam',this.tilesetinter);
        this.layer9 = map.createLayer('detect',this.tilesetinter);
        this.layer10 = map.createLayer('vent',this.tilesetinter);



        this.layer4.alpha=0;
        this.layer5.alpha=0;
        this.layer6_1.alpha=0;
        this.layer6_2.alpha=0;
        this.layer8.alpha=0;
        this.layer9.alpha=0;
        this.layer10.alpha=0;

        const spawnPointA = map.findObject("objet", obj => obj.name === "spawnA");
        const spawnPointB = map.findObject("objet", obj => obj.name === "spawnB");
        const spawnPointC = map.findObject("objet", obj => obj.name === "spawnC");
        const spawnPointD = map.findObject("objet", obj => obj.name === "spawnD");
        const spawnPointE = map.findObject("objet", obj => obj.name === "spawnE");
        const spawnPointF = map.findObject("objet", obj => obj.name === "spawnF");
        const spawnPointG = map.findObject("objet", obj => obj.name === "spawnG");

        if(where[0].porteA)this.player = this.physics.add.sprite(spawnPointA.x, spawnPointA.y, "characterA");where[0].porteA=false;
        if(where[0].porteB)this.player = this.physics.add.sprite(spawnPointB.x, spawnPointB.y, "characterA");where[0].porteB=false;
        if(where[0].porteC)this.player = this.physics.add.sprite(spawnPointC.x, spawnPointC.y, "characterA");where[0].porteC=false;
        if(where[0].porteD)this.player = this.physics.add.sprite(spawnPointD.x, spawnPointD.y, "characterA");where[0].porteD=false;
        if(where[0].porteE)this.player = this.physics.add.sprite(spawnPointE.x, spawnPointE.y, "characterA");where[0].porteE=false;
        if(where[0].porteF)this.player = this.physics.add.sprite(spawnPointF.x, spawnPointF.y, "characterA");where[0].porteF=false;
        if(where[0].porteG)this.player = this.physics.add.sprite(spawnPointG.x, spawnPointG.y, "characterA");where[0].porteG=false;


        this.cameras.main.startFollow(this.player);
        this.cursors=this.input.keyboard.createCursorKeys();



        if(isameliorate[4].detecteur == false)var exclam1 = this.add.sprite(300,180,'exclam').setScale(0.09);


        
        
        
        // add tp to etg0_aep.js
        //
        //porte A
        const porteA = map.findObject("objet", obj => obj.name === "porteA");
    
        const porteAZone = this.physics.add.existing(
            this.add.zone(porteA.x, porteA.y, porteA.width, porteA.height)
          );
    
        porteAZone.setOrigin(0);
        
        this.physics.add.overlap(this.player,porteAZone,function(etg1_aep){
            where[0].porteA=true;
            etg1_aep.scene.scene.stop();
            etg1_aep.scene.scene.launch('etg0_aep');
        });

        //porteB
        const porteB = map.findObject("objet", obj => obj.name === "porteB");
    
        const porteBZone = this.physics.add.existing(
            this.add.zone(porteB.x, porteB.y, porteB.width, porteB.height)
          );
    
        porteBZone.setOrigin(0);
        
        this.physics.add.overlap(this.player,porteBZone,function(etg1_aep){
            etg1_aep.scene.scene.stop();
            where[0].porteB=true;
            etg1_aep.scene.scene.launch('etg0_aep');
        });

        //porteC
        const porteC = map.findObject("objet", obj => obj.name === "porteC");
    
        const porteCZone = this.physics.add.existing(
            this.add.zone(porteC.x, porteC.y, porteC.width, porteC.height)
          );
    
        porteCZone.setOrigin(0);
        
        this.physics.add.overlap(this.player,porteCZone,function(etg1_aep){
            where[0].porteC=true;
            etg1_aep.scene.scene.stop();
            etg1_aep.scene.scene.launch('etg0_aep');
        });

        //porteD
        const porteD = map.findObject("objet", obj => obj.name === "porteD");
    
        const porteDZone = this.physics.add.existing(
            this.add.zone(porteD.x, porteD.y, porteD.width, porteD.height)
          );
    
        porteDZone.setOrigin(0);
        
        this.physics.add.overlap(this.player,porteDZone,function(etg1_aep){
            where[0].porteD=true;
            etg1_aep.scene.scene.stop();
            etg1_aep.scene.scene.launch('etg0_aep');
        });


        //porteE
        const porteE = map.findObject("objet", obj => obj.name === "porteE");
    
        const porteEZone = this.physics.add.existing(
            this.add.zone(porteE.x, porteE.y, porteE.width, porteE.height)
          );
    
        porteEZone.setOrigin(0);
        
        this.physics.add.overlap(this.player,porteEZone,function(etg1_aep){
            where[0].porteE=true;
            etg1_aep.scene.scene.stop();
            etg1_aep.scene.scene.launch('etg0_aep');
        });

        //porteF
        const porteF = map.findObject("objet", obj => obj.name === "porteF");
    
        const porteFZone = this.physics.add.existing(
            this.add.zone(porteF.x, porteF.y, porteF.width, porteF.height)
          );
    
        porteFZone.setOrigin(0);
        
        this.physics.add.overlap(this.player,porteFZone,function(etg1_aep){
            where[0].porteF=true;
            etg1_aep.scene.scene.stop();
            etg1_aep.scene.scene.launch('etg0_aep');
        });


        //porteG
        const porteG = map.findObject("objet", obj => obj.name === "porteG");
    
        const porteGZone = this.physics.add.existing(
            this.add.zone(porteG.x, porteG.y, porteG.width, porteG.height)
          );
    
        porteGZone.setOrigin(0);
        
        this.physics.add.overlap(this.player,porteGZone,function(etg1_aep){
            where[0].porteG=true;
            etg1_aep.scene.scene.stop();
            etg1_aep.scene.scene.launch('etg0_aep');
        });
        //
        //
        //


        //AMELIORATIONS


        //gestion amélioration

                
            
        const detectup = map.findObject("objet", obj => obj.name === "detectup");

        const detectupZone = this.physics.add.existing(
            this.add.zone(detectup.x, detectup.y, detectup.width, detectup.height)
        );

        detectupZone.setOrigin(0);

            this.physics.add.overlap(this.player,detectupZone,()=>{
                if(enteronce==false && isameliorate[4].detecteur == false){
                    Swal.fire({
                        title: "Tu veux débloquer l'amélioration 'Detecteur de mouvement'?",
                        text:"Les détecteurs de présence peuvent avoir plusieurs fonctions : ils peuvent servir lors de la détection d'intrusion, la nuit par exemple, ou pour savoir quand allumer et éteindre la lumière ou le chauffage pour éviter une surconsommation la journée.",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'oui!'
                    }).then((result) => {
                        if (result.isConfirmed && coinscore[0].score >= 7) {
                        Swal.fire(
                            'Obtenue!',
                            'Amélioration débloquée',
                            'success',

                        )
                        statTab[0].energie += 10;
                        statTab[1].confort += 5;
                        statTab[2].securite += 12;
                        isameliorate[4].detecteur = true;
                        this.layer9.alpha = 1;
                        exclam1.destroy();

                        }
                        if(result.isConfirmed && coinscore[0].score <= 7  && isameliorate[4].detecteur == false){
                            Swal.fire(
                                "Vous n'avez pas assez de pièces, allez en collecter sur la map!!"
                            )

                        }
                    })
                }
                enteronce=true;


        });



        isameliorate[6].iso_1 = false;
        isameliorate[7].iso_2 = false;  

        // var isameliorate[0].escalator = false;
        isameliorate[1].camera = false;
        isameliorate[2].vent = false; 

        if (isameliorate[6].iso_1){
            this.layer6_1.alpha=1;
            this.layer6_1.alpha=1;
        }
        if (isameliorate[7].iso_2){
            isameliorate[6].iso_1 = false;
            this.layer6_2.alpha=1;
            this.layer6_2.alpha=1;
        }

        if(isameliorate[5].escalator){
            this.layer4.alpha=1;
            this.layer5.alpha=1;
        }

        if(isameliorate[1].camera){
            this.layer8.alpha=1;
        }

        if(isameliorate[4]){
            this.layer8.alpha=1;
        }
        
        if(isameliorate[2].vent){
            this.layer10.alpha=1;
        }


        //collision


        var layerobj = map.getObjectLayer('collide');


        const zones = this.physics.add.staticGroup();



        layerobj.objects.forEach(element => {

            zones.add(this.add.zone(element.x, element.y, element.width, element.height).setOrigin(0));

        });

        this.physics.add.collider(this.player, zones);

        layerobj = false;
    }



    update(){


    if((this.physics.overlapCirc(296,178, 40,true).length == 2)== false)enteronce=false;

    if(isameliorate[4].detecteur == true){
        this.layer9.alpha = 1;
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

    
    if (keys.Q.isDown) {
        this.moved = true;
        this.player.body.velocity.x = -150;
    }
    if (keys.D.isDown) {
        this.moved = true;
        this.player.body.velocity.x = 150;
    }
    if (keys.Z.isDown) {
        this.moved = true;
        this.player.body.velocity.y = -150;
    }
    if (keys.S.isDown) {
        this.moved = true;
        this.player.body.velocity.y = 150;
    }




    }



}

var map;
var keys;
var enteronce;
var enteronce2;
var enteronce3;

var animfirst1 = false;



class etg0_aep extends Phaser.Scene {


    preload(){

        this.load.image("startvol2", "src/map/asset/startvol2.png");
        this.load.spritesheet("voletet1", "src/map/asset/animationvolet3.png", {frameWidth:96, frameHeight:32});
        this.load.image("volet1", "src/map/asset/startvol.png");
        this.load.spritesheet("volet", "src/map/asset/animationvolet2.png", {frameWidth:64, frameHeight:32});



        this.load.image('exclam', 'src/map/asset/exclamation.png');
        this.load.image('animation','src/map/asset/animation.png');
        this.load.image('interieur','src/map/asset/interieur.png');
        this.load.image('mur_ext','src/map/asset/mur_ext_iso_0.png');
        this.load.image('mur_ext_iso_1','src/map/asset/mur_ext_iso_1.png');
        this.load.image('mur_ext_iso_2','src/map/asset/mur_ext_iso_2.png');
        this.load.image('solpetitscarreaux','src/map/asset/solpetitscarreaux.png');
        this.load.image('sol_aep1','src/map/asset/sol_aep.png');
        this.load.image('sol_hpt1','src/map/asset/sol_hpt.png');
        this.load.image('sol_sdb1','src/map/asset/sol_sdb.png');
        this.load.image('startesc1','src/map/Asset/animesc1.png');
        this.load.image('startesc2','src/map/asset/animesc2.png');
        this.load.image('startporte','src/map/asset/animporte.png');
        this.load.spritesheet('animeporte','src/map/asset/animporte.png',{frameWidth:32, frameHeight:32});
        this.load.spritesheet('animesc1','src/map/asset/animesc1.png',{frameWidth:32, frameHeight:64});
        this.load.spritesheet('animesc2','src/map/asset/animesc2.png',{frameWidth:32, frameHeight:96});

        this.load.tilemapTiledJSON('etg0_aep', 'src/map/etg0_aep.json');

    }


    create(){



        enteronce = false;
        enteronce2 = false;
        enteronce3 = false;

        keys = this.input.keyboard.addKeys("Z,Q,S,D");


        map = this.make.tilemap({key:'etg0_aep'});

        this.tilesetanim = map.addTilesetImage('animation', 'animation');
        this.tilesetinterieur = map.addTilesetImage('interieur', 'interieur');
        this.tilesetmurextiso = map.addTilesetImage('mur_ext_iso_0', 'mur_ext');
        this.tilesetmurextiso_1 = map.addTilesetImage('mur_ext_iso_1', 'mur_ext_iso_1');
        this.tilesetmurextiso_2 = map.addTilesetImage('mur_ext_iso_2', 'mur_ext_iso_2');
        this.tilesetsolpetitscarreaux = map.addTilesetImage('solpetitscarreaux', 'solpetitscarreaux');
        this.tilesetsolaep = map.addTilesetImage('sol_aep', 'sol_aep1');
        this.tilesetsolhpt = map.addTilesetImage('sol_hpt', 'sol_hpt1');
        this.tilesetsolsdb = map.addTilesetImage('sol_sdb', 'sol_sdb1');




        let tilesetsol=[
            this.tilesetsolaep,
            this.tilesetsolsdb
        ]

        let tilesetgichet = [
            this.tilesetsolaep,
            this.tilesetanim
        ];


        let tileset0surlemur = [
            this.tilesetanim,
            this.tilesetinterieur
        ];


        let tilesetmur_int = [
            this.tilesetsolaep,
            this.tilesetsolsdb
        ]


        this.layer22 = map.createLayer('sol', tilesetsol);
        this.layer21 = map.createLayer('mur_int', tilesetmur_int);
        this.layer20 = map.createLayer('0 sur le mur', tileset0surlemur);
        this.layer19 = map.createLayer('1 devant le mur', this.tilesetinterieur);
        this.layer18 = map.createLayer('chaise', this.tilesetinterieur);
        this.layer17 = map.createLayer('bureau', this.tilesetinterieur);
        this.layer16 = map.createLayer('pc et valise', this.tilesetinterieur);
        this.layer15 = map.createLayer('mur_sup', this.tilesetmurextiso);
        this.layer15_1 = map.createLayer('mur_sup_iso_mine', this.tilesetmurextiso_1);
        this.layer15_2 = map.createLayer('mur_sup_iso_natur', this.tilesetmurextiso_2);
        this.layer14 = map.createLayer('mur_ext', this.tilesetmurextiso);
        this.layer14_1 = map.createLayer('mur_ext_iso_mine', this.tilesetmurextiso_1);
        this.layer14_2 = map.createLayer('mur_ext_iso_natur', this.tilesetmurextiso_2);
        this.layer13 = map.createLayer('portes', this.tilesetanim);
        this.layer12 = map.createLayer('escalator', this.tilesetanim);
        this.layer11 = map.createLayer('bord_escalator', this.tilesetanim);
        this.layer10 = map.createLayer('fenêtre', this.tilesetinterieur);
        this.layer9 = map.createLayer('sur fenêtre', this.tilesetanim);
        this.layer8 = map.createLayer('cam', this.tilesetinterieur);
        this.layer7 = map.createLayer('detect', this.tilesetinterieur);
        this.layer6 = map.createLayer('vent', this.tilesetinterieur);
        this.layer5 = map.createLayer('guichet', tilesetgichet);
        this.layer4 = map.createLayer('douane_sol', this.tilesetsolaep);
        this.layer3 = map.createLayer('douane_mur_int', this.tilesetsolaep);
        this.layer2 = map.createLayer('douane_porte', this.tilesetanim);
        // this.layerrob = map.createLayer('douane_robot', this.tilesetinterieur);
        this.layer1 = map.createLayer('douane_mur_ext', this.tilesetmurextiso);
        this.layer1_1 = map.createLayer('douane_mur_ext_iso_mine', this.tilesetmurextiso_1);
        this.layer1_2 = map.createLayer('douane_mur_ext_iso_natur', this.tilesetmurextiso_2);


        this.layer15_2.alpha=0;
        this.layer15_1.alpha=0;
        this.layer14_2.alpha=0;
        this.layer14_1.alpha=0;
        this.layer12.alpha=0;
        this.layer11.alpha=0;
        this.layer9.alpha=0;
        this.layer8.alpha=0;
        this.layer7.alpha=0;
        this.layer6.alpha=0;
        this.layer6.alpha=0;
        this.layer5.alpha=0;
        this.layer4.alpha=0;
        this.layer3.alpha=0;
        this.layer2.alpha=0;
        // this.layerrob.alpha=0;
        this.layer1.alpha=0;
        this.layer1_1.alpha=0;
        this.layer1_2.alpha=0;

        


        const spawnPoint = map.findObject("objet", obj => obj.name === "spawn");
        const spawnPointA = map.findObject("objet", obj => obj.name === "spawnA");
        const spawnPointB = map.findObject("objet", obj => obj.name === "spawnB");
        const spawnPointC = map.findObject("objet", obj => obj.name === "spawnC");
        const spawnPointD = map.findObject("objet", obj => obj.name === "spawnD");
        const spawnPointE = map.findObject("objet", obj => obj.name === "spawnE");
        const spawnPointF = map.findObject("objet", obj => obj.name === "spawnF");
        const spawnPointG = map.findObject("objet", obj => obj.name === "spawnG");


        if(where[7].porteaep)this.player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "characterA");where[0].porteaep=false;
        if(where[8].porteA)this.player = this.physics.add.sprite(spawnPointA.x, spawnPointA.y, "characterA");where[0].porteA=false;
        if(where[9].porteB)this.player = this.physics.add.sprite(spawnPointB.x, spawnPointB.y, "characterA");where[0].porteB=false;
        if(where[10].porteC)this.player = this.physics.add.sprite(spawnPointC.x, spawnPointC.y, "characterA");where[0].porteC=false;
        if(where[11].porteD)this.player = this.physics.add.sprite(spawnPointD.x, spawnPointD.y, "characterA");where[0].porteD=false;
        if(where[12].porteE)this.player = this.physics.add.sprite(spawnPointE.x, spawnPointE.y, "characterA");where[0].porteE=false;
        if(where[13].porteF)this.player = this.physics.add.sprite(spawnPointF.x, spawnPointF.y, "characterA");where[0].porteF=false;
        if(where[14].porteG)this.player = this.physics.add.sprite(spawnPointG.x, spawnPointG.y, "characterA");where[0].porteG=false;

        console.log(this.player);

        this.player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "characterA");

        this.cameras.main.startFollow(this.player);
        this.cursors=this.input.keyboard.createCursorKeys();


        //animation

        this.anims.create({
            key:'escanim2',
            frameRate:4 ,
            frames:this.anims.generateFrameNumbers('animesc2', {start:0, end:3}),
            repeat:-1
        })

        this.anims.create({
            key:'animporte',
            frameRate:4 ,
            frames:this.anims.generateFrameNumbers('animeporte', {start:0, end:5}),
            repeat:-1
        })





        if(isameliorate[8].douane == false)var exclam1 = this.add.sprite(385,360,'exclam').setScale(0.09);
        if(isameliorate[9].guichet == false)var exclam2 = this.add.sprite(545,250,'exclam').setScale(0.09);
        if(isameliorate[5].escalator == false)var exclam3 = this.add.sprite(210,165,'exclam').setScale(0.09);
    

        // add tp to etg1_aep.js
        //

        //porte ext
        const porteaep = map.findObject("objet", obj => obj.name === "porteaep");
    
        const porteaepZone = this.physics.add.existing(
            this.add.zone(porteaep.x, porteaep.y, porteaep.width, porteaep.height)
          );
    
        porteaepZone.setOrigin(0);
        
        this.physics.add.overlap(this.player,porteaepZone,function(etg0_aep){
            where[0].mainscenefromaep = true;
            where[0].porteaep=true;
            etg0_aep.scene.scene.stop();
            etg0_aep.scene.scene.launch('Mainscene');
        });


        //porte A
        const porteA = map.findObject("objet", obj => obj.name === "porteA");
    
        const porteAZone = this.physics.add.existing(
            this.add.zone(porteA.x, porteA.y, porteA.width, porteA.height)
          );
    
        porteAZone.setOrigin(0);
        
        this.physics.add.overlap(this.player,porteAZone,function(etg0_aep){

            console.log("test");
            etg0_aep.scene.scene.stop();
            where[0].porteA=true;
            etg0_aep.scene.scene.launch('etg1_aep');
        });

        //porteB
        const porteB = map.findObject("objet", obj => obj.name === "porteB");
    
        const porteBZone = this.physics.add.existing(
            this.add.zone(porteB.x, porteB.y, porteB.width, porteB.height)
          );
    
        porteBZone.setOrigin(0);
        
        this.physics.add.overlap(this.player,porteBZone,function(etg0_aep){
            etg0_aep.scene.scene.stop();
            where[0].porteB= true;
            etg0_aep.scene.scene.launch('etg1_aep');
        });

        //porteC
        const porteC = map.findObject("objet", obj => obj.name === "porteC");
    
        const porteCZone = this.physics.add.existing(
            this.add.zone(porteC.x, porteC.y, porteC.width, porteC.height)
          );
    
        porteCZone.setOrigin(0);
        
        this.physics.add.overlap(this.player,porteCZone,function(etg0_aep){
            where[0].porteC=true;
            etg0_aep.scene.scene.stop();
            etg0_aep.scene.scene.launch('etg1_aep');
        });

        //porteD
        const porteD = map.findObject("objet", obj => obj.name === "porteD");
    
        const porteDZone = this.physics.add.existing(
            this.add.zone(porteD.x, porteD.y, porteD.width, porteD.height)
          );
    
        porteDZone.setOrigin(0);
        
        this.physics.add.overlap(this.player,porteDZone,function(etg0_aep){
            where[0].porteD=true;
            etg0_aep.scene.scene.stop();
            etg0_aep.scene.scene.launch('etg1_aep');
        });


        //porteE
        const porteE = map.findObject("objet", obj => obj.name === "porteE");
    
        const porteEZone = this.physics.add.existing(
            this.add.zone(porteE.x, porteE.y, porteE.width, porteE.height)
          );
    
        porteEZone.setOrigin(0);
        
        this.physics.add.overlap(this.player,porteEZone,function(etg0_aep){
            where[0].porteE=true;
            etg0_aep.scene.scene.stop();
            etg0_aep.scene.scene.launch('etg1_aep');
        });

        //porteF
        const porteF = map.findObject("objet", obj => obj.name === "porteF");
    
        const porteFZone = this.physics.add.existing(
            this.add.zone(porteF.x, porteF.y, porteF.width, porteF.height)
          );
    
        porteFZone.setOrigin(0);
        
        this.physics.add.overlap(this.player,porteFZone,function(etg0_aep){
            where[0].porteF=true;
            etg0_aep.scene.scene.stop();
            etg0_aep.scene.scene.launch('etg1_aep');
        });


        //porteG
        const porteG = map.findObject("objet", obj => obj.name === "porteG");
    
        const porteGZone = this.physics.add.existing(
            this.add.zone(porteG.x, porteG.y, porteG.width, porteG.height)
          );
    
        porteGZone.setOrigin(0);
        
        this.physics.add.overlap(this.player,porteGZone,function(etg0_aep){
            where[0].porteG=true;
            etg0_aep.scene.scene.stop();
            etg0_aep.scene.scene.launch('etg1_aep');
        });
        //
        //
        //
        


        // AMELIORATIONS

        //DOUANE AUTOMATIQUE
        const douaneup = map.findObject("objet", obj => obj.name === "douaneup");

        const douaneupZone = this.physics.add.existing(
            this.add.zone(douaneup.x, douaneup.y, douaneup.width, douaneup.height)
        );

        douaneupZone.setOrigin(0);

            this.physics.add.overlap(this.player,douaneupZone,()=>{
                if(enteronce==false && isameliorate[8].douane == false){
                    Swal.fire({
                        title: "Tu veux débloquer l'amélioration 'Douane automatique'?",
                        icon: 'warning',
                        text:"A votre arrivée à la douane, fatigué de faire la queue pendant une demi-heure ? Grâce aux dispositifs de passage automatiques aux frontières, vous allez économiser votre précieux temps et l'aéroport s'en trouvera fluidifié. Il vous suffit de mettre votre passeport dans la borne et de rentrer dans le sas, et grâce à un système de reconnaissance faciale, vous êtes reconnus et vous pouvez continuer votre chemin en seulement 30 secondes. Point statistique : On estime que 45% des passagers de l'aéroport de Roissy-Orly bénéficie de ce système car il est tout de même nécessaire d'avoir un passeport biométrique, d'être majeur et d'être ressortissant d'un pays de l'UE, de la Suisse, de l'Islande, de la Norvège et du Liechtenstein. ",
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'oui!'
                    }).then((result) => {
                        if (result.isConfirmed && coinscore[0].score >= 4) {
                        Swal.fire(
                            'Obtenue!',
                            'Amélioration débloquée',
                            'success',

                        )
                        statTab[0].energie -= 5;
                        statTab[1].confort += 10;
                        statTab[2].securite += 5;
                        isameliorate[8].douane = true;
                        exclam1.destroy();
                        this.layer4.alpha = 1;
                        this.layer3.alpha = 1;
                        this.layer2.alpha = 1;

                        //collision murext

                        if(isameliorate[6].iso_1){
                            this.layer1_1.alpha=1;
                        }
                        if(isameliorate[7].iso_2){
                            this.layer1_2.alpha=1;
                        }
                        else{
                            this.layer1.alpha = 1;
                        }

                        //add collision

                        var layerobj_douane = map.getObjectLayer('col_douane');

                        const zones_douane = this.physics.add.staticGroup();


 
                        layerobj_douane.objects.forEach(element => {

                        zones_douane.add(this.add.zone(element.x, element.y, element.width, element.height).setOrigin(0));

                        });

                        this.physics.add.collider(this.player, zones_douane);




                        }
                        if(result.isConfirmed && coinscore[0].score <= 4 && isameliorate[8].douane == false){
                            Swal.fire(
                                "Vous n'avez pas assez de pièces, allez en collecter sur la map!!"
                            )

                        }
                    })
                }
                enteronce=true;


        });


        //GUICHET AUTOMATIQUE

        const guichetup = map.findObject("objet", obj => obj.name === "guichetup");

        const guichetupZone = this.physics.add.existing(
            this.add.zone(guichetup.x, guichetup.y, guichetup.width, guichetup.height)
        );

        guichetupZone.setOrigin(0);

            this.physics.add.overlap(this.player,guichetupZone,()=>{
                if(enteronce2==false && isameliorate[9].guichet == false){
                    Swal.fire({
                        title: "Tu veux débloquer l'amélioration 'Guichet automatique'?",
                        text:"Pour votre aéroport, optez pour un guichet d'auto-enregistrement permettant à chaque usager d'enregistrer lui-même ses bagages. Cela permet un désencombrement des guichets et évite une  perte de temps inutile. Pour cela rien de plus simple, scannez votre carte d'embarquement, vérifiez vos informations et collez l'étiquette autocollante que la borne vous donnera. Il ne vous reste qu'à déposer vos bagages au personnel de l'aéroport et à vous sentir libéré du poids (des bagages",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'oui!'
                    }).then((result) => {
                        if (result.isConfirmed && coinscore[0].score >= 6) {
                        Swal.fire(
                            'Obtenue!',
                            'Amélioration débloquée',
                            'success',

                        )
                        statTab[0].energie -= 5;
                        statTab[1].confort += 10;
                        statTab[2].securite += 5;
                        isameliorate[9].guichet = true;
                        exclam2.destroy();
                        //this.layer5.alpha = 1;

                        const guichet1 = this.add.sprite(105,206,'startporte');
                        const guichet2 = this.add.sprite(208,206,'startporte');
                        const guichet3 = this.add.sprite(300,206,'startporte');
                        const guichet4 = this.add.sprite(400,206,'startporte');
                        const guichet5 = this.add.sprite(495,206,'startporte');
                        const guichet6 = this.add.sprite(590,206,'startporte');
                        const guichet7 = this.add.sprite(685,206,'startporte');

                        guichet1.play('animporte', true);
                        guichet2.play('animporte',true);
                        guichet3.play('animporte',true);
                        guichet4.play('animporte',true);
                        guichet5.play('animporte',true);
                        guichet6.play('animporte',true);
                        guichet7.play('animporte',true);

                        }
                        if(result.isConfirmed && coinscore[0].score <= 6 && isameliorate[9].guichet == false){
                            Swal.fire(
                                "Vous n'avez pas assez de pièces, allez en collecter sur la map!!"
                            )

                        }
                    })
                }
                enteronce2=true;


        });
            
        // ESCALATOR

        const escalatorup = map.findObject("objet", obj => obj.name === "escalatorup");

        const escalatorupZone = this.physics.add.existing(
            this.add.zone(escalatorup.x, escalatorup.y, escalatorup.width, escalatorup.height)
        );

        escalatorupZone.setOrigin(0);

            this.physics.add.overlap(this.player,escalatorupZone,()=>{
                if(enteronce3==false && isameliorate[5].escalator == false){
                    Swal.fire({
                        title: "Tu veux débloquer l'amélioration 'Escalator'?",
                        icon: 'warning',
                        text:"Vous voulez remplacer vos vieux escaliers mais avez peur des endroits clos ? Choisissez d'installer des escalators !",
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'oui!'
                    }).then((result) => {
                        if (result.isConfirmed && coinscore[0].score >= 10) {
                        Swal.fire(
                            'Obtenue!',
                            'Amélioration débloquée',
                            'success',

                        )
                        statTab[0].energie -= 5;
                        statTab[1].confort += 10;
                        statTab[2].securite += 5;
                        isameliorate[5].escalator = true;
                        exclam3.destroy();
                        
                        const animescalator1 = this.add.sprite(112,110,'startesc2');
                        const animescalator2 = this.add.sprite(207,110,'startesc2');
                        const animescalator3 = this.add.sprite(303,110,'startesc2');
                        const animescalator4 = this.add.sprite(400,110,'startesc2');
                        const animescalator5 = this.add.sprite(496,110,'startesc2');
                        const animescalator6 = this.add.sprite(591,110,'startesc2');
                        const animescalator7 = this.add.sprite(688,110,'startesc2');

                        animescalator1.play('escanim2',true);
                        animescalator2.play('escanim2',true);
                        animescalator3.play('escanim2',true);
                        animescalator4.play('escanim2',true);
                        animescalator5.play('escanim2',true);
                        animescalator6.play('escanim2',true);
                        animescalator7.play('escanim2',true);




                        }
                        if(result.isConfirmed && coinscore[0].score <= 10 && isameliorate[5].escalator == false){
                            Swal.fire(
                                "Vous n'avez pas assez de pièces, allez en collecter sur la map!!"
                            )

                        }
                    })
                }
                enteronce3=true;


        });





        //collision

        // collisions générales
            var layerobj = map.getObjectLayer('collide');

            const zones = this.physics.add.staticGroup();



            layerobj.objects.forEach(element => {

                zones.add(this.add.zone(element.x, element.y, element.width, element.height).setOrigin(0));

            });

            this.physics.add.collider(this.player, zones);





        //CHECK IF DOUANE AMELIOREE POUR LES COLLISIONS
        
        if (isameliorate[8].douane){
            

            var layerobj_douane = map.getObjectLayer('col_douane');

            const zones_douane = this.physics.add.staticGroup();



            layerobj_douane.objects.forEach(element => {

                zones_douane.add(this.add.zone(element.x, element.y, element.width, element.height).setOrigin(0));

            });

            this.physics.add.collider(this.player, zones_douane);

            this.layer4.alpha=1;
            this.layer3.alpha=1;
            this.layer2.alpha=1;
            // this.layerrob.alpha=1;

        }



        //animation


        this.anims.create({
            key:'voletanim',
            frameRate:4 ,
            frames:this.anims.generateFrameNumbers('volet', {start:0, end:6}),
            repeat:-1
        })

    //animation


        this.anims.create({
            key:'voletanim2',
            frameRate:4 ,
            frames:this.anims.generateFrameNumbers('voletet1', {start:0, end:6}),
            repeat:-1
        })

        if(isameliorate[0].fenetre == true){
            var voletanim1 = this.add.sprite(144,530,'startvolet2');
            var voletanim2 = this.add.sprite(256,530,'volet1');
            var voletanim3 = this.add.sprite(385, 530, 'volet1');
            var voletanim4 = this.add.sprite(512, 530, 'volet1');
            var voletanim5 = this.add.sprite(640, 530, 'volet1');
            var voletanim6 = this.add.sprite(752, 530, 'startvolet2');
            var voletanim7 = this.add.sprite(911, 530, 'startvolet2');

            voletanim1.play('voletanim2', true);
            voletanim2.play('voletanim',true);
            voletanim3.play('voletanim', true);
            voletanim4.play('voletanim', true);
            voletanim5.play('voletanim', true);
            voletanim6.play('voletanim2', true);
            voletanim7.play('voletanim2', true);

        }







    }


    update(){


        if((this.physics.overlapCirc(384,363, 60,true).length == 2)== false)enteronce=false;
        if((this.physics.overlapCirc(545,250, 60,true).length == 2)== false)enteronce2=false;
        if((this.physics.overlapCirc(210,165, 60,true).length == 2)== false)enteronce3=false;

        


        //Check amelioration

        //detecteur
        if(isameliorate[4].detecteur == true){
            this.layer7.alpha=1;
        }

        //douane
        if(isameliorate[8].douane == true){

            this.layer4.alpha=1;
            this.layer3.alpha=1;
            this.layer2.alpha=1;
            if(isameliorate[6].iso_1){
                this.layer1_1.alpha=1;
            }
            if(isameliorate[7].iso_2){
                this.layer1_2.alpha=1;
            }
            else{
                this.layer1.alpha = 1;
            }
        }
        
        //guichet

        if(isameliorate[9].guichet == true){
            const guichet1 = this.add.sprite(105,206,'startporte');
            const guichet2 = this.add.sprite(208,206,'startporte');
            const guichet3 = this.add.sprite(300,206,'startporte');
            const guichet4 = this.add.sprite(400,206,'startporte');
            const guichet5 = this.add.sprite(495,206,'startporte');
            const guichet6 = this.add.sprite(590,206,'startporte');
            const guichet7 = this.add.sprite(685,206,'startporte');   

            guichet1.play('animporte', true);
            guichet2.play('animporte',true);
            guichet3.play('animporte',true);
            guichet4.play('animporte',true);
            guichet5.play('animporte',true);
            guichet6.play('animporte',true);
            guichet7.play('animporte',true);
        }

        //escalator
        if(isameliorate[5].escalator == true){
            this.layer12.alpha=1;
            this.layer11.alpha=1;
        }

        if (this.player.body.velocity.x !== 0 && this.player.body.velocity.y !== 0) {     
            this.player.body.velocity.set(0, 0);
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


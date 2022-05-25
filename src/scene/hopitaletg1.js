var map;


var enteronce;

var enteronce2; 



class hopitaletg1 extends Phaser.Scene {


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
        this.load.image("startvol2", "src/map/asset/startvol2.png");
        this.load.image("startasc", "src/map/asset/startasc.png");
        this.load.spritesheet("voletet1", "src/map/asset/animationvolet3.png", {frameWidth:96, frameHeight:32});
        this.load.spritesheet("ascenseur1", "src/map/asset/animascenseur.png", {frameWidth:32, frameHeight:32});


        
        this.load.tilemapTiledJSON('etg1_hpt', 'src/map/etg1_hpt.json');

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

        enteronce2 = false;


        map = this.make.tilemap({key:'etg1_hpt'});

        this.tilesetanim = map.addTilesetImage('annimation', 'animation1');
        this.tilesetinter = map.addTilesetImage('interieur','interieur');
        this.tilesetmur = map.addTilesetImage('mur_ext_iso_0','mur_ext');
        this.tilesetcarreaux = map.addTilesetImage('sol petits carreaux','carreaux');
        this.tilesetsolhpt = map.addTilesetImage('sol_hpt','sol_hpt');
        this.tilesetsolsdb = map.addTilesetImage('sol_sdb','sol_sdb');

        let tilesetsol = [ 
            this.tilesetcarreaux,
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

        let tilesetmurext = [
            this.tilesetsolhpt,
            this.tilesetmur
        ]

        this.layer1 = map.createLayer('sol',tilesetsol);
        this.layer2 = map.createLayer('mur_int',tilesetmur_int);
        this.layer3 = map.createLayer('sup0 sur le mur',this.tilesetinter);
        this.layer4 = map.createLayer('sup1 derriere le bureau',this.tilesetinter);
        this.layer5 = map.createLayer('sup2 bureau',this.tilesetinter);
        this.layer6 = map.createLayer('sup3 sur le bureau',this.tilesetinter);
        this.layer7 = map.createLayer('sup4 devant le bureau',this.tilesetinter);
        this.layer8 = map.createLayer('ascenseur_fond',this.tilesetanim);
        this.layer9 = map.createLayer('mur_sup',tilesetmursup);
        this.layer10 = map.createLayer('mur_ext',tilesetmurext);
        this.layer11 = map.createLayer('ascenseur',this.tilesetanim);
        this.layer12 = map.createLayer('escalator',this.tilesetanim);
        this.layer13 = map.createLayer('bord_escalator',this.tilesetanim);
        this.layer14 = map.createLayer('portes',this.tilesetanim);
        this.layer15 = map.createLayer('fenêtre',this.tilesetinter);
        this.layer16 = map.createLayer('sur fenêtre',this.tilesetanim);
        this.layer17 = map.createLayer('cam',this.tilesetinter);
        this.layer18 = map.createLayer('detect',this.tilesetinter);
        this.layer19 = map.createLayer('vent',this.tilesetinter);



        
        this.layer19.alpha = 0;
        this.layer18.alpha = 0;
        this.layer16.alpha = 0;
        this.layer17.alpha = 0;
        this.layer13.alpha = 0;
        this.layer12.alpha = 0;
        this.layer11.alpha = 0;
        this.layer8.alpha = 0;


        if(isameliorate[2].vent == false)var exclam1 = this.add.sprite(104,63,'exclam').setScale(0.09);

        if(isameliorate[3].ascenceur == false)var exclam2 = this.add.sprite(353,61,'exclam').setScale(0.09);




        //animation


        this.anims.create({
            key:'voletanim2',
            frameRate:4 ,
            frames:this.anims.generateFrameNumbers('voletet1', {start:0, end:6}),
            repeat:-1
        })


        this.anims.create({
            key:'ascanim1',
            frameRate:4 ,
            frames:this.anims.generateFrameNumbers('ascenseur1', {start:0, end:6}),
            repeat:-1
        })






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

        const tp_etg2 = map.findObject("objet", obj => obj.name === "tp_etg2");
    
        const tp_etg2Zone = this.physics.add.existing(
            this.add.zone(tp_etg2.x, tp_etg2.y, tp_etg2.width, tp_etg2.height)
          );
    
        tp_etg2Zone.setOrigin(0);

        
    

        this.physics.add.overlap(this.player,tp_etg2Zone,function(hopitaletg1){
            hopitaletg1.scene.scene.stop();
            hopitaletg1.scene.scene.launch('hopitaletg2');
        });

        const tp_rdc = map.findObject("objet", obj => obj.name === "tp_rdc");
    
        const tp_rdcZone = this.physics.add.existing(
            this.add.zone(tp_rdc.x, tp_rdc.y, tp_rdc.width, tp_rdc.height)
          );
    
        tp_rdcZone.setOrigin(0);
    

        this.physics.add.overlap(this.player,tp_rdcZone,function(hopitaletg1){
            hopitaletg1.scene.scene.stop();
            where[0].etage1 = true;
            hopitaletg1.scene.scene.launch('hopitalrdc');
        });



        //ameliorations

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
            var ascanim1 = this.physics.add.sprite(400,80,'startasc');
            this.physics.add.overlap(this.player, ascanim1,()=>{
                ascanim1.play('ascanim1', true);
            });

            const portetage2= map.findObject("objet", obj => obj.name === "tp_rdcv2");


            const portetageZone2 = this.physics.add.existing(
                this.add.zone(portetage2.x, portetage2.y, portetage2.width, portetage2.height)
              );
        
            portetageZone2.setOrigin(0);
            
            this.physics.add.overlap(this.player,portetageZone2,function(Mainscene){
                where[3].mainscenefromhpt = true;
                Mainscene.scene.scene.stop();
                Mainscene.scene.scene.launch('hopitaletg2');
            });
            
        }



        this.coins = this.physics.add.group();

         
        for(let i = 19; i<=23;i++){
            console.log("test");
           this.coins.create(coinsarray[i].x, coinsarray[i].y,this.coins.playAnimation('coinv2', true));            
        }


        this.physics.add.overlap(this.player, this.coins,(player, coinstance)=>{
           coinscore[0].score++;
           this.coins.killAndHide(coinstance);
           this.coins.remove(coinstance);
           console.log(coinscore[0].score);
        });




        //amelioration 


        const ascenseurup = map.findObject("objet", obj => obj.name === "ascenseurup");

        const ascenseurupZone = this.physics.add.existing(
           this.add.zone(ascenseurup.x, ascenseurup.y, ascenseurup.width, ascenseurup.height)
         );

        ascenseurupZone.setOrigin(0);
       
        this.physics.add.overlap(this.player,ascenseurupZone,()=>{


               if(enteronce2==false && isameliorate[3].ascenceur == false){

                   Swal.fire({
                       title: "Tu veux débloquer l'amélioration 'Ascenseur'?",
                       icon: 'warning', 
                       text:"Vous voulez remplacer vos vieux escaliers ? Choisissez d'installer un ascenseur, pour le confort de vos usagers !",
                       showCancelButton: true,
                       confirmButtonColor: '#3085d6',
                       cancelButtonColor: '#d33',
                       confirmButtonText: 'oui!'
                     }).then((result) => {
                       if (result.isConfirmed && coinscore[0].score >= 8) {
                         Swal.fire(
                           'Obtenue!',
                           'Amélioration débloquée',
                           'success',
                         )
                         isameliorate[3].ascenceur = true;
                         this.layer8.alpha = 1;
                         exclam2.destroy();
                         var ascanim1 = this.physics.add.sprite(400,80,'startasc');
                         this.physics.add.overlap(this.player, ascanim1,()=>{
                            ascanim1.play('ascanim1', true);
                        });
                         statTab[0].energie -= 2;
                         statTab[1].confort += 5;
                         statTab[2].securite+= 5;

                       }
                       if(result.isConfirmed && coinscore[0].score <= 8 && isameliorate[3].ascenceur == false){
                           Swal.fire(
                               "Vous n'avez pas assez de pièces, allez en collecter sur la map!!"
                           )

                       }
                     })
               }
               enteronce2=true;


       });
        


        const ventup = map.findObject("objet", obj => obj.name === "ventup");

        const ventupZone = this.physics.add.existing(
           this.add.zone(ventup.x, ventup.y, ventup.width, ventup.height)
         );

       ventupZone.setOrigin(0);
       
           this.physics.add.overlap(this.player,ventupZone,()=>{


               if(enteronce==false && isameliorate[2].vent == false){

                   Swal.fire({
                       title: "Tu veux débloquer l'amélioration 'Desigo-Room'?",
                       icon: 'warning',
                       text:"Un système de contrôle de pièces qui permet de régler ses conditions grâce à des algorithmes : la température ambiante, la qualité de l’air, la ventilation, l’ombrage, l’humidité et l’éclairage.",
                       showCancelButton: true,
                       confirmButtonColor: '#3085d6',
                       cancelButtonColor: '#d33',
                       confirmButtonText: 'oui!'
                     }).then((result) => {
                       if (result.isConfirmed && coinscore[0].score >= 5) {
                         Swal.fire(
                           'Obtenue!',
                           'Amélioration débloquée',
                           'success',
                         )
                         isameliorate[2].vent = true;
                         this.layer19.alpha = 1;
                         exclam1.destroy();
                         statTab[0].energie += 10;
                         statTab[1].confort += 5;


                       }
                       if(result.isConfirmed && coinscore[0].score <= 5 && isameliorate[2].vent == false){
                           Swal.fire(
                               "Vous n'avez pas assez de pièces, allez en collecter sur la map!!"
                           )

                       }
                     })
               }
               enteronce=true;


       });
        


    }


    update(){


        if((this.physics.overlapCirc(105, 69, 20,true).length == 2)== false)enteronce=false;

        if((this.physics.overlapCirc(352, 70, 20,true).length == 2)== false)enteronce2=false;



        //Check amelioration

        if(isameliorate[2].vent == true){
            this.layer19.alpha = 1;
        }

        if(isameliorate[3].ascenceur == true){
            this.layer8.alpha = 1;
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
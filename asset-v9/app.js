// "use strict";
/* =============================================================== *\

   Incredibox copyrights So Far So Good © 2015
   Object app contenant les infos et éléments à charger

\* =============================================================== */

var app = new function(){

	this.name = 'Wekiddy';
	this.version = '9';
	this.date = '2023';
	this.folder = 'asset-v9/';
	this.looptime = 5053;//this.looptime = 4760;// inutile si le son "aspire" est en WAV (heu... à vérifier)
	this.totalframe = 242;// 24 fps -> (8 x 24 img/s = 192 frame) x 2 (boucle A et boucle B)
	this.nbpolo = 7;
	this.nbloopbonus = 2;
	this.recmaxloop = 36;// faut que ça fasse environ 3 minutes
	this.recminloop = 4;// faut que ça fasse environ 20 secondes
	this.recmintime = Math.round(this.looptime/1000)*this.recminloop;
	this.sndtype = 'mp3';// mp3, wav (ogg marche pas sur IOS)
	this.sndaspire = 'aspire_flow.mp3';// les sons bouclent parfaitement avec un métronome en WAV
	this.spritepolo = 'polo-sprite.png';
	this.spritepicto = 'game-picto@2x.png';

	this.col0 = '#008EFF';// light
	this.col1 = '#005CFA';// normal
	this.col2 = '#0048C3';// dark
	this.col3 = '#00348C';// more dark (:active)
	this.col4 = '#002055';// very dark
	
	this.animearray = [
		{name:'01_boo_9',			color:'9448ff', uniqsnd:false},
		{name:'02_kevin',		color:'fa340f', uniqsnd:false},
		{name:'03_double_k',		color:'19d428', uniqsnd:false},
		{name:'04_blue_gt',	 	color:'2c86fe', uniqsnd:true},
		{name:'05_mj_182',		color:'19d428', uniqsnd:true},
		{name:'06_boom_fuzz',	color:'2c86fe', uniqsnd:false},
		{name:'07_asap_bee',	color:'19d428', uniqsnd:false},
		{name:'08_m_o_g',		color:'ffca06', uniqsnd:false},
		{name:'09_arashi',		color:'2c86fe', uniqsnd:false},
		{name:'10_big_duke',	color:'fa340f', uniqsnd:false},
		{name:'11_swingy',		color:'2c86fe', uniqsnd:false},
		{name:'12_d_invaders',	color:'19d428', uniqsnd:true},
		{name:'13_doo_doo',	 	color:'2c86fe', uniqsnd:true},
		{name:'14_8_bit',	 	color:'19d428', uniqsnd:false},
		{name:'15_kc_glow',	    color:'9448ff', uniqsnd:false},
		{name:'16_el_cool_p',	color:'fa340f', uniqsnd:false},
		{name:'17_memphis',	 	color:'2c86fe', uniqsnd:false},
		{name:'18_jogg_d',	 	color:'ffca06', uniqsnd:false},
		{name:'19_scooter',		color:'19d428', uniqsnd:false},
		{name:'20_lil_blaze',	color:'2c86fe', uniqsnd:false}
	];
	 
	this.bonusarray = [
		{name:'Flow',	src:'v9-b1-flow-hb.mp4',	code:'1,2,5,8,17',		sound:'21_bonus_flow.'+this.sndtype},
		{name:'URFO', 	src:'v9-b2-urfo-hb.mp4',		code:'1,2,3,16,20',		sound:'22_bonus_urfo.'+this.sndtype}
//		{name:'Musica', src:'v5-musica.mp4',		code:'1,5,7,14,19',		sound:'bonus-musica.'+this.sndtype}
	];

	this.unlockerarray = [];

	/*	------------------------------ REMPLIR UN TABLEAU AVEC LES ID DE PICTO QUI UNLOCK LES BONUS
		Comme on pourra directement demander à un picto "est-ce que tu fais partie de la combinaison d'un bonus ?"
		Ça va par exemple servir à afficher un point coloré sous les polos si ils font partie d'une combinaison bonus
		Edit : Je l'ai fait, en fait c'est naz, quand il y a des polos qui appartiennent à 2 bonus différents et qui affichent un point sous leur bidou, bas c'ets confus, on comprend pas bien ce que ça veut dire...
	*/

	var that = this;
	
	function trierCodeBonus(){
		for(var a=0; a<that.bonusarray.length; a++){
			var codeArr = that.bonusarray[a].code.split(',');
			for(var b=0; b<codeArr.length; b++){
				var pictoCode = Number(codeArr[b]);
				var found = false;
				for(var c=0; c<that.unlockerarray.length; c++){
					if(that.unlockerarray[c] == pictoCode){
						found = true;
						break;
					}
				}
				if(!found){
					that.unlockerarray[c] = pictoCode;
				}
			}
		}
		console.log(that.unlockerarray)
	}
	//trierCodeBonus(); // Pas besoin finalement, ça servait 

	/*	------------------------------ REMPLIR LE TABLEAU ANIMEARRAY */
	
	for(var a=0, lng=this.animearray.length; a<lng; a++){
		var name = this.animearray[a].name;
		this.animearray[a].soundA = name+'_a.'+this.sndtype;
		this.animearray[a].soundB = this.animearray[a].uniqsnd ? name+'_a.'+this.sndtype : name+'_b.'+this.sndtype;
		this.animearray[a].anime = name+'-sprite.png';
		this.animearray[a].animeData = name+'.json';
	}
}

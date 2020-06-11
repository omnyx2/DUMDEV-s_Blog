const portfolioJson = {
	profile: {
		faceImgUrl: "http://pixelartmaker.com/art/3f542f584628593.png",
			//faceImgUrl:"http://res.heraldm.com/phpwas/restmb_jhidxmake.php?idx=5&simg=201808150643159013276_20180815064350_01.jpg",
		name: {
			firstName:"Hyun-seok",
			lastName:"Ryu",
		},
		location:{
			country: "Republic of South Korea",
			city: "Seoul",
			detail: "Young-San"
		},
		phone: "010-2591-2746",
		web: "omnyx2.github.io",
		Email: "omnyx2@gmail.com",
	},
	intro: {
			annotation: "intro_annotation_test",
			content: "intro_content_testestestest...",
	},
	expertise: {	
		annotation:"we can make it"	,
		items:[	
			{
					id:"01",
					degree:"60",
					title:"C",
					content:"C",
			},
			{ 
					id:"02",
					degree:"80",
					title:"ARDUINO",
					content:"ARDUINO",
			},
			{
					id:"01",
					degree:"60",
					title:"REACT",
					content:"REACT doing!",
			},
			{ 
					id:"01",
					degree:"60",
					title:"NODE.JS",
					content:"Nodejs studying",
			},
		],
	},
	experience: {
		annotation: "experience is good thing!",	
		items:[
				{
				id: 0,
				title:"Making Blog",
				startYear:"2019",
				endYear:"2020",
				position:"fullstackdev",
				content:"Hi",
			}
		]
	},
	education: {
		annotation: "educated student is good",	
		items:[
				{
				id:0,
				title:"University",
				startYear:"2017",
				endYear:"2022",
				institude:"GIST",
				content:"GIST is University that incuvating some future scientists So I'm very proud of That I'm one of GIST students and also I learn a lots of things at GIST such as how to presentatinig, or making robots with ROS, and C with cortex A9(discorvary borad). But most memorable experience was start up",
			},
		]
	},

	awards: {
		annotation: "award is proof of effort",	
		items:[			
			{
				id: 0,
				title: "MEWARD",
					content: "1ST!",
			},
		],
	},
}

export default portfolioJson; 

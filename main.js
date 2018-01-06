
$('#send1').click(function(){
	var txt = $(this).siblings("input");
	var boss = firebase.database().ref('boss1');
	boss.push({content:txt.val()});
	txt.val('');
})

$('#send2').click(function(){
	var txt = $(this).siblings("input");
	var boss = firebase.database().ref('boss2');
	boss.push({content:txt.val()});
	txt.val('');
})

$('#send3').click(function(){
	var txt = $(this).siblings("input");
	var boss = firebase.database().ref('boss3');
	boss.push({content:txt.val()});
	txt.val('');
})

$('#send4').click(function(){
	var txt = $(this).siblings("input");
	var boss = firebase.database().ref('boss4');
	boss.push({content:txt.val()});
	txt.val('');
})

$('#send5').click(function(){
	var txt = $(this).siblings("input");
	var boss = firebase.database().ref('boss5');
	boss.push({content:txt.val()});
	txt.val('');
})

$('#send6').click(function(){
	var txt = $(this).siblings("input");
	var boss = firebase.database().ref('boss6');
	boss.push({content:txt.val()});
	txt.val('');
})

$('#send7').click(function(){
	var txt = $(this).siblings("input");
	var boss = firebase.database().ref('boss7');
	boss.push({content:txt.val()});
	txt.val('');
})

$('#send8').click(function(){
	var txt = $(this).siblings("input");
	var boss = firebase.database().ref('boss8');
	boss.push({content:txt.val()});
	txt.val('');
})

$('#send9').click(function(){
	var txt = $(this).siblings("input");
	var boss = firebase.database().ref('boss9');
	boss.push({content:txt.val()});
	txt.val('');
})

$('#send10').click(function(){
	var txt = $(this).siblings("input");
	var boss = firebase.database().ref('boss10');
	boss.push({content:txt.val()});
	txt.val('');
})

$('#send11').click(function(){
	var txt = $(this).siblings("input");
	var boss = firebase.database().ref('boss11');
	boss.push({content:txt.val()});
	txt.val('');
})

$('#send12').click(function(){
	var txt = $(this).siblings("input");
	var boss = firebase.database().ref('boss12');
	boss.push({content:txt.val()});
	txt.val('');
})

$('#send13').click(function(){
	var txt = $(this).siblings("input");
	var boss = firebase.database().ref('boss13');
	boss.push({content:txt.val()});
	txt.val('');
})

$('#send14').click(function(){
	var txt = $(this).siblings("input");
	var boss = firebase.database().ref('boss14');
	boss.push({content:txt.val()});
	txt.val('');
})

$('#send15').click(function(){
	var txt = $(this).siblings("input");
	var boss = firebase.database().ref('boss15');
	boss.push({content:txt.val()});
	txt.val('');
})



$(document).ready(function(){
	var boss1 = firebase.database().ref('boss1');
	var boss2 = firebase.database().ref('boss2');
	var boss3 = firebase.database().ref('boss3');
	var boss4 = firebase.database().ref('boss4');
	var boss5 = firebase.database().ref('boss5');
	var boss6 = firebase.database().ref('boss6');
	var boss7 = firebase.database().ref('boss7');
	var boss8 = firebase.database().ref('boss8');
	var boss9 = firebase.database().ref('boss9');
	var boss10 = firebase.database().ref('boss10');
	var boss11 = firebase.database().ref('boss11');
	var boss12 = firebase.database().ref('boss12');
	var boss13 = firebase.database().ref('boss13');
	var boss14 = firebase.database().ref('boss14');
	var boss15 = firebase.database().ref('boss15');

	boss1.on('value',function(snapshot){
		var myobj = snapshot.val();
		var val = myobj[Object.keys(myobj)[Object.keys(myobj).length - 1]];
		var re_time = val.content.split(':');
		$('.flex-3')[0].children[3].innerHTML = val.content;
		$('.flex-3')[0].children[6].innerHTML = (parseInt(re_time[0])+4)%24 + ':'+ parseInt(re_time[1]);
	})

	boss2.on('value',function(snapshot){
		var myobj = snapshot.val();
		var val = myobj[Object.keys(myobj)[Object.keys(myobj).length - 1]];
		var re_time = val.content.split(':');
		$('.flex-3')[1].children[3].innerHTML = val.content;
		$('.flex-3')[1].children[6].innerHTML = (parseInt(re_time[0])+4)%24 + ':'+ parseInt(re_time[1]);
	})

	boss3.on('value',function(snapshot){
		var myobj = snapshot.val();
		var val = myobj[Object.keys(myobj)[Object.keys(myobj).length - 1]];
		var re_time = val.content.split(':');
		$('.flex-3')[2].children[3].innerHTML = val.content;
		$('.flex-3')[2].children[6].innerHTML = (parseInt(re_time[0])+4)%24 + ':'+ parseInt(re_time[1]);
	})

	boss4.on('value',function(snapshot){
		var myobj = snapshot.val();
		var val = myobj[Object.keys(myobj)[Object.keys(myobj).length - 1]];
		var re_time = val.content.split(':');
		$('.flex-3')[3].children[3].innerHTML = val.content;
		$('.flex-3')[3].children[6].innerHTML = (parseInt(re_time[0])+4)%24 + ':'+ parseInt(re_time[1]);
	})

	boss5.on('value',function(snapshot){
		var myobj = snapshot.val();
		var val = myobj[Object.keys(myobj)[Object.keys(myobj).length - 1]];
		var re_time = val.content.split(':');
		$('.flex-3')[4].children[3].innerHTML = val.content;
		$('.flex-3')[4].children[6].innerHTML = (parseInt(re_time[0])+8)%24 + ':'+ parseInt(re_time[1]);
	})

	boss6.on('value',function(snapshot){
		var myobj = snapshot.val();
		var val = myobj[Object.keys(myobj)[Object.keys(myobj).length - 1]];
		var re_time = val.content.split(':');
		$('.flex-3')[5].children[3].innerHTML = val.content;
		$('.flex-3')[5].children[6].innerHTML = (parseInt(re_time[0])+2)%24 + ':'+ parseInt(re_time[1]);
	})

	boss7.on('value',function(snapshot){
		var myobj = snapshot.val();
		var val = myobj[Object.keys(myobj)[Object.keys(myobj).length - 1]];
		var re_time = val.content.split(':');
		$('.flex-3')[6].children[3].innerHTML = val.content;
		$('.flex-3')[6].children[6].innerHTML = (parseInt(re_time[0])+3)%24 + ':'+ parseInt(re_time[1]);
	})

	boss8.on('value',function(snapshot){
		var myobj = snapshot.val();
		var val = myobj[Object.keys(myobj)[Object.keys(myobj).length - 1]];
		var re_time = val.content.split(':');
		$('.flex-3')[7].children[3].innerHTML = val.content;
		$('.flex-3')[7].children[6].innerHTML = (parseInt(re_time[0])+3)%24 + ':'+ parseInt(re_time[1]);
	})

	boss9.on('value',function(snapshot){
		var myobj = snapshot.val();
		var val = myobj[Object.keys(myobj)[Object.keys(myobj).length - 1]];
		var re_time = val.content.split(':');
		$('.flex-3')[8].children[3].innerHTML = val.content;
		$('.flex-3')[8].children[6].innerHTML = (parseInt(re_time[0])+1)%24 + ':'+ parseInt(re_time[1]);
	})

	boss10.on('value',function(snapshot){
		var myobj = snapshot.val();
		var val = myobj[Object.keys(myobj)[Object.keys(myobj).length - 1]];
		var re_time = val.content.split(':');
		$('.flex-3')[9].children[3].innerHTML = val.content;
		$('.flex-3')[9].children[6].innerHTML = (parseInt(re_time[0])+2)%24 + ':'+ parseInt(re_time[1]);
	})

	boss11.on('value',function(snapshot){
		var myobj = snapshot.val();
		var val = myobj[Object.keys(myobj)[Object.keys(myobj).length - 1]];
		var re_time = val.content.split(':');
		$('.flex-3')[10].children[3].innerHTML = val.content;
		$('.flex-3')[10].children[6].innerHTML = (parseInt(re_time[0])+8)%24 + ':'+ parseInt(re_time[1]);
	})

	boss12.on('value',function(snapshot){
		var myobj = snapshot.val();
		var val = myobj[Object.keys(myobj)[Object.keys(myobj).length - 1]];
		var re_time = val.content.split(':');
		$('.flex-3')[11].children[3].innerHTML = val.content;
		$('.flex-3')[11].children[6].innerHTML = (parseInt(re_time[0])+4)%24 + ':'+ parseInt(re_time[1]);
	})

	boss13.on('value',function(snapshot){
		var myobj = snapshot.val();
		var val = myobj[Object.keys(myobj)[Object.keys(myobj).length - 1]];
		var re_time = val.content.split(':');
		$('.flex-3')[12].children[3].innerHTML = val.content;
		$('.flex-3')[12].children[6].innerHTML = (parseInt(re_time[0])+2)%24 + ':'+ parseInt(re_time[1]);
	})

	boss14.on('value',function(snapshot){
		var myobj = snapshot.val();
		var val = myobj[Object.keys(myobj)[Object.keys(myobj).length - 1]];
		var re_time = val.content.split(':');
		$('.flex-3')[13].children[3].innerHTML = val.content;
		$('.flex-3')[13].children[6].innerHTML = (parseInt(re_time[0])+3)%24 + ':'+ parseInt(re_time[1]);
	})

	boss15.on('value',function(snapshot){
		var myobj = snapshot.val();
		var val = myobj[Object.keys(myobj)[Object.keys(myobj).length - 1]];
		var re_time = val.content.split(':');
		$('.flex-3')[14].children[3].innerHTML = val.content;
		$('.flex-3')[14].children[6].innerHTML = (parseInt(re_time[0])+2)%24 + ':'+ parseInt(re_time[1]);
	})
})

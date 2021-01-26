// JavaScript Document
paragraphs=document.querySelector('.swiper-container').querySelectorAll('p');
	
	for(var i=0; i<paragraphs.length; i++){
					    var paragraph=paragraphs[i];
						var str=paragraph.innerHTML;
						var array=str.split("");
						paragraph.innerHTML='';

						for(j=0;j<array.length; j++){

							if(j%2==0){className='odd';}else{className='even';}
							paragraph.innerHTML+=('<span class='+className+'>'+array[j]+'</span>');
							}
					}
	
    var swiper = new Swiper('.swiper-container',{
		autoplay:14000,
		speed:500,
		autoplayDisableOnInteraction : false,
		loop:true,
		effect : 'fade',
		
		pagination : '.swiper-pagination',
		paginationClickable :true,
		});
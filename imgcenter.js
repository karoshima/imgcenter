javascript:(function(){with(document){var%20settgt,movtgt,idx,page,dxy,dx,dy,cur,stepx,stepy;page=compatMode.match('1')?documentElement:body;dxy=false;dx=dy=cur=0;function%20atx(ob,loc){if(!ob)return%20loc;return%20atx(ob.offsetParent,loc+ob.offsetLeft);};function%20aty(ob,loc){if(!ob)return%20loc;return%20aty(ob.offsetParent,loc+ob.offsetTop);};settgt=function(src){if(dxy)return;dxy=true;var%20sx,xy;sx=atx(src,0);sy=aty(src,0);if(src.width<page.clientWidth)dx=sx+src.width/2-page.clientWidth/2-page.scrollLeft;else%20if(page.scrollLeft<sx)dx=sx-page.scrollLeft;else%20if(sx+src.width<page.scrollLeft+page.clientWidth)dx=sx+src.width-page.clientWidth-page.scrollLeft;else%20dx=0;if(src.height<page.clientHeight)dy=sy+src.height/2-page.clientHeight/2-page.scrollTop;else%20if(page.scrollTop<sy)dy=sy-page.scrollTop;else%20if(sy+src.height<page.scrollTop+page.clientHeight)dy=sy+src.height-page.clientHeight-page.scrollTop;else%20dy=0;stepx=dx/10;stepy=dy/10;movtgt();};movtgt=function(){if(dx==0&&dy==0){dxy=false;return;}if((dx<0&&dx<stepx)||(0<dx&&stepx<dx)){page.scrollLeft+=stepx;dx-=stepx;}else{page.scrollLeft+=dx;dx=0;}if%20((dy<0&&dy<stepy)||(0<dy&&stepy<dy)){page.scrollTop+=stepy;dy-=stepy;}else{page.scrollTop+=dy;dy=0;}setTimeout(movtgt,30);};for(idx=0;idx<images.length;++idx){images[idx].onmouseover=function(e){var%20src,idx,sx,sy;src=e.target||e.srcElement;for(idx=0;idx<images.length;++idx){if(images[idx]==src){cur=idx;break;}}settgt(src);};};document.addEventListener("keydown",function(e){if(dxy)return;if(cur<0)return;if(e.keyCode==74){if(images[cur+1]){cur+=1;settgt(images[cur]);}}else%20if(e.keyCode==75){if(images[cur-1]){cur-=1;settgt(images[cur]);}}},false);};})()

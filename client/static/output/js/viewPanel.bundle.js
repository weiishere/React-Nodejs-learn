!function(e){function t(i){if(a[i])return a[i].exports;var r=a[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}({0:function(e,t,a){a(178)},178:function(e,t){!function(e){function t(){LSystem.screen(LStage.FULL_SCREEN),backLayer=createSprite(),backLayer.graphics.drawRect(1,"#cccccc",[0,0,LGlobal.width,LGlobal.height],!0,"#000000"),eventBackLayer=createSprite(),eventBackLayer.graphics.drawRect(1,"#cccccc",[0,0,LGlobal.width,LGlobal.height],!0,"#fff"),addChild(backLayer),addChild(eventBackLayer),loadingLayer=new LoadingSample1,backLayer.addChild(loadingLayer),LLoadManage.load(imgData,function(e){loadingLayer.setProgress(e)},a)}function a(t){e.imglist=t,backLayer.die(),backLayer.removeAllChild(),backLayer.graphics.drawRect(0,"#cccccc",[0,0,LGlobal.width,LGlobal.height],!0,"#ffffff"),addChild(backLayer),n.init()}function i(e,t,a){base(this,LSprite,[]);var i=this;i.sharpType=a||"1",i.value=e,i.scale=t||1,i.setView(e)}e.onresize=function(){LGlobal.resize()},LGlobal.destroy=!0,LGlobal.stageScale=LStageScaleMode.EXACT_FIT;!function(){e.ApiUrl="http://112.74.86.15:803",e.isClearCacheImg=!0,e.time=0,e.score1,e.score2,e.but_voice,e.but_game,e.item_x=10,e.item_y=10,e.gameMainPanel,e.bgBlocks,e.BlocksWrap,e.activeBlock=void 0,e.score_x=[],e.score_y=[],e.version="v2.53",e.mySoundPlayer,e.isDisableScreen=!1,e.imgData=new Array,e.dataList=imgData}(),function(){function t(e,t){return base(this,LSprite,[]),this.text=e,this.time=t,this.setView(),this}e.extend=function(){var e,t=arguments[0]||{},a=1,i=arguments.length,r=!1;for("boolean"==typeof t&&(r=t,t=arguments[1]||{},a=2),"object"==typeof t||jQuery.isFunction(t)||(t={}),i==a&&(t=this,--a),a=0;a<i;a++)if(null!=(e=arguments[a]))for(var n in e){var o=t[n],l=e[n];t!==l&&(r&&l&&"object"==typeof l&&!l.nodeType?t[n]=jQuery.extend(r,o||(null!=l.length?[]:{}),l):void 0!==l&&(t[n]=l))}return t},e.getRedom=function(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1);case 2:return parseInt(Math.random()*(t-e+1)+e);default:return 0}},e.soundList=["s_dropIn.wav","s_dropInFail.wav","s_gameover.wav","s_getScore.wav"],e.soundArray=[],e.loadSound=function(){if(LSound.webAudioEnabled)for(var e=0;e<soundList.length;e++){for(var t=soundList[e],a=!1,i=0;i<soundArray.length;i++)if(soundArray[i].name==t){a=!0,theSound=soundArray[i].sound;break}if(!a){var r=new LSound;soundArray.push({name:t,sound:r}),r.load("sound/"+t);break}}},e.isAllowPlay=!0,e.playSound=function(e,t){if(!isAllowPlay)return!1;for(var a,i=!1,r=0;r<soundArray.length;r++)if(soundArray[r].name==e){i=!0,a=soundArray[r].sound;break}if(i)t&&t.call(a);else{var n=new LSound;soundArray.push({name:e,sound:n}),n.addEventListener(LEvent.COMPLETE,function(){t&&t.call(n)}),n.load("sound/"+e)}},e.getParameterByName=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),a=t.exec(location.search);return null===a?"":decodeURIComponent(a[1].replace(/\+/g," "))},e.base64Coder=function(){var e={},t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=new Array((-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),62,(-1),(-1),(-1),63,52,53,54,55,56,57,58,59,60,61,(-1),(-1),(-1),(-1),(-1),(-1),(-1),0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,(-1),(-1),(-1),(-1),(-1),(-1),26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,(-1),(-1),(-1),(-1),(-1));return e.base64encode=function(e){var a,i,r,n,o,l;for(r=e.length,i=0,a="";i<r;){if(n=255&e.charCodeAt(i++),i==r){a+=t.charAt(n>>2),a+=t.charAt((3&n)<<4),a+="==";break}if(o=e.charCodeAt(i++),i==r){a+=t.charAt(n>>2),a+=t.charAt((3&n)<<4|(240&o)>>4),a+=t.charAt((15&o)<<2),a+="=";break}l=e.charCodeAt(i++),a+=t.charAt(n>>2),a+=t.charAt((3&n)<<4|(240&o)>>4),a+=t.charAt((15&o)<<2|(192&l)>>6),a+=t.charAt(63&l)}return a},e.base64decode=function(e){var t,i,r,n,o,l,c;for(l=e.length,o=0,c="";o<l;){do t=a[255&e.charCodeAt(o++)];while(o<l&&t==-1);if(t==-1)break;do i=a[255&e.charCodeAt(o++)];while(o<l&&i==-1);if(i==-1)break;c+=String.fromCharCode(t<<2|(48&i)>>4);do{if(r=255&e.charCodeAt(o++),61==r)return c;r=a[r]}while(o<l&&r==-1);if(r==-1)break;c+=String.fromCharCode((15&i)<<4|(60&r)>>2);do{if(n=255&e.charCodeAt(o++),61==n)return c;n=a[n]}while(o<l&&n==-1);if(n==-1)break;c+=String.fromCharCode((3&r)<<6|n)}return c},e}(),LTextField.prototype.align=function(e){e?this.x=(e.getWidth()-this.getWidth())/2:this.x=(LGlobal.width-this.getWidth())/2},LTextField.prototype.alignY=function(e){e?this.y=(e.getHeight()-this.getHeight())/2:this.y=(LGlobal.height-this.getHeight())/2},LSprite.prototype.ObjectList=function(e){for(var t=new Array,a=0,i=this.childList.length;a<i;a++){var r=this.childList[a];r.type===e&&t.push(r)}return t},LShape.prototype.relationSprite=null,LSprite.prototype.align=function(e){e?this.x=(e.getWidth()-this.getWidth())/2:this.x=(LGlobal.width-this.getWidth())/2},LSprite.prototype.isActive=!1,LSprite.prototype.alignY=function(e){e?this.y=(e.getHeight()-this.getHeight())/2:this.y=(LGlobal.height-this.getHeight())/2},e.createSprite=function(e,t){if("function"==typeof e){var a=new LSprite;return e.call(a),a}var i=extend({x:0,y:0,image:"",click:void 0},e||{}),a=new LSprite;if(a.x=i.x,a.y=i.y,""!=i.image){var r=new LBitmap(new LBitmapData(imglist[i.image]));a.addChild(r)}return i.click&&a.addEventListener(LMouseEvent.MOUSE_UP,function(e){i.click.call(a,e)}),t&&t.call(a),a},e.createText=function(e,t,a){var i=extend({x:0,y:0,color:"#ae7318",size:20},t||{}),r=new LTextField;return r.text=e,r.size=i.size,r.color=i.color,r.y=i.y,r.x=i.x,a&&a.call(r),r},t.prototype.setView=function(){var e=this,t=new LShape,a=createText(e.text,{color:"#fff",size:24});t.graphics.drawRect(0,"#ff0000",[10,10,a.getWidth()+40,50],!0,"#000000"),t.y=800,a.y=820,t.x=(LGlobal.width-t.getWidth())/2,a.x=(LGlobal.width-a.getWidth())/2+10,e.addChild(t),e.addChild(a),e.close=function(){LTweenLite.to(e,.6,{loop:!1,ease:LEasing.Sine.easeOut,alpha:0,onComplete:function(){e.remove()}})},0!=e.time&&window.setTimeout(function(){e.close()},e.time)},t.prototype.text="",t.prototype.time="",t.prototype.close=function(){},Array.prototype.isContain=function(e){for(var t=!1,a=0;a<this.length;a++)if(this[a]==e){t=!0;break}return t},e.Trip=t}();var r={indexPage:function(){var e=new LSprite;return e}},n={init:function(){addChild(r.indexPage()),BlocksWrap=createSprite(),addChild(BlocksWrap)},addWaitBlocks:function(){var e=function(){var e=getRedom(1,100),t=0,a=[0,1,2,7,8,9,10,11],i=[3,4,5,6,12,13,14,15,16,17,18],r=function(t){return e<=t?a[getRedom(0,a.length-1)]:i[getRedom(0,i.length-1)]};return t=r(score1.value<999?70:score1.value>=1e3&&score1.value<1999?60:score1.value>=2e3&&score1.value<2999?50:40)},t=new Block(e());t.x=250,t.y=860-t.getHeight()/2,t.alpha=0,BlocksWrap.addChild(t);var a=new Block(e());a.x=480,a.y=860-a.getHeight()/2,a.alpha=0,BlocksWrap.addChild(a);var i=new Block(e());i.x=LGlobal.width,i.y=860-i.getHeight()/2,i.alpha=0,BlocksWrap.addChild(i);var r=110-t.getWidth()/2,o=320-a.getWidth()/2,l=530-i.getWidth()/2;blockShape1.relationSprite=t,blockShape2.relationSprite=a,blockShape3.relationSprite=i,LTweenLite.to(t,.1,{x:r,alpha:1,onComplete:function(e){t.state=1,t.position={x:t.x,y:t.y}}}),LTweenLite.to(a,.1,{x:o,alpha:1,onComplete:function(e){a.state=1,a.position={x:a.x,y:a.y}}}),LTweenLite.to(i,.1,{x:l,alpha:1,onComplete:function(e){i.state=1,i.position={x:i.x,y:i.y}}}),n.isGameOver()},refreshMainPanel:function(){gameMainPanel.removeAllChild();for(var e=.7,t=function(){if(0!=BlocksWrap.ObjectList("LSprite").length){n.isGameOver()}},a=0,i=bgBlocks.length;a<i;a++)for(var r=55*a,o=0,l=bgBlocks[a].length;o<l;o++){var c=55*o,s=new LShape,h=createSprite({x:c,y:r},function(){s.graphics.drawRoundRect(0,"#ff0000",[0,0,52,52,7],!0,bgBlocks[a][o].color),this.addChild(s)});if(score_x.isContain(a)||score_y.isContain(o)){var d=createSprite({x:c,y:r},function(){var e=new LShape;e.graphics.drawRoundRect(0,"#ff0000",[0,0,52,52,7],!0,"#E2E2E2"),this.addChild(e)});gameMainPanel.addChild(d);var g=createSprite({x:h.x,y:h.y},function(){this.addChild(h),h.x=h.getWidth()/2,h.y=h.getHeight()/2,s.x=-s.getWidth()/2,s.y=-s.getHeight()/2,e=.85*e});LTweenLite.to(g.getChildAt(0),e,{scaleX:0,scaleY:0,ease:LEasing.Sine.easeOut,onComplete:function(){g.remove()}}),bgBlocks[a][o].sign=0,bgBlocks[a][o].color="#E2E2E2",gameMainPanel.addChild(g),window.setTimeout(function(){isDisableScreen=!1},700)}else gameMainPanel.addChild(h)}if(0!=score_x.length||0!=score_y.length){window.setTimeout(function(){t()},1300*e),goneLine=score_x.length+score_y.length;var u=0;switch(goneLine){case 1:u=10;break;case 2:u=40;break;case 3:u=90;break;case 4:u=160;break;case 5:u=250;break;case 6:u=360}var p=parseInt(score1.value);score1.setNumber(p+u,function(){score1.x=(LGlobal.width/2-score1.getWidth())/2}),score_x=[],score_y=[]}else t()},isGameOver:function(){for(var e=function(e,t,a){for(var i=0,r=e.blockData.length;i<r;i++)for(var n=0,o=e.blockData[i].length;n<o;n++)if(1==e.blockData[i][n]){if(t+n>=item_x||a+i>=item_y)return!1;if(1==bgBlocks[a+i][t+n].sign)return!1}return!0},t=BlocksWrap.ObjectList("LSprite"),a=0,i=t.length;a<i;a++)for(var n=t[a],o=0;o<item_x;o++)for(var l=0;l<item_y;l++)if(e(n,o,l))return!0;return addChild(r.gameOver()),!1},testState:function(e){if(e.x<gameMainPanel.x-20||gameMainPanel.x>gameMainPanel.x+gameMainPanel.getWidth()+20)return!1;if(e.y<gameMainPanel.y-20||gameMainPanel.y>gameMainPanel.y+gameMainPanel.getHeight()+20)return!1;var t,a=1e5,i=100,r=100;for(var n in gameMainPanel.childList)if(gameMainPanel.childList.hasOwnProperty(n)){var o=gameMainPanel.childList[n],l=Math.abs(e.x-(o.x+gameMainPanel.x)),c=Math.abs(e.y-(o.y+gameMainPanel.y));l+c<a&&(a=l+c,t=o,i=t.x/55,r=t.y/55)}for(var s=0,h=e.blockData.length;s<h;s++)for(var d=0,g=e.blockData[s].length;d<g;d++)if(1==e.blockData[s][d]){if(i+d>=item_x||r+s>=item_y)return!1;if(1==bgBlocks[r+s][i+d].sign)return!1}for(var s=0,h=e.blockData.length;s<h;s++)for(var d=0,g=e.blockData[s].length;d<g;d++)1==e.blockData[s][d]&&(bgBlocks[r+s][i+d].sign=1,bgBlocks[r+s][i+d].color=e.color);for(var s=0,h=item_y;s<h;s++){for(var u=!0,d=0,g=bgBlocks[s].length;d<g;d++)0!=bgBlocks[s][d].sign||(u=!1);u&&score_x.push(s)}for(var s=0;s<item_x;s++){for(var u=!0,d=0,g=bgBlocks[s].length;d<g;d++)0!=bgBlocks[d][s].sign||(u=!1);u&&score_y.push(s)}return!0}};i.prototype.value=0,i.prototype.changeSpeed=.1,i.prototype.defaultlength=0,i.prototype.spacing=0,i.prototype.scale=1,i.prototype.sharpType="1",i.prototype.singleWidth=0,i.prototype.setView=function(e){var t=this,a=(e+"").split(""),i=new LSprite;i.x=0;for(var r=0;r<a.length;r++){var n=new LSprite,e=parseInt(a[r]);n.addChild(new LBitmap(new LBitmapData(imglist["number"+t.sharpType+"_"+e]))),n.scaleX=n.scaleY=t.scale,i.y=n.getHeight()/2,n.y=-n.getHeight()/2,n.x=t.singleWidth=i.getWidth()+t.spacing,i.addChild(n),t.addChild(i)}},i.prototype.setNumber=function(e,t){var a=this;if(a.value=e,0!=a.defaultlength){for(var i=parseInt(e),r="",n=a.defaultlength-(i+"").length,o=0;o<n;o++)r+="0";r+=i,e=r}var l=a.getChildAt(0);LTweenLite.to(l,a.changeSpeed,{scaleY:0,onComplete:function(){a.removeAllChild(),a.setView(e),l=a.getChildAt(0),l.scaleY=0,LTweenLite.to(l,a.changeSpeed,{scaleY:1,onComplete:function(){t&&t.call(a)}})}})},LInit(30,"canvas",683,384,t,LEvent.INIT)}(window)}});
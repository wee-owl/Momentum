const _0x21ce=['.change-quote','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','.slide-next','night','cod','clientWidth','{}.constructor(\x22return\x20this\x22)(\x20)','116826ZuMpsi','pause','width','toLocaleTimeString','315145fhNwxu','.weather-error','toString','click','Birds','onchange','timeupdate','.greeting','.jpg','.play-item','getItem','backgroundImage','&lang=en&appid=3867793d36c7909354575a75dc4f3fb6&units=metric','add','bind','url(','warn','description','apply','setItem','/Momentum/js/data.json','1HXjkbl','400','.quote','table','.play','forEach','morning','name','__proto__','src','UTC','text','31SpRZmc','remove','console','className','long','append','city','return\x20/\x22\x20+\x20this\x20+\x20\x22/','28289nBrqlY','.slide-prev','load','2xYGkGQ','humidity','1ybFodw','Piano','addEventListener','.play-list','info','value','.humidity','404','en-En','evening','onload','classList','Good\x20','title','Minsk','test','length','.weather-icon','currentTime','.city','toLocaleDateString','Wind\x20speed:\x20','json','duration','main','style','.play-prev','textContent','.temperature','message','/Momentum/assets/sounds/Piano.mp3','numeric','speed','.author','return\x20(function()\x20','constructor','1482064vRlLpx','owf-','createElement','3152102fdwMhY','querySelector','weather-icon\x20owf','Japan','play','393425ferFCz','/Momentum/assets/sounds/Japan.mp3','offsetX','829632XuagoG','prototype','floor','span','getHours','trace','srcElement','error','.time','item-active','weather','random','/Momentum/assets/sounds/Tropic.mp3'];const _0x1966=function(_0x428a78,_0x399157){_0x428a78=_0x428a78-0xa4;let _0x19f37b=_0x21ce[_0x428a78];return _0x19f37b;};const _0x1e12b3=_0x1966;(function(_0x15a502,_0x2386cf){const _0x2f4e62=_0x1966;while(!![]){try{const _0x1617fe=-parseInt(_0x2f4e62(0xd9))+-parseInt(_0x2f4e62(0xba))+-parseInt(_0x2f4e62(0xc5))+-parseInt(_0x2f4e62(0xfe))*parseInt(_0x2f4e62(0x106))+parseInt(_0x2f4e62(0xc2))*parseInt(_0x2f4e62(0xf2))+parseInt(_0x2f4e62(0x109))*parseInt(_0x2f4e62(0xdd))+parseInt(_0x2f4e62(0xbd))*parseInt(_0x2f4e62(0x10b));if(_0x1617fe===_0x2386cf)break;else _0x15a502['push'](_0x15a502['shift']());}catch(_0x11c186){_0x15a502['push'](_0x15a502['shift']());}}}(_0x21ce,0xd47c0));const time=document['querySelector'](_0x1e12b3(0xcd)),date=document[_0x1e12b3(0xbe)]('.date'),greeting=document[_0x1e12b3(0xbe)](_0x1e12b3(0xe4)),userName=document[_0x1e12b3(0xbe)]('.name'),city=document['querySelector'](_0x1e12b3(0xa9)),body=document[_0x1e12b3(0xbe)]('body'),slidePrev=document['querySelector'](_0x1e12b3(0x107)),slideNext=document[_0x1e12b3(0xbe)](_0x1e12b3(0xd4)),weatherIcon=document['querySelector'](_0x1e12b3(0xa7)),temperature=document[_0x1e12b3(0xbe)](_0x1e12b3(0xb2)),weatherDescription=document[_0x1e12b3(0xbe)]('.weather-description'),wind=document['querySelector']('.wind'),humidity=document[_0x1e12b3(0xbe)](_0x1e12b3(0x111)),error=document[_0x1e12b3(0xbe)](_0x1e12b3(0xde)),quote=document['querySelector'](_0x1e12b3(0xf4)),author=document[_0x1e12b3(0xbe)](_0x1e12b3(0xb7)),changeQuote=document[_0x1e12b3(0xbe)](_0x1e12b3(0xd2)),playButton=document[_0x1e12b3(0xbe)](_0x1e12b3(0xf6)),playPrevButton=document[_0x1e12b3(0xbe)](_0x1e12b3(0xb0)),playNextButton=document[_0x1e12b3(0xbe)]('.play-next'),playListContainer=document[_0x1e12b3(0xbe)](_0x1e12b3(0x10e));let randomNum,isPlay=![],playNum=0x0;const showDate=()=>{const _0x156928=_0x1e12b3,_0x457b8f=new Date(),_0x7ff896={'weekday':_0x156928(0x102),'month':_0x156928(0x102),'day':_0x156928(0xb5),'timeZone':_0x156928(0xfc)},_0x40759a=_0x457b8f[_0x156928(0xaa)](_0x156928(0x113),_0x7ff896);date[_0x156928(0xb1)]=_0x40759a;},getHours=()=>{const _0x2d6700=_0x1e12b3,_0x8237ee=new Date(),_0x56fae0=_0x8237ee[_0x2d6700(0xc9)]();return _0x56fae0;},getTimeOfDay=()=>{const _0x5f3337=_0x1e12b3,_0xca4c74=getHours();let _0x4c9bc0;if(_0xca4c74>0x11)_0x4c9bc0=_0x5f3337(0x114);else{if(_0xca4c74>0xb)_0x4c9bc0='afternoon';else _0xca4c74>0x5?_0x4c9bc0=_0x5f3337(0xf8):_0x4c9bc0=_0x5f3337(0xd5);}return _0x4c9bc0;};getTimeOfDay();const showGreeting=()=>{const _0x2603cb=_0x1e12b3,_0x465e96=getTimeOfDay();greeting[_0x2603cb(0xb1)]=_0x2603cb(0x117)+_0x465e96+',';},showTime=()=>{const _0x2818da=_0x1e12b3,_0x3a9bba=new Date(),_0x5c7ed6=_0x3a9bba[_0x2818da(0xdc)]();time['textContent']=_0x5c7ed6,showDate(),showGreeting(),setTimeout(showTime,0x3e8);};showTime();const setLocalStorage=()=>{const _0x1449ba=_0x1e12b3;localStorage[_0x1449ba(0xf0)](_0x1449ba(0xf9),userName[_0x1449ba(0x110)]),localStorage['setItem'](_0x1449ba(0x104),city[_0x1449ba(0x110)]);};window[_0x1e12b3(0x10d)]('beforeunload',setLocalStorage);const getLocalStorage=()=>{const _0x2fbbeb=_0x1e12b3;localStorage[_0x2fbbeb(0xe7)]('name')&&(userName[_0x2fbbeb(0x110)]=localStorage[_0x2fbbeb(0xe7)](_0x2fbbeb(0xf9))),localStorage['getItem'](_0x2fbbeb(0x104))?city['value']=localStorage[_0x2fbbeb(0xe7)]('city'):city['value']=_0x2fbbeb(0xa4);};window['addEventListener'](_0x1e12b3(0x108),getLocalStorage);const getRandomNum=()=>{const _0x4627b3=_0x1e12b3;randomNum=Math[_0x4627b3(0xc7)](Math['random']()*(0x15-0x1))+0x1;};getRandomNum();const setBg=()=>{const _0x4ccf99=_0x1e12b3,_0x50d83e=getTimeOfDay(),_0x1a1681=randomNum,_0x3e8a2f=new Image();_0x3e8a2f[_0x4ccf99(0xfb)]='https://raw.githubusercontent.com/wee-owl/stage1-tasks/assets/images/'+_0x50d83e+'/'+_0x1a1681[_0x4ccf99(0xdf)]()['padStart'](0x2,'0')+_0x4ccf99(0xe5),_0x3e8a2f[_0x4ccf99(0x115)]=()=>{const _0x2d46c6=_0x4ccf99;body[_0x2d46c6(0xaf)][_0x2d46c6(0xe8)]=_0x2d46c6(0xec)+_0x3e8a2f[_0x2d46c6(0xfb)]+')';};};setBg();const getSlideNext=()=>{randomNum++;if(randomNum>0x14)randomNum=0x1;setBg();};slideNext[_0x1e12b3(0x10d)]('click',getSlideNext);const getSlidePrev=()=>{randomNum--;if(randomNum<0x1)randomNum=0x14;setBg();};slidePrev[_0x1e12b3(0x10d)](_0x1e12b3(0xe0),getSlidePrev);async function getWeather(){const _0x5ed601=_0x1e12b3,_0x584d36=function(){let _0x555780=!![];return function(_0x266fe7,_0x5f0e07){const _0x2a4acb=_0x555780?function(){const _0x1c1da5=_0x1966;if(_0x5f0e07){const _0x1212f5=_0x5f0e07[_0x1c1da5(0xef)](_0x266fe7,arguments);return _0x5f0e07=null,_0x1212f5;}}:function(){};return _0x555780=![],_0x2a4acb;};}(),_0x52c30e=_0x584d36(this,function(){const _0x29df25=function(){const _0x52df7b=_0x1966,_0x3891f2=_0x29df25['constructor'](_0x52df7b(0x105))()['constructor'](_0x52df7b(0xd3));return!_0x3891f2[_0x52df7b(0xa5)](_0x52c30e);};return _0x29df25();});_0x52c30e();const _0x4ebe9a=function(){let _0x14925a=!![];return function(_0x4d94e1,_0x23bb31){const _0x5c831a=_0x14925a?function(){const _0x111631=_0x1966;if(_0x23bb31){const _0x457132=_0x23bb31[_0x111631(0xef)](_0x4d94e1,arguments);return _0x23bb31=null,_0x457132;}}:function(){};return _0x14925a=![],_0x5c831a;};}(),_0x276006=_0x4ebe9a(this,function(){const _0x479775=_0x1966,_0x52c0fd=function(){const _0x55c277=_0x1966;let _0x335045;try{_0x335045=Function(_0x55c277(0xb8)+_0x55c277(0xd8)+');')();}catch(_0x3026b9){_0x335045=window;}return _0x335045;},_0x2d6321=_0x52c0fd(),_0x3df929=_0x2d6321[_0x479775(0x100)]=_0x2d6321[_0x479775(0x100)]||{},_0x46297b=['log',_0x479775(0xed),_0x479775(0x10f),_0x479775(0xcc),'exception',_0x479775(0xf5),_0x479775(0xca)];for(let _0x282870=0x0;_0x282870<_0x46297b[_0x479775(0xa6)];_0x282870++){const _0x54b3bf=_0x4ebe9a[_0x479775(0xb9)][_0x479775(0xc6)][_0x479775(0xeb)](_0x4ebe9a),_0x48deea=_0x46297b[_0x282870],_0x2ac26f=_0x3df929[_0x48deea]||_0x54b3bf;_0x54b3bf[_0x479775(0xfa)]=_0x4ebe9a[_0x479775(0xeb)](_0x4ebe9a),_0x54b3bf['toString']=_0x2ac26f[_0x479775(0xdf)][_0x479775(0xeb)](_0x2ac26f),_0x3df929[_0x48deea]=_0x54b3bf;}});_0x276006(),city[_0x5ed601(0x110)]=localStorage[_0x5ed601(0xe7)](_0x5ed601(0x104));const _0x47a7c6='https://api.openweathermap.org/data/2.5/weather?q='+city[_0x5ed601(0x110)]+_0x5ed601(0xe9),_0x40a3d6=await fetch(_0x47a7c6),_0x456599=await _0x40a3d6[_0x5ed601(0xac)]();_0x456599['cod']===_0x5ed601(0x112)||_0x456599[_0x5ed601(0xd6)]===_0x5ed601(0xf3)?(temperature['textContent']='',weatherDescription[_0x5ed601(0xb1)]='',wind[_0x5ed601(0xb1)]='',humidity[_0x5ed601(0xb1)]='',error[_0x5ed601(0xb1)]=_0x456599[_0x5ed601(0xb3)]):(weatherIcon[_0x5ed601(0x116)][_0x5ed601(0xea)](_0x5ed601(0xbb)+_0x456599[_0x5ed601(0xcf)][0x0]['id']),temperature['textContent']=Math[_0x5ed601(0xc7)](_0x456599[_0x5ed601(0xae)]['temp'])+'°C',weatherDescription['textContent']=_0x456599['weather'][0x0][_0x5ed601(0xee)],wind['textContent']=_0x5ed601(0xab)+Math[_0x5ed601(0xc7)](_0x456599['wind'][_0x5ed601(0xb6)])+'\x20m/s',humidity[_0x5ed601(0xb1)]='Humidity:\x20'+_0x456599['main'][_0x5ed601(0x10a)]+'%',error[_0x5ed601(0xb1)]='');}getWeather(),city[_0x1e12b3(0xe2)]=()=>{const _0x7e77d1=_0x1e12b3;localStorage[_0x7e77d1(0xf0)](_0x7e77d1(0x104),city[_0x7e77d1(0x110)]),weatherIcon[_0x7e77d1(0x101)]=_0x7e77d1(0xbf),getWeather();};async function getQuotes(){const _0x372ac1=_0x1e12b3,_0x1879bd=_0x372ac1(0xf1),_0x46d601=await fetch(_0x1879bd),_0x27c418=await _0x46d601[_0x372ac1(0xac)](),_0x3bfddc=Math['floor'](Math[_0x372ac1(0xd0)]()*(_0x27c418[_0x372ac1(0xa6)]-0x0))+0x0;quote['textContent']=_0x27c418[_0x3bfddc][_0x372ac1(0xfd)],author[_0x372ac1(0xb1)]=_0x27c418[_0x3bfddc]['author'];}getQuotes(),changeQuote[_0x1e12b3(0x10d)](_0x1e12b3(0xe0),getQuotes);const playList=[{'title':_0x1e12b3(0xe1),'src':'/Momentum/assets/sounds/Birds.mp3'},{'title':_0x1e12b3(0xc0),'src':_0x1e12b3(0xc3)},{'title':_0x1e12b3(0x10c),'src':_0x1e12b3(0xb4)},{'title':'Tropic','src':_0x1e12b3(0xd1)}],buildPlayList=()=>{const _0x205ca2=_0x1e12b3;playList[_0x205ca2(0xf7)](_0x378304=>{const _0x2b00ce=_0x205ca2,_0x11fa11=document[_0x2b00ce(0xbc)]('li');playListContainer[_0x2b00ce(0x103)](_0x11fa11);const _0x166342=document['createElement']('div');_0x166342[_0x2b00ce(0x116)]['add']('play-item'),_0x11fa11[_0x2b00ce(0x103)](_0x166342);const _0x1e0356=document[_0x2b00ce(0xbc)](_0x2b00ce(0xc8));_0x1e0356[_0x2b00ce(0xb1)]=_0x378304[_0x2b00ce(0x118)],_0x166342[_0x2b00ce(0x103)](_0x1e0356);});};buildPlayList();const audio=new Audio(),playItem=document['querySelectorAll'](_0x1e12b3(0xe6)),playAudio=()=>{const _0x1c8d9b=_0x1e12b3;!isPlay?(audio[_0x1c8d9b(0xfb)]=playList[playNum]['src'],isPlay=!![],playButton[_0x1c8d9b(0x116)][_0x1c8d9b(0xea)](_0x1c8d9b(0xda)),playItem[_0x1c8d9b(0xf7)](_0x30a5b2=>{const _0x33f7ab=_0x1c8d9b;_0x30a5b2['classList'][_0x33f7ab(0xff)](_0x33f7ab(0xce));}),playItem[playNum]['classList'][_0x1c8d9b(0xea)](_0x1c8d9b(0xce)),audio[_0x1c8d9b(0xc1)]()):(isPlay=![],playButton[_0x1c8d9b(0x116)][_0x1c8d9b(0xff)]('pause'),audio['pause']());};playButton[_0x1e12b3(0x10d)](_0x1e12b3(0xe0),playAudio),playItem[_0x1e12b3(0xf7)]((_0x41c6ff,_0x23da40)=>{const _0x2dcfe5=_0x1e12b3;_0x41c6ff['addEventListener'](_0x2dcfe5(0xe0),()=>{playNum=_0x23da40,isPlay=![];});});const playNext=()=>{const _0x1ba662=_0x1e12b3;playNum+=0x1;if(playNum>playList[_0x1ba662(0xa6)]-0x1)playNum=0x0;isPlay=![],playAudio();};playNextButton['addEventListener'](_0x1e12b3(0xe0),playNext);const playPrev=()=>{const _0x220524=_0x1e12b3;playNum-=0x1;if(playNum<0x0)playNum=playList[_0x220524(0xa6)]-0x1;isPlay=![],playAudio();};playPrevButton[_0x1e12b3(0x10d)](_0x1e12b3(0xe0),playPrev),audio[_0x1e12b3(0x10d)]('ended',playNext);const updateProgress=_0x12854e=>{const _0x1a2207=_0x1e12b3,{duration:_0x4b431b,currentTime:_0x3ac935}=_0x12854e[_0x1a2207(0xcb)],_0x29f8c1=_0x3ac935/_0x4b431b*0x64;progress[playNum]['style'][_0x1a2207(0xdb)]=_0x29f8c1+'%';},setProgress=_0x34bfd2=>{const _0x5126b2=_0x1e12b3,_0x342cc4=progressContainer[playNum][_0x5126b2(0xd7)],_0x24be7b=_0x34bfd2[_0x5126b2(0xc4)],_0x59f4fb=audio[_0x5126b2(0xad)];audio[_0x5126b2(0xa8)]=_0x24be7b/_0x342cc4*_0x59f4fb;};audio[_0x1e12b3(0x10d)](_0x1e12b3(0xe3),updateProgress),progressContainer[_0x1e12b3(0xf7)](_0x5145de=>{const _0x3f1beb=_0x1e12b3;_0x5145de[_0x3f1beb(0x10d)]('click',setProgress);});const getCurrTime=()=>{const _0x6cf54f=_0x1e12b3,_0x46bdec=audio[_0x6cf54f(0xa8)];let _0x3a0e8c,_0x1d3add=_0x46bdec===null?0x0:Math[_0x6cf54f(0xc7)](_0x46bdec/0x3c);_0x1d3add=_0x1d3add<0xa?'0'+_0x1d3add:_0x1d3add;const _0x53ed45=_0xd553bf=>{const _0x1f5531=_0x6cf54f;if(Math[_0x1f5531(0xc7)](_0xd553bf)>=0x3c)for(let _0x480e47=0x1;_0x480e47<=0x3c;_0x480e47++){Math[_0x1f5531(0xc7)](_0xd553bf)>=0x3c*_0x480e47&&Math[_0x1f5531(0xc7)](_0xd553bf)<0x3c*(_0x480e47+0x1)&&(_0x3a0e8c=Math['floor'](_0xd553bf)-0x3c*_0x480e47,_0x3a0e8c=_0x3a0e8c<0xa?'0'+_0x3a0e8c:_0x3a0e8c);}else _0x3a0e8c=Math[_0x1f5531(0xc7)](_0xd553bf),_0x3a0e8c=_0x3a0e8c<0xa?'0'+_0x3a0e8c:_0x3a0e8c;};_0x53ed45(_0x46bdec),times[_0x6cf54f(0xf7)]((_0x463786,_0x6c14ee)=>{const _0x4dcca9=_0x6cf54f;_0x463786[_0x4dcca9(0xb1)]=playList[_0x6c14ee]['duration'];}),times[playNum]['textContent']=_0x1d3add+':'+_0x3a0e8c;};audio[_0x1e12b3(0x10d)](_0x1e12b3(0xe3),getCurrTime);

var langs = ["en", "zh","tc"];
var currentlang = 'en';

if(document.location.hostname.endsWith(".cn")){
  currentlang = 'zh';
}

var p = document.location.pathname;
var file404;
var p1 = p.toLowerCase();

var isBrandPage = false;

if(p1.startsWith('/brands/')){
  isBrandPage = true;
  if(p1.indexOf('/zh/')>-1 || p1.endsWith('/zh')) currentlang = 'zh';
  if(p1.indexOf('/tc/')>-1 || p1.endsWith('/tc')) currentlang = 'tc';
}

if(isBrandPage) {

  if(langs.indexOf(currentlang) > -1) {
    file404 = '/404/'+currentlang+'/?redirect='+p;
  }
  else {
    file404 = '/404/en/?redirect='+p;
  }

}
else {
  var isBlogPage = p1.startsWith('/blog/');
  if(isBlogPage) {
    for(var i=0;i<langs.length;i++) {
      if (p1.endsWith('-'+langs[i]+'.html')) {
        currentlang = langs[i];
        break;
      }
    }
  }
  else {
    for(var i=0;i<langs.length;i++) {
      if (p1.startsWith('/'+langs[i]+'/')) {
        currentlang = langs[i];
        break;
      }
    }
  }

  file404 = '/'+currentlang+'/404/?redirect='+p;

}

if(document.location.pathname.startsWith("/assets/images/")) {
  let fileName = document.location.pathname.toLowerCase().replace(/.*(\/|\\)/, "");
  if(fileName.endsWith('.jpg') 
    || fileName.endsWith('.png')
    || fileName.endsWith('.gif')
    || fileName.endsWith('.svg')
    ) {
    file404 = '/assets/images/404.svg';
  }
}

location.replace(file404);


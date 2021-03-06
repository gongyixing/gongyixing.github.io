var langs = ["en", "zh","tc"];
var currentlang = 'en';

if(document.location.hostname.endsWith(".cn")){
  currentlang = 'zh';
}

var p = document.location.pathname;
var file404;
var p1 = p.toLowerCase();

var isBrandPage = false;

if(p1.startsWith('/playment/')){
  isBrandPage = true;
  if(p1.startsWith('/playment/zh/'))
  {
    currentlang = 'zh';
  }
}
else if(p1.startsWith('/iaromatherapy/')) {
  isBrandPage = true;
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

// console.log(file404);

location.replace(file404);


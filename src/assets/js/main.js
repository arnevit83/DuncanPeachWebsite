/*! Async Google Analitics loading * !*/
!function(d,c,l,u,g,s){1!==parseInt(l.msDoNotTrack||d.doNotTrack||l.doNotTrack,10)&&d.addEventListener("load",function(){var e=(new Date).getTime();d.galite=d.galite||{};var t,i=new XMLHttpRequest,o="https://www.google-analytics.com/collect?cid="+(c.uid=c.uid||Math.random()+"."+Math.random())+"&v=1&tid="+galite.UA+"&dl="+s(g.location.href)+"&ul=en-us&de=UTF-8",n=function(e){var t,n="";for(t in e){if(void 0===e[t])return!1;n+=s(e[t])}return n},a={dt:[g.title],sd:[u.colorDepth,"-bit"],sr:[u.availHeight,"x",u.availWidth],vp:[innerWidth,"x",innerHeight],dr:[g.referrer]};for(t in a){var r=t+"="+n(a[t]);r&&(o+="&"+r)}n=function(e,t){var n,a="";for(n in t)a="&"+n+"="+s(t[n]);return function(){var t=o+a+(galite.anonymizeIp?"&aip=1":"")+"&t="+s(e)+"&z="+(new Date).getTime();if(l.sendBeacon)l.sendBeacon(t);else try{i.open("GET",t,!1),i.send()}catch(e){(new Image).src=t}}},setTimeout(n("pageview",null),100),d.addEventListener("unload",n("timing",{utc:"JS Dependencies",utv:"unload",utt:(new Date).getTime()-e}))})}(window,localStorage,navigator,screen,document,encodeURIComponent);var galite=galite||{};galite.UA="UA-17015176-6";
/*! modernizr 3.6.0 (Custom Build) | MIT * !*/
!function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?"":"no-")+l.join("-"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),"undefined"!=typeof t)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);
/*! Instagram Feed JS * !*/
"function"!=typeof Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),function(t,e,a,s){var i={API_URL:"https://api.instagram.com/v1",initialize:function(e,a){this.elem=a,this.$elem=t(a),this.accessToken=t.fn.spectragram.accessData.accessToken,this.options=t.extend({},t.fn.spectragram.options,e),this.endpoints=this.setEndpoints(),this.messages={defaultImageAltText:"Instagram Photo related with "+this.options.query,notFound:"This user account is private or doesn't have any photos."}},setEndpoints:function(){return{usersSelf:"/users/self/?access_token="+this.accessToken,usersMediaRecent:"/users/self/media/recent/?&count="+this.options.max+"&access_token="+this.accessToken,tagsMediaRecent:"/tags/"+this.options.query+"/media/recent?&count="+this.options.max+"&access_token="+this.accessToken}},getPhotos:function(e){var a=this;a.fetch(e).done(function(e){var s=a.options.query||"User";e.data&&e.data.length?a.display(e):t.error("Spectragram.js - Error: "+s+" does not have photos.")})},getUserFeed:function(){this.getPhotos(this.endpoints.usersMediaRecent)},getRecentTagged:function(){t.error("This endpoint has been retired")},fetch:function(e){var a=this.API_URL+e;return t.ajax({type:"GET",dataType:"jsonp",cache:!1,url:a})},display:function(e){var a,s,i,n,o,r,c,h,d,p=[];if(i=0===t(this.options.wrapEachWith).length,void 0===e.data||200!==e.meta.code||0===e.data.length)i?this.$elem.append(this.messages.notFound):this.$elem.append(t(this.options.wrapEachWith).append(this.messages.notFound));else{c=this.options.max>=e.data.length?e.data.length:this.options.max,h=this.options.size;for(var u=0;u<c;u++)"small"===h?(d=e.data[u].images.thumbnail.url,o=e.data[u].images.thumbnail.height,r=e.data[u].images.thumbnail.width):"medium"===h?(d=e.data[u].images.low_resolution.url,o=e.data[u].images.low_resolution.height,r=e.data[u].images.low_resolution.width):(d=e.data[u].images.standard_resolution.url,o=e.data[u].images.standard_resolution.height,r=e.data[u].images.standard_resolution.width),n=null!==e.data[u].caption?t("<span>").text(e.data[u].caption.text).html():this.messages.defaultImageAltText,s=t("<img>",{alt:n,attr:{height:o,width:r},src:d}),a=t("<a>",{href:e.data[u].link,target:"_blank",title:n}).append(s),i?p.push(a):p.push(t(this.options.wrapEachWith).append(a));this.$elem.append(p)}"function"==typeof this.options.complete&&this.options.complete.call(this)}};jQuery.fn.spectragram=function(e,a){jQuery.fn.spectragram.accessData.accessToken?this.each(function(){var s=Object.create(i);if(s.initialize(a,this),s[e])return s[e](this);t.error("Method "+e+" does not exist on jQuery.spectragram")}):t.error("You must define an accessToken on jQuery.spectragram")},jQuery.fn.spectragram.options={complete:null,max:20,query:"instagram",size:"medium",wrapEachWith:"<li></li>"},jQuery.fn.spectragram.accessData={accessToken:null}}(jQuery,window,document);
jQuery.fn.spectragram.accessData = {
	accessToken: '25119363421.1677ed0.e94678b9722d45fba315486e904cf765'
};
/*! Custom * !*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function() {
 


    $('.ScrollUp').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: 0
        },  'slow');
        return false;
     
    });
    $('.HomeScoll').click(function() {
        $('html, body').animate({
            scrollTop: $(".secondslider").offset().top
        }, 'slow');
        return false;
    });
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 10) {
            $(".HomeScoll").fadeOut(500);
           
        } else {
            $('.HomeScoll').fadeIn();
        };
        if (y > 300) {
            $('.ScrollUp').fadeIn();
        } else {
            $('.ScrollUp').fadeOut();
        }
    });
    $('.ScrollUp').hover(
        function() {
            $(this).addClass('shadow')
        },
        function() {
            $(this).removeClass('shadow')
        }
    )
})
$(document).ready(function() {
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
});
setTimeout(function(){ 
    
    $(".app-loading").fadeOut();
    // $('.gallery-feed').spectragram('getUserFeed', {
    //     complete: galleryfeedkFunc(),
    //     max: 8,
    //     size: "small",
    //     wrapEachWith: "<div class='IGFeed'></div>"
    //   });


},500);

    window.setTimeout(function() {
        let tf = new Tinyfade(
        
            ".tinyfade", 
    
            5000,       
    
            1000    
          );
   
    }, 4000);

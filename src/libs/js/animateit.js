/*!Animate it*/
!function(a){var t,e=[],i=!1,n=!1,d={interval:250,force_process:!1},o=a(window);function r(){n=!1;for(var i=0;i<e.length;i++){var d=a(e[i]).filter(function(){return a(this).is(":appeared")});if(d.trigger("appear",[d]),t){var o=t.not(d);o.trigger("disappear",[o])}t=d}}a.expr[":"].appeared=function(t){var e=a(t);if(!e.is(":visible"))return!1;var i=o.scrollLeft(),n=o.scrollTop(),d=e.offset(),r=d.left,s=d.top;return s+e.height()>=n&&s-(e.data("appear-top-offset")||0)<=n+o.height()&&r+e.width()>=i&&r-(e.data("appear-left-offset")||0)<=i+o.width()},a.fn.extend({appear:function(t){var o=a.extend({},d,t||{}),s=this.selector||this;if(!i){var l=function(){n||(n=!0,setTimeout(r,o.interval))};a(window).scroll(l).resize(l),i=!0}return o.force_process&&setTimeout(r,o.interval),e.push(s),a(s)}}),a.extend({force_appear:function(){return!!i&&(r(),!0)}})}(jQuery),function(a){var t={},e=Array.prototype.slice;function i(i){var n,d=this,o={},r=i?a.fn:a,s=arguments,l=4,f=s[1],u=s[2],c=s[3];function p(){i?n.removeData(i):f&&delete t[f]}function $(){o.id=setTimeout(function(){o.fn()},u)}if("string"!=typeof f&&(l--,f=i=0,u=s[1],c=s[2]),i?(n=d.eq(0)).data(i,o=n.data(i)||{}):f&&(o=t[f]||(t[f]={})),o.id&&clearTimeout(o.id),delete o.id,c)o.fn=function(a){"string"==typeof c&&(c=r[c]),!0!==c.apply(d,e.call(s,l))||a?p():$()},$();else{if(o.fn)return void 0===u?p():o.fn(!1===u),!0;p()}}a.doTimeout=function(){return i.apply(window,[0].concat(e.call(arguments)))},a.fn.doTimeout=function(){var a=e.call(arguments),t=i.apply(this,["doTimeout"+a[0]].concat(a));return"number"==typeof a[0]||"number"==typeof a[1]?this:t}}(jQuery),$(".animatedParent").appear(),$(".animatedClick").click(function(){var a=$(this).attr("data-target");if(null!=$(this).attr("data-sequence")){var t=$("."+a+":first").attr("data-id"),e=$("."+a+":last").attr("data-id"),i=t;$("."+a+"[data-id="+i+"]").hasClass("go")?($("."+a+"[data-id="+i+"]").addClass("goAway"),$("."+a+"[data-id="+i+"]").removeClass("go")):($("."+a+"[data-id="+i+"]").addClass("go"),$("."+a+"[data-id="+i+"]").removeClass("goAway")),i++,delay=Number($(this).attr("data-sequence")),$.doTimeout(delay,function(){if(console.log(e),$("."+a+"[data-id="+i+"]").hasClass("go")?($("."+a+"[data-id="+i+"]").addClass("goAway"),$("."+a+"[data-id="+i+"]").removeClass("go")):($("."+a+"[data-id="+i+"]").addClass("go"),$("."+a+"[data-id="+i+"]").removeClass("goAway")),++i<=e)return!0})}else $("."+a).hasClass("go")?($("."+a).addClass("goAway"),$("."+a).removeClass("go")):($("."+a).addClass("go"),$("."+a).removeClass("goAway"))}),$(document.body).on("appear",".animatedParent",function(a,t){var e=$(this).find(".animated"),i=$(this);if(null!=i.attr("data-sequence")){var n=$(this).find(".animated:first").attr("data-id"),d=$(this).find(".animated:last").attr("data-id");$(i).find(".animated[data-id="+n+"]").addClass("go"),n++,delay=Number(i.attr("data-sequence")),$.doTimeout(delay,function(){if($(i).find(".animated[data-id="+n+"]").addClass("go"),++n<=d)return!0})}else e.addClass("go")}),$(document.body).on("disappear",".animatedParent",function(a,t){$(this).hasClass("animateOnce")||$(this).find(".animated").removeClass("go")}),$(window).on("load",function(){$.force_appear()});


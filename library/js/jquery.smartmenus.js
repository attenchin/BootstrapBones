(function(c){function x(a){if(w||a)w&&a&&(c(document).unbind(".smartmenus_mouse"),w=!1);else{var b=!0,e=null;c(document).bind(r([["mousemove",function(a){var f={x:a.pageX,y:a.pageY,timeStamp:(new Date).getTime()};if(e){var g=Math.abs(e.x-f.x),h=Math.abs(e.y-f.y);if((0<g||0<h)&&2>=g&&2>=h&&300>=f.timeStamp-e.timeStamp&&(m=!0,b)){var k=c(a.target).closest("a");k.is("a")&&c.each(n,function(){if(c.contains(this.$root[0],k[0]))return this.itemEnter({currentTarget:k[0]}),!1});b=!1}}e=f}],["ontouchstart"in
window?"touchstart":"pointerover pointermove pointerout MSPointerOver MSPointerMove MSPointerOut",function(a){/^(4|mouse)$/.test(a.originalEvent.pointerType)||(m=!1)}]],".smartmenus_mouse"));w=!0}}function r(a,b){b||(b="");var e={};c.each(a,function(a,c){e[c[0].split(" ").join(b+" ")+b]=c[1]});return e}var n=[],y=!!window.createPopup,m=!1,w=!1;c.SmartMenus=function(a,b){this.$root=c(a);this.opts=b;this.rootId="";this.$subArrow=null;this.subMenus=[];this.activatedItems=[];this.visibleSubMenus=[];this.scrollTimeout=
this.hideTimeout=this.showTimeout=0;this.clickActivated=!1;this.zIndexInc=0;this.$firstSub=this.$firstLink=null;this.disabled=!1;this.$disableOverlay=null;this.isTouchScrolling=!1;this.init()};c.extend(c.SmartMenus,{hideAll:function(){c.each(n,function(){this.menuHideAll()})},destroy:function(){for(;n.length;)n[0].destroy();x(!0)},prototype:{init:function(a){var b=this;a||(n.push(this),this.rootId=((new Date).getTime()+Math.random()+"").replace(/\D/g,""),this.$root.hasClass("sm-rtl")&&(this.opts.rightToLeftSubMenus=
!0),a=".smartmenus",this.$root.data("smartmenus",this).attr("data-smartmenus-id",this.rootId).dataSM("level",1).bind(r([["mouseover focusin",c.proxy(this.rootOver,this)],["mouseout focusout",c.proxy(this.rootOut,this)]],a)).delegate("a",r([["mouseenter",c.proxy(this.itemEnter,this)],["mouseleave",c.proxy(this.itemLeave,this)],["mousedown",c.proxy(this.itemDown,this)],["focus",c.proxy(this.itemFocus,this)],["blur",c.proxy(this.itemBlur,this)],["click",c.proxy(this.itemClick,this)],["touchend",c.proxy(this.itemTouchEnd,
this)]],a)),a+=this.rootId,this.opts.hideOnClick&&c(document).bind(r([["touchstart",c.proxy(this.docTouchStart,this)],["touchmove",c.proxy(this.docTouchMove,this)],["touchend",c.proxy(this.docTouchEnd,this)],["click",c.proxy(this.docClick,this)]],a)),c(window).bind(r([["resize orientationchange",c.proxy(this.winResize,this)]],a)),this.opts.subIndicators&&(this.$subArrow=c("<span/>").addClass("sub-arrow"),this.opts.subIndicatorsText&&this.$subArrow.html(this.opts.subIndicatorsText)),x());this.$firstSub=
this.$root.find("ul").each(function(){b.menuInit(c(this))}).eq(0);this.$firstLink=this.$root.find("a").eq(0);if(this.opts.markCurrentItem){var e=/(index|default)\.[^#\?\/]*/i,d=window.location.href.replace(e,""),f=d.replace(/#.*/,"");this.$root.find("a").each(function(){var a=this.href.replace(e,""),h=c(this);if(a==d||a==f)h.addClass("current"),b.opts.markCurrentTree&&h.parent().parentsUntil("[data-smartmenus-id]","li").children("a").addClass("current")})}},destroy:function(){this.menuHideAll();var a=
".smartmenus";this.$root.removeData("smartmenus").removeAttr("data-smartmenus-id").removeDataSM("level").unbind(a).undelegate(a);a+=this.rootId;c(document).unbind(a);c(window).unbind(a);this.opts.subIndicators&&(this.$subArrow=null);var b=this;c.each(this.subMenus,function(){this.hasClass("mega-menu")&&this.find("ul").removeDataSM("in-mega");this.dataSM("shown-before")&&((b.opts.subMenusMinWidth||b.opts.subMenusMaxWidth)&&this.css({width:"",minWidth:"",maxWidth:""}).removeClass("sm-nowrap"),this.dataSM("scroll-arrows")&&
this.dataSM("scroll-arrows").remove(),this.css({zIndex:"",top:"",left:"",marginLeft:"",marginTop:"",display:""}));b.opts.subIndicators&&this.dataSM("parent-a").removeClass("has-submenu").children("span.sub-arrow").remove();this.removeDataSM("shown-before").removeDataSM("ie-shim").removeDataSM("scroll-arrows").removeDataSM("parent-a").removeDataSM("level").removeDataSM("beforefirstshowfired").parent().removeDataSM("sub")});this.opts.markCurrentItem&&this.$root.find("a.current").removeClass("current");
this.$firstSub=this.$firstLink=this.$root=null;this.$disableOverlay&&(this.$disableOverlay.remove(),this.$disableOverlay=null);n.splice(c.inArray(this,n),1)},disable:function(a){this.disabled||(this.menuHideAll(),a||this.opts.isPopup||!this.$root.is(":visible")||(a=this.$root.offset(),this.$disableOverlay=c('<div class="sm-jquery-disable-overlay"/>').css({position:"absolute",top:a.top,left:a.left,width:this.$root.outerWidth(),height:this.$root.outerHeight(),zIndex:this.getStartZIndex(!0),opacity:0}).appendTo(document.body)),
this.disabled=!0)},docClick:function(a){this.isTouchScrolling?this.isTouchScrolling=!1:(this.visibleSubMenus.length&&!c.contains(this.$root[0],a.target)||c(a.target).is("a"))&&this.menuHideAll()},docTouchEnd:function(a){if(this.lastTouch){if(!(!this.visibleSubMenus.length||void 0!==this.lastTouch.x2&&this.lastTouch.x1!=this.lastTouch.x2||void 0!==this.lastTouch.y2&&this.lastTouch.y1!=this.lastTouch.y2||this.lastTouch.target&&c.contains(this.$root[0],this.lastTouch.target))){this.hideTimeout&&(clearTimeout(this.hideTimeout),
this.hideTimeout=0);var b=this;this.hideTimeout=setTimeout(function(){b.menuHideAll()},350)}this.lastTouch=null}},docTouchMove:function(a){this.lastTouch&&(a=a.originalEvent.touches[0],this.lastTouch.x2=a.pageX,this.lastTouch.y2=a.pageY)},docTouchStart:function(a){a=a.originalEvent.touches[0];this.lastTouch={x1:a.pageX,y1:a.pageY,target:a.target}},enable:function(){this.disabled&&(this.$disableOverlay&&(this.$disableOverlay.remove(),this.$disableOverlay=null),this.disabled=!1)},getClosestMenu:function(a){for(a=
c(a).closest("ul");a.dataSM("in-mega");)a=a.parent().closest("ul");return a[0]||null},getHeight:function(a){return this.getOffset(a,!0)},getOffset:function(a,b){var c;"none"==a.css("display")&&(c={position:a[0].style.position,visibility:a[0].style.visibility},a.css({position:"absolute",visibility:"hidden"}).show());var d=a[0].getBoundingClientRect&&a[0].getBoundingClientRect();(d=d&&(b?d.height||d.bottom-d.top:d.width||d.right-d.left))||0===d||(d=b?a[0].offsetHeight:a[0].offsetWidth);c&&a.hide().css(c);
return d},getStartZIndex:function(a){var b=parseInt(this[a?"$root":"$firstSub"].css("z-index"));!a&&isNaN(b)&&(b=parseInt(this.$root.css("z-index")));return isNaN(b)?1:b},getTouchPoint:function(a){return a.touches&&a.touches[0]||a.changedTouches&&a.changedTouches[0]||a},getViewport:function(a){var b=a?"Height":"Width";a=document.documentElement["client"+b];(b=window["inner"+b])&&(a=Math.min(a,b));return a},getViewportHeight:function(){return this.getViewport(!0)},getViewportWidth:function(){return this.getViewport()},
getWidth:function(a){return this.getOffset(a)},handleEvents:function(){return!this.disabled&&this.isCSSOn()},handleItemEvents:function(a){return this.handleEvents()&&!this.isLinkInMegaMenu(a)},isCollapsible:function(){return"static"==this.$firstSub.css("position")},isCSSOn:function(){return"block"==this.$firstLink.css("display")},isFixed:function(){var a="fixed"==this.$root.css("position");a||this.$root.parentsUntil("body").each(function(){if("fixed"==c(this).css("position"))return a=!0,!1});return a},
isLinkInMegaMenu:function(a){return!a.parent().parent().dataSM("level")},isTouchMode:function(){return!m||this.isCollapsible()},itemActivate:function(a){var b=a.parent(),e=b.parent(),d=e.dataSM("level");if(1<d&&(!this.activatedItems[d-2]||this.activatedItems[d-2][0]!=e.dataSM("parent-a")[0])){var f=this;c(e.parentsUntil("[data-smartmenus-id]","ul").get().reverse()).add(e).each(function(){f.itemActivate(c(this).dataSM("parent-a"))})}this.visibleSubMenus.length>d&&this.menuHideSubMenus(this.activatedItems[d-
1]&&this.activatedItems[d-1][0]==a[0]?d:d-1);this.activatedItems[d-1]=a;this.visibleSubMenus[d-1]=e;!1!==this.$root.triggerHandler("activate.smapi",a[0])&&(a=b.dataSM("sub"))&&(this.isTouchMode()||!this.opts.showOnClick||this.clickActivated)&&this.menuShow(a)},itemBlur:function(a){a=c(a.currentTarget);this.handleItemEvents(a)&&this.$root.triggerHandler("blur.smapi",a[0])},itemClick:function(a){if(this.isTouchScrolling)return this.isTouchScrolling=!1,a.stopPropagation(),!1;a=c(a.currentTarget);if(this.handleItemEvents(a)){a.removeDataSM("mousedown");
if(!1===this.$root.triggerHandler("click.smapi",a[0]))return!1;var b=a.parent().dataSM("sub");if(this.isTouchMode()){if(a.dataSM("href")&&a.attr("href",a.dataSM("href")).removeDataSM("href"),b&&(!b.dataSM("shown-before")||!b.is(":visible"))&&(this.itemActivate(a),b.is(":visible")))return!1}else if(this.opts.showOnClick&&1==a.parent().parent().dataSM("level")&&b)return this.clickActivated=!0,this.menuShow(b),!1;if(a.hasClass("disabled")||!1===this.$root.triggerHandler("select.smapi",a[0]))return!1}},
itemDown:function(a){a=c(a.currentTarget);this.handleItemEvents(a)&&a.dataSM("mousedown",!0)},itemEnter:function(a){var b=c(a.currentTarget);if(this.handleItemEvents(b)){if(!this.isTouchMode()){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=0);var e=this;this.showTimeout=setTimeout(function(){e.itemActivate(b)},this.opts.showOnClick&&1==b.parent().parent().dataSM("level")?1:this.opts.showTimeout)}this.$root.triggerHandler("mouseenter.smapi",b[0])}},itemFocus:function(a){a=c(a.currentTarget);
this.handleItemEvents(a)&&(this.isTouchMode()&&a.dataSM("mousedown")||this.activatedItems.length&&this.activatedItems[this.activatedItems.length-1][0]==a[0]||this.itemActivate(a),this.$root.triggerHandler("focus.smapi",a[0]))},itemLeave:function(a){a=c(a.currentTarget);this.handleItemEvents(a)&&(this.isTouchMode()||(a[0].blur&&a[0].blur(),this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=0)),a.removeDataSM("mousedown"),this.$root.triggerHandler("mouseleave.smapi",a[0]))},itemTouchEnd:function(a){a=
c(a.currentTarget);if(this.handleItemEvents(a)){var b=a.parent().dataSM("sub");"#"===a.attr("href").charAt(0)||!b||b.dataSM("shown-before")&&b.is(":visible")||(a.dataSM("href",a.attr("href")),a.attr("href","#"))}},menuFixLayout:function(a){a.dataSM("shown-before")||a.hide().dataSM("shown-before",!0)},menuHide:function(a){if(!1!==this.$root.triggerHandler("beforehide.smapi",a[0])&&(a.stop(!0,!0),a.is(":visible"))){var b=function(){a.css("z-index","")};this.isCollapsible()?this.opts.collapsibleHideFunction?
this.opts.collapsibleHideFunction.call(this,a,b):a.hide(this.opts.collapsibleHideDuration,b):this.opts.hideFunction?this.opts.hideFunction.call(this,a,b):a.hide(this.opts.hideDuration,b);a.dataSM("ie-shim")&&a.dataSM("ie-shim").remove();a.dataSM("scroll")&&(this.menuScrollStop(a),a.css({"touch-action":"","-ms-touch-action":""}).unbind(".smartmenus_scroll").removeDataSM("scroll").dataSM("scroll-arrows").hide());a.dataSM("parent-a").removeClass("highlighted");b=a.dataSM("level");this.activatedItems.splice(b-
1,1);this.visibleSubMenus.splice(b-1,1);this.$root.triggerHandler("hide.smapi",a[0])}},menuHideAll:function(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=0);this.menuHideSubMenus();this.opts.isPopup&&(this.$root.stop(!0,!0),this.$root.is(":visible")&&(this.opts.hideFunction?this.opts.hideFunction.call(this,this.$root):this.$root.hide(this.opts.hideDuration),this.$root.dataSM("ie-shim")&&this.$root.dataSM("ie-shim").remove()));this.activatedItems=[];this.visibleSubMenus=[];this.clickActivated=
!1;this.zIndexInc=0},menuHideSubMenus:function(a){a||(a=0);for(var b=this.visibleSubMenus.length-1;b>a;b--)this.menuHide(this.visibleSubMenus[b])},menuIframeShim:function(a){y&&this.opts.overlapControlsInIE&&!a.dataSM("ie-shim")&&a.dataSM("ie-shim",c("<iframe/>").attr({src:"javascript:0",tabindex:-9}).css({position:"absolute",top:"auto",left:"0",opacity:0,border:"0"}))},menuInit:function(a){if(!a.dataSM("in-mega")){this.subMenus.push(a);a.hasClass("mega-menu")&&a.find("ul").dataSM("in-mega",!0);for(var b=
2,c=a[0];(c=c.parentNode.parentNode)!=this.$root[0];)b++;a.dataSM("parent-a",a.prevAll("a").eq(-1)).dataSM("level",b).parent().dataSM("sub",a);if(this.opts.subIndicators)a.dataSM("parent-a").addClass("has-submenu")[this.opts.subIndicatorsPos](this.$subArrow.clone())}},menuPosition:function(a){var b=a.dataSM("parent-a"),e=a.parent().parent(),d=a.dataSM("level"),f=this.getWidth(a),g=this.getHeight(a),h=b.offset(),k=h.left,q=h.top,h=this.getWidth(b),b=this.getHeight(b),p=c(window),m=p.scrollLeft(),p=
p.scrollTop(),n=this.getViewportWidth(),u=this.getViewportHeight(),e=e.hasClass("sm")&&!e.hasClass("sm-vertical"),v=2==d?this.opts.mainMenuSubOffsetX:this.opts.subMenusSubOffsetX,l=2==d?this.opts.mainMenuSubOffsetY:this.opts.subMenusSubOffsetY;e?(d=this.opts.rightToLeftSubMenus?h-f-v:v,l=this.opts.bottomToTopSubMenus?-g-l:b+l):(d=this.opts.rightToLeftSubMenus?v-f:h-v,l=this.opts.bottomToTopSubMenus?b-l-g:l);if(this.opts.keepInViewport&&!this.isCollapsible()){k+=d;q+=l;this.opts.rightToLeftSubMenus&&
k<m?d=e?m-k+d:h-v:!this.opts.rightToLeftSubMenus&&k+f>m+n&&(d=e?m+n-f-k+d:v-f);if(!e)if(g<u&&q+g>p+u)l+=p+u-g-q;else if(g>=u||q<p)l+=p-q;if(e&&(q+g>p+u+.49||q<p)||!e&&g>u+.49){var t=this;a.dataSM("scroll-arrows")||a.dataSM("scroll-arrows",c([c('<span class="scroll-up"><span class="scroll-up-arrow"></span></span>')[0],c('<span class="scroll-down"><span class="scroll-down-arrow"></span></span>')[0]]).bind({mouseenter:function(){a.dataSM("scroll").up=c(this).hasClass("scroll-up");t.menuScroll(a)},mouseleave:function(b){t.menuScrollStop(a);
t.menuScrollOut(a,b)},"mousewheel DOMMouseScroll":function(a){a.preventDefault()}}).insertAfter(a));a.dataSM("scroll",{step:1,itemH:b,subH:g,arrowDownH:this.getHeight(a.dataSM("scroll-arrows").eq(1))}).bind(r([["mouseover",function(b){t.menuScrollOver(a,b)}],["mouseout",function(b){t.menuScrollOut(a,b)}],["mousewheel DOMMouseScroll",function(b){t.menuScrollMousewheel(a,b)}]],".smartmenus_scroll")).dataSM("scroll-arrows").css({top:"auto",left:"0",marginLeft:d+(parseInt(a.css("border-left-width"))||
0),width:f-(parseInt(a.css("border-left-width"))||0)-(parseInt(a.css("border-right-width"))||0),zIndex:a.css("z-index")}).eq(e&&this.opts.bottomToTopSubMenus?0:1).show();this.isFixed()&&a.css({"touch-action":"none","-ms-touch-action":"none"}).bind(r([["ontouchstart"in window?"touchstart touchmove touchend":"pointerdown pointermove pointerup MSPointerDown MSPointerMove MSPointerUp",function(b){t.menuScrollTouch(a,b)}]],".smartmenus_scroll"))}}a.css({top:"auto",left:"0",marginLeft:d,marginTop:l-b});
this.menuIframeShim(a);a.dataSM("ie-shim")&&a.dataSM("ie-shim").css({zIndex:a.css("z-index"),width:f,height:g,marginLeft:d,marginTop:l-b})},menuScroll:function(a,b,c){var d=a.dataSM("scroll"),f=a.dataSM("scroll-arrows"),g=parseFloat(a.css("margin-top")),h=d.up?d.upEnd:d.downEnd;if(!b&&d.velocity){if(d.velocity*=.9,c=d.velocity,.5>c){this.menuScrollStop(a);return}}else c=c||(b||!this.opts.scrollAccelerate?this.opts.scrollStep:Math.floor(d.step));var k=a.dataSM("level");this.visibleSubMenus.length>
k&&this.menuHideSubMenus(k-1);g=d.up&&h<=g||!d.up&&h>=g?g:Math.abs(h-g)>c?g+(d.up?c:-c):h;a.add(a.dataSM("ie-shim")).css("margin-top",g);m&&(d.up&&g>d.downEnd||!d.up&&g<d.upEnd)&&f.eq(d.up?1:0).show();if(g==h)m&&f.eq(d.up?0:1).hide(),this.menuScrollStop(a);else if(!b){this.opts.scrollAccelerate&&d.step<this.opts.scrollStep&&(d.step+=.5);var n=this;this.scrollTimeout=setTimeout(function(){n.menuScroll(a)},this.opts.scrollInterval)}},menuScrollMousewheel:function(a,b){if(this.getClosestMenu(b.target)==
a[0]){b=b.originalEvent;var c=0<(b.wheelDelta||-b.detail);a.dataSM("scroll-arrows").eq(c?0:1).is(":visible")&&(a.dataSM("scroll").up=c,this.menuScroll(a,!0))}b.preventDefault()},menuScrollOut:function(a,b){m&&(/^scroll-(up|down)/.test((b.relatedTarget||"").className)||(a[0]==b.relatedTarget||c.contains(a[0],b.relatedTarget))&&this.getClosestMenu(b.relatedTarget)==a[0]||a.dataSM("scroll-arrows").css("visibility","hidden"))},menuScrollOver:function(a,b){if(m&&!/^scroll-(up|down)/.test(b.target.className)&&
this.getClosestMenu(b.target)==a[0]){this.menuScrollRefreshData(a);var c=a.dataSM("scroll");a.dataSM("scroll-arrows").eq(0).css("margin-top",c.upEnd).end().eq(1).css("margin-top",c.downEnd+c.subH-c.arrowDownH).end().css("visibility","visible")}},menuScrollRefreshData:function(a){var b=a.dataSM("scroll");a=c(window).scrollTop()-a.dataSM("parent-a").offset().top-b.itemH;c.extend(b,{upEnd:a,downEnd:a+this.getViewportHeight()-b.subH})},menuScrollStop:function(a){if(this.scrollTimeout)return clearTimeout(this.scrollTimeout),
this.scrollTimeout=0,c.extend(a.dataSM("scroll"),{step:1,velocity:0}),!0},menuScrollTouch:function(a,b){b=b.originalEvent;if(!/^(4|mouse)$/.test(b.pointerType)){var e=this.getTouchPoint(b);if(this.getClosestMenu(e.target)==a[0]){var d=a.dataSM("scroll");if(/(start|down)$/i.test(b.type))this.menuScrollStop(a)?(b.preventDefault(),this.isTouchScrolling=!0):this.isTouchScrolling=!1,this.menuScrollRefreshData(a),c.extend(d,{touchY:e.pageY,touchTimestamp:b.timeStamp,velocity:0});else if(/move$/i.test(b.type)){var f=
d.touchY;void 0!==f&&f!=e.pageY&&(this.isTouchScrolling=!0,c.extend(d,{up:f<e.pageY,touchY:e.pageY,touchTimestamp:b.timeStamp,velocity:d.velocity+.5*Math.abs(e.pageY-f)}),this.menuScroll(a,!0,Math.abs(d.touchY-f)));b.preventDefault()}else void 0!==d.touchY&&(120>b.timeStamp-d.touchTimestamp&&0<d.velocity&&(d.velocity*=.5,this.menuScrollStop(a),this.menuScroll(a),b.preventDefault()),delete d.touchY)}}},menuShow:function(a){if(!a.dataSM("beforefirstshowfired")&&(a.dataSM("beforefirstshowfired",!0),
!1===this.$root.triggerHandler("beforefirstshow.smapi",a[0])))return;if(!1!==this.$root.triggerHandler("beforeshow.smapi",a[0])&&(this.menuFixLayout(a),a.stop(!0,!0),!a.is(":visible"))){a.css("z-index",this.zIndexInc=(this.zIndexInc||this.getStartZIndex())+1);(this.opts.keepHighlighted||this.isCollapsible())&&a.dataSM("parent-a").addClass("highlighted");if(this.opts.subMenusMinWidth||this.opts.subMenusMaxWidth)if(a.css({width:"auto",minWidth:"",maxWidth:""}).addClass("sm-nowrap"),this.opts.subMenusMinWidth&&
a.css("min-width",this.opts.subMenusMinWidth),this.opts.subMenusMaxWidth){var b=this.getWidth(a);a.css("max-width",this.opts.subMenusMaxWidth);b>this.getWidth(a)&&a.removeClass("sm-nowrap").css("width",this.opts.subMenusMaxWidth)}this.menuPosition(a);a.dataSM("ie-shim")&&a.dataSM("ie-shim").insertBefore(a);b=function(){a.css("overflow","")};this.isCollapsible()?this.opts.collapsibleShowFunction?this.opts.collapsibleShowFunction.call(this,a,b):a.show(this.opts.collapsibleShowDuration,b):this.opts.showFunction?
this.opts.showFunction.call(this,a,b):a.show(this.opts.showDuration,b);this.visibleSubMenus[a.dataSM("level")-1]=a;this.$root.triggerHandler("show.smapi",a[0])}},popupHide:function(a){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0);var b=this;this.hideTimeout=setTimeout(function(){b.menuHideAll()},a?1:this.opts.hideTimeout)},popupShow:function(a,b){if(this.opts.isPopup){if(this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0),this.menuFixLayout(this.$root),this.$root.stop(!0,
!0),!this.$root.is(":visible")){this.$root.css({left:a,top:b});this.menuIframeShim(this.$root);this.$root.dataSM("ie-shim")&&this.$root.dataSM("ie-shim").css({zIndex:this.$root.css("z-index"),width:this.getWidth(this.$root),height:this.getHeight(this.$root),left:a,top:b}).insertBefore(this.$root);var c=this,d=function(){c.$root.css("overflow","")};this.opts.showFunction?this.opts.showFunction.call(this,this.$root,d):this.$root.show(this.opts.showDuration,d);this.visibleSubMenus[0]=this.$root}}else alert('SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.')},
refresh:function(){this.menuHideAll();this.$root.find("ul").each(function(){var a=c(this);a.dataSM("scroll-arrows")&&a.dataSM("scroll-arrows").remove()}).removeDataSM("in-mega").removeDataSM("shown-before").removeDataSM("ie-shim").removeDataSM("scroll-arrows").removeDataSM("parent-a").removeDataSM("level").removeDataSM("beforefirstshowfired");this.$root.find("a.has-submenu").removeClass("has-submenu").parent().removeDataSM("sub");this.opts.subIndicators&&this.$root.find("span.sub-arrow").remove();
this.opts.markCurrentItem&&this.$root.find("a.current").removeClass("current");this.subMenus=[];this.init(!0)},rootOut:function(a){if(this.handleEvents()&&!this.isTouchMode()&&a.target!=this.$root[0]&&(this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0),!this.opts.showOnClick||!this.opts.hideOnClick)){var b=this;this.hideTimeout=setTimeout(function(){b.menuHideAll()},this.opts.hideTimeout)}},rootOver:function(a){this.handleEvents()&&!this.isTouchMode()&&a.target!=this.$root[0]&&
this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0)},winResize:function(a){this.handleEvents()?this.isCollapsible()||"onorientationchange"in window&&"orientationchange"!=a.type||(this.activatedItems.length&&this.activatedItems[this.activatedItems.length-1][0].blur(),this.menuHideAll()):this.$disableOverlay&&(a=this.$root.offset(),this.$disableOverlay.css({top:a.top,left:a.left,width:this.$root.outerWidth(),height:this.$root.outerHeight()}))}}});c.fn.dataSM=function(a,b){return b?
this.data(a+"_smartmenus",b):this.data(a+"_smartmenus")};c.fn.removeDataSM=function(a){return this.removeData(a+"_smartmenus")};c.fn.smartmenus=function(a){if("string"==typeof a){var b=arguments,e=a;Array.prototype.shift.call(b);return this.each(function(){var a=c(this).data("smartmenus");a&&a[e]&&a[e].apply(a,b)})}var d=c.extend({},c.fn.smartmenus.defaults,a);return this.each(function(){new c.SmartMenus(this,d)})};c.fn.smartmenus.defaults={isPopup:!1,mainMenuSubOffsetX:0,mainMenuSubOffsetY:0,subMenusSubOffsetX:0,
subMenusSubOffsetY:0,subMenusMinWidth:"10em",subMenusMaxWidth:"20em",subIndicators:!0,subIndicatorsPos:"prepend",subIndicatorsText:"+",scrollStep:30,scrollInterval:30,scrollAccelerate:!0,showTimeout:250,hideTimeout:500,showDuration:0,showFunction:null,hideDuration:0,hideFunction:function(a,b){a.fadeOut(200,b)},collapsibleShowDuration:0,collapsibleShowFunction:function(a,b){a.slideDown(200,b)},collapsibleHideDuration:0,collapsibleHideFunction:function(a,b){a.slideUp(200,b)},showOnClick:!1,hideOnClick:!0,
keepInViewport:!0,keepHighlighted:!0,markCurrentItem:!1,markCurrentTree:!0,rightToLeftSubMenus:!1,bottomToTopSubMenus:!1,overlapControlsInIE:!0}})(jQuery);
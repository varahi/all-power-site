$(".fancyboxcontent-<f:format.raw />{uid}").fancybox({
  slideShow: {<f:format.raw />
    autoStart: false,
    speed: {speed}
  },
  loop: {loop},
  zoomOpacity: "{opacity}",
  margin: {margin},
  gutter: {gutter},
  infobar: {infobar},
  <f:if condition="{buttons}">
    buttons : [
      {f:if(condition: '{slideShow}', then: "'slideShow',")}
      {f:if(condition: '{fullScreen}', then: "'fullScreen',")}
      {f:if(condition: '{thumbs}', then: "'thumbs',")}
      {f:if(condition: '{closeBtn}', then: "'close'")}
    ],
  </f:if>
  smallBtn: "{smallBtn}",
  touch: {<f:format.raw />
    vertical: {touch},
    momentum: {touch}
  },
  keyboard: {keyboard},
  autoFocus: {focus},
  lang: "{lang}",
});

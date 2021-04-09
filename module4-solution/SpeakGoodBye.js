
(function(window){
  let byeSpeaker = new Object();
  let speakWord = "Good Bye";
  
  byeSpeaker.speak = function(name){
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;

})(window);

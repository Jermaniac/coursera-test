
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

(function(names){
  for (username of names) {
    let firstLetter=username.toLowerCase().charAt(0);
    if (firstLetter=='j'){
      byeSpeaker.speak(username);
    }
    else{
      helloSpeaker.speak(username);
    }
  }
})(names);

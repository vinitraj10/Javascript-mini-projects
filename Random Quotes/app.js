var quotes = [ "If you are depressed you are living in the past. If you are anxious you are living in the future. If you are at peace you are living in the present.", "Madness, as you know, is a lot like gravity, all it takes is a little push.", "The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently.", "Life has many ways of testing a person's will, either by having nothing happen at all or by having everything happen all at once.", "There is no excellent beauty that hath not some strangeness in its proportions.", "Children are fantastic little creatures, because next to drunk people, they are the only truly honest people on earth.", "I begin with an idea, and then it becomes something else.", "Be who you are and say what you feel because those who mind don't matter and those who matter don't mind.", "You can make more friends in two months by becoming interested in other people than you can in two years by trying to get people interested in you.", "An essential aspect of creativity is not being afraid to fail.", "Antisocial behavior is a trait of intelligence in a world of conformists.", "What you do today can improve all your tomorrows.", "A creative man is motivated by the desire to achieve, not by the desire to beat others.", "Don't watch the clock; do what it does. Keep going.", "If you can dream it, you can do it.", "You can't build a reputation on what you're going to do." ];
var quoted = [ "Batman", "Joker", "Superman", "Ironman", "Spiderman", "Thor", "Wonder Woman", "Captain America", "Harry Potter", "Deadpool", "Vinit Raj", "Teemo", "Hulk", "Professor Xavier", "Walt Disney", "Science Fact" ];
var colors = ['#16a085', '#27ae60', '#3b5998','#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var col = colors.length;
// Important: keep the number of greets, quotes, and backgrounds the same
var total = quotes.length;
function refresh(){
	 random = Math.floor((Math.random()* total));
	 rand = Math.floor((Math.random()*colors.length));
 	document.getElementById("com").innerHTML='<cite>' + quotes[random]+'<small>' + quoted[random] + '</small></cite>';
 	document.body.style.backgroundColor=colors[rand];
 	document.getElementById("twt").style.color = colors[rand];
 	document.getElementById("click").style.backgroundColor = colors[rand];
 	document.getElementById("click").style.color = "#fff";
	console.log(colors[rand]);
	
}
function tweet() {
        document.getElementById("mylink").href = "https://twitter.com/intent/tweet?text="+encodeURIComponent('"' + quotes[random] + '" ' + "#"+quoted[random]);
    }
/*if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  });
}*/



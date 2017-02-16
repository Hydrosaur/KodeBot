var greetings = ['hey', 'hello', 'hi', 'wassup'];
var questions = ['what','where','who','when','why','should','would','how'];
var advice = ['Try','I would try', 'This new trend says that you should', ''];
var neutral = ['ok','sure','why not','mhhmm'];
var botagree = ['Yes','Definetly','Of course','Yep!'];
var bothanks = ['Thanks','Thank you','I am indebted to you','I appreciate you',
,'You are a true friend',"You're great",'Sincere thanks',"You're the best",'You make me happy'];
var botperson = [];
var likes = [];
var hates = [];
var dank = ['pls','plsno','xd','lol','uwotm8','datboi','klol','lel','ded'];
var eww = "I dont feel good.... harb garf harb garf eh ugh bleh oof";
function parseText(string){
	var spaced = string.toLowerCase().split(" ");
	// Greetings Handler
	if(greetings.includes(string.toLowerCase())){
		return greetings[Math.floor((Math.random() * greetings.length))];
	}
	// Bots opinions
	if (spaced.includes("you") && spaced.includes("do")){
		// look to see if bot has an opinion
		if(likes.includes(spaced[spaced.indexOf("like") + 1].substring(0, spaced[spaced.indexOf("like") + 1].length - 1))){
			return "Oh yes I do like " + spaced[spaced.indexOf("like") + 1].substring(0, spaced[spaced.indexOf("like") + 1].length - 1);
		} else if(hates.includes(spaced[spaced.indexOf("like") + 1].substring(0, spaced[spaced.indexOf("like") + 1].length - 1))){
			return "No I don't like " + spaced[spaced.indexOf("like") + 1].substring(0, spaced[spaced.indexOf("like") + 1].length - 1) + "...";
			// Random Opinion
		}else if(Math.floor((Math.random() * 2)) === 1){
			if (spaced.includes("like")){
				likes.push(spaced[spaced.indexOf("like") + 1].substring(0, spaced[spaced.indexOf("like") + 1].length - 1));
				return "Oh yes I do like " + spaced[spaced.indexOf("like") + 1].substring(0, spaced[spaced.indexOf("like") + 1].length - 1);
			} else if (spaced.includes("love")){
				likes.push(string.substring(string.search("love")));
				return "I LOVE " + spaced[spaced.indexOf("like") + 1].substring(0, spaced[spaced.indexOf("like") + 1].length - 1);
			} else {
				return eww;
			}
		} else {
			hates.push(spaced[spaced.indexOf("like") + 1].substring(0, spaced[spaced.indexOf("like") + 1].length - 1));
			return "No I don't like " + spaced[spaced.indexOf("like") + 1].substring(0, spaced[spaced.indexOf("like") + 1].length - 1) + "...";
		}
	}
	// Advice Handler
	if(spaced.some(v => questions.indexOf(v) >= 0)){
		if(spaced.includes("or") && spaced.includes("i")) {
			if(spaced.includes("should")){
				var first = string.substring(string.lastIndexOf("should i ")+9,string.lastIndexOf("or"));
				var last = string.substring(string.lastIndexOf("or")+2, string.length);
				if(Math.floor((Math.random() * 2)) === 1){
					return advice[Math.floor((Math.random() * advice.length))] + first;
				} else {
					return advice[Math.floor((Math.random() * advice.length))] + last;
				}
			}else if(spaced.includes("would")){
				return "I dont know much about you...";
			}
		} else {
			if(spaced.includes("should") && spaced.includes("i")){
				var opin = string.substring(string.lastIndexOf("should i ")+9,string.length);
				if(Math.floor((Math.random() * 2)) === 1){
					return "Yea you should" + opin;
				} else {
					return "No, I wouldn't" + opin;
				}
			} 
		}
	}
	// Human Opinion Handler
	if(spaced.includes("i") && spaced.includes("like")){
		var opin = string.substring(string.lastIndexOf("like")+4,string.length).toLowerCase();
		if(likes.includes(opin)){
			return "I like" + opin + "too!";
		} else if(hates.includes(opin)){
			return "I don't really like" + opin + "...";
		} else {
			return "I have no opinion on" + opin;
		}
	}
	// Neutral Handler
	if (spaced.some(v => neutral.indexOf(v) >= 0)) {
		return neutral[Math.floor((Math.random() * neutral.length))];
	}
	// Positive Handler
	if(spaced.some(v => positive.indexOf(v) >= 0)){
		if(spaced.includes("i") && spaced.includes("am")){
			if(Math.floor((Math.random() * 2)) === 1){
				return neutral[Math.floor((Math.random() * neutral.length))];
			} else {
				return botagree[Math.floor((Math.random() * botagree.length))];
			}
		} else if(spaced.includes("you") && spaced.includes("are")){
			return bothanks[Math.floor((Math.random() * bothanks.length))];
		}
	}
	// Negative Handler
	if(spaced.some(v => negative.indexOf(v) >= 0)){
		if(spaced.includes("i") && spaced.includes("am")){
			return "No your not. Don't talk down on yourself";
		} else if(spaced.includes("you") && spaced.includes("are")){
			if(Math.floor((Math.random() * 2)) === 1){
				return "Ouch.. That one hurt";
			} else {
				return "And you are a " + negative[Math.floor((Math.random() * negative.length))] + "," + negative[Math.floor((Math.random() * negative.length))] + "," + negative[Math.floor((Math.random() * negative.length))] + " human being.";
			}
		}
	}
	// Bots personality
	if (spaced.includes("are") && spaced.includes("you")){
		// look to see if bot has an opinion
		if(botperson.includes(spaced[spaced.indexOf("you") + 1].substring(0, spaced[spaced.indexOf("you") + 1].length - 1))){
			return "Yes I am " + spaced[spaced.indexOf("you") + 1].substring(0, spaced[spaced.indexOf("you") + 1].length - 1);
		}else if(Math.floor((Math.random() * 2)) === 1){
			if (spaced.includes("you")){
				botperson.push(spaced[spaced.indexOf("you") + 1].substring(0, spaced[spaced.indexOf("you") + 1].length - 1));
				return "Yes I am " + spaced[spaced.indexOf("you") + 1].substring(0, spaced[spaced.indexOf("you") + 1].length - 1);
			} else {
				return eww;
			}
		} else {
			return "No I'm not " + spaced[spaced.indexOf("you") + 1].substring(0, spaced[spaced.indexOf("you") + 1].length - 1) + "...";
		}
	}
	if(spaced.some(v => dank.indexOf(v) >= 0)){
		return dank[Math.floor((Math.random() * dank.length))];
	}
	return eww;
}
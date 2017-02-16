function submitVal() {
	var parsed = parseText($("#data").val());
	$("#chat").html($("#chat").html() + "&#13;&#10;" + "Human: " + $("#data").val());
	$("#chat").html($("#chat").html() + "&#13;&#10;" + "Bot: " + parsed);
	$("#data").val("");
	responsiveVoice.speak(parsed);
	var textarea = document.getElementById('chat');
	textarea.scrollTop = textarea.scrollHeight;
}

function clearChat(){
	$("#chat").html("Bot: WAIT WAIT WAIT&#13;&#10;WOAH WOAH WOAH.&#13;&#10;HOLD IT THERE.&#13;&#10;DON'T KILL ME PLS!!!!");
	setTimeout(function(){
		$("#chat").html("					Chat with the bot:&#13;&#10;");
		$("#botscript").remove();
		$("html").append("<script type='text/javascript' src='bot.js' id='botscript'></script>");
	}, 3000);
}

$("html").on("keydown", function(e){
	if(e.keyCode === 13 && $("#data").is(":focus")){
		submitVal();
	}
});
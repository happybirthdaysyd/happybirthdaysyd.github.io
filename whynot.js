function video(){
	var x = document.getElementById("text");
	var footerB = document.getElementById("footerB");
	text.innerHTML = "<video controls><source src = 'RunningHomeToYou.mp4' type = 'video/mp4'></video>";
	footerB.innerHTML = "<div class = 'back' onclick = 'back()'>⬅</div>";
}

function back(){
	var x = document.getElementById("text");
	var footerB = document.getElementById("footerB");
	text.innerHTML = "Dear Sydney,<br>&emsp;Happy birthday! Even though we only really started talking this year, you have still been an incredibly amazing person to know and talk to, and somehow, you were able to pull through and make us BFFs after just a couple of Snapchat quizzes. You are always an incredibly fun person to talk to and it's always enjoyable just hanging out with you, and you always are able to make even the toughest of times seem like nothing. Although I'm not very good at talking with others, you still stuck around and really did try to take a chance at being my friend, and I can't thank you enough for that and for always brightening my day through even the smallest of conversations. Even with it being close to Christmas, today is your day, and you deserve to have it be an incredible time for you while surrounded by friends, family, and everyone who loves you for just being the Sydney that you are. Every year will bring its ups and downs, but even though you're the one who can see into the future through your dreams, I can without a doubt say that this will be an incredible year for you and I'm positive that you will be able to make it through even the most drastic downs, as you will always have those who care about you to fall back on. All I hope is that 14 serves you well and this year brings you all the best (you deserve it!). Happy birthday and merry Christmas!<br><br>Your bestest friend,<br>Faisal<br><div class = "btw">(btw, <div class = "link" onclick = "video()">here's just a little ditty on the piano you might like</div>)</div>"
	footerB.innerHTML = "";
}

function video(){
	var x = document.getElementById("text");
	var footerB = document.getElementById("footerB");
	text.innerHTML = "<video controls><source src = 'RunningHomeToYou.mp4' type = 'video/mp4'></video>";
	footerB.innerHTML = "<div class = 'back' onclick = 'back()'>⬅</div>";
}

function back(){
	var x = document.getElementById("text");
	var footerB = document.getElementById("footerB");
	text.innerHTML = "Dear Sydney,<br>&emsp;Happy birthday! Even though we only really started talking this year, you have still been an incredibly awesome person to know and talk to, and somehow, you were still able to pull through and make us BFFs after a couple of Snapchat quizzes. You are always an incredibly fun person to talk to and it's always enjoyable just hanging out with you, even if I can't really talk too well. Even with it being close to Christmas, today is your day, and you deserve to have it be an incredible time for you while surrounded by friends, family, and everyone who loves you for just being the Sydney that you are. I hope that 14 serves you well and this year brings you all the best (you deserve it!). Happy birthday and merry Christmas!<br><br>Your bestest friend,<br>Faisal<br><div class = 'btw'>(btw, <div class = 'link' onclick = 'video()'>here's just a little diddy on the piano you might like</div>)</div>"
	footerB.innerHTML = "";
}

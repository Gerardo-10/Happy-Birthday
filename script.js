$("#messageState").on("change", (x) => {
	$(".message").removeClass("openNor").removeClass("closeNor");
	if ($("#messageState").is(":checked")) {
		$(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
		$(".cake").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
		$(".container").stop().animate({"backgroundColor": "#00304E"}, 2000);
	} else {
		$(".message").removeClass("no-anim").addClass("closeNor");
		$(".cake").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
		$(".container").stop().animate({"backgroundColor": "#ffcfdf"}, 2000);
	}
});

$(".message").on('webkitAnimationEnd onanimationend msAnimationEnd animationend', function(e) {
	if ($(".message").hasClass("closeNor"))
		$(".message").addClass("closed");
	$(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
});

$(".cake").on('webkitAnimationEnd onanimationend msAnimationEnd animationend', function(e) {
	if (!$(".cake").hasClass("closeHer"))
		$(".cake").addClass("openedHer").addClass("beating");
	else
		$(".cake").addClass("no-anim").removeClass("beating");
	$(".cake").removeClass("openHer").removeClass("closeHer");
});
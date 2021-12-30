function $(selector, all = false) {
	if (all) {
		return document.querySelectorAll(selector);
	}
	return document.querySelector(selector);
}

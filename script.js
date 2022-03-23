document.addEventListener('DOMContentLoaded', () => {
	const createLink = url => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = url;
		document.head.append(link);
	};
	createLink('css/index.css');
})

//заменяем link для подключения стилей скриптом
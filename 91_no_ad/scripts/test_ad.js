
// https://www.meiju7.com/*
console.log("脚本加载成功！！");
document.addEventListener('DOMContentLoaded', function() {
	console.log('我被执行了！');
	setTimeout(function() {
		document.getElementById('HMcoupletDivleft').style.display = 'none';
		document.getElementById('HMcoupletDivright').style.display = 'none';
		document.getElementById('HMRichBox').style.display = 'none';
	}, 1000);
});

// 메뉴 이동 
function setMenu(_menu) {
  var menus = document.querySelectorAll("nav li");
  menus.forEach(function (menu) {
    menu.classList.remove('on');
  });
  document.querySelector("nav li." + _menu).classList.add("on");
  document.querySelector("main").className = _menu;
}

function showVideoClips() {
  var videos = document.querySelector('.video-list');
  videos.forEach(function (video) {
    var videoNode = document.querySelector(".video-item[hidden]").cloneNode(true);
    videoNode.querySelector(".thumbnail").src = './img/' + video.thumbnail_src;
    videoNode.querySelector(".profile").src = './img/' + video.profile_src;
    videoNode.querySelector(".title").innerHTML = video.title;
    videoNode.querySelector(".author").innerHTML = video.author;
    videoNode.querySelector(".stat").innerHTML = video.stat;
    videoNode.hidden = false;
    videoList.appendChild(videoNode);
  })

}

function init() {
  showVideoClips();
}


document.addEventListener('DOMContentLoaded', () => {
  // DOM이 load되면 init함수 실행
  init();
});
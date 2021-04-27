


















// Please do not make changes to this file


















let docw = 1400;
let doch = 700;
let page;


function init(){
  var path = window.location.pathname;
  page = path.split("/").pop().split(".")[0];
  let container = document.getElementById("container");

  if(page == "cover"){
    container.className = "page cover-container"
  }else if(page == "middlespread"){
    container.className = "page middle-spread-container"
  }else if(page == "back"){
    container.className = "page back-container"
  }

  function checkPage(tocheck){
    return page==tocheck?"open-page":"";
  }

  var str = `
  <div id="nav-wrapper">
    <nav id="page-nav"><a class="button `+ checkPage('cover') +`"href="cover.html">Games</a><a> </a><a> </a><a class="button `+ checkPage('middlespread') +`" href="middlespread.html">Users</a><a> </a><a> </a><a class="button `+ checkPage('back') +`" href="back.html">Illustration</a></nav>
  </div>
  `;
  document.body.insertAdjacentHTML( 'afterbegin', str );

  let css = `<link rel="stylesheet" href="setup/setup.css">
  `
  document.head.insertAdjacentHTML( 'beforeend', css );

}
window.addEventListener("load", init);

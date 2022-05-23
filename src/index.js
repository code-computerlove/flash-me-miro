const { board } = window.miro;


console.log("index.js loaded");

async function init() {
  await openSideBar();
  
}

async function openSideBar()
{
  await miro.board.ui.openPanel({
    url: 'app.html',
    //height: 400,
  });
}


init();

const { board } = window.miro;


console.log("app.js loaded");


async function init() {
  miro.board.ui.on("drop", async ({x, y, target}) => {
  let shape = await createCurrentCard(x,y); 

  await board.viewport.zoomTo(shape);
});
//changeModalTextDefault();
}

//apprently we could do this in react... https://github.com/miroapp/app-examples/blob/main/examples/drag-and-drop/src/App.tsx
init();

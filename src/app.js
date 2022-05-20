const { board } = window.miro;


let currentText = "Hello, World!";
async function init() {
  miro.board.ui.on("drop", async ({x, y, target}) => {
  // event handler calls a function when the dragged item panel is dropped on the board
  const stickyNote = await board.createStickyNote({
    content: currentText,
  });

  await board.viewport.zoomTo(stickyNote);
});

}


async function changeModalTextDefault()
{
  let defaultSet = getDefaultSet();
  changeModalText(defaultSet)
}
async function changeModalText(array)
{
    //pick one        
    currentText = array[Math.floor(Math.random() * array.length)];
    document.getElementById("qtext").innerHTML = currentText;
}

function getDefaultSet()
{
  //array
return ["Push the idea till it breaks",
"What’s the solution to long-term success?",
"How does the solution exploit mobile?",
"What is your gut instinct ?",
"Have a revolution",
"What’s the solution that delivers fame ?",
"How does the solution help to build a community ?",
"Go outside",
"What if we reversed ?",
"Re-express with different words",
"How does this deliver really long term success?",
"What’s the solution that would make the team happy ?",
"Be boring",
"What if we exaggerate ?",
"Be brave",
"What are you really thinking ?",
"Destroy",
"Build bridges",
"What if we had half the budget ?",
"What if we did nothing ?",
"Push the idea till it scares you",
"Burn bridges",
"Give way to your worst impulse",
"Use clichés",
"Related worlds – look at another market",
"How can we make people’s lives better ?",
"Use an old idea",
"Work against your better judgement",
"What if people bought twice as much ?",
"What do people need ?",
"What is missing ?",
"What would your best friend do ?",
"How can you make this iconic ?",
"How can you get the solution up and running in 6 weeks ?",
"What is the cause related solution ?",
"What if we had twice the budget ?",
"What’s the solution that delivers the best teamwork ?",
"What if you had £1m to spend ?",
"Is there a way to prompt the unconscious ?",
"Re-express from someone else’s perspective",
"Be extravagant",
"Random link",
"What would (another brand) do ?",
"Listen",
"What’s the quickest win ?",
"Push the idea till it breaks",
"What’s the solution to long-term success?",
"How does the solution exploit mobile?",
"What is your gut instinct ?",
"Have a revolution",
"What’s the solution that delivers fame ?",
"How does the solution help to build a community ?",
"Go outside",
"What if we reversed ?",
"Re-express with different words",
"How does this deliver really long term success?",
"What would pirates do ?",
"Be generous",
"What’s the solution that would make the team happy ?",
"Be boring",
"What won’t you do and why ?",
"What if we exaggerate ?",
"Be brave",
"What are you really thinking ?",
"Destroy",
"Build bridges",
"What if we had half the budget ?",
"What if we did nothing ?",
"Push the idea till it scares you",
"Burn bridges",
"Give way to your worst impulse",
"Use clichés",
"Related worlds – look at another market",
"How can we make people’s lives better ?",
"Use an old idea",
"Work against your better judgement",
"What if people bought twice as much ?",
"What do people need ?",
"What is missing ?",
"What would your best friend do ?",
"How can you make this iconic ?",
"How can you get the solution up and running in 6 weeks ?",
"What is the cause related solution ?",
"What if we had twice the budget ?",
"What’s the solution that delivers the best teamwork ?",
"What if you had £1m to spend ?",
"Is there a way to prompt the unconscious ?",
"Re-express from someone else’s perspective",
"Be extravagant",
"Random link",
"What would (another brand) do ?",
"Listen",
"What’s the quickest win" ]

//EOF array

}


init();

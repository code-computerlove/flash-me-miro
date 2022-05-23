const { board } = window.miro;
let currentText = "Hello, World!";

console.log("buttons.js loaded");

const cardWidth = 200;
const cardHeight = 300;
async function  createCurrentCard(x,y)
{
  return await createCard(currentText,x,y);
}
async function createCard(text, x,y)
{

  let shape = await miro.board.createShape({
    x,
    y,   
    content: `<p>${text}</p>`,
    shape: 'round_rectangle',
    style: {
      fillColor: '#f5f5f5', // Default color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size in dp for the text
     // borderColor: "#1a1a1a", Border color is currently not supported by the SDK (but it is supported by the REST API...) https://developers.miro.com/docs/shape_shape-1#style
      textAlign: 'center', // Default alignment: center
      textAlignVertical: 'middle', // Default alignment: middle
  
    },    
 
    width: cardWidth,
    height: cardHeight
  }) 
  changeModalTextDefault();
  return shape;
}

async function createWholeDeck()
{
  console.log("creating deck");
  const viewport = await miro.board.viewport.get();
 
  let deck = getDefaultSet();


  let gapBetweenCards = 10;

  let startX = viewport.x - (cardWidth * (deck.length/2) );
  let startY = viewport.y + (viewport.height/2) + (cardHeight/2);

  for(let x=0; x < deck.length; ++x)
  {
      let text = deck[x];
      let posX = startX + ( x * (cardWidth + gapBetweenCards));
      let posY = startY;
      await createCard(text, posX, posY);
  }
}
async function createWholeDeckGrid()
{
  console.log("creating deck");
  const viewport = await miro.board.viewport.get();
 
  let deck = getDefaultSet();


  let gapBetweenCards = 10;

  let startX = viewport.x - (cardWidth * (deck.length/2) );
  let startY = viewport.y + (viewport.height/2) + (cardHeight/2);
  let maxColumns = 10;
  let column = 0;

  for(let x=0; x < deck.length; ++x)
  {
      let text = deck[x];
      let posX = startX + ( column * (cardWidth + gapBetweenCards));
      let posY = startY;

      await createCard(text, posX, posY);

      ++column;

      if(column > maxColumns)
      {
        column = 0;
        startY += cardHeight + gapBetweenCards;
      }
  }
}


function changeModalTextDefault()
{
  let defaultSet = getDefaultSet();
  changeModalText(defaultSet);
}
function changeModalText(array)
{
    //pick one        
    currentText = array[Math.floor(Math.random() * array.length)];
    console.log(currentText);
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



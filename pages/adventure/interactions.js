const heroIcon = document.querySelector('.hero-icon');
const heroMsg = document.querySelector('.messages__detail')

let loadedInteraction;

const interactions = [['45%','75%','up',()=>scrollEvent()],['55%','65%','left',()=>scrollEvent()],['45%','55%','down',()=>scrollEvent()],['35%','65%','right',()=>scrollEvent()]]

const scrollEvent = () => {
  console.log('I ran!');
  heroMsg.innerHTML = `
    <p>Huh? A scroll.</p>
    <p>It reads: So... our 'hero' decided to grace us with his presence. I was wondering when you would show. But you are much too late, your friends, your princess - all gone.</p>
    <p>But don't fret, you didn't miss all the action. I put together a little test for you - maybe if you solve it I'll grace you with my presence. Here's the first clue:</p>
    <em>"All cold to touch, three once together now apart, left to rust, only one stands in the sun"</em>
  `
  interactions.push(['85%','65%','up',()=>knightEvent()],['85%','70%','up',()=>knightEvent()])
}

{/* <li>"While all else laced in cromson, this, a hue of emerald contains knowledge once lost"</li>
<li>"If you have come this far you're eager for wrath, it's only in darkness you find your path."</li> */}

const knightEvent = () => {
  console.log('Yoohoo!');
  heroMsg.innerHTML = `
  <p>Wait a minute, there's something inside this visor... another scroll!</p>
  <p>It reads: Very impressive, that was quick. Perhaps you're not as idiotic as I thought. You might even be smart enough to quit while you're ahead.</p>
  <p>Next clue:</p>
  <em>"An emerald in a sea of crimson. The source of all knowledge lies within."</em>
  `
  interactions.push(['85%','30%','left',()=>bookEvent()],['90%','30%','left',()=>bookEvent()])
}

const bookEvent = () => {
  console.log('HA! Nerd');
  heroMsg.innerHTML = `
  <p>Hmm... there's something inbetween these pages... another scroll...</p>
  <p>It reads: Remarkable, I took you for a bufoon with a sword - I'm surprised you even know what a book is. It means nothing, the final test with stump you.</p>
  <p>Final clue:</p>
  <em>"IF you have come this far you're eager for wrath, it's only in darkness you find your path."</em>
  `
  interactions.push(['75%','40%','up',()=>fireEvent()],['75%','45%','up',()=>fireEvent()],['15%','40%','up',()=>fireEvent()],['15%','45%','up',()=>fireEvent()],['70%','10%','up',()=>fireEvent()],['70%','15%','up',()=>fireEvent()],['30%','10%','up',()=>fireEvent()],['30%','15%','up',()=>fireEvent()])
}

const fireEvent = () => {
  console.log('Hello darkness my old friend');
}


function checkForInteractions({x,y}){
  let indexOfInteraction;
  const locationHasInteraction = interactions.some((axis,i) => {
    if (axis[0] === x && axis[1] === y && axis[2] === characterConfig.direction) {
      indexOfInteraction = i
      return true;
    }
  })
  if(!locationHasInteraction) {
    heroIcon.classList.remove('--active');
    loadedInteraction = null;
    return;
  } 
  heroIcon.classList.add('--active');
  heroIcon.innerText = '?'
  loadedInteraction = interactions[indexOfInteraction][3]
}
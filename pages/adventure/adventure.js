const documentRoot = document.documentElement;
const getYAxis = () => window.getComputedStyle(documentRoot).getPropertyValue('--spriteY').trim();
const getXAxis = () => window.getComputedStyle(documentRoot).getPropertyValue('--spriteX').trim();
const getSprite = () => window.getComputedStyle(documentRoot).getPropertyValue('--spriteImage').trim();
const getBrightness = () => window.getComputedStyle(documentRoot).getPropertyValue('--mapBrightness').trim();

let moving = false;

const blockedCoord = {
  up:[['0%','65%'],['5%','65%'],['10%','65%'],['15%','40%'],['20%','40%'],['25%','40%'],['30%','55%'],['35%','65%'],['55%','65%'],['60%','55%'],['65%','40%'],['70%','40%'],['75%','40%'],['80%','65%'],['85%','65%'],['90%','65%'],['0%','10%'],['5%','10%'],['10%','10%'],['15%','10%'],['20%','10%'],['25%','10%'],['30%','10%'],['35%','10%'],['40%','10%'],['45%','10%'],['50%','10%'],['55%','10%'],['60%','10%'],['65%','10%'],['70%','10%'],['75%','10%'],['80%','10%'],['85%','10%'],['90%','10%']],
  right:[['90%','75%'],['90%','70%'],['90%','65%'],['75%','60%'],['75%','55%'],['75%','50%'],['75%','45%'],['75%','40%'],['50%','60%'],['50%','55%'],['50%','50%'],['50%','45%'],['50%','40%'],['50%','35%'],,['50%','30%'],['50%','25%'],['50%','20%'],['90%','10%'],['90%','15%'],['90%','20%'],['90%','25%'],['90%','30%'],['90%','35%'],['90%','35%'],['5%','35%'],['5%','30%'],['5%','25%'],['5%','20%'],['25%','40%'],['25%','45%'],['25%','50%'],['30%','50%'],['30%','55%'],['30%','60%'],['50%','80%']],
  down:[['0%','75%'],['5%','75%'],['10%','75%'],['15%','75%'],['20%','75%'],['25%','75%'],['30%','75%'],['35%','75%'],['40%','80%'],['45%','80%'],['50%','80%'],['55%','75%'],['60%','75%'],['65%','75%'],['70%','75%'],['75%','75%'],['80%','75%'],['85%','75%'],['90%','75%'],['90%','35%'],['85%','35%'],['0%','35%'],['5%','35%'],['10%','15%'],['15%','15%'],['20%','15%'],['25%','15%'],['30%','15%'],['35%','15%'],['55%','15%'],['60%','15%'],['65%','15%'],['70%','15%'],['75%','15%'],['80%','15%']],
  left:[['40%','80%'],['0%','75%'],['0%','70%'],['0%','65%'],['15%','60%'],['15%','55%'],['15%','50%'],['15%','45%'],['15%','40%'],['40%','60%'],['40%','55%'],['40%','50%'],['40%','45%'],['40%','40%'],['40%','35%'],['40%','30%'],['40%','25%'],['40%','20%'],['60%','60%'],['60%','55%'],['65%','50%'],['65%','45%'],['65%','40%'],['85%','20%'],['85%','25%'],['85%','30%'],['85%','35%'],['0%','10%'],['0%','15%'],['0%','20%'],['0%','25%'],['0%','30%'],['0%','35%']]
}

const controls = {
  up: document.querySelector('.controls__key.--up'),
  right:document.querySelector('.controls__key.--right'),
  down:document.querySelector('.controls__key.--down'),
  left:document.querySelector('.controls__key.--left'),
  space:document.querySelector('.controls__key.--space')
}

const checkIfPathBlocked = (x, y,direction) => {
  return blockedCoord[direction].some(axis => {
    return axis[0] === x && axis[1] === y
  })
};

const checkIfNewScene = (x,y) => {
  if (((x === '10%'||x === '15%') && y === '10%')) {
    document.documentElement.style.setProperty('--mapBrightness',0)
    setTimeout(() => window.location.href = '../bossFight/bossFight.html', 1000);
  }
  
}

const moveControl = {
  38:({x,y}) => {
    let pathBlocked = checkIfPathBlocked(x,y,'up');
    documentRoot.style.setProperty('--spriteImage',characterConfig.back);
    characterConfig.direction = 'up';
    controls.up.classList.add('--active');
    if (pathBlocked) console.log('path is blocked with coords:',x,y)
    if (pathBlocked) return;
    if (moving == true) return;
    moving = true;
    documentRoot.style.setProperty('--spriteY',`${Number(y.slice(0,y.indexOf('%')))-5}%`); // up arrow
    setTimeout(() => moving = false, 150);
    checkIfNewScene(x,y);
  },
  39:({x,y}) => { // right arrow
    let pathBlocked = checkIfPathBlocked(x,y,'right');
    if(characterConfig.direction!=='right') documentRoot.style.setProperty('--spriteImage',characterConfig.right);
    characterConfig.direction = 'right';
    controls.right.classList.add('--active');
    if (pathBlocked) console.log('path is blocked with coords:',x,y)
    if (pathBlocked) return;
    if (moving == true) return;
    moving = true;
    documentRoot.style.setProperty('--spriteX',`${Number(x.slice(0,x.indexOf('%')))+5}%`);
    setTimeout(() => documentRoot.style.setProperty('--spriteImage',characterConfig.rightStep), 50);
    setTimeout(() => documentRoot.style.setProperty('--spriteImage',characterConfig.rightStep1), 100);
    setTimeout(() => {
      documentRoot.style.setProperty('--spriteImage',characterConfig.rightStep2);
      moving=false
    }, 150);
  },
  40:({x,y}) => { // down arrow
    let pathBlocked = checkIfPathBlocked(x,y,'down');
    if (getSprite() !== characterConfig.front) documentRoot.style.setProperty('--spriteImage',characterConfig.front)
    characterConfig.direction = 'down'
    controls.down.classList.add('--active');
    if (pathBlocked) console.log('path is blocked with coords:',x,y)
    if (pathBlocked || moving == true) return;
    moving = true;
    documentRoot.style.setProperty('--spriteY',`${Number(y.slice(0,y.indexOf('%')))+5}%`); 
    setTimeout(() => documentRoot.style.setProperty('--spriteImage',characterConfig.frontStep1), 75);
    setTimeout(() => {
      documentRoot.style.setProperty('--spriteImage',characterConfig.frontStep2)
      moving=false;
    }, 150);
  },
  37:({x,y}) => {
    let pathBlocked = checkIfPathBlocked(x,y,'left');
    if(characterConfig.direction!=='left') documentRoot.style.setProperty('--spriteImage',characterConfig.left);
    characterConfig.direction = 'left';
    controls.left.classList.add('--active');
    if (pathBlocked) console.log('path is blocked with coords:',x,y)
    if (pathBlocked) return;
    if (moving == true) return;
    moving = true;
    documentRoot.style.setProperty('--spriteX',`${Number(x.slice(0,x.indexOf('%')))-5}%`); // left arrow
    setTimeout(() => documentRoot.style.setProperty('--spriteImage',characterConfig.leftStep), 50);
    setTimeout(() => documentRoot.style.setProperty('--spriteImage',characterConfig.leftStep1), 100);
    setTimeout(() => {
      documentRoot.style.setProperty('--spriteImage',characterConfig.leftStep2)
      moving = false
    }, 150);
  },
  32:({x,y}) => {
    controls.space.classList.add('--active');
    console.log(x,y);
    if (!!loadedInteraction) loadedInteraction(x.slice(0,2))
  }
}


function moveCharacter(e){
  let axis = {
    y: getYAxis(),
    x: getXAxis()
  }
  e.preventDefault();
  if(typeof moveControl[e.keyCode] == 'undefined') return;
  moveControl[e.keyCode](axis);
  checkForInteractions(axis)
  console.log('x',axis.x,'y',axis.y);
}

const moveRelease = {
  38:() => controls.up.classList.remove('--active'),
  39:() => controls.right.classList.remove('--active'),
  40:() => controls.down.classList.remove('--active'),
  37:() => controls.left.classList.remove('--active'),
  32:() => controls.space.classList.remove('--active'),
}

function releaseControl(e){
  if(!!moveRelease[e.keyCode]) moveRelease[e.keyCode]()
}

document.addEventListener('keyup',releaseControl)
document.addEventListener('keydown',moveCharacter)
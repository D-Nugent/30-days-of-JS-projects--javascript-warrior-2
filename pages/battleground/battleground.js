
// Load Monsters Logic

const loadMonsters = (monsters) => {
  const randDelay = () => (Math.floor(Math.random()*4)+1);
  let monsterIcons = monsters.map(monster => `<p class="monster-icon --monster-icon-${randDelay()} --monster-icon-${monster.name}">${monster.icon}</p>`).join('');
  monstersContainer.innerHTML = monsterIcons;
  monstersInformation.innerHTML = JSON.stringify(monsters,null,'<br>');
  let monsterHealth = Math.floor((monsters.reduce((health,current) => health + current.level,0)/252)*100);
  let healthColor = monsterHealth>70?'green':monsterHealth>30?'orange':'red';
  document.documentElement.style.setProperty(`--health-val`, `${monsterHealth}%`);
  document.documentElement.style.setProperty(`--health-color`, healthColor);
}

const monstersContainer = document.querySelector('.enemy__monsters');
const monstersInformation = document.querySelector('.enemy-data__content')
loadMonsters(monsters);

// Battle Stage Logic

let battleStage = 0;
let currentHealth = ['💖','💖','💖','💖','💖']

const loadBattleStage = (stage) => {
  let currentChallenge = challengeData[stage];
  const {health,turn,msg,chal} = battleElements;
  health.innerText = currentHealth.join('');
  turn.innerText = stage+1;
  msg.innerText = currentChallenge.msg;
  chal.innerHTML = currentChallenge.chal;
  if (stage === 10) document.querySelector('.enemy__wizard').innerText = '';
  if (stage === 10) chal.querySelector('input').classList.add('--small');
}

const battleElements = {
  health: document.querySelector('.battle-log__health'),
  turn: document.querySelector('.battle-log__turn-no'),
  msg: document.querySelector('.battle-log__msg'),
  chal: document.querySelector('.battle-log__challenge')
}

loadBattleStage(battleStage);

// Challenge Logic

const gameOver = () => {
  document.querySelector('.game-over').style.display = 'flex';
}

const handleChallengeResult = (result) => {
  let userInput = battleElements.chal.querySelector('input') || document.querySelector('textarea');
  if (!result) {
    userInput.addEventListener('animationend',function(){this.classList.remove('--error')})
    userInput.classList.add('--error');
    const heartIndex = currentHealth.lastIndexOf('💖');
    heartIndex > 0 ? currentHealth.splice(currentHealth.lastIndexOf('💖'),1,'🖤'):gameOver();
    battleElements.health.innerText = currentHealth.join('');
    return;
  } else {
    battleStage += 1;
    loadBattleStage(battleStage);
    return;
  }
}

const testFunction = (test,expected) => {
  const coordinates = [6,7,8,9,10,11,13,14,17];

  let funcStart = battleStage!==5?1:2;
  const baseFunc = test.innerHTML.split('= ')[funcStart].replaceAll(/=&gt;/g,'=>').replace(/.element.\W*>/,'').replace(/.monsters.\W*br>/,'').replace(/;<br>.*}/,'')
  const userInput = test.querySelector('input')?.value || test.querySelector('textarea')?.value.replace(/==.*element/,"==='fire'") || '';
  let userFunction;
  try {
    userFunction = eval(baseFunc.replace(/<.*>/, userInput));
  } catch (error) {
    userFunction = ''
  }
  const funcCorrect = JSON.stringify(userFunction) === expected;
  if (funcCorrect) {
    if (battleStage !== 3 && battleStage !== 4 && battleStage !== 6) monsters = userFunction;
    if (battleStage === 9) monsters = [{
      name:'The D[arr]k Wiz[arr]d',
      icon: '🧙‍♂️',
      level: 20,
      canFly: false,
      weakness: 'The power of Array Methods!',
      barrier: false
    },]
    if(battleStage == 10) window.location.href = '../victory/victory.html';
    loadMonsters(monsters);
    handleChallengeResult(funcCorrect);
    return;
  } else {
    handleChallengeResult(funcCorrect);
    return;
  }
}

const submitBtn = document.querySelector('.battle-log__submit');
submitBtn.addEventListener('click',() => testFunction(battleElements.chal,challengeData[battleStage].sol(monsters)))

monsters.splice()
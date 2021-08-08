const storyDetails = [
    {
      id: 0,
      description: `When we had last left our hero <span class="arr-emph">[arr]</span>thur, he had fought and defeated dragons🐉, kraken's🐙 and more before finally bringing down the d<span class="arr-emph">[arr]</span>k wiz<span class="arr-emph">[arr]</span>d 🧙‍♂️. It took the power of <span class="arr-emph">[arr]</span> methods, an ancient <span class="arr-emph">[arr]</span>t of fighting skills to succeed.`
    },
    {
      id: 1,
      description: `Despite fighting through the night our hero had not tired - rather he felt as though he had unlocked some new skills. As the sun <span class="arr-emph">[arr]</span>ose behind the mountains🌄, our hero smiled and rejoiced deciding he best set off back to the castle🏰 to tell princess <span class="arr-emph">[arr]</span>iana👸 the news of his victory.`
    },
    {
      id: 2,
      description: `This contentedness would not last... <span class="arr-emph">[arr]</span>iving at the castle🏰 gates, <span class="arr-emph">[arr]</span>thur knew that something was amiss. Buildings were ablaze🔥, people shrieking and the royal gu<span class="arr-emph">[arr]</span>d defeated💀. Slicing down the monst<span class="arr-emph">[arr]</span>s in his path he ventured through the grounds.`
    },
    {
      id: 3,
      description: `How could monsters breach the perimeter so easily? It was at this moment <span class="arr-emph">[arr]</span>thur realized, the d<span class="arr-emph">[arr]</span>k wiz<span class="arr-emph">[arr]</span>d 🧙‍♂️ was not the threat, he was merely a distraction from a f<span class="arr-emph">[arr]</span> great<span class="arr-emph">[arr]</span> dang<span class="arr-emph">[arr]</span>. Our hero rushes to the royal hall to see if he is too late...`
    }
  ]

  const bossDialog = [
    {
      id: 0,
      speaking: '<span class="arr-emph">[arr]</span>thur:',
      description: `
      <p>No... ...it... can't be!</p>
      <p>You're.... you're dead!<p>
      <button class="dialog-advance">Next</button>
    `
    },
    {
      id: 1,
      speaking: '???:',
      description: `
          <p>Oh I'm sure you wish that were true. Don't you...Brother.</p>
          <p>Truth is... until the accident I wasn't alive, it is only now I live.</p>
          <p>I must say, I'm very disappointed to see you working for the very people that destroyed our home.<p>
          <p>But all will be forgiven if you join me now. Together we can burn <span class="arr-emph">[arr]</span>chadia to the ground!</p>
          <button class="dialog-advance">Next</button>
         `
    },
    {
      id: 2,
      speaking: '<span class="arr-emph">[arr]</span>thur:',
      description: `
          <p>N-No, you can't want this!</p>
          <p>All of those people. <span class="arr-emph">[arr]</span>agon... you killed so many innocent people.</p>
          <p>You have become blinded by your vengeance... but it's not too late. Stop this madness and we can find a better way.</p>
          <button class="dialog-advance">Next</button>
         `
    },
    {
      id: 3,
      speaking: '<span class="arr-emph">[arr]</span>agon:',
      description: `
          <p>Tsk tsk tsk... little brother, it is not I, but you who is blinded!</p>
          <p>Those people deserved death just as much as the rest of the mon<span class="arr-emph">[arr]</span>chy.</p>
          <p>I may not have the will to kill you myself... but it is clear that your weakness of heart will kill you eventually, as such one of my pets will put you out of your misery...</p>
          <p>Goodbye brother...</p>
          <button class="dialog-advance">Next</button>
         `
    },
    {
      id: 4,
      speaking: '<span class="arr-emph">[arr]</span>thur:',
      description: `
          <p>WAIT!</p>
          <p>Hmph... Damn it.</p>
          <p>Looks like I have other problems to deal with.</p>
          <p><span class="arr-emph">[arr]</span>agon... I won't let you live this way, with your heart broken by hate.</p>
          <button class="dialog-advance">Start Battle</button>
          `
    },
    {
      id: 5,
      speaking: '<span class="arr-emph">[arr]</span>thur:',
      description: `
        <p>Looks like I have my work cut out for me</p>
        <p>I knew I felt something earlier... I've unlocked some new powers... this must be...</p>
        <p>Object Methods!</p>
        <p>Ok, let's use an 'entries' method so we can see each part of this monster in an array one at a time.</p>
      `
    },
    {
      id: 6,
      speaking: '<span class="arr-emph">[arr]</span>thur:',
      description: `
        <p>Great! When we break it down it doesn't look too intimidating.</p>
        <p>To take him on I need to put the data back again with 'fromEntries' but not before using 'map' to get rid of that pesky b<span class="arr-emph">[arr]</span>ier.</p>
      `
    },
    {
      id: 7,
      speaking: '<span class="arr-emph">[arr]</span>thur:',
      description: `
        <p>Ok, with the b<span class="arr-emph">[arr]</span>ier down it's time to put together a strategy...</p>
        <p>I've got it! I'll use some w<span class="arr-emph">[arr]</span>d magic and poison the enemy. It won't damage much but over time it might just bring him down! </p>
        <p>Ok, I've created the poison object, now to just 'assign' it to the enemy.</p>
      `
    },
    {
      id: 8,
      speaking: '<span class="arr-emph">[arr]</span>thur:',
      description: `
        <p>Huh... that's weird, I've taken down his barrier but my attacks still aren't having much effect.</p>
        <p>And what's worse, it looks like he's charging a special attack.</p>
        <p>I have a theory... and if I'm right I'll need to get creative. Let's see if the enemy has 'frozen' himself to prevent any changes.</p>
      `
    },
    {
      id: 9,
      speaking: '<span class="arr-emph">[arr]</span>thur:',
      description: `
        <p>It's as I thought he's frozen himself - that means no matter what I do I can't change any parameters on him!</p>
        <p>But I've got an idea... if I copy the {obj} of his soul and reassign it to him I can then delete the powerLevel. This is going to be tricky...</p>
      `
    },
    {
      id: 10,
      speaking: '<span class="arr-emph">[arr]</span>thur:',
      description: `
        <p>Nice! with his soul copied and powerLevel deleted, I can start taking him down.</p>
        <p>Wait...what!? Looks like he's flying upwards so he can attack me from a distance</p>
        <p>No chance, I'll use my holy p<span class="arr-emph">[arr]</span>tisan to attack and both disable his flying and lower his level through the power of a for-in loop.</p>
      `
    },
    {
      id: 11,
      speaking: '<span class="arr-emph">[arr]</span>thur:',
      description: `
        <p>Ok, he's on the ropes, It's time to finish this!</p>
        <p>It looks as though he's weak to fire. We're going to use <span class="arr-emph">[arr]</span>cane magic and create an inescapable inferno.</p>
        <p>Let's assign the magic to his own {obj} to get behind his defences and then use a loop to take this guy down<p>
      `
    },
    {
      id: 12,
      speaking: '<span class="arr-emph">[arr]</span>thur:',
      description: `
        <p>Huff, huff...It's over...</p>
        <p>...<span class="arr-emph">[arr]</span>agon...what happened to you?</p>
        <p>I don't know where you are but I'll save you brother. You and all of the kingdom.<p>
      `
    },
    {
      id: 12,
      speaking: '<span class="arr-emph">[arr]</span>thur:',
      description: `
        <p>Huff, huff...It's over...</p>
        <p>...<span class="arr-emph">[arr]</span>agon...what happened to you?</p>
        <p>I don't know where you are but I'll save you brother. You and all of the kingdom.<p>
      `
    },
  ]
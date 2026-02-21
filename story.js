const STORY = {
  start: "intro",
  scenes: {
    intro: {
      messages: [
        { from:"them", text:"Wanna come to the club tonight with me and the girls?" }
      ],
      choices: [
        { text:"Yeah sure, sounds fun 😏", next:"good" },
        { text:"Are the 'girls' hot? 😂", next:"player" },
        { text:"Nah staying in tonight but have fun x", next:"stay" }
      ]
    },

    good: {
      messages:[
        { from:"them", text:"Okayyy. Don’t ditch me when we get there 👀" }
      ],
      choices:[]
    },

    player:{
      messages:[
        { from:"them", text:"Wow 😂 maybe you should stay home actually." }
      ],
      choices:[]
    },

    stay:{
      messages:[
        { from:"them", text:"Alright. Next time then." }
      ],
      choices:[]
    }
  }
};

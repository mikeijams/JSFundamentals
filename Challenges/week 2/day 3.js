let netflix = {
    id: 9,
    likes: 932,
    name: "The Good Place",
    seasonInfo: {
      season1: {
        numberOfEpisodes: 5,
        episodeInfo: [
          { episode: 1, episodeName: "Pilot" },
          { episode: 2, episodeName: "Flying" },
          { episode: 3, episodeName: "Tahani Al-Jamil" },
          { episode: 4, episodeName: "Jason Mendoza" },
          { episode: 5, episodeName: "Category 55 Emergency Doomsday Crisis" }
        ]
      },
      season2: {
        numberOfEpisodes: 6,
        episodeInfo: [
          { episode: 1, episodeName: "Everything is Great!" },
          { episode: 2, episodeName: "Dance Dance Resolution" },
          { episode: 3, episodeName: "Team Cockroach" },
          { episode: 4, episodeName: "Existential Crisis" },
          { episode: 5, episodeName: "The Trolley Problem" },
          { episode: 6, episodeName: "Janet and Michael" }
        ]
      },
      season3: {
        numberOfEpisodes: 5,
        episodeInfo: [
          { episode: 1, episodeName: "Everything Is Bonzer!" },
          { episode: 2, episodeName: "The Brainy Bunch" },
          { episode: 3, episodeName: "The Snowplow" },
          { episode: 4, episodeName: "Jeremy Bearimy" },
          { episode: 5, episodeName: "The Ballad of Donkey Doug" }
        ]
      }
    },
    description: "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good."
  };

  console.log(netflix.description);
  console.log(netflix.seasonInfo.season2.episodeInfo[2].episode, netflix.seasonInfo.season2.episodeInfo[2].episodeName);
  //console.log(Object.values(netflix.seasonInfo.season3.episodeInfo));

  let episodes = netflix.seasonInfo.season3.episodeInfo;
  console.log(episodes);

  //for each
  episodes.forEach(episode => console.log(episode.episodeName));

  //for of loop
  for (episode of episodes) {
      console.log(episode.episodeName);
  }

  function main() {
    let a = 1;
    let b = 2;
    let c = -3;
    mystery(a, b, c);
    mystery(c, 4, a);
    mystery(a + b, b + c, c + a);
  }
  main();
 function mystery(w, z, y) {
 console.log(`${y} + ${w} = ${z}`);
  }

  //functions can be invoked anywhere
  //wyz took abc value because of 'mystery'

  //let string = 'radar'


  function pal(word){
    let revString = word.split('').reverse().join('');
    if (word === revString) {
    console.log('This string is a palindrome');
    } else console.log('this is not a palindrome')
  
  }
  pal('radar');

  

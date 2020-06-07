const generateAbilityScores = () => {

  let numArray = new Array(6)

  for (let i = 0; i < numArray.length; i++) {
    let scores = []
    for (let j = 0; j < 4; j++) {
      const random = Math.floor(Math.random() * 6) + 1
      scores.push(random)
    }
    const minIndex = scores.indexOf(Math.min(...scores));
    scores.splice(minIndex, 1)
    numArray[i] = scores.reduce((acc, el) => acc = el + acc)
  }

  return numArray
}


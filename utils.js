function getRandomArbitrary(min, max) {
    // Generate a random number between min and max (inclusive)
    let randomNumList = []
    for(let i=0;i<5;i++){
        randomNumList.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    let randomNum=randomNumList[Math.floor(Math.random() * (4 - 1 + 1)) + 1]
    
    return randomNum;
  }
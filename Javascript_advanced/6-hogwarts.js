const studentHogwarts = (function () {
    // Private variables
    let privateScore = 0;
    let name = null;
  
    // Private method
    function changeScoreBy(points) {
      privateScore += points;
    }
  
    // Public methods
    return {
      setName(newName) {
        name = newName;
      },
      rewardStudent() {
        changeScoreBy(1);
      },
      penalizeStudent() {
        changeScoreBy(-1);
      },
      getScore() {
        return `${name}: ${privateScore}`;
      },
    };
  })();
  
  // An instance of studentHogwarts for Harry
  const harry = Object.create(studentHogwarts);
  harry.setName('Harry');
  
  // Reward Harry four times
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  

  console.log(harry.getScore());
  
  // An instance of studentHogwarts for Draco
  const draco = Object.create(studentHogwarts);
  draco.setName('Draco');
  
  // Reward Draco one time and penalize three times
  draco.rewardStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  

  console.log(draco.getScore());
  
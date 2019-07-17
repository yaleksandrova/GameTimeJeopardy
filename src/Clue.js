//fetch API => clue class => round 

class Clue {
  constructor(data) {
    this.data = data;
  }

  shuffleCategories() {
    let categories = Object.entries(this.data.categories)
    let random = categories.sort(() => Math.random() - 0.5)
    return random;
  }

  pickCategories() {
    return this.shuffleCategories().splice(0, 4);
  }

  findMatchingQuestions() {
    let allQuestions = [];
    let points = [100, 200, 300, 400];
    let categories = this.pickCategories();
    let clues = this.data.clues;
    let categoryIds = categories.map(category => category[1]);
    categoryIds.map(id => {
      points.forEach(point => {
        allQuestions.push(clues.filter(clue => clue.categoryId === id).find(clue => clue.pointValue === point));
      })
    })

    return allQuestions.sort((a, b) => a.pointValue - b.pointValue);
  } 
}

export default Clue;
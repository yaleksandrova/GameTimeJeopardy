class Clue {
  constructor(data) {
    this.data = data;
  }

  pickCategories() {
    let categories = this.data.categories;
    return Object.entries(categories).splice(0, 4);
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
    console.log(allQuestions)
    return allQuestions;
  } 
}

export default Clue;
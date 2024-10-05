const recipeName = decodeURIComponent(window.location.href.split('=')[1])
const recipeInfo = JSON.parse(localStorage.getItem(recipeName))
const ingredients = recipeInfo['ingredients']
const description = recipeInfo['description']
const instructions = recipeInfo['instructions']
const img = recipeInfo['img']
const votes = recipeInfo['votes']

const title = document.getElementById('title')
const ingredientList = document.getElementById('ingredients')
const descriptionParagraph = document.getElementById('description')
const instructionsList = document.getElementById('instructions')
const hero = document.querySelector('.hero')

title.textContent = recipeName
hero.style.backgroundImage = "url('" + img + "')"

ingredients.forEach(ingredient => {
    const newIngredient = document.createElement('li')
    newIngredient.textContent = ingredient
    ingredientList.appendChild(newIngredient)
});

descriptionParagraph.textContent = description

instructions.forEach(instruction => {
    const newInstruction = document.createElement('p')
    newInstruction.textContent = instruction
    instructionsList.appendChild(newInstruction)
});
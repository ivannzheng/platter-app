function addIngredient() {
    const ingredientsList = document.getElementById('ingredients-list')
    const ingredientInput = document.createElement('input')
    ingredientInput.type = 'text'
    ingredientInput.className = 'ingredient'
    ingredientInput.placeholder = 'Enter ingredient'
    ingredientsList.appendChild(ingredientInput)
}

function addInstruction() {
    const instructionsList = document.getElementById('instructions-list')
    const instructionInput = document.createElement('textarea')
    instructionInput.className = 'instruction'
    instructionInput.rows = 2
    instructionInput.placeholder = 'Enter instruction'
    instructionsList.appendChild(instructionInput)
}

document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault()

    const recipes = JSON.parse(localStorage.getItem('recipes'))

    const recipeName = document.getElementById('recipe-name').value;
    const description = document.getElementById('description').value;
    const ingredients = Array.from(document.querySelectorAll('.ingredient')).map(input => input.value);
    const instructions = Array.from(document.querySelectorAll('.instruction')).map(textarea => textarea.value);

    recipes.push(recipeName)
    newRecipe = {
        ingredients: ingredients,
        description: description,
        instructions: instructions
    }
    localStorage.setItem(recipeName, JSON.stringify(newRecipe))


    window.location.href = 'recipe.html?name=' + recipeName
})
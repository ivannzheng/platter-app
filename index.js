function initializeRecipes() {
    let recipes = JSON.parse(localStorage.getItem('recipes'))
    if (recipes != null) {
        console.log(recipes)
    }
    else {
        recipes = ["recipe1", "recipe2"]
        localStorage.setItem('recipes', JSON.stringify(recipes))
        recipe1 = {
            ingredients: ["ingredient1", "ingredient2"],
            description: "description",
            instructions: ["instruction1", "instruction2"],
            votes: 0
        }
        localStorage.setItem('recipe1', JSON.stringify(recipe1))

        recipe2 = {
            ingredients: ["ingredient1", "ingredient2"],
            description: "description",
            instructions: ["instruction1", "instruction2"],
            votes: 0
        }
        localStorage.setItem('recipe2', JSON.stringify(recipe2))

        recipe = {
            ingredients: ["ingredient1", "ingredient2"],
            description: "description",
            instructions: ["instruction1", "instruction2"],
            votes: 0
        }
        localStorage.setItem('recipe', JSON.stringify(recipe))

    }
}

initializeRecipes()
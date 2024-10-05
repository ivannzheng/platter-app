function initializeRecipes() {
    let recipes = JSON.parse(localStorage.getItem('recipes'))
    if (recipes != null) {
        console.log(recipes)
    }
    else {
        recipes = ["Spaghetti Carbonara", "Avacado Toast"]
        localStorage.setItem('recipes', JSON.stringify(recipes))
        recipe1 = {
            ingredients: ["ingredient1", "ingredient2"],
            description: "description",
            instructions: ["instruction1", "instruction2"],
            votes: 0
        }
        // localStorage.setItem('recipe1', JSON.stringify(recipe1))

        recipe2 = {
            ingredients: ["ingredient1", "ingredient2"],
            description: "description",
            instructions: ["instruction1", "instruction2"],
            votes: 0
        }
        // localStorage.setItem('recipe2', JSON.stringify(recipe2))

        Spaghetti_Carbonara = {
            ingredients: ["400g spaghetti", "150g diced pancetta or guanciale", "2 large eggs", "50g grated Pecorino Romano cheese", "50g grated Parmesean cheese","2 cloves peeled garlic", "Freshly ground black pepper", "Salt", "2 tablespoons olive oil"],
            description: "A decadent Italian classic that marries silky pasta with crispy pancetta, creamy egg, and sharp Pecorino, creating an irresistible harmony of rich, savory flavors",
            instructions: ["Boil salted water and cook spaghetti until al dente."
                ,"In a skillet, cook pancetta or guanciale until crispy, rendering the fat."
                , "Whisk together eggs, Pecorino Romano, and Parmesan in a bowl."
                ,"Add freshly ground black pepper to the egg mixture."
                ,"Reserve 1 cup of pasta water, then drain the pasta."
                ,"Toss the hot spaghetti with the crispy pancetta in the skillet."
                ,"Remove the skillet from heat and pour the egg-cheese mixture over the pasta."
                ,"Stir quickly, adding reserved pasta water as needed for creaminess."
                ,"Serve immediately with extra grated cheese and more black pepper."
                ,"Enjoy your creamy, savory Carbonara!"],
            tags: [],
            img: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-square640-v2.jpg",
            votes: 0
        }
        localStorage.setItem('Spaghetti Carbonara', JSON.stringify(Spaghetti_Carbonara))

        Avocado_Toast = {
            ingredients:["1 ripe avocado", "2 slices of bread", "Salt", "Pepper", "Red Pepper Flakes", "Olive Oil", "Lemon Juice", "Sliced Tomatoes", "Feta cheese", "Arugula", "Fried egg"],
            description:["A vibrant and nourishing dish that combines creamy, ripe avocado spread atop crunchy toasted bread, often enhanced with a sprinkle of salt, pepper, and a drizzle of olive oil, making it the perfect canvas for endless flavorful toppings"],
            instructions:["Toast the bread", "Prepare the Avocado", "Season the Avocado", "Spread the Avocado", "Add Optional Toppings", "Serve and Enjoy!"],
            tags: ["vegan, vegetarian"],
            img: [],
            votes: 0
        }
        localStorage.setItem('Avacado Toast', JSON.stringify(Avocado_Toast))
        
        Protein_Pancakes = {
            ingredients: ["1 cup rolled oats", "1 scoop protein powder", "1 teaspoon baking powder", "1/2 teaspoon cinnamon", "1 large egg", "1 cup milk", "1 teaspoon vanilla extract", "Cooking spray or oil"],
            description: ["Fluffy, delicious stacks of goodness that combine the indulgence of traditional pancakes with a powerful protein boost, making them the perfect fuel for a nutritious breakfast or post-workout treat."],
            instructions: ["Blend oats in a blender or food processor until they reach a flour-like consistency", 
                "In a mixing bowl, combine the oat flour, protein powder, baking powder, and cinnamon", 
                "In a separate bowl, whisk together the egg, milk, and vanilla extract until well combined",
                "Pour the wet mixture into the dry ingredients and stir until just combined. Avoid overmixing; a few lumps are okay",
                "Heat a non-stick skillet or griddle over medium heat and lightly grease with cooking spray or oil",
                "Pour about 1/4 cup of the batter onto the skillet for each pancake. Cook until bubbles form on the surface (about 2-3 minutes), then flip and cook for another 1-2 minutes until golden brown.",
                "Serve the pancakes warm with your favorite toppings, such as fresh fruit, maple syrup, yogurt, or nut butter."
            ],
            tags: ["high protein"],
            img: [],
            votes: 0
        }

        Chicken_Fried_Rice = {
            ingredients: [
                "2 cups cooked rice (preferably day-old for best texture)",
                "1 cup cooked chicken, diced or shredded (leftover rotisserie chicken works great)",
                "2 large eggs",
                "2 tablespoons vegetable oil (or sesame oil for added flavor)",
                "1/2 cup onion, finely chopped",
                "1/2 cup frozen peas and carrots (or mixed vegetables of choice)",
                "2-3 green onions, sliced",
                "2-3 tablespoons soy sauce (adjust to taste)",
                "Salt and pepper (to taste)",
                "Optional: garlic, minced (1 clove)",
                "Optional: ginger, minced (1 teaspoon)]",],
            description: ["a savory, colorful dish where tender chicken and fluffy scrambled eggs mingle with vibrant vegetables and perfectly cooked rice, creating a satisfying meal that’s both comforting and bursting with flavor."],
            instructions: ["If using freshly cooked rice, spread it out on a baking sheet to cool and dry out a bit. Day-old rice works best as it’s less sticky.",                "In a small bowl, whisk the eggs with a pinch of salt.", "Heat 1 tablespoon of oil in a large skillet or wok over medium heat. Add the eggs and scramble until fully cooked. Remove from the pan and set aside.",
                "In the same skillet, add the remaining tablespoon of oil. Add the chopped onion (and garlic and ginger if using) and sauté until the onion is translucent.",
                "Add the frozen peas and carrots (or other vegetables) and cook for 2-3 minutes until heated through.",
                "Add the cooked chicken to the skillet and stir until heated through.",
                "Add the cooked rice, breaking up any clumps. Stir-fry for about 3-4 minutes until the rice is heated and slightly crispy.",
                "Add the scrambled eggs back to the skillet along with the soy sauce. Stir everything together to combine, and season with salt and pepper to taste.",
                "Add the sliced green onions and stir for another minute. Serve hot as a side dish or main course."],
            tags: [],
            img: [],
            votes: 0
        

            
        }
        Mango_Parfait = {
            ingredients: ["2 ripe mangoes, peeled and diced",
            "2 cups Greek yogurt (plain or flavored, such as vanilla)",
            "1 cup granola (store-bought or homemade)",
            "1-2 tablespoons honey or maple syrup (optional, for sweetness)",
            "Mint leaves (for garnish, optional)"],
            description: ["A vibrant and refreshing delight, layering luscious, sweet mangoes with creamy Greek yogurt and crunchy granola, creating a beautiful and satisfying treat that bursts with tropical flavor in every bite."],
            instructions: ["Peel and dice the ripe mangoes into small cubes.",
                "If desired, sweeten the Greek yogurt with honey or maple syrup, mixing until smooth.",
                "In serving glasses or bowls, layer the ingredients starting with a layer of Greek yogurt, followed by a layer of diced mangoes, and then a layer of granola.",
                "Repeat the layers until the glasses are filled, finishing with a layer of mango on top.",
                "Garnish with a sprig of mint if desired. Serve immediately for a fresh and delicious treat!",
                ],
            tags: [],
            img: [],
            votes: 0
        }

        Fried_Chicken = {
            ingredients: ["4 pieces of chicken (legs, thighs, breasts, or a mix)",
"2 cups buttermilk (or regular milk with 2 tablespoons of vinegar or lemon juice)",
"2 cups all-purpose flour",
"1 tablespoon garlic powder",
"1 tablespoon onion powder",
"1 tablespoon paprika",
"1 teaspoon cayenne pepper (optional, for heat)",
"1 teaspoon salt (adjust to taste)",
"1 teaspoon black pepper",
"Vegetable oil (for frying)",],
            description: ["a mouthwatering Southern delight, featuring juicy, tender chicken coated in a crispy, golden-brown batter, delivering a satisfying crunch and savory flavor in every bite."],
            instructions: ["In a large bowl or zip-top bag, combine the chicken pieces and buttermilk. Ensure the chicken is fully submerged. Marinate for at least 2 hours or overnight in the refrigerator for best flavor and tenderness.",
"In a shallow dish, combine the flour, garlic powder, onion powder, paprika, cayenne pepper, salt, and black pepper. Mix well.",
"Remove the chicken pieces from the buttermilk, allowing excess to drip off. Dredge each piece in the flour mixture, ensuring it is evenly coated. Shake off any excess flour.",
"In a large, deep skillet or Dutch oven, heat about 1 inch of vegetable oil over medium-high heat (approximately 350°F or 175°C). You can test the oil by dropping a small amount of flour into it; if it sizzles, its ready.",
"Carefully add the coated chicken pieces to the hot oil, skin-side down. Fry in batches if necessary to avoid overcrowding. Cook for about 10-15 minutes on each side, or until the chicken is golden brown and reaches an internal temperature of 165°F (75°C).",
"Once cooked, remove the chicken from the oil and place it on a plate lined with paper towels to drain excess oil."],
            tags: [],
            img: [],
            votes: 0
            }
    }
}

function showRecipes() {
    recipes = JSON.parse(localStorage.getItem('recipes'))

    const bigContainer = document.getElementById('bigContainer')

    let container
    let newContainer
    let recipeContainers
    let newName
    let newImg

    for (let i = 0; i < Math.floor(recipes.length / 2); i++) {
        left = i * 2
        right = i * 2 + 1

        container = document.getElementById('firstRow')
        newContainer = container.cloneNode(true)

        recipeContainers = newContainer.querySelectorAll('.recipe-image-container')

        newName = recipes[left]
        recipeContainers[0].setAttribute('onclick', 'goRecipe("' + newName + '")')
        console.log(recipeContainers[0])
        newImg = JSON.parse(localStorage.getItem(newName))['img']
        recipeContainers[0].querySelector('img').src = newImg
        recipeContainers[0].querySelector('div').textContent = newName

        if (right < recipes.length) {
            newName = recipes[right]
            newImg = JSON.parse(localStorage.getItem(newName))['img']
            recipeContainers[1].querySelector('img').src = newImg
            recipeContainers[1].querySelector('div').textContent = newName
        }

        bigContainer.appendChild(newContainer)
    }
}

function goRecipe(recipeURL) {
    window.location.href = 'recipe.html?name=' + encodeURIComponent(recipeURL)
}

initializeRecipes()
showRecipes()
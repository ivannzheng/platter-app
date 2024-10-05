function initializeRecipes() {
    let recipes = JSON.parse(localStorage.getItem('recipes'))
    if (recipes != null) {
        console.log(recipes)
    }
    else {
        recipes = ["Thai Yellow Curry", "Korean Fried Chicken", "Mac and Cheese", "Beef and Broccoli", "Spaghetti Carbonara", "Avocado Toast", "Protein Pancakes", "Chicken Fried Rice", "Mango Parfait", "Southern Fried Chicken"]
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
        Thai_Yellow_Curry = {
            ingredients: [
                "1 tablespoon coriander seeds",
                "1 teaspoon cumin seeds",
                "1 teaspoon turmeric powder",
                "1 teaspoon black peppercorns",
                "1-2 dried red chilies (adjust to taste)",
                "4-5 cloves garlic, minced",
                "1-inch piece of ginger, peeled and chopped",
                "1 stalk of lemongrass, finely chopped (white part only)",
                "Zest of 1 lime",
                "1 tablespoon fish sauce (or soy sauce for a vegetarian option)",

                "1 tablespoon vegetable oil",
                "1 onion, sliced",
                "1 bell pepper (red or yellow), sliced",
                "1-2 cups vegetables (carrots, zucchini, or eggplant), chopped",
                "1 can (13.5 oz) coconut milk",
                "1-2 cups protein (chicken, tofu, or shrimp), cubed",
                "Fresh basil leaves for garnish",
                "Lime wedges for serving",
                "Cooked rice (for serving)"],
            description: ["A creamy, aromatic dish featuring a blend of spices, coconut milk, and your choice of protein and vegetables, served with rice for a comforting and flavorful experience"],
            instructions: [
                "In a dry skillet, toast the coriander and cumin seeds until fragrant. Let them cool, then grind to a powder.",
                "In a food processor, combine the ground spices, turmeric, black peppercorns, dried chilies, garlic, ginger, lemongrass, lime zest, and fish sauce. Blend until you get a smooth paste, adding a little water if needed.",
                "Heat the vegetable oil in a large pot over medium heat. Add the sliced onion and cook until softened.",
                "Stir in the curry paste and cook for about 2-3 minutes until fragrant.",
                "Add the bell pepper and other vegetables, stirring to coat them in the paste.",
                "Pour in the coconut milk and bring to a simmer. Add the protein of your choice and cook until fully cooked (about 5-10 minutes for chicken or tofu, 2-3 minutes for shrimp).",
                "Taste the curry and adjust the seasoning with more fish sauce or a pinch of sugar if needed.",
                "Serve the curry hot, garnished with fresh basil leaves and lime wedges on the side. Enjoy it with steamed rice."],
            tags: [],
            img: "https://www.sandravalvassori.com/wp-content/uploads/2022/03/Thai-yellow-curry-chicken-10925-2.jpg",
            votes: 0
        }

        localStorage.setItem('Thai Yellow Curry', JSON.stringify(Thai_Yellow_Curry))

        Korean_Fried_Chicken = {
            ingredients: [
                "2 lbs chicken wings or drumsticks",
                "1 cup all-purpose flour",
                "1/2 cup cornstarch",
                "1 teaspoon baking powder",
                "1 teaspoon salt",
                "1/2 teaspoon black pepper",
                "1/2 teaspoon garlic powder",
                "1/2 teaspoon onion powder",
                "Oil for frying",

                "1/4 cup gochujang (Korean chili paste)",
                "1/4 cup soy sauce",
                "1/4 cup honey or brown sugar",
                "2 tablespoons rice vinegar",
                "2 cloves garlic, minced",
                "1 teaspoon sesame oil",
                "1 teaspoon grated ginger",
                "Sesame seeds and chopped green onions for garnish"],
            description: ["A mouthwatering delight, featuring irresistibly crispy, golden-brown chicken coated in a sticky, spicy-sweet sauce that tantalizes your taste buds and leaves you craving more."],
            instructions: [
                "Rinse the chicken pieces and pat them dry with paper towels. This helps achieve maximum crispiness.",
                "In a bowl, mix together the flour, cornstarch, baking powder, salt, black pepper, garlic powder, and onion powder.",
                "Dredge each piece of chicken in the flour mixture, shaking off the excess. For extra crispiness, you can double-dip: dip the coated chicken back into a bit of water and then again into the flour mixture.",
                "Heat oil in a deep fryer or large pot to 350°F (175°C). Fry the chicken in batches, making sure not to overcrowd the pot. Cook for about 10-12 minutes until golden brown and crispy. Remove and drain on paper towels.",
                "In a saucepan, combine gochujang, soy sauce, honey (or brown sugar), rice vinegar, minced garlic, sesame oil, and grated ginger. Cook over medium heat, stirring until well combined and slightly thickened, about 3-5 minutes.",
                "In a large bowl, toss the fried chicken with the sauce until well coated.",
                "Garnish with sesame seeds and chopped green onions. Serve immediately and enjoy your delicious Korean Fried Chicken!"],
            tags: [],
            img: "https://www.andy-cooks.com/cdn/shop/articles/20230826032636-andy-20cooks-20-20korean-20fried-20chicken.jpg?v=1693088250",
            votes: 0
        }

        localStorage.setItem('Korean Fried Chicken', JSON.stringify(Korean_Fried_Chicken))

        Mac_and_Cheese = {
            ingredients: [
                "8 oz elbow macaroni (or your favorite pasta)",
                "Salt (for boiling water)",
                "2 tablespoons butter",
                "2 tablespoons all-purpose flour",
                "2 cups milk (whole or 2%)",
                "2 cups shredded sharp cheddar cheese",
                "1 cup shredded mozzarella cheese",
                "1 teaspoon mustard powder (optional)",
                "1/2 teaspoon garlic powder",
                "1/2 teaspoon onion powder",
                "Salt and pepper to taste",
                "1/2 cup breadcrumbs",
                "2 tablespoons melted butter",
                "1/4 cup grated Parmesan cheese"],
            description: ["Savor the irresistible allure of Mac and Cheese, where tender pasta is enveloped in a rich, creamy cheese sauce, delivering pure comfort and nostalgia in every delectable bite."],
            instructions: [
                "In a large pot, bring salted water to a boil. Add the elbow macaroni and cook according to package instructions until al dente. Drain and set aside.",

                "In a large saucepan, melt the butter over medium heat. Add the flour and whisk constantly for about 1-2 minutes until it forms a paste (roux).",
                "Gradually add the milk, whisking continuously until the mixture is smooth and starts to thicken (about 5 minutes).",
                "Reduce the heat to low, then stir in the shredded cheddar and mozzarella cheeses until melted and creamy. Add the mustard powder, garlic powder, onion powder, salt, and pepper. Adjust seasoning to taste.",

                "Add the cooked macaroni to the cheese sauce, stirring until well coated.",

                "If using, preheat the oven to 350°F (175°C). In a small bowl, mix the breadcrumbs with melted butter and Parmesan cheese. Sprinkle this mixture over the mac and cheese in a baking dish.",

                "Bake in the preheated oven for 20-25 minutes, or until bubbly and golden brown on top.",

                "Let it cool for a few minutes before serving. Enjoy your creamy, cheesy Mac and Cheese!"],
            tags: [],
            img: "https://bakewithzoha.com/wp-content/uploads/2023/11/baked-mac-and-cheese-featured.jpg",
            votes: 0
        }
        localStorage.setItem('Mac and Cheese', JSON.stringify(Mac_and_Cheese))

        Beef_and_Broccoli = {
            ingredients: [
                "1 lb beef (flank steak or sirloin), thinly sliced against the grain",
                "2 tablespoons soy sauce",
                "1 tablespoon cornstarch",
                "1 tablespoon vegetable oil",
                "2 cups broccoli florets",
                "2 tablespoons vegetable oil",
                "3 cloves garlic, minced",
                "1-inch piece of ginger, minced",
                "1/2 cup beef broth (or water)",
                "2 tablespoons soy sauce",
                "1 tablespoon oyster sauce (optional)",
                "1 tablespoon rice vinegar",
                "1 teaspoon sesame oil",
                "Cooked rice for serving"],
            description: ["Tender slices of beef are stir-fried to perfection with vibrant, crisp broccoli in a rich, flavorful sauce that brings a taste of Chinese cuisine to your table."],
            instructions: [
                "In a bowl, combine the sliced beef, soy sauce, cornstarch, and vegetable oil. Mix well and let it marinate for at least 15 minutes.",

                "In a pot of boiling water, blanch the broccoli florets for about 2 minutes until bright green and slightly tender. Drain and set aside.",

                "In a large skillet or wok, heat 2 tablespoons of vegetable oil over high heat. Add the marinated beef in a single layer and stir-fry for 2-3 minutes until browned but not fully cooked. Remove and set aside.",

                "In the same skillet, add a bit more oil if needed, then stir-fry the garlic and ginger for about 30 seconds until fragrant. Add the blanched broccoli and stir-fry for another 1-2 minutes.",

                "Return the beef to the skillet and pour in the beef broth, soy sauce, oyster sauce (if using), rice vinegar, and sesame oil. Stir everything together and cook for another 2-3 minutes until the beef is cooked through and the sauce thickens slightly.",

                "Serve hot over cooked rice and enjoy your delicious Beef and Broccoli!"],
            tags: [],
            img: "https://www.smalltownwoman.com/wp-content/uploads/2019/10/Beef-and-Broccoli-Recipe-Card.jpg",
            votes: 0
        }
        localStorage.setItem('Beef and Broccoli', JSON.stringify(Beef_and_Broccoli))

        
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
            votes: 3242
        }
        localStorage.setItem('Spaghetti Carbonara', JSON.stringify(Spaghetti_Carbonara))

        Avocado_Toast = {
            ingredients:["1 ripe avocado", "2 slices of bread", "Salt", "Pepper", "Red Pepper Flakes", "Olive Oil", "Lemon Juice", "Sliced Tomatoes", "Feta cheese", "Arugula", "Fried egg"],
            description:["A vibrant and nourishing dish that combines creamy, ripe avocado spread atop crunchy toasted bread, often enhanced with a sprinkle of salt, pepper, and a drizzle of olive oil, making it the perfect canvas for endless flavorful toppings"],
            instructions:["Toast the bread", "Prepare the Avocado", "Season the Avocado", "Spread the Avocado", "Add Optional Toppings", "Serve and Enjoy!"],
            tags: ["vegan, vegetarian"],
            img: "https://californiaavocado.com/wp-content/uploads/2020/07/California-Avocado-Toast-Three-Ways-768x532.jpeg",
            votes: 0
        }
        localStorage.setItem('Avocado Toast', JSON.stringify(Avocado_Toast))
        
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
            img: "https://pinchofyum.com/wp-content/uploads/Protein-Pancakes-Recipe.jpg",
            votes: 0
        }
        localStorage.setItem('Protein Pancakes', JSON.stringify(Protein_Pancakes))


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
            img: "https://houseofnasheats.com/wp-content/uploads/2023/01/Chicken-Fried-Rice-Recipe-Square-1.jpg",
            votes: 0
            }
        localStorage.setItem('Chicken Fried Rice', JSON.stringify(Chicken_Fried_Rice))


            
        
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
            img: "https://www.marthastewart.com/thmb/2bYliWqldduPXbsxJW8O2l1y6Gg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/med105471_0410_mango_parfait_vert-91ac192c24614d91be03c09fb32b44bc.jpg",
            votes: 0
        }
        localStorage.setItem('Mango Parfait', JSON.stringify(Mango_Parfait))

        Southern_Fried_Chicken = {
            ingredients: [
                "4 pieces of chicken (legs, thighs, breasts, or a mix)",
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
            instructions: [
                "In a large bowl or zip-top bag, combine the chicken pieces and buttermilk. Ensure the chicken is fully submerged. Marinate for at least 2 hours or overnight in the refrigerator for best flavor and tenderness.",
                "In a shallow dish, combine the flour, garlic powder, onion powder, paprika, cayenne pepper, salt, and black pepper. Mix well.",
                "Remove the chicken pieces from the buttermilk, allowing excess to drip off. Dredge each piece in the flour mixture, ensuring it is evenly coated. Shake off any excess flour.",
                "In a large, deep skillet or Dutch oven, heat about 1 inch of vegetable oil over medium-high heat (approximately 350°F or 175°C). You can test the oil by dropping a small amount of flour into it; if it sizzles, its ready.",
                "Carefully add the coated chicken pieces to the hot oil, skin-side down. Fry in batches if necessary to avoid overcrowding. Cook for about 10-15 minutes on each side, or until the chicken is golden brown and reaches an internal temperature of 165°F (75°C).",
                "Once cooked, remove the chicken from the oil and place it on a plate lined with paper towels to drain excess oil."],
            tags: [],
            img: "https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/50/69/49/picmuqFf3.jpg",
            votes: 0
            }
            localStorage.setItem('Southern Fried Chicken', JSON.stringify(Southern_Fried_Chicken))

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

        console.log(recipes.length)
        console.log(i)
        console.log("left " + left)
        newName = recipes[left]
        console.log(newName)
        recipeContainers[0].setAttribute('onclick', 'goRecipe("' + newName + '")')
        newImg = JSON.parse(localStorage.getItem(newName))['img']
        recipeContainers[0].querySelector('img').src = newImg
        recipeContainers[0].querySelector('div').textContent = newName

        if (right < recipes.length) {
            newName = recipes[right]
            recipeContainers[1].setAttribute('onclick', 'goRecipe("' + newName + '")')
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
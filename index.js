function initializeRecipes() {
    let recipes = JSON.parse(localStorage.getItem('recipes'))
    if (recipes != null) {
        console.log(recipes)
    }
    else {
        recipes = ["Thai Yellow Curry", "Korean Fried Chicken", "Mac and Cheese", "Beef and Broccoli", "Spaghetti Carbonara", "Avocado Toast",]
        // recipes = ["Thai Yellow Curry", "Korean Fried Chicken", "Mac and Cheese", "Beef and Broccoli", "Spaghetti Carbonara", "Avocado Toast", "Protein Pancakes", "Chicken Fried Rice", "Mango Parfait", "Southern Fried Chicken", "Whipped Up the Most Amazing Beef Pho! 🍜🔥", "Just Made the Most Amazing Jerk Oxtail! 🌶️🍖", "Some Bussin Pan-Fried Salmon! 🐟🔥"]
        localStorage.setItem('recipes', JSON.stringify(recipes))
        console.log(recipes)
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


            
        
        // Mango_Parfait = {
        //     ingredients: ["2 ripe mangoes, peeled and diced",
        //         "2 cups Greek yogurt (plain or flavored, such as vanilla)",
        //         "1 cup granola (store-bought or homemade)",
        //         "1-2 tablespoons honey or maple syrup (optional, for sweetness)",
        //         "Mint leaves (for garnish, optional)"],
        //     description: ["A vibrant and refreshing delight, layering luscious, sweet mangoes with creamy Greek yogurt and crunchy granola, creating a beautiful and satisfying treat that bursts with tropical flavor in every bite."],
        //     instructions: ["Peel and dice the ripe mangoes into small cubes.",
        //         "If desired, sweeten the Greek yogurt with honey or maple syrup, mixing until smooth.",
        //         "In serving glasses or bowls, layer the ingredients starting with a layer of Greek yogurt, followed by a layer of diced mangoes, and then a layer of granola.",
        //         "Repeat the layers until the glasses are filled, finishing with a layer of mango on top.",
        //         "Garnish with a sprig of mint if desired. Serve immediately for a fresh and delicious treat!",
        //         ],
        //     tags: [],
        //     img: "https://www.marthastewart.com/thmb/2bYliWqldduPXbsxJW8O2l1y6Gg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/med105471_0410_mango_parfait_vert-91ac192c24614d91be03c09fb32b44bc.jpg",
        //     votes: 0
        // }
        // localStorage.setItem('Mango Parfait', JSON.stringify(Mango_Parfait))

        // Southern_Fried_Chicken = {
        //     ingredients: [
        //         "4 pieces of chicken (legs, thighs, breasts, or a mix)",
        //         "2 cups buttermilk (or regular milk with 2 tablespoons of vinegar or lemon juice)",
        //         "2 cups all-purpose flour",
        //         "1 tablespoon garlic powder",
        //         "1 tablespoon onion powder",
        //         "1 tablespoon paprika",
        //         "1 teaspoon cayenne pepper (optional, for heat)",
        //         "1 teaspoon salt (adjust to taste)",
        //         "1 teaspoon black pepper",
        //         "Vegetable oil (for frying)",],
        //     description: ["a mouthwatering Southern delight, featuring juicy, tender chicken coated in a crispy, golden-brown batter, delivering a satisfying crunch and savory flavor in every bite."],
        //     instructions: [
        //         "In a large bowl or zip-top bag, combine the chicken pieces and buttermilk. Ensure the chicken is fully submerged. Marinate for at least 2 hours or overnight in the refrigerator for best flavor and tenderness.",
        //         "In a shallow dish, combine the flour, garlic powder, onion powder, paprika, cayenne pepper, salt, and black pepper. Mix well.",
        //         "Remove the chicken pieces from the buttermilk, allowing excess to drip off. Dredge each piece in the flour mixture, ensuring it is evenly coated. Shake off any excess flour.",
        //         "In a large, deep skillet or Dutch oven, heat about 1 inch of vegetable oil over medium-high heat (approximately 350°F or 175°C). You can test the oil by dropping a small amount of flour into it; if it sizzles, its ready.",
        //         "Carefully add the coated chicken pieces to the hot oil, skin-side down. Fry in batches if necessary to avoid overcrowding. Cook for about 10-15 minutes on each side, or until the chicken is golden brown and reaches an internal temperature of 165°F (75°C).",
        //         "Once cooked, remove the chicken from the oil and place it on a plate lined with paper towels to drain excess oil."],
        //     tags: [],
        //     img: "https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/50/69/49/picmuqFf3.jpg",
        //     votes: 0
        // }
        // localStorage.setItem('Southern Fried Chicken', JSON.stringify(Southern_Fried_Chicken))


        // community recipes
        // Beef_Pho = {
        //     ingredients: ["500ml store-bought beef bone broth",
        //         "2 cloves", 
        //         "1 cinnamon stick", 
        //         "2 star anise",
        //         "6 coriander seeds",
        //         "4 slices of ginger",
        //         "2 cloves of garlic",
        //         "1-2 tablespoons of  fish sauce",
        //         "1-2 tablespoons of lime juice + a wedge of lime to garnish",
        //         "1 teaspoons of sugar",
        //         "Rice noodles (I use Zero Carb noodles because I am counting calories)",
        //         "200g sirloin steak, very thinly sliced",
        //         "Handful of beansprouts",
        //         "2 scallions or spring onions, chopped",
        //         "2/3 leaves of lettuce, torn",
        //         "A handful of Celery leaves, torn",
        //         "Handful of herbs such as coriander, mint and Thai basil",
        //         "Thinly sliced red chili, however spicy you want it"],
        //     description: ["After a long-weekend in Hanoi when I ate pho literally three times a day, I was determined to find a way to recreate this delicious pho soup of Vietnam in my kitchen without having to spend five hours slaving over the soup. So I created this kitchen hack - quick and easy pho recipe that's fire"],
        //     instructions: [
        //         "Place the beef stock in a pot with the spices and garlic. Slowly heat so that the aromas are released. Cover and simmer for 10 minutes being careful not to let the stock reduce too much. Add a cup of water if needed.",
        //         "Meanwhile, cook the noodles according to the packet instructions.  Once cooked, assemble your individual bowls with noodles, meat and garnishes as per the photo below. ",
        //         "Season the soup with lime, sugar and fish sauce, according to your taste. ",
        //         "Pour the hot soup through a fine mesh sieve directly over the ingredients. Make sure the soup is piping hot so that it will cook the meat. ",
        //         "Serve with a wedge of lime and garnish with the herbs. ",
        //         "Place the noodles, meat and vegetables in individual bowls.",
        //         "Note - if you are uncomfortable cooking meat in the soup then I would suggest sous-viding it at 120F or 50C for 45 minutes beforehand. ",
        //         "Pour the piping hot soup into each bow through a fine mesh sieve so as to catch the spices.",
        //         "Garnish each bowl of beef pho with the fresh herbs and serve a wedge of lime. Serve immediately. "],
        //     tags: [],
        //     img: "https://images.squarespace-cdn.com/content/v1/5fc09ac511f6a419848436ea/1610669592660-2X6TMRUR1AXCZDDDC0U4/easy-beef-pho.jpeg?format=1500w",
        //     votes: 0
        // }
        // localStorage.setItem('Whipped Up the Most Amazing Beef Pho! 🍜🔥', JSON.stringify(Beef_Pho))

        // Jerk_Oxtail = {
        //     ingredients: ["For the Marinade:",
        //         "2 lbs oxtail, cut into chunks",
        //         "4-5 scallions, chopped",
        //         "1 small onion, chopped",
        //         "3-4 cloves garlic, minced",
        //         "1-2 Scotch bonnet peppers (adjust to taste), chopped",
        //         "2 tbsp fresh thyme (or 1 tbsp dried)",
        //         "2 tbsp allspice (pimento) berries or ground allspice",
        //         "1 tsp cinnamon",
        //         "1 tsp nutmeg",
        //         "2 tbsp soy sauce",
        //         "2 tbsp brown sugar",
        //         "Juice of 1 lime",
        //         "Salt and pepper to taste",
        //         "For Cooking:",
        //         "2 cups beef or chicken broth",
        //         "1 can coconut milk (optional for richness)",
        //         "2 bay leaves"],
        //     description: ["Hey everyone! I just cooked up a batch of jerk oxtail, and let me tell you, it was out of this world! I had to share the recipe because it's a game changer. If you're a fan of bold flavors, this one’s for you."],
        //     instructions: ["Marinate the Oxtail: In a bowl, combine all the marinade ingredients. Toss the oxtail in there, making sure every piece is coated. Cover and refrigerate for at least 4 hours, but overnight is even better if you can swing it!",
        //         "Sear the Oxtail: Heat a large pot or Dutch oven over medium-high heat. Add a bit of oil and sear the marinated oxtail until browned on all sides. This step adds tons of flavor!",
        //         "Add Liquid: Once browned, add the broth, coconut milk (if using), and bay leaves. Bring to a boil, then reduce the heat to low.",
        //         "Simmer: Cover and let it simmer for about 2.5 to 3 hours, or until the oxtail is tender and falling off the bone. You might want to stir occasionally and check the liquid levels. If it gets too low, just add a splash more broth or water.",
        //         "Serve: I served mine over rice and peas, but you could also pair it with some fried plantains or a simple salad. The sauce is incredible, so don’t skip on that!"],
        //     tags: [],
        //     img: "https://i.redd.it/kaghi6m35vt31.jpg",
        //     votes: 0
        // }
        // localStorage.setItem('Just Made the Most Amazing Jerk Oxtail! 🌶️🍖', JSON.stringify(Jerk_Oxtail))

        // Pan_Fried_Salmon = {
        //     ingredients: ["2 salmon fillets (skin-on for extra crispiness)",
        //         "Salt and pepper, to taste",
        //         "1-2 tablespoons olive oil or butter",
        //         "1 lemon (zested and juiced)",
        //         "2 cloves garlic, minced",
        //         "Fresh herbs (like dill or parsley), for garnish",
        //         "Optional: a pinch of red pepper flakes for some heat"],
        //     description: ["Just cooked up a pan-fried salmon dish that turned out absolutely amazing, and I couldn't resist sharing the recipe with you all. If you love a quick, flavorful dinner, this one’s a must-try!"],
        //     instructions: ["Prepare the Salmon: Pat the salmon fillets dry with paper towels. Season both sides generously with salt and pepper.",
        //         "Heat the Pan: In a large skillet, heat the olive oil or butter over medium-high heat. You want it hot enough to get a good sear but not so hot that it smokes.",
        //         "Cook the Salmon: Place the salmon fillets skin-side down in the pan. Press down gently with a spatula for a few seconds to ensure the skin gets crispy. Cook for about 4-5 minutes, until the skin is golden brown and crispy.",
        //         "Flip and Flavor: Carefully flip the fillets and add the minced garlic to the pan. Cook for another 3-4 minutes, basting the salmon with the oil or butter. Squeeze in the lemon juice and add the lemon zest during the last minute of cooking for extra flavor.",
        //         "Serve: Once cooked through (it should flake easily with a fork), remove the salmon from the pan. Garnish with fresh herbs and, if you like, a sprinkle of red pepper flakes for a little kick."],
        //     tags: ["vegetarian"],
        //     img: ["https://stripedspatula.com/wp-content/uploads/2020/08/pan-seared-salmon-4.jpg"],
        //     votes: 0
        // }
        // localStorage.setItem('Some Bussin Pan-Fried Salmon! 🐟🔥', JSON.stringify(Pan_Fried_Salmon))

        // California_Roll = {
        //     ingredients: ["For the Sushi Rice:",
        //         "1 cup sushi rice",
        //         "1 ¼ cups water",
        //         "2 tbsp rice vinegar",
        //         "1 tbsp sugar",
        //         "½ tsp salt",
        //         "For the Rolls:",
        //         "4 sheets nori (seaweed)",
        //         "1 ripe avocado, sliced",
        //         "1 cucumber, julienned",
        //         "½ cup imitation crab (or real crab if you’re feeling fancy)",
        //         "Soy sauce, for dipping",
        //         "Pickled ginger and wasabi, for serving (optional)"],
        //     description: ["Hey foodies! I had a sushi night at home and whipped up some delicious California rolls that turned out amazing! 🥑🍚 If you’re looking to impress your friends or just treat yourself, this is the way to go. Here’s how I made them!"],
        //     instructions: ["Prepare the Sushi Rice: Rinse the sushi rice under cold water until the water runs clear. Combine rice and water in a pot, bring to a boil, then reduce to low, cover, and simmer for about 18-20 minutes. Once done, let it sit for 10 minutes off the heat.",
        //         "Season the Rice: In a small bowl, mix rice vinegar, sugar, and salt until dissolved. Gently fold this mixture into the cooked rice and let it cool.",
        //         "Assemble the Rolls: Place a sheet of nori on a bamboo sushi mat (shiny side down). Wet your hands to prevent sticking and grab a handful of rice. Spread it evenly over the nori, leaving a 1-inch border at the top.",
        //         "Add Fillings: Lay slices of avocado, cucumber, and imitation crab in a line across the center of the rice.",
        //         "Roll It Up: Using the mat, carefully roll the sushi away from you, pressing gently but firmly. Seal the edge with a little water.",
        //         "Slice and Serve: With a sharp knife, slice the roll into bite-sized pieces. Serve with soy sauce, pickled ginger, and wasabi."],
        //     tags: [],
        //     img: ["https://feedmebetter.com/wp-content/uploads/2024/03/California-Roll-Recipe.jpg"],
        //     votes: 0

        // }

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

    for (let i = 0; i < Math.ceil(recipes.length / 2); i++) {
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

    container.style.display = 'none'
}

function goRecipe(recipeURL) {
    window.location.href = 'recipe.html?name=' + encodeURIComponent(recipeURL)
}

const sameButton = document.getElementById('featured-btn')  
sameButton.onclick = function() {
    location.reload()
}

initializeRecipes()
showRecipes()

const searchInput = document.getElementById('searchInput');
const dropdown = document.getElementById('dropdown');

recipes = JSON.parse(localStorage.getItem('recipes'))
recipes.forEach(recipe => {
    recipeItem = document.createElement('div')
    recipeItem.classList.add('dropdown-item')
    recipeItem.textContent = recipe
    recipeItem.style.display = 'none'
    recipeItem.setAttribute('onclick', 'goRecipe("' + recipeItem.textContent + '")')
    dropdown.appendChild(recipeItem)
});
items = document.querySelectorAll('.dropdown-item')

searchInput.addEventListener('input', function() {
    // Show the dropdown when there is input
    if (searchInput.value) {    
        dropdown.style.display = 'block';
        items.forEach(item => {
            if (item.textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
                item.style.display = 'block'
            }
            else {
                item.style.display = 'none'
            }
        })
    } else {
        dropdown.style.display = 'none'; // Hide dropdown if input is empty
    }
});


document.addEventListener('click', function(event) {
    if (!searchInput.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none'; // Hide dropdown
    }
});

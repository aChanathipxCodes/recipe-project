const recipes = [
    {
      id: 1,
      title: "Pad Thai",
      image: "images/padthai.jpg",
      category: "thai",
      ingredients: ["Rice noodles", "Tofu", "Shrimp", "Bean sprouts", "Peanuts"],
      steps: [
        "Soak rice noodles until soft.",
        "Stir-fry tofu and shrimp.",
        "Add noodles and sauce.",
        "Mix in bean sprouts and peanuts."
      ]
    },
    {
      id: 2,
      title: "Sushi",
      image: "images/sushi.jpg",
      category: "japanese",
      ingredients: ["Sushi rice", "Nori", "Fresh fish", "Soy sauce", "Wasabi"],
      steps: [
        "Cook and season sushi rice.",
        "Place nori on mat and add rice.",
        "Add fish and roll tightly.",
        "Slice and serve with soy sauce."
      ]
    },
    {
      id: 3,
      title: "Spaghetti Carbonara",
      image: "images/carbonara.jpg",
      category: "italian",
      ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan", "Black pepper"],
      steps: [
        "Cook spaghetti until al dente.",
        "Fry pancetta until crispy.",
        "Mix eggs and cheese in bowl.",
        "Combine everything off the heat."
      ]
    },
    {
      id: 4,
      title: "Chinese Noodles",
      image: "images/noodles.jpg",
      category: "chinese",
      ingredients: ["Egg noodles", "Soy sauce", "Vegetables", "Garlic", "Sesame oil"],
      steps: [
        "Boil noodles until cooked.",
        "Stir-fry vegetables and garlic.",
        "Add noodles and soy sauce.",
        "Toss with sesame oil."
      ]
    },
    {
      id: 5,
      title: "Tom Yam Kung",
      image: "images/tomyam.jpg",
      category: "thai",
      ingredients: ["Shrimp", "Lemongrass", "Galangal", "Chili", "Lime juice"],
      steps: [
        "Boil herbs in water.",
        "Add shrimp and cook.",
        "Season with chili and lime juice.",
        "Serve hot."
      ]
    },
    {
      id: 6,
      title: "Ramen",
      image: "images/ramen.jpg",
      category: "japanese",
      ingredients: ["Ramen noodles", "Broth", "Egg", "Pork", "Green onions"],
      steps: [
        "Prepare broth.",
        "Boil noodles separately.",
        "Add noodles to bowl and pour broth.",
        "Top with pork, egg, and onions."
      ]
    },
    {
      id: 7,
      title: "Pizza",
      image: "images/pizza.jpg",
      category: "italian",
      ingredients: ["Pizza dough", "Tomato sauce", "Cheese", "Toppings"],
      steps: [
        "Spread sauce on dough.",
        "Add cheese and toppings.",
        "Bake until crust is golden.",
        "Slice and serve."
      ]
    },
    {
      id: 8,
      title: "Pad Kra Praow",
      image: "images/krapraow.jpg",
      category: "thai",
      ingredients: ["Beef", "Holy basil", "Chili", "Garlic", "Soy sauce"],
      steps: [
        "Stir-fry garlic and chili.",
        "Add beef and cook thoroughly.",
        "Season with soy sauce.",
        "Add holy basil and stir."
      ]
    },
    {
      id: 9,
      title: "Tempura",
      image: "images/tempura.jpg",
      category: "japanese",
      ingredients: ["Shrimp", "Vegetables", "Tempura batter", "Oil"],
      steps: [
        "Prepare and chill tempura batter.",
        "Dip ingredients into batter.",
        "Deep-fry until golden.",
        "Drain and serve with dipping sauce."
      ]
    },
    {
      id: 10,
      title: "Chinese Fried Rice",
      image: "images/fried_rice.jpg",
      category: "chinese",
      ingredients: ["Rice", "Egg", "Carrots", "Peas", "Soy sauce"],
      steps: [
        "Scramble eggs and set aside.",
        "Stir-fry vegetables.",
        "Add rice and eggs.",
        "Season with soy sauce."
      ]
    },
    {
      id: 11,
      title: "Lasagna",
      image: "images/lasagna.jpg",
      category: "italian",
      ingredients: ["Lasagna noodles", "Ground beef", "Tomato sauce", "Cheese", "Bechamel"],
      steps: [
        "Cook beef and mix with tomato sauce.",
        "Layer noodles, sauce, and cheese.",
        "Repeat and top with bechamel.",
        "Bake until bubbly."
      ]
    },
    {
      id: 12,
      title: "Mala Hotpot",
      image: "images/mala_hotpot.jpg",
      category: "chinese",
      ingredients: ["Hotpot broth", "Beef slices", "Tofu", "Mushrooms", "Mala spice"],
      steps: [
        "Prepare spicy mala broth.",
        "Boil broth in hotpot.",
        "Dip ingredients and cook.",
        "Serve with dipping sauce."
      ]
    }
  ];
  
  // -------------------- Index Page --------------------
  function displayRecipes() {
    const listSection = document.querySelector(".recipe-list");
    if (!listSection) return;
  
    listSection.innerHTML = "";
  
    const selectedCategory = document.getElementById("category-filter").value;
  
    const filtered = selectedCategory === "all"
      ? recipes
      : recipes.filter(r => r.category === selectedCategory);
  
    if (filtered.length === 0) {
      listSection.innerHTML = "<p>No recipes found for this category.</p>";
      return;
    }
  
    filtered.forEach(recipe => {
      const card = document.createElement("div");
      card.className = "recipe-card";
      card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" style="width:100%; border-radius: 8px;">
        <h3>${recipe.title}</h3>
        <p>Category: ${capitalize(recipe.category)}</p>
        <a href="recipe-detail.html?id=${recipe.id}">View Details</a>
      `;
      listSection.appendChild(card);
    });
  }
  
  function filterRecipes() {
    displayRecipes();
  }
  
  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  
  window.onload = () => {
    if (document.querySelector(".recipe-list")) {
      displayRecipes();
    } else {
      loadRecipeDetail();
    }
  };
  
  // -------------------- Detail Page --------------------
  function loadRecipeDetail() {
    const params = new URLSearchParams(window.location.search);
    const recipeId = parseInt(params.get("id"));
  
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) {
      document.body.innerHTML = "<p>Recipe not found.</p>";
      return;
    }
  
    document.getElementById("recipe-title").textContent = recipe.title;
    document.getElementById("recipe-image").src = recipe.image;
  
    const ingredientsList = document.getElementById("ingredients-list");
    recipe.ingredients.forEach(ingredient => {
      const li = document.createElement("li");
      li.textContent = ingredient;
      ingredientsList.appendChild(li);
    });
  
    const stepsList = document.getElementById("steps-list");
    recipe.steps.forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      stepsList.appendChild(li);
    });
  }
  
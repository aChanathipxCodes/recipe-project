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
  
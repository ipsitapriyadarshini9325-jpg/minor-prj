// MOODSCAPE WEBSITE

const ideas = [

    {
        mood: "calm",
        category: "place",
        title: "Quiet Garden Walk 🌿",
        description: "Enjoy a peaceful walk surrounded by nature.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600"
    },

    {
        mood: "calm",
        category: "food",
        title: "A Cup of Calm ☕",
        description: "Enjoy your favourite tea and relax.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600"
    },

    {
        mood: "adventure",
        category: "place",
        title: "Chase the Sunset 🌅",
        description: "Explore a beautiful and safe public place.",
        image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600"
    },

    {
        mood: "adventure",
        category: "food",
        title: "Food Explorer 🍕",
        description: "Try a new recipe or local snack.",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600"
    },

    {
        mood: "cozy",
        category: "place",
        title: "Cozy Reading Corner 📚",
        description: "Create your own comfortable reading space.",
        image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600"
    },

    {
        mood: "cozy",
        category: "food",
        title: "Comfort Food 🥗",
        description: "Prepare a colourful homemade food bowl.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600"
    },

    {
        mood: "creative",
        category: "create",
        title: "Paint Your Mood 🎨",
        description: "Create an artwork using your favourite colours.",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600"
    },

    {
        mood: "creative",
        category: "create",
        title: "DIY Art Card 🌷",
        description: "Make a beautiful handmade greeting card.",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600"
    }

];

let currentMood = "calm";

let currentCategory = "all";

let savedIdeas = JSON.parse(
    localStorage.getItem("moodscapeSaved") || "[]"
);


// DISPLAY IDEAS

function displayIdeas() {

    const container = document.getElementById("ideas");

    let filteredIdeas = ideas.filter(function(item) {

        return item.mood === currentMood &&
        (currentCategory === "all" ||
        item.category === currentCategory);

    });

    container.innerHTML = "";

    filteredIdeas.forEach(function(item) {

        let index = ideas.indexOf(item);

        let isSaved = savedIdeas.includes(index);

        container.innerHTML += `

            <div class="card">

                <img src="${item.image}" alt="${item.title}">

                <div class="card-content">

                    <h3>${item.title}</h3>

                    <p>${item.description}</p>

                    <button onclick="saveIdea(${index})">
                        ${isSaved ? "♥ Saved" : "♡ Save Idea"}
                    </button>

                    <button onclick="showDetails(${index})">
                        Explore Idea
                    </button>

                </div>

            </div>

        `;

    });

}


// CHANGE MOOD

function showMood(mood) {

    currentMood = mood;

    currentCategory = "all";

    const titles = {

        calm: "A Softer Kind of Day 🌿",

        adventure: "A Day Full of Discovery 🧭",

        cozy: "A Warm and Cozy Day 🧸",

        creative: "Let Your Imagination Play 🎨"

    };

    document.getElementById("mood-title").innerText =
        titles[mood];

    displayIdeas();

}


// FILTER IDEAS

function filterIdeas(category) {

    currentCategory = category;

    displayIdeas();

}


// SAVE FAVOURITE IDEAS

function saveIdea(index) {

    if (savedIdeas.includes(index)) {

        savedIdeas = savedIdeas.filter(
            item => item !== index
        );

        alert("Idea removed from your collection!");

    } else {

        savedIdeas.push(index);

        alert("Idea saved successfully! ❤️");

    }

    localStorage.setItem(
        "moodscapeSaved",
        JSON.stringify(savedIdeas)
    );

    displayIdeas();

    displaySavedIdeas();

}


// DISPLAY SAVED IDEAS

function displaySavedIdeas() {

    const container =
        document.getElementById("saved-ideas");

    container.innerHTML = "";

    savedIdeas.forEach(function(index) {

        const item = ideas[index];

        container.innerHTML += `

            <div class="card">

                <img src="${item.image}" alt="${item.title}">

                <div class="card-content">

                    <h3>${item.title}</h3>

                    <p>${item.description}</p>

                    <button onclick="saveIdea(${index})">
                        Remove ♥
                    </button>

                </div>

            </div>

        `;

    });

}


// SHOW IDEA DETAILS

function showDetails(index) {

    const item = ideas[index];

    alert(
        "MOODSCAPE IDEA\n\n" +
        "Title: " + item.title +
        "\n\nDescription: " + item.description +
        "\n\nEnjoy your little moment! 🌷"
    );

}


// INITIAL WEBSITE LOAD

displayIdeas();

displaySavedIdeas();
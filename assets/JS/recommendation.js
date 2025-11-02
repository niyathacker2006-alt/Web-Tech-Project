// --- Data Loading (Same as dashboard.js) ---
let moodData = {};

function loadMoodData() {
    const storedData = localStorage.getItem('moodDataStore');
    if (storedData) {
        moodData = JSON.parse(storedData);
    } else {
        // Fallback: MUST be defined with arrays!
        moodData = { fallback: { quote: [{ text: "Start small.", author: "Unknown" }], movies: [{ title: 'Example Movie', link: '#', source: 'Default' }], /* ... and other categories ... */ } };
    }
}

// --- Main Display Function ---
document.addEventListener('DOMContentLoaded', () => {
        // OLD: (Removed complex loadMoodData() and Local Storage calls)
            loadMoodData(); // Load the moodData object embedded in the script
        
            // 🌟 NEW: Get mood directly from the URL parameters
            const urlParams = new URLSearchParams(window.location.search);
            const selectedMood = urlParams.get('mood') || 'fallback'; 
            const moodKey = selectedMood.toLowerCase();
            
            // Now continue with your existing logic...
            const data = moodData[moodKey] || moodData['fallback']; 
            
            // ... (rest of the script continues) ...
        });
        const selectedMood = localStorage.getItem('selectedMood') || 'fallback';
        const moodKey = selectedMood.toLowerCase();
        
        // Data is accessed directly from the global object:
        const data = moodData[moodKey] || moodData['fallback']; 
        
        // Determine the current page category based on the filename
        const path = window.location.pathname;
        // Note: If you named your activities file 'activities.html', this line should be:
        // const category = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
        // If you named your files movies.html, music.html, books.html, and activities.html:
        const category = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
        
        // ... (The rest of your code for updating headers, displaying quotes, and generating the bulk list remains the same!)
        
        // NOTE: Ensure you are checking the 'activities' key in the loop:
        // Determine the current page category based on the filename


// --- NEW FIX: Convert file name to data key name if necessary ---
if (category === 'movies') {
    category = 'movie'; // Assuming data key is 'movie'
} else if (category === 'books') {
    category = 'book'; // Assuming data key is 'book'
} 
// If your music/activities keys match, no change is needed for them.
// If your data keys are already plural ('movies', 'books', etc.), you can skip this fix.
// Let's stick with the original data keys:
if (category === 'movies') {
    category = 'movie';
} else if (category === 'books') {
    category = 'book';
} else if (category === 'activities') {
    category = 'activity';
}
// ------------------------------------------------------------------
// Now 'category' holds the correct key (e.g., 'movie', 'book') to look up in moodData.
        const items = data[category] || data.fallback[category] || []; 
        
        // ... (The rest of the display logic is good!)
    });
    
    listContent += '</div>';
    container.innerHTML = listContent;

    // =================================================================
// 🌟 SIMPLIFIED DATA MANAGEMENT: All content lives here!
// =================================================================
const moodData = {
    // --- HAPPY MOOD DATA (Example) ---
    "happy": {
        "color": { "name": "Sunshine Yellow", "hex": "#FFD700" },
        "music": [
          { "title": "Pharrell Williams - Happy", "link": "https://youtu.be/ZbZSe6N_BXs", "source": "Feel-Good Pop" },
          { "title": "Vivaldi - Spring (The Four Seasons)", "link": "#", "source": "Uplifting Classical" }
        ],
        "movie": [
          { "title": "Little Miss Sunshine", "link": "#", "source": "Indie Comedy/Drama" },
          { "title": "The Princess Bride", "link": "#", "source": "Fantasy/Adventure Classic" }
        ],
        "book": [
          { "title": "The Alchemist by Paulo Coelho", "link": "#", "source": "Philosophical Fiction" },
          { "title": "Joyful: The Surprising Power of Ordinary Things...", "link": "#", "source": "Non-Fiction" }
        ],
        "quote": [
          { "text": "Happiness is not something readymade. It comes from your own actions.", "author": "Dalai Lama" },
          { "text": "The only joy in the world is to begin.", "author": "Cesare Pavese" }
        ],
        "activities": [ // Note: The key should be 'activities' not 'activity' for consistency with our file names
          "Go outside and spend 15 minutes soaking up the sun.",
          "Send a thank-you note to someone who deserves it."
        ]
    },
    
    // --- CHILL MOOD DATA (Example) ---
    "chill": {
        "color": { "name": "Sky Blue", "hex": "#87CEEB" },
        "music": [
          { "title": "Lo-Fi Beats (Study/Relax)", "link": "#", "source": "Ambient Instrumental" },
          { "title": "Miles Davis - Kind of Blue", "link": "#", "source": "Cool Jazz" }
        ],
        "movie": [
          { "title": "Lost in Translation", "link": "#", "source": "Melancholy Drama" },
          { "title": "Miyazaki's Kiki's Delivery Service", "link": "#", "source": "Cozy Animation" }
        ],
        // ... include books, quotes, and activities for chill here ...
    },

    // --- FALLBACK DATA ---
    "fallback": {
        "color": { "name": "Gentle Grey", "hex": "#cfd8dc" },
        "music": [ { "title": "Ambient Instrumental Mix (Fallback)", "link": "#", "source": "Focus" } ],
        "movie": [ { "title": "A Nature Documentary (Fallback)", "link": "#", "source": "Relax" } ],
        "book": [ { "title": "An Essay Collection (Fallback)", "link": "#", "source": "Classic" } ],
        "quote": [ { "text": "A journey of a thousand miles begins with a single step.", "author": "Laozi" } ],
        "activities": [ "Take five slow, deep breaths", "Organize your desk for a fresh start." ]
    }
};
// =================================================================
});
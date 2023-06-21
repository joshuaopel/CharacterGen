function generateTitle() {
    const name = document.getElementById('name').value;
    const preference = document.getElementById('preference').value;
    const terrain = document.getElementById('terrain').value;

    // Score for each class
    const scores = {
        'Ranger': 0,
        'Noble': 0,
        'Mermaid/Merman': 0,
        'Mountaineer': 0,
        'Beastmaster': 0
    };

    // Increase score for preference
    const preferenceScores = {
        'outside': 'Ranger',
        'castle': 'Noble',
        'swimming': 'Mermaid/Merman',
        'skiing': 'Mountaineer',
        'animals': 'Beastmaster'
    };
    scores[preferenceScores[preference]] += 1;

    // Increase score for terrain
    const terrainScores = {
        'forest': 'Ranger',
        'mountains': 'Mountaineer',
        'sea': 'Mermaid/Merman',
        'desert': 'Beastmaster',
        'sky': 'Noble',
        'underground': 'Noble'
    };
    scores[terrainScores[terrain]] += 1;

    // Get class with highest score
    let characterClass = '';
    let maxScore = 0;
    for (const [cls, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            characterClass = cls;
        }
    }

    // Possible suffixes
    const suffixes = {
        'Ranger': ['of the Dark Forest', 'from the Enchanted Woods', 'of the Emerald Canopy'],
        'Noble': ['of the Stone Keep', 'of the Golden Tower', 'of the Silver City'],
        'Mermaid/Merman': ['of the Deep Blue', 'of the Coral Maze', 'of the Sapphire Abyss'],
        'Mountaineer': ['of the Icy Peaks', 'of the Rugged Range', 'of the Snowy Summit'],
        'Beastmaster': ['of the Whispering Savannah', 'of the Roaring Jungle', 'of the Fierce Tundra']
    };
    const suffix = suffixes[characterClass][Math.floor(Math.random() * suffixes[characterClass].length)];

    // Generate title
    const title = `${name}, ${characterClass} ${suffix}`;

    document.getElementById('title').innerText = title;

    // Define image arrays for each class
    const images = {
        'Ranger': ['Ranger_01.png', 'Ranger_02.png', 'Ranger_03.png'],
        'Noble': ['Noble_01.png', 'Noble_02.png', 'Noble_03.png'],
        'Mermaid/Merman': ['MermaidMerman_01.png', 'MermaidMerman_02.png', 'MermaidMerman_03.png'],
        'Mountaineer': ['Mountaineer_01.png', 'Mountaineer_02.png', 'Mountaineer_03.png'],
        'Beastmaster': ['Beastmaster_01.png', 'Beastmaster_02.png', 'Beastmaster_03.png']
    };

    // Change character image
    const imageArray = images[characterClass];
    const image = imageArray[Math.floor(Math.random() * imageArray.length)];
    document.getElementById('characterImage').src = image;
}

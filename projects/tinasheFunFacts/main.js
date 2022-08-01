let images = [];
const showBackground = true;

const albums = {
    333: {
        image: "./images/333.jpeg",
        facts: ["333 is Tinashe's fifth studio album, released in 2021.", 
                "333 was released independently through her own label, Tinashe Music", 
                "333 features: Quiet Child, Kudzai, Jeremih, Kaytranada, and more!"]
    },

    Nightride: {
        image: "./images/nightride.jpeg",
        facts: ["Nightride is Tinashe's first digital album, second studio album, and sixth overall project released.",
                "Nightride was released on November 4, 2016.",
                "Nightride features songs such as: Ride of Your Life, Party Favors, and Sacrifices."],
    },

    BlackWater: {
        image: "./images/blackWater.jpeg",
        facts: ["Black Water is the third mixtape by Tinashe.",
                "Black Water was released on November 26, 2013.",
                "Black Water features: Boi-1da, Ryan Hemsworth, Vinylz, and more!"]
    }
};


function displayFact(e) {
    let facts = albums[e.target.alt].facts
    document.getElementById("fact").innerHTML = facts[Math.floor(Math.random() * facts.length)]
}

for (const album in albums) {
    images.push(
        <img 
        key = {album}
        className = "album"
        alt = {album}
        src = {albums[album].image}
        role = "button"
        onClick = {displayFact} 
        />
    )
}

const background = <img alt = "amethyst" src = "./images/amethyst.jpg" />

const AlbumFacts = (
    <div>
        <h1 style = {{"position": "absolute"}}>Click an album cover for a fun fact!</h1>
        <hr></hr>
        {showBackground && background}
        <p id = "fact"></p>
        <div className = "albums">
            {images}
        </div>
    </div>
)

ReactDOM.render(AlbumFacts, document.getElementById("root"));
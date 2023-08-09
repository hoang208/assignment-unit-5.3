console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = {};
    album.title = title;
    album.artist = artist;
    album.yearPublished = yearPublished;
    collection.push(album);
    return album;
}


console.log ("The album that was added was: ", addToCollection("Nike", "Frank Ocean", 2016))
console.log ("The album that was added was: ", addToCollection("Palette", "IU", 2017))
console.log ("The album that was added was: ", addToCollection("Ctrl", "SZA", 2017))
console.log ("The album that was added was: ", addToCollection("It Was Good Until It Wasn't", "Kehlani", 2020))
console.log ("The album that was added was: ", addToCollection("Saturation III", "Brockhampton", 2017))
console.log ("The album that was added was: ", addToCollection("New Jeans", "NewJeans", 2022))
console.log("The collection contains the following albums: ", collection);

function showCollection(collection) {
    console.log("The numer of albums in the collection is: ", collection.length);
    for (let i of collection) {
        console.log(i.title + " by " + i.artist + ", published in " + i.yearPublished);
    }
}

showCollection(collection)

function findByArtist(artist) {
    let artistCollection = [];
    for (let i of collection) {
        if (i.artist === artist) {
            artistCollection.push(i);
        }
        return artistCollection
    }
}

console.log("The albums in my collection by NewJeans are: ", findByArtist("NewJeans"));
console.log("The albums in my collection by Drake are: ", findByArtist("Drake"));
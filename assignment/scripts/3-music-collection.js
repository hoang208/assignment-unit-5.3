console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished, tracks) {
    let album = {};
    album.title = title;
    album.artist = artist;
    album.yearPublished = yearPublished;
    album.tracks = tracks;
    collection.push(album);
    return album;
}


console.log ("The album that was added was: ", addToCollection("Blonde", "Frank Ocean", 2016, [{name: "Nikes", duration: "5:14"}, {name: "Ivy", duration: "4:09"}, {name: "Pink + White", duration: "3:04"}]));
console.log ("The album that was added was: ", addToCollection("Palette", "IU", 2017, [{name: "Dlwlrma", duration: "3:02"}, {name: "Palette", duration: "3:37"}, {name: "Ending Scene", duration: "4:09"}]));
console.log ("The album that was added was: ", addToCollection("Ctrl", "SZA", 2017, [{name: "Supermodel", duration: "3:01"}, {name: "Love Galore", duration: "4:35"}, {name: "Doves in the Wind", duration: "4:26"}]));
console.log ("The album that was added was: ", addToCollection("It Was Good Until It Wasn't", "Kehlani", 2020, [{name: "Toxic", duration: "2:48"}, {name: "Can I", duration: "3:00"}, {name: "Bad News", duration: "3:06"}]))
console.log ("The album that was added was: ", addToCollection("Saturation III", "Brockhampton", 2017, [{name: "Boogie", duration: "3:13"}, {name: "Zipper", duration: "3:22"}, {name: "Johnny", duration: "4:11"}]))
console.log ("The album that was added was: ", addToCollection("New Jeans", "NewJeans", 2022, [{name: "Attention", duration: "3:00"}, {name: "Hype Boy", duration: "2:59"}, {name: "Cookie", duration: "3:55"}]))
console.log("The collection contains the following albums: ", collection);

function showCollection() {
    console.log("The numer of albums in the collection is: ", collection.length);
    for (let i of collection) {
        console.log(i.title + " by " + i.artist + ", published in " + i.yearPublished);
        for (z = 0; z < i.tracks.length; z++) {
            console.log(z+1 + ". " + i.tracks[z].name + ": " + i.tracks[z].duration)
        }
    }
}

showCollection()

function findByArtist(artist) {
    let artistCollection = [];
    for (let i = 0; i<collection.length; i++) {
        if (artist === collection[i].artist) {
            artistCollection.push(collection[i]);
        }
    }
    return artistCollection
}

console.log("The albums in my collection by NewJeans are: ", findByArtist("NewJeans"));
console.log("The albums in my collection by Drake are: ", findByArtist("Drake"));

// Original search function edited for stretch goal
// function search(artist, yearPublished) {
//     let searchCollection = [];
//     for (let i = 0; i<collection.length; i++) {
//          if (artist === collection[i].artist && yearPublished === collection[i].yearPublished) {
//             searchCollection.push(collection[i]);
//         } else if (artist === undefined && yearPublished === undefined) {
//             return collection;
//         }
//     }
//     return searchCollection
// }
// console.log(search("Ray Charles", 1957))
// console.log(search("SZA", 2017))

function search(searchInfo) {
    let searchCollection = [];
    if (searchInfo === undefined) {
        return collection;
    } 
    if (searchInfo.hasOwnProperty("trackName")) {
            for (let i of collection) {
                for (let z = 0; z < i.tracks.length; z++) {
                    if (i.tracks[z].name === searchInfo.trackName) {
                        searchCollection.push(i);
                    }
                }
            }
    } else {
        for (let i of collection) {
        if (searchInfo.artist === i.artist && searchInfo.yearPublished === i.yearPublished) {
            searchCollection.push(i);
        } 
    }
}
return searchCollection
}


console.log(search({ artist: 'Ray Charles', yearPublished: 1957}))
console.log(search({ artist: 'SZA', yearPublished: 2017}))
console.log(search({ artist: 'SZA', yearPublished: 2020}))
console.log(search())
console.log(search({ trackName: "Ivy"}))
console.log(search({ artist: 'SZA', yearPublished: 2017, trackName: "Ivy"}))
// I only added three tracks per album because it would be too cluttered with all the songs
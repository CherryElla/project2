const { isModuleNamespaceObject } = require("util/types");

const BREEDS = ["Golden Doodle", "Labrador", "Shitzu"];
const NAMES = ["ChooChoo", "Peanuts", "Bella"];
const AGES = [7, 3, 2];
const GENDER = ["male", "famale", "neutral"];
const UFIRST_NAMES = ["Henry", "Sophie", "Charles", "John", "David", "Kathy", "Jarvis", "Peter", "Max", "Joey", "Trish", "Jeff"];
const ULAST_NAMES = ["Smith", "Jones", "Floyd", "Maker", "Bella", "Davis", "Woodman", "Bellamy", "Margerine", "Tillman"]
const IMAGES = [
    "../../testImages/corgy.jpg",
    "../../testImages/pexels-nataliya-vaitkevich-4772940.jpg",
    "../../testImages/pexels-neil-ryan-famoso-saraña-7107434.jpg",
    "../../testImages/pexels-sergio-souza-3198032.jpg",
    "../../testImages/sandw.jpg",
    "../../testImages/pexels-samson-katt-5256722.jpg",
    "../../testImages/pexels-meruyert-gonullu-6589016.jpg",
    "../../testImages/dog-g80e57fc09_1920.jpg"
];
const DESCRIPTIONS = ["Look at my cute little fluff!!! 💖", "My boy #doglover #puppypal 🐕", "Wow, really?? #doglife #woofwoof", "Getting it with my bestie #DOGSAREUS 🐶"]

function makeUsers(N) {
    let users = [];
    for (let i = 0; i < N; i++) {
        let name = UFIRST_NAMES[randomInt(UFIRST_NAMES.length)];
        users.push({
            // id: i,
            first_name: name,
            last_name: ULAST_NAMES[randomInt(ULAST_NAMES.length)],
            email: `${name.toLowerCase()}${randomInt(100)}@gmail.com`,
            password: "doglover",
            phoneNum: "7089382828",
        });
    }
    return users;
}

function makePets(N, users) {
    let pets = [];
    let userIds = users.map((user) => {
        return user.id;
    });
    for (let i = 0; i < N; i++) {
        pets.push({
            name: NAMES[randomInt(NAMES.length)],
            breed: BREEDS[randomInt(BREEDS.length)],
            age: AGES[randomInt(AGES.length)],
            gender: GENDER[randomInt(GENDER.length)],
            user_id: userIds[randomInt(userIds.length)],
        });
    }
    return pets;
}

function makePosts(N, users, pets) {
    let posts = [];
    let userLookup = {};
    for (let pet of pets) {
        if (!userLookup.hasOwnProperty(pet.user_id)) {
            userLookup[pet.user_id] = [];
        }
        userLookup[pet.user_id].push(pet);
    }
    for (let user of users) {
        let userPets = userLookup[user.id];
        if (userPets) {
            for (let i = 0; i < N; i++) {
                posts.push({
                    // id: posts.length,
                    imageFileName: IMAGES[randomInt(IMAGES.length)],
                    description: DESCRIPTIONS[randomInt(DESCRIPTIONS.length)],
                    user_id: user.id,
                    pet_id: userPets[randomInt(userPets.length)].id,
                });
            }
        }
    }
    return posts;
}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

// function makeData() {
//     let users = makeUsers(10);
//     let pets = makePets(20, users);
//     let posts = makePosts(2, users, pets);
//     return {
//         users: users.map ((u) => { delete u.id; return u }),
//         pets: pets.map((p) => { delete p.id; return p}),
//         posts: posts.map((p) => {delete p.id; return p}),
//     };
// }

module.exports = {
    makeUsers,
    makePosts,
    makePets
};
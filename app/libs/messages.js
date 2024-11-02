const messages = [
    "A perfect match! Your love shines bright and strong.",
    "Your bond is incredible! You complete each other in every way.",
    "High compatibility! You both bring out the best in each other.",
    "Your love is as deep as the ocean. Keep cherishing each other!",
    "A wonderful connection! You’re two hearts that beat as one.",
    "A balanced match! You both support each other beautifully.",
    "There’s a lot of harmony here! Together, you’re unstoppable.",
    "Great chemistry! Your love brings joy and happiness to both.",
    "A strong foundation! Your relationship is built on trust and love.",
    "You both have a spark that lights up the room!",
    "Perfectly in sync! Your connection is truly something special.",
    "A beautiful match! You both share so much love and understanding.",
    "Your love is steady and true. A wonderful pair indeed!",
    "The two of you bring balance and joy to each other’s lives.",
    "Together, you create something magical and unforgettable.",
    "Strong compatibility! You complement each other perfectly.",
    "High levels of affection and understanding here!",
    "An amazing match! Your love story is one to be cherished.",
    "The stars have aligned for you both. You’re meant to be!",
    "A radiant connection! Your love shines brighter together."
];

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

export default getRandomMessage;

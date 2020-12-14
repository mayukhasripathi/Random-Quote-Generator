var quote=["If youre happy doing what you love, nobody can tell you youre not successful", "You are not the opinion of someone who doesnt know you", "Learn to trust the journey, even when you dont understand it", "Treat people with kindess","Fearless is having fears but jumping anyway","A little progress each day adds up to big results","If you get tired, learn to rest, not quit"];

console.log(quote.length);

$(".quotes").click(function() {
    var randomQuote=Math.floor(Math.random() * quote.length);
    
    $(".target").text(quote[randomQuote]+" ");
});

console.log(quote[0]);
console.log(quote[1]);
console.log(quote[2]);
console.log(quote[3]);
console.log(quote[4]);
console.log(quote[5]);

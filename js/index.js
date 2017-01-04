$(document).ready(function() {
 
   $('#tweeterlink').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&via=lonelyagal&text=' + encodeURIComponent(quote[0].quote)); 
  $(".btn").on("click", function(){
    var randomval =  quote[Math.floor(Math.random() * 6)];
    
   
    
    $(".quote-box").html( randomval.quote);
     $(".imptxt").html(randomval.author);
                                
                                
   $('#tweeterlink').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&via=lonelyagal&text=' + encodeURIComponent(quote[Math.floor(Math.random() * 6)].quote));

  });
});

var quote =[
  {
			"quote": "Don't cry because it's over, smile because it happened.",
    "author": "David Lois"
  },
   {
			"quote": "In three words I can sum up everything I've learned about life: it goes on.",
     "author": "Tangy Mighty"
  },
   {
			"quote": "Be yourself; everyone else is already taken.",
     "author": "Mike Chank"
   },
  {
			"quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
     "author": "lim Kay"
  },
  {
  "quote":"A room without books is like a body without a soul.",
    "author":"Sindi li"
  },
  {
  "quote":"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "author":"Tim Honk"
  }
]
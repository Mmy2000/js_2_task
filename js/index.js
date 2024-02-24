var quotes = [
      {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
      },
      {
        quote: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
      },
      {
        quote: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
      },
      {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
      },
      {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
      },
      {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
      },
      {
        quote: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
      }
    ];

    function generateRandomQuote() {
      var randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    }

    function updateQuote() {
      var quoteElement = document.getElementById('quote');
      var authorElement = document.getElementById('author');
      var { quote, author } = generateRandomQuote();
      quoteElement.textContent = quote;
      authorElement.textContent = `- ${author}`;
    }

    var generateBtn = document.getElementById('generate-btn');
    generateBtn.addEventListener('click', updateQuote);

    updateQuote();
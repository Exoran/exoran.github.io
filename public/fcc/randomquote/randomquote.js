$(function() {

  // Event listener : onClick New Quote button
  $("#newQuote").click(function() {
    getNewQuote();
  });
  /*$(".twitter-share-button").click(function() {
    $(".twitter-share-button").html("<a href='https://twitter.com/' target='_blank'><a>");
  })*/

  // Main function
  function getNewQuote() {

    //I had an issue with the cache and the API, so this is a workaround found on StackOverflow : I set a timestamp value with Date().getTime(). This allow me to have a new http request every time I launch getNewQuote(). A bit slower, but it works :)
    var timestamp = new Date().getTime();
    var apiURL = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&timestamp=" + timestamp;

    // Get the JSON data from API with the url witch has been built before and push it to the HTML
    $.getJSON(apiURL, function(json) {
      var content = json[0].content.replace(/<\/?p[^>]*>/g, "");
      $(".quoteText").html(content);
      var author = json[0].title === "" ? "Unknown" : json[0].title;
      $(".quoteAuthor").html("- " + author);
      var textForLink = encodeURIComponent(content);
      var link = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + textForLink;
      $(".twitter-share-button").attr("href", link);

    });

  };
  getNewQuote();
});

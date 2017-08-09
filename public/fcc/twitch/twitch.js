/*Adress to use for calling Twitch API. 2 arguments : type & name
          https://wind-bow.gomix.me/twitch-api/type/name?callback=?*/

var channels = [{
  name: "ESL_SC2",
  game: undefined,
  status: undefined,
}, {
  name: "OgamingSC2",
  game: undefined,
  status: undefined,
}, {
  name: "cretetion",
  game: undefined,
  status: undefined,
}, {
  name: "freecodecamp",
  game: undefined,
  status: undefined,
}, {
  name: "storbeck",
  game: undefined,
  status: undefined,
}, {
  name: "habathcx",
  game: undefined,
  status: undefined,
}, {
  name: "RobotCaleb",
  game: undefined,
  status: undefined,
}, {
  name: "noobs2ninjas",
  game: undefined,
  status: undefined,
}];

//We set our global function :
function getInfo() {
  //We look into our array channels and get data for each channel
  channels.forEach(function(c) {
    var channel = c.name;
    //We set our URL API call with our two arguments
    function makeURL(type, channel) {
      return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + channel + '?callback=?';
    };
    $.getJSON(makeURL('streams', channel), function(json) {
      $.getJSON(makeURL("channels", channel), function(json) {
        var logo = json.logo != null ? json.logo : "http://amr-asso.com/wp-content/uploads/2014/11/avatar-johndoe.png";
        var name = json.display_name != null ? json.display_name : channel;
        var description = c.status === "online" ? ': ' + json.status : "";
        var url = json.url;
        var html = '<div class="channel row ' +
          c.status + '"><div class="col-xs-2 col-sm-1" id="icon"><img src="' +
          logo + '" class="logo"></div><div class="col-xs-10 col-sm-3" id="name"><a href="' +
          url + '" target="_blank">' +
          name + '</a></div><div class="col-xs-10 col-sm-8" id="streaming">' +
          c.game + '<span class="hidden-xs">' +
          description + '</span></div></div>';
        c.status === "online" ? $("#display").prepend(html) : $("#display").append(html);

      });

      //We have all the data stored into JSON, we want to know the game title and the status of the channel : online or offline
      //console.log(json.stream);
      if (json.stream === null) {
        c.game = "Offline";
        c.status = "offline";
      } else if (json.stream === undefined) {
        c.game = "Account Closed";
        c.status = "offline";
      } else {
        c.game = json.stream.game;
        c.status = "online";
      };
    });

  });
};

// });
$(function() {
  getInfo();
  $(".selector").click(function() {
    $(".selector").removeClass("active");
    $(this).addClass("active");
    var status = $(this).attr('id');
    if (status === "all") {
      $(".online, .offline").removeClass("hidden");
    } else if (status === "online") {
      $(".online").removeClass("hidden");
      $(".offline").addClass("hidden");
    } else {
      $(".offline").removeClass("hidden");
      $(".online").addClass("hidden");
    }
  })
});

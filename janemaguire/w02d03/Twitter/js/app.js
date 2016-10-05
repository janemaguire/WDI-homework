$(function(){

  var $ol = $('ol');
  var $tweets = $('.tweets');

  $.each(window.tweets, function(i, tweet){
    console.log(i);
    console.log(tweet);
    // $ol.append( '<li>' + tweet.user_thumbnail + '</li>' + '<li>' + tweet.name + '</li>' + '<li>' + '@' + tweet.screen_name + '</li>' + '<li>' + tweet.text + '</li>' );

    $ol.append(

      '<li class="stream-item">' +
        '<div class="tweet">' +
          '<a href="#">' +
            '<img src="' + tweet.user_thumbnail + '"alt="User image goes here.">' +
          '</a>' +
          '<div class="content">' +
            '<strong class="fullname">' + tweet.screen_name + '</strong>' +
            '<span>&rlm;</span>' +
            '<span>@</span><b>' + tweet.screen_name + '</b>' +
            '&nbsp;&middot;&nbsp;' +
            '<small class="time">' +
              '11m' +
            '</small>' +
            '<p>' + tweet.text + '</p>' +
          '</div>' +
        '</div>' +
      '</li>'

    );

  });

});

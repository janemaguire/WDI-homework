console.log("JS loaded!");

$(function() {

  const addSong = function(song) {
    $('#songs').prepend(`<li><strong>${song.name}</strong> <br> Written by <em>${song.writers}</em> <br> Highest chart position: ${song.chart}</li>`);
  };

  const getSongs = () => {
    $.ajax({
      method: 'GET',
      url: "http://localhost:8000/songs"
    })

    .done((data) => {
      console.log(data);
      $.each(data, (index, song) => {
        addSong(song);
      });
    });
};

  getSongs();

});

console.log("JS loaded!");

$(function() {

  const getSongs = () => {
    $.ajax({
      method: 'GET',
      url: "http://localhost:8000/songs"
    })

    .done((data) => {
      console.log(data);
    });
  };

  getSongs();

});

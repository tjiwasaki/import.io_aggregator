    importio.init({
      "auth": {
        "userGuid": "604b9513-ab10-47e8-8981-4404f88a08e7",
        "apiKey": "UnR3S37bsOXRx1rSH8Y8NQd87fkyMeNYITAKPBGGASnMES/pEhGoGxzd7/j4u1uIFx7Ob2j9sBvvbSalUZHoxA=="
      },
      "host": "import.io"
    });

    // Data and done callbacks
    var dataCallback = function(data) {
      console.log("Data received", data);
      var link = [];
      for (var j = 0; j < data.length; j++) {
        var e = data[j];
        for (var b in e.data) {
          var i = 0;
          if(b == 'article_link'){
            link.push(e.data[b]);
            i++;
          }
        }
      }
      for (var i = 0; i < data.length; i++) {
  	    var d = data[i];
        var tom = 0;
    		for (var k in d.data) {
          if(k == 'article_image'){
            document.write("<a href="+ link[i] + ">" + "<img src=\'" + d.data[k] + "\'>" + "</a>" + "<br />");  
          }
          else if(k == 'article_heading/_text'){
            document.write("<h2>" + d.data[k] + "</h2>" + "<br />");
          }
    		  else if(k == 'article_image/_alt'){
            document.write();
          }
          else {
            document.write("<p>" + d.data[k] + "</p>" + "<br />");
          }
    		}
    		document.write("<hr>");
  	  }
    }

    //Insert data to webpage

    var doneCallback = function(data) {
      console.log("Done, all data:", data);
      document.write("<b>Done</b><hr>");
    }

// 3. Do the query (when the function is called)
    $( document ).ready(function() {
      // Query for tile ScrubsMagTopStories
      importio.query({
        "connectorGuids": [
          "d1e451af-3a62-4214-abe3-bd96846ee073"
        ],
        "input": {
          "webpage/url": "http://scrubsmag.com/"
        }
      }, { "data": dataCallback, "done": doneCallback });
      });


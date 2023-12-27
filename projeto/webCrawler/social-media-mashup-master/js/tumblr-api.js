function getThumblrPost() {
  //var keyword = "animals";
  var keyword = "food waste";
  var url = new URL(location.href);
  var s = url.searchParams.get("s");
  if(s){
    keyword = s;
  }
    return fetch("https://api.tumblr.com/v2/tagged?api_key=KVrTO2UhQec9ClfuX4OTa2t2ERTU1a9bMK5hVxQj6GAk1MedAZ&tag=" + keyword + "&limit=10&type=photo", {
        mode: 'cors'
    }).then(function (resp) {
        return resp.json();
    }).then(function (data) {
        var articles = data.response;
        console.log('Tumblr posts: %o', articles);
        return articles.map(function(article) {
            var result = {
                url: article['post_url'],
                post_date: article['timestamp'],
                description: article['summary'],
                type: article['type']
            };

            if(article['type'] == 'photo') {
                result['height'] = article['photos'][0]['original_size']['height'];
                result['width'] = article['photos'][0]['original_size']['width'];
                result['thumbnail'] = article['photos'][0]['original_size']['url'];
            }

            if(article['type'] == 'text') {
                result['description'] = article['body'];
            }

            if(article['type'] == 'link') {
                result['thumbnail'] = article['link_image'];
            }

            return result;
        });

    });
}

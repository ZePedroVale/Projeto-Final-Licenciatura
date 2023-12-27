async function searchYoutubePost() {
  //var keyword = "animals";
	var keyword = "food waste";
  var url = new URL(location.href);
  var s = url.searchParams.get("s");
  if(s){
    keyword = s;
  }
    return await fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCGyjORc_M0ohtmEdaqUim3xqhZAy8ExHs&part=snippet&q=" + keyword + "&type=video&maxResults=10", {
        mode: 'cors'
    }).then(function (resp) {
        return resp.json();
    }).then(async function (data) {
        console.log('Youtube search: %o', data.items);
        if (data.items) {
            return data.items.map(function(article) {
                var info = article.snippet;
                var thumbnail = info['thumbnails']['high'];
                return {
                    title: info['title'],
                    description: info['description'],
                    thumbnail: thumbnail['url'],
                    height: thumbnail['height'],
                    width: thumbnail['width'],
                    url: 'https://www.youtube.com/watch?v=' + article['id']['videoId'],
                    post_date: Math.round(new Date(info['publishedAt']).getTime())
                };
            });
        }
        return [];
    });
};

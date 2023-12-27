function include(file) {
    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

function loadScript(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

include('js/timeago.min.js');

var flickrResponse = function() {
    getRecentPosts().then(function(flickrArticles) {
        console.log('flickrResponse: %o', flickrArticles);
        var item_width = $('.bricks-wrapper').width() * 0.23;
        flickrArticles.map(function(article) {
            var title = article["title"];
            var url = article["url"];
            var thumbnail = article["thumbnail"];
            var description = article["description"];
            var post_date = article["post_date"] * 1000;
            var img_height = article["img_height"];
            var img_width = article["img_width"];
            var measure_width = item_width / img_width * img_height;
            console.log('flickr: ' + item_width + '/' + img_width + '*' + img_height);

            var content = '<article class="grid-item entry format-standard flickr"><div class="sort_post_date" style="display: none;">' + post_date + '</div>' +
                '<div class="entry-thumb">' +
                '<a href="' + url + '" class="thumb-link" target="_blank">' +
                '<img src="' + thumbnail + '" style="width: 100%;" alt="' + title + '">' +
                '</a>' +
                '<div class="ssk-group" data-url="' + url + '">' +
                '<a href="" class="ssk ssk-facebook"></a>' +
                '<a href="" class="ssk ssk-twitter"></a>' +
                '<a href="" class="ssk ssk-google-plus"></a>' +
                '<a href="" class="ssk ssk-pinterest"></a>' +
                '<a href="" class="ssk ssk-tumblr"></a>' +
                '<a href="" class="ssk ssk-email"></a>' +
                '</div>' +
                '</div>' +
                '<div class="entry-text">' +
                '<div class="entry-header">' +
                '<h1 class="entry-title"><a href="' + url + '" target="_blank">' + title + '</a></h1>' +
                '</div>' +
                '<div class="entry-excerpt">' +
                description +
                '</div>' +
                '</div>' +
                '<a href="' + url + '" target="_blank"><div class="entry-info flickr">' +
                '<img class="article-icon" src="images/ic-flickr.png" /> <span style="text-decoration:underline;">Posted</span> <b>' + timeago.format(post_date) + '</b>' +
                '</div></a>' +
                '</article>';

            content = $(content);

            $('.bricks-wrapper').append(content).isotope( 'appended', content);
            $('.bricks-wrapper').isotope('updateSortData').isotope();

            SocialShareKit.init({
                reinitialize: true
            });
        });
        $('.bricks-wrapper').imagesLoaded().progress(function() {
            $('.bricks-wrapper').isotope('updateSortData').isotope();
            $('.bricks-wrapper').isotope('layout');
        });
    });
};

var redditResponse = function() {
    getRedditPost().then(function(redditArticles) {
        console.log('redditResponse: %o', redditArticles);
        redditArticles.map(function(article) {
            var title = article["title"];
            var url = article["url"];
            var thumbnail = article["thumbnail"];
            var description = article["description"];
            var post_date = article["post_date"] * 1000;

            var content = '';

            if (article['videoUrl']) {
                content += '<article class="grid-item entry format-video reddit"><div class="sort_post_date" style="display: none;">' + post_date + '</div>' +
                    '<div class="entry-thumb video-image">' +
                    '<a href="' + article['videoUrl'] + '" data-lity>' +
                    '<img src="' + thumbnail + '" style="alt="' + title + '">' +
                    '</a>';
            } else {
                content += '<article class="grid-item entry format-standard reddit"><div class="sort_post_date" style="display: none;">' + post_date + '</div>' +
                    '<div class="entry-thumb">';
                if (thumbnail) {
                    content += '<a href="' + url + '" class="thumb-link" target="_blank">' +
                        '<img src="' + thumbnail + '" style="width: 100%;" alt="' + title + '">' +
                        '</a>';
                }
            }

            content += '<div class="ssk-group" data-url="' + url + '">' +
                '<a href="" class="ssk ssk-facebook"></a>' +
                '<a href="" class="ssk ssk-twitter"></a>' +
                '<a href="" class="ssk ssk-google-plus"></a>' +
                '<a href="" class="ssk ssk-pinterest"></a>' +
                '<a href="" class="ssk ssk-tumblr"></a>' +
                '<a href="" class="ssk ssk-email"></a>' +
                '</div>' +
                '</div>' +
                '<div class="entry-text">' +
                '<div class="entry-header">' +
                '<h1 class="entry-title"><a href="' + url + '" target="_blank">' + title + '</a></h1>' +
                '</div>' +
                '<div class="entry-excerpt">' +
                description +
                '</div>' +
                '</div>' +
                '<a href="' + url + '" target="_blank"><div class="entry-info reddit">' +
                '<img class="article-icon" src="images/ic-reddit.png" /> <span style="text-decoration:underline;">Posted</span> <b>' + timeago.format(post_date) + '</b>' +
                '</div></a>' +
                '</article>';

            content = $(content);

            $('.bricks-wrapper').append(content).isotope( 'appended', content);
            $('.bricks-wrapper').isotope('updateSortData').isotope();

            SocialShareKit.init({
                reinitialize: true
            });
        });
        $('.bricks-wrapper').imagesLoaded().progress(function() {
            $('.bricks-wrapper').isotope('updateSortData').isotope();
            $('.bricks-wrapper').isotope('layout');
        });
    });
};

var facebookRes = function(articles) {
    console.log(articles);
    articles.map(function(post) {
        var content = '<article class="grid-item entry format-standard facebook">' +
            '<div id="fb-embed-' + post.id + '" class="entry-thumb facebook">' +
            '<fb:post id="fb-rendered-' + post.id + '" href="' + post['url'] + '" data-width="100%" ></fb:post>' +
            '</div>' +
            '<a href="' + post.url + '" target="_blank"><div class="entry-info facebook">' +
            '<img class="article-icon" src="images/ic-facebook.png" /> <span style="text-decoration:underline;">Posted</span> <b>' + timeago.format(post['post_date']) + '</b>' +
            '</div></a>'
        '</article>';
        $('.bricks-wrapper').append(content).masonry('layout');

        //$('#fb-rendered-' + post.id).attr("data-width", $('#fb-embed-' + post.id).width());
        FB.XFBML.parse(document.getElementById('fb-embed-' + post.id), function() {
            $('.bricks-wrapper').masonry("reloadItems").masonry("layout");
        });
    });
    $('.bricks-wrapper').imagesLoaded().progress(function() {
        $('.bricks-wrapper').masonry('layout');
    });
};

var facebookResponse = function() {
    getFacebookPosts(facebookRes);
};

function youtubeResponse() {
    searchYoutubePost().then(function(articles) {
        console.log('youtubeResponse: %o', articles);
        var item_width = $('.bricks-wrapper').width() * 0.23;
        articles.map(function(article) {
            console.log(article);
            var title = article["title"];
            var description = article["description"];
            var thumbnail = article["thumbnail"];
            var url = article["url"];
            var post_date = article["post_date"];
            var img_height = article["height"];
            var img_width = article["width"];
            var measure_width = item_width / img_width * img_height;

            var content = '<article class="grid-item entry format-video youtube"><div class="sort_post_date" style="display: none;">' + post_date + '</div>' +
                '<div class="entry-thumb video-image">' +
                '<a href="' + url + '" data-lity>' +
                '<img src="' + thumbnail + '" style="alt="' + title + '">' +
                '</a>' +
                '<div class="ssk-group" data-url="' + url + '">' +
                '<a href="" class="ssk ssk-facebook"></a>' +
                '<a href="" class="ssk ssk-twitter"></a>' +
                '<a href="" class="ssk ssk-google-plus"></a>' +
                '<a href="" class="ssk ssk-pinterest"></a>' +
                '<a href="" class="ssk ssk-tumblr"></a>' +
                '<a href="" class="ssk ssk-email"></a>' +
                '</div>' +
                '</div>' +
                '<div class="entry-text">' +
                '<div class="entry-header">' +
                '<h1 class="entry-title"><a href="' + url + '" target="_blank">' + title + '</a></h1>' +
                '</div>' +
                '<div class="entry-excerpt">' +
                description +
                '</div>' +
                '</div>' +
                '<a href="' + url + '" target="_blank"><div class="entry-info youtube">' +
                '<img class="article-icon" src="images/ic-youtube.png" /> <span style="text-decoration:underline;">Posted</span> <b>' + timeago.format(post_date) + '</b>' +
                '</div></a>' +
                '</article>';

            content = $(content);

            $('.bricks-wrapper').append(content).isotope( 'appended', content);
            $('.bricks-wrapper').isotope('updateSortData').isotope();

            SocialShareKit.init({
                reinitialize: true
            });
        })

    });
    $('.bricks-wrapper').imagesLoaded().progress(function() {
        $('.bricks-wrapper').isotope('updateSortData').isotope();
        $('.bricks-wrapper').isotope('layout');
    });
}

function tumblrResponse() {
    var item_width = $('.bricks-wrapper').width() * 0.23;
    getThumblrPost().then(function(articles) {
        articles.map(function(article) {
            var url = article["url"];
            var thumbnail = article["thumbnail"];
            var description = article["description"];
            var post_date = article["post_date"] * 1000;
            var type = article['type'];
            var img_height = article["img_height"];
            var img_width = article["img_width"];
            var measure_width = item_width / img_width * img_height;

            var content = '<article class="grid-item entry format-standard tumblr"><div class="sort_post_date" style="display: none;">' + post_date + '</div>' +
                '<div class="entry-thumb">';
            if (thumbnail) {
                content += '<a href="' + url + '" class="thumb-link" target="_blank">' +
                    '<img src="' + thumbnail + '" alt="' + description + '">' +
                    '</a>';
            } else if (type == 'text') {
                content += '<a href="' + url + '" class="thumb-link" target="_blank">' +
                    description +
                    '</a>';
            }
            content += '<div class="ssk-group" data-url="' + url + '">' +
                '<a href="" class="ssk ssk-facebook"></a>' +
                '<a href="" class="ssk ssk-twitter"></a>' +
                '<a href="" class="ssk ssk-google-plus"></a>' +
                '<a href="" class="ssk ssk-pinterest"></a>' +
                '<a href="" class="ssk ssk-tumblr"></a>' +
                '<a href="" class="ssk ssk-email"></a>' +
                '</div>' +
                '</div>';
            if (type != 'text') {
                content += '<div class="entry-text">' +
                    '<div class="entry-header">' +
                    //'<h1 class="entry-title"><a href="' + url + '" target="_blank">' + title + '</a></h1>' +
                    '</div>';
                content += '<div class="entry-excerpt">' +
                    description +
                    '</div></div>';
            }
            content += '<a href="' + url + '" target="_blank"><div class="entry-info tumblr">' +
                '<img class="article-icon" src="images/ic-tumblr.png" /> <span style="text-decoration:underline;">Posted</span> <b>' + timeago.format(post_date) + '</b>' +
                '</div></a>' +
                '</article>';

            content = $(content);

            $('.bricks-wrapper').append(content).isotope( 'appended', content);
            $('.bricks-wrapper').isotope('updateSortData').isotope();

            SocialShareKit.init({
                reinitialize: true
            });
        });
    });
    $('.bricks-wrapper').imagesLoaded().progress(function() {
        $('.bricks-wrapper').isotope('updateSortData').isotope();
        $('.bricks-wrapper').isotope('layout');
    });

}

function apiGetAll() {
    loadScript('js/youtube-api.js', youtubeResponse);
    loadScript('js/flickr-api.js', flickrResponse);
    loadScript('js/reddit-api.js', redditResponse);
    loadScript('js/tumblr-api.js', tumblrResponse);
}

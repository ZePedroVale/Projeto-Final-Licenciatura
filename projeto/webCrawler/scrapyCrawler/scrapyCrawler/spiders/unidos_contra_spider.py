import scrapy


class UnidosContraSpider(scrapy.Spider):
    name = "unidoscontradesperdicio"
    start_urls = [
            'https://www.unidoscontraodesperdicio.pt/actualidade'
        ]

    ##def start_requests(self):
    ##    urls = [
    ##        'https://quotes.toscrape.com/page/1/',
    ##        'https://quotes.toscrape.com/page/2/',
    ##    ]
    ##    for url in urls:
    ##        yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        for item in response.css('.gallery-item-container'):            
            yield {
                'title': str(item.css('div.blog-post-post-list-title-color::text').get()),
                'text': str(item.css('div.Q4M-9::text').get()),#The get method returns the first found item, we could use the 0 index
                'href': item.css('div a').attrib['href'],#Different ways to get the attribute, as .attrib['attribute'] or as ::(attribute)
                'img': item.css('.gallery-item img::attr(src)').get()
            }

        next_page = response.css('div.ia60V a.XN7yC::attr(href)').get()
        self.log(next_page)
        if next_page is not None:
            next_page = response.urljoin(next_page)
            yield scrapy.Request(next_page, callback=self.parse)
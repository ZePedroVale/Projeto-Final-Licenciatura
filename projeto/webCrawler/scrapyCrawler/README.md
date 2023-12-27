# Web Crawler

Como iniciar o Web Crawler:
Primeiro instale o scrapy, que é a biblioteca utilizada para fazer o crawling

```bash
 pip install scrapy
```

Na pasta scrapyCrawler (~/Smart_education_tool/webCrawler/scrapyCrawler), pelo terminal, rode o seguinte comando:

```bash
scrapy crawl unidoscontradesperdicio
```

O resultado será um json que retorna todos os títulos, href, textos e imagens da primeira página do site unidoscontraodesperdicio.pt.

A partir do json, qualquer coisa pode ser feita.

### Note que, o nome por onde será iniciado o crawling tem de ser o mesmo nome da aranha localizada em scrapyCrawler/spiders, que no caso é unidoscontradesperdicio, se este nome mudar, o comando do scrapy crawl também tem que mudar.

Para salvar o output do scrapy crawl, o seguinte comando é utilizado:

```bash
scrapy crawl unidoscontradesperdicio -O <nome_do_arquivo>.<extensao>
```

Optaremos aqui por salvar em csv por ora, pois ao salvar em json, os caracteres são colocados em unicode, quebrando links. Portanto:

```bash
scrapy crawl unidoscontradesperdicio -O desperdicio.csv
```

### Caso surja outra dúvida, o tutorial presente em https://docs.scrapy.org/en/latest/intro/tutorial.html é bem explicativo.

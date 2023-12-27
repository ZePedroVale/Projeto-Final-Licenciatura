# Django RestAPI com PostgreSQL em python

Backend para o projeto P077 - Gestão de Unidades de Alimentação

## Instalação / Dependências

Download e instalação do [PostgreSQL](https://www.postgresql.org/download/).

Criação da base de dados. (psql)
```bash
CREATE DATABASE projeto;
```

Dependências pelo [pip](https://pip.pypa.io/en/stable/).

```bash
pip install -U django psycopg2-binary djangorestframework
```

Modificar valores no ficheiro settings.py no diretório projeto de acordo com as escolhas na instalação do PostgreSQL.
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'projeto',
        'USER': 'utilizador',
        'PASSWORD': 'password',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}
```

Executar migração.
```bash
python manage.py makemigrations
python manage.py migrate
```



## Iniciar

```bash
python manage.py runserver
```

## Usar
Páginas disponíveis para visualizar o funcionamento:
* http://127.0.0.1:8000/api/meals/
* http://127.0.0.1:8000/api/ingredients/

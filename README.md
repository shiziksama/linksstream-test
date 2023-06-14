# Для запуска потрібен 
- Node js (розроблено на версії 20.3.0)
- php 8.2.7
- MySQL база даних

# Команди для запуску

## База даних
Треба створити базу даних, та створити .env файл з її параметрами
```ini
   DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=ls-test
    DB_USERNAME=root
    DB_PASSWORD=
```
    

## Частина бекенду. таблиці і дані в неї
```composer install```
```php artisan migrate```
```php artisan db:seed```

## Частина фронтенду. Встановлення та білд
```npm install```
```npm run build```

## Можна запускати
```php artisan serve```


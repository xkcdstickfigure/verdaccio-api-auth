# verdaccio-api-auth
This plugin allows you to handle authentication externally with an api.

## Installation
Install the plugin using `npm i verdaccio-api-auth`, then update your configuration:
```
auth:
    api-auth:
        url: https://anr.alles.cc/account/api
        secret: supersecretstr1ng
```

## API
There are 4 main endpoints you need to support:
- `POST /authenticate` - This will have a body containing `username` and `password`, and should return an array of group names if correct.
- `POST /allow_access` - This will have a body containing `user` (User information, containing `name`) and `package` (Package information, containing `name`). It should return true or false.
- `POST /allow_publish` - Body contains `user` and `package` objects, should return a boolean.
- `POST /allow_unpublish` - Body contains `user` and `package` objects, should return a boolean.

The secret specified in the configuration will be sent as the `Authorization` header.
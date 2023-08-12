-Tienes que crear una cuenta en marvel.com para obtener una api https://developer.marvel.com/documentation/getting_started

Para autenticarte en Server-Side Applications

Debes usar dos parametros ademas de la api:

    ts - un timestamp
    hash - un md5 digest del parametro ts , tu api privada y publica, Ej: md5(ts+privateKey+publicKey). https://www.md5hashgenerator.com/

Por ejemplo, un usuario con clave publica de "1234" y privada de "abcd" puede hacer un llamado a : http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 (hash value de md5 digest 1abcd1234)

Debes crear un archivo .env con los datos de la api y hash de md5:
#MARVEL
#PUBLIC
VITE_APIKEYMARVEL= tu API publica

#PRIVATE
VITE_APIKEYMARVELP= tu API privada

VITE_HASH= tu Hash md5

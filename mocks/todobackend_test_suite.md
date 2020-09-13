## Interaction 0: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos the pre-requisites the api root responds to a GET (i.e. the server is up and accessible, CORS headers are set up)
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:58:32 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 280
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"6ab1b115-0287-4d61-896d-170c2af1f1cd","title":"blah","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/6ab1b115-0287-4d61-896d-170c2af1f1cd","url":"https://todo-backend-sinatra.herokuapp.com/todos/6ab1b115-0287-4d61-896d-170c2af1f1cd"}]
```


## Interaction 1: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos the pre-requisites the api root responds to a POST with the todo which was posted to it
content-length: 18
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:58:34 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/35bfcb42-6fb5-4217-badd-c762045c42f8
content-length: 270
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"a todo","uid":"35bfcb42-6fb5-4217-badd-c762045c42f8","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/35bfcb42-6fb5-4217-badd-c762045c42f8","url":"https://todo-backend-sinatra.herokuapp.com/todos/35bfcb42-6fb5-4217-badd-c762045c42f8"}
```


## Interaction 2: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos the pre-requisites the api root responds successfully to a DELETE
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:58:36 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
```

### Response body recorded for playback (204: ):

```

```


## Interaction 3: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos the pre-requisites after a DELETE the api root responds to a GET with a JSON representation of an empty array
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:58:38 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
```

### Response body recorded for playback (204: ):

```

```


## Interaction 4: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos the pre-requisites after a DELETE the api root responds to a GET with a JSON representation of an empty array
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:58:39 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 2
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[]
```


## Interaction 5: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos the pre-requisites after a DELETE the api root responds to a GET with a JSON representation of an empty array
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:58:41 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
```

### Response body recorded for playback (204: ):

```

```


## Interaction 6: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos storing new todos by posting to the root url adds a new todo to the list of todos at the root url
content-length: 24
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"walk the dog"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:58:42 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/4c0b43ec-9b86-4e28-9406-ffccb1a5c3cf
content-length: 276
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"walk the dog","uid":"4c0b43ec-9b86-4e28-9406-ffccb1a5c3cf","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/4c0b43ec-9b86-4e28-9406-ffccb1a5c3cf","url":"https://todo-backend-sinatra.herokuapp.com/todos/4c0b43ec-9b86-4e28-9406-ffccb1a5c3cf"}
```


## Interaction 7: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos storing new todos by posting to the root url adds a new todo to the list of todos at the root url
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"walk the dog"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:58:43 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 288
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"4c0b43ec-9b86-4e28-9406-ffccb1a5c3cf","title":"walk the dog","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/4c0b43ec-9b86-4e28-9406-ffccb1a5c3cf","url":"https://todo-backend-sinatra.herokuapp.com/todos/4c0b43ec-9b86-4e28-9406-ffccb1a5c3cf"}]
```


## Interaction 8: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos storing new todos by posting to the root url adds a new todo to the list of todos at the root url
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"walk the dog"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:58:45 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
```

### Response body recorded for playback (204: ):

```

```


## Interaction 9: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos storing new todos by posting to the root url sets up a new todo as initially not completed
content-length: 16
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:58:46 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/951e3693-c8ba-4c29-b561-44d8ac44383a
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"951e3693-c8ba-4c29-b561-44d8ac44383a","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/951e3693-c8ba-4c29-b561-44d8ac44383a","url":"https://todo-backend-sinatra.herokuapp.com/todos/951e3693-c8ba-4c29-b561-44d8ac44383a"}
```


## Interaction 10: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos storing new todos by posting to the root url sets up a new todo as initially not completed
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:58:47 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 280
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"951e3693-c8ba-4c29-b561-44d8ac44383a","title":"blah","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/951e3693-c8ba-4c29-b561-44d8ac44383a","url":"https://todo-backend-sinatra.herokuapp.com/todos/951e3693-c8ba-4c29-b561-44d8ac44383a"}]
```


## Interaction 11: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos storing new todos by posting to the root url sets up a new todo as initially not completed
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:58:49 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
```

### Response body recorded for playback (204: ):

```

```


## Interaction 12: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos storing new todos by posting to the root url each new todo has a url
content-length: 16
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:58:50 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/e4e6659b-eaf7-4c0e-afb5-6027c1ce03a8
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"e4e6659b-eaf7-4c0e-afb5-6027c1ce03a8","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/e4e6659b-eaf7-4c0e-afb5-6027c1ce03a8","url":"https://todo-backend-sinatra.herokuapp.com/todos/e4e6659b-eaf7-4c0e-afb5-6027c1ce03a8"}
```


## Interaction 13: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos storing new todos by posting to the root url each new todo has a url
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:58:52 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 280
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"e4e6659b-eaf7-4c0e-afb5-6027c1ce03a8","title":"blah","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/e4e6659b-eaf7-4c0e-afb5-6027c1ce03a8","url":"https://todo-backend-sinatra.herokuapp.com/todos/e4e6659b-eaf7-4c0e-afb5-6027c1ce03a8"}]
```


## Interaction 14: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos storing new todos by posting to the root url each new todo has a url
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:58:53 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
```

### Response body recorded for playback (204: ):

```

```


## Interaction 15: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos storing new todos by posting to the root url each new todo has a url, which returns a todo
content-length: 19
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"my todo"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:58:54 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/0cd76655-1ae2-4477-858b-bda176e96ae6
content-length: 271
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"my todo","uid":"0cd76655-1ae2-4477-858b-bda176e96ae6","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/0cd76655-1ae2-4477-858b-bda176e96ae6","url":"https://todo-backend-sinatra.herokuapp.com/todos/0cd76655-1ae2-4477-858b-bda176e96ae6"}
```


## Interaction 16: GET /todos/0cd76655-1ae2-4477-858b-bda176e96ae6
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos storing new todos by posting to the root url each new todo has a url, which returns a todo
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"my todo"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:58:55 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 281
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
{"uid":"0cd76655-1ae2-4477-858b-bda176e96ae6","title":"my todo","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/0cd76655-1ae2-4477-858b-bda176e96ae6","url":"https://todo-backend-sinatra.herokuapp.com/todos/0cd76655-1ae2-4477-858b-bda176e96ae6"}
```


## Interaction 17: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos storing new todos by posting to the root url each new todo has a url, which returns a todo
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"my todo"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:58:57 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
```

### Response body recorded for playback (204: ):

```

```


## Interaction 18: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos working with an existing todo can navigate from a list of todos to an individual todo via urls
content-length: 27
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:58:59 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/524fc534-260c-4f7a-9636-10263ffa4598
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"todo the second","uid":"524fc534-260c-4f7a-9636-10263ffa4598","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/524fc534-260c-4f7a-9636-10263ffa4598","url":"https://todo-backend-sinatra.herokuapp.com/todos/524fc534-260c-4f7a-9636-10263ffa4598"}
```


## Interaction 19: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos working with an existing todo can navigate from a list of todos to an individual todo via urls
content-length: 27
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:58:59 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/b7bd10b8-d588-46e7-8414-7edb2f1b7c46
content-length: 278
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"todo the first","uid":"b7bd10b8-d588-46e7-8414-7edb2f1b7c46","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/b7bd10b8-d588-46e7-8414-7edb2f1b7c46","url":"https://todo-backend-sinatra.herokuapp.com/todos/b7bd10b8-d588-46e7-8414-7edb2f1b7c46"}
```


## Interaction 20: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos working with an existing todo can navigate from a list of todos to an individual todo via urls
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:00 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 580
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"524fc534-260c-4f7a-9636-10263ffa4598","title":"todo the second","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/524fc534-260c-4f7a-9636-10263ffa4598","url":"https://todo-backend-sinatra.herokuapp.com/todos/524fc534-260c-4f7a-9636-10263ffa4598"},{"uid":"b7bd10b8-d588-46e7-8414-7edb2f1b7c46","title":"todo the first","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/b7bd10b8-d588-46e7-8414-7edb2f1b7c46","url":"https://todo-backend-sinatra.herokuapp.com/todos/b7bd10b8-d588-46e7-8414-7edb2f1b7c46"}]
```


## Interaction 21: GET /todos/524fc534-260c-4f7a-9636-10263ffa4598
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos working with an existing todo can navigate from a list of todos to an individual todo via urls
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:02 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 289
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
{"uid":"524fc534-260c-4f7a-9636-10263ffa4598","title":"todo the second","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/524fc534-260c-4f7a-9636-10263ffa4598","url":"https://todo-backend-sinatra.herokuapp.com/todos/524fc534-260c-4f7a-9636-10263ffa4598"}
```


## Interaction 22: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos working with an existing todo can navigate from a list of todos to an individual todo via urls
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:03 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
```

### Response body recorded for playback (204: ):

```

```


## Interaction 23: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos working with an existing todo can change the todo's title by PATCHing to the todo's url
content-length: 25
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"initial title"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:05 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/ace5e2ea-e81f-47d6-8870-4c9321189630
content-length: 277
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"initial title","uid":"ace5e2ea-e81f-47d6-8870-4c9321189630","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/ace5e2ea-e81f-47d6-8870-4c9321189630","url":"https://todo-backend-sinatra.herokuapp.com/todos/ace5e2ea-e81f-47d6-8870-4c9321189630"}
```


## Interaction 24: PATCH /todos/ace5e2ea-e81f-47d6-8870-4c9321189630
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos working with an existing todo can change the todo's title by PATCHing to the todo's url
content-length: 25
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"bathe the cat"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:06 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 287
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
{"uid":"ace5e2ea-e81f-47d6-8870-4c9321189630","title":"bathe the cat","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/ace5e2ea-e81f-47d6-8870-4c9321189630","url":"https://todo-backend-sinatra.herokuapp.com/todos/ace5e2ea-e81f-47d6-8870-4c9321189630"}
```


## Interaction 25: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos working with an existing todo can change the todo's title by PATCHing to the todo's url
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"bathe the cat"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:07 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
```

### Response body recorded for playback (204: ):

```

```


## Interaction 26: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos working with an existing todo can change the todo's completedness by PATCHing to the todo's url
content-length: 16
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:08 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/64cef6a0-c710-44ee-9e02-00dd62af1d7a
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"64cef6a0-c710-44ee-9e02-00dd62af1d7a","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/64cef6a0-c710-44ee-9e02-00dd62af1d7a","url":"https://todo-backend-sinatra.herokuapp.com/todos/64cef6a0-c710-44ee-9e02-00dd62af1d7a"}
```


## Interaction 27: PATCH /todos/64cef6a0-c710-44ee-9e02-00dd62af1d7a
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos working with an existing todo can change the todo's completedness by PATCHing to the todo's url
content-length: 18
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"completed":true}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:09 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 277
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
{"uid":"64cef6a0-c710-44ee-9e02-00dd62af1d7a","title":"blah","order":0,"completed":true,"href":"https://todo-backend-sinatra.herokuapp.com/todos/64cef6a0-c710-44ee-9e02-00dd62af1d7a","url":"https://todo-backend-sinatra.herokuapp.com/todos/64cef6a0-c710-44ee-9e02-00dd62af1d7a"}
```


## Interaction 28: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos working with an existing todo can change the todo's completedness by PATCHing to the todo's url
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"completed":true}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:11 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
```

### Response body recorded for playback (204: ):

```

```


## Interaction 29: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos working with an existing todo changes to a todo are persisted and show up when re-fetching the todo
content-length: 16
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:13 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/adca5b1a-b31f-4a99-bb9c-73add44226c3
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"adca5b1a-b31f-4a99-bb9c-73add44226c3","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/adca5b1a-b31f-4a99-bb9c-73add44226c3","url":"https://todo-backend-sinatra.herokuapp.com/todos/adca5b1a-b31f-4a99-bb9c-73add44226c3"}
```


## Interaction 30: PATCH /todos/adca5b1a-b31f-4a99-bb9c-73add44226c3
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos working with an existing todo changes to a todo are persisted and show up when re-fetching the todo
content-length: 42
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"changed title","completed":true}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:14 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 286
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
{"uid":"adca5b1a-b31f-4a99-bb9c-73add44226c3","title":"changed title","order":0,"completed":true,"href":"https://todo-backend-sinatra.herokuapp.com/todos/adca5b1a-b31f-4a99-bb9c-73add44226c3","url":"https://todo-backend-sinatra.herokuapp.com/todos/adca5b1a-b31f-4a99-bb9c-73add44226c3"}
```


## Interaction 31: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos working with an existing todo changes to a todo are persisted and show up when re-fetching the todo
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"changed title","completed":true}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:14 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 286
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
{"uid":"adca5b1a-b31f-4a99-bb9c-73add44226c3","title":"changed title","order":0,"completed":true,"href":"https://todo-backend-sinatra.herokuapp.com/todos/adca5b1a-b31f-4a99-bb9c-73add44226c3","url":"https://todo-backend-sinatra.herokuapp.com/todos/adca5b1a-b31f-4a99-bb9c-73add44226c3"}
```


## Interaction 32: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos working with an existing todo changes to a todo are persisted and show up when re-fetching the todo
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"changed title","completed":true}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:15 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 288
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"adca5b1a-b31f-4a99-bb9c-73add44226c3","title":"changed title","order":0,"completed":true,"href":"https://todo-backend-sinatra.herokuapp.com/todos/adca5b1a-b31f-4a99-bb9c-73add44226c3","url":"https://todo-backend-sinatra.herokuapp.com/todos/adca5b1a-b31f-4a99-bb9c-73add44226c3"}]
```


## Interaction 33: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos working with an existing todo changes to a todo are persisted and show up when re-fetching the todo
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"changed title","completed":true}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:16 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
```

### Response body recorded for playback (204: ):

```

```


## Interaction 34: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos working with an existing todo can delete a todo making a DELETE request to the todo's url
content-length: 16
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:18 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/3b078400-d7de-4933-9d7f-75f0c3443c61
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"3b078400-d7de-4933-9d7f-75f0c3443c61","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/3b078400-d7de-4933-9d7f-75f0c3443c61","url":"https://todo-backend-sinatra.herokuapp.com/todos/3b078400-d7de-4933-9d7f-75f0c3443c61"}
```


## Interaction 35: DELETE /todos/3b078400-d7de-4933-9d7f-75f0c3443c61
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos working with an existing todo can delete a todo making a DELETE request to the todo's url
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:20 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
```

### Response body recorded for playback (204: ):

```

```


## Interaction 36: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos working with an existing todo can delete a todo making a DELETE request to the todo's url
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:21 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 2
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[]
```


## Interaction 37: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos tracking todo order can create a todo with an order field
content-length: 28
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"title":"blah","order":523}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:22 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/3385b027-30e5-4084-a37c-a6a8093ad049
content-length: 280
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","order":523,"uid":"3385b027-30e5-4084-a37c-a6a8093ad049","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/3385b027-30e5-4084-a37c-a6a8093ad049","url":"https://todo-backend-sinatra.herokuapp.com/todos/3385b027-30e5-4084-a37c-a6a8093ad049"}
```


## Interaction 38: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos tracking todo order can PATCH a todo to change its order
content-length: 27
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"order":10,"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:23 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/f58f1aba-f99c-4270-9301-893275605282
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"order":10,"title":"blah","uid":"f58f1aba-f99c-4270-9301-893275605282","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/f58f1aba-f99c-4270-9301-893275605282","url":"https://todo-backend-sinatra.herokuapp.com/todos/f58f1aba-f99c-4270-9301-893275605282"}
```


## Interaction 39: PATCH /todos/f58f1aba-f99c-4270-9301-893275605282
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos tracking todo order can PATCH a todo to change its order
content-length: 12
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"order":95}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:25 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
{"uid":"f58f1aba-f99c-4270-9301-893275605282","title":"blah","order":95,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/f58f1aba-f99c-4270-9301-893275605282","url":"https://todo-backend-sinatra.herokuapp.com/todos/f58f1aba-f99c-4270-9301-893275605282"}
```


## Interaction 40: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos tracking todo order remembers changes to a todo's order
content-length: 27
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"order":10,"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:25 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/6cd4d679-1cb8-4b20-b711-a75511f35c0a
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"order":10,"title":"blah","uid":"6cd4d679-1cb8-4b20-b711-a75511f35c0a","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/6cd4d679-1cb8-4b20-b711-a75511f35c0a","url":"https://todo-backend-sinatra.herokuapp.com/todos/6cd4d679-1cb8-4b20-b711-a75511f35c0a"}
```


## Interaction 41: PATCH /todos/6cd4d679-1cb8-4b20-b711-a75511f35c0a
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos tracking todo order remembers changes to a todo's order
content-length: 12
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"order":95}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:26 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
{"uid":"6cd4d679-1cb8-4b20-b711-a75511f35c0a","title":"blah","order":95,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/6cd4d679-1cb8-4b20-b711-a75511f35c0a","url":"https://todo-backend-sinatra.herokuapp.com/todos/6cd4d679-1cb8-4b20-b711-a75511f35c0a"}
```


## Interaction 42: GET /todos/6cd4d679-1cb8-4b20-b711-a75511f35c0a
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://servirtium.github.io
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at http://todo-backend-sinatra.herokuapp.com/todos tracking todo order remembers changes to a todo's order
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```
{"order":95}
```

### Response headers recorded for playback:

```
date: Sun, 13 Sep 2020 15:59:27 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
{"uid":"6cd4d679-1cb8-4b20-b711-a75511f35c0a","title":"blah","order":95,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/6cd4d679-1cb8-4b20-b711-a75511f35c0a","url":"https://todo-backend-sinatra.herokuapp.com/todos/6cd4d679-1cb8-4b20-b711-a75511f35c0a"}
```

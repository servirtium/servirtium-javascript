## Interaction 0: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd the pre-requisites the api root responds to a GET (i.e. the server is up and accessible, CORS headers are set up)
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:12 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 842
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"1eea045d-f670-4940-a745-8ffd5f7d68c8","title":"blah","order":523,"completed":false,"href":"https://http4k-todo-backend.local.gd/todos/1eea045d-f670-4940-a745-8ffd5f7d68c8","url":"https://http4k-todo-backend.local.gd/todos/1eea045d-f670-4940-a745-8ffd5f7d68c8"},{"uid":"c5faf470-7ea8-42c2-9cf9-f77ab24ae823","title":"blah","order":95,"completed":false,"href":"https://http4k-todo-backend.local.gd/todos/c5faf470-7ea8-42c2-9cf9-f77ab24ae823","url":"https://http4k-todo-backend.local.gd/todos/c5faf470-7ea8-42c2-9cf9-f77ab24ae823"},{"uid":"7147d6b1-f3ca-422e-8ed4-86fcfeae2c53","title":"blah","order":95,"completed":false,"href":"https://http4k-todo-backend.local.gd/todos/7147d6b1-f3ca-422e-8ed4-86fcfeae2c53","url":"https://http4k-todo-backend.local.gd/todos/7147d6b1-f3ca-422e-8ed4-86fcfeae2c53"}]
```


## Interaction 1: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd the pre-requisites the api root responds to a POST with the todo which was posted to it
content-length: 18
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:13 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://http4k-todo-backend.local.gd/todos/3b63ddc6-54ed-4c75-8e94-0d474fb41582
content-length: 270
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"a todo","uid":"3b63ddc6-54ed-4c75-8e94-0d474fb41582","completed":false,"href":"https://http4k-todo-backend.local.gd/todos/3b63ddc6-54ed-4c75-8e94-0d474fb41582","url":"https://http4k-todo-backend.local.gd/todos/3b63ddc6-54ed-4c75-8e94-0d474fb41582"}
```


## Interaction 2: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd the pre-requisites the api root responds successfully to a DELETE
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:13 GMT
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
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd the pre-requisites after a DELETE the api root responds to a GET with a JSON representation of an empty array
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:14 GMT
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
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd the pre-requisites after a DELETE the api root responds to a GET with a JSON representation of an empty array
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:14 GMT
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
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd the pre-requisites after a DELETE the api root responds to a GET with a JSON representation of an empty array
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:14 GMT
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
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd storing new todos by posting to the root url adds a new todo to the list of todos at the root url
content-length: 24
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"walk the dog"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:15 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://http4k-todo-backend.local.gd/todos/647ddb19-cad1-4818-a84d-1be5c2876927
content-length: 276
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"walk the dog","uid":"647ddb19-cad1-4818-a84d-1be5c2876927","completed":false,"href":"https://http4k-todo-backend.local.gd/todos/647ddb19-cad1-4818-a84d-1be5c2876927","url":"https://http4k-todo-backend.local.gd/todos/647ddb19-cad1-4818-a84d-1be5c2876927"}
```


## Interaction 7: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd storing new todos by posting to the root url adds a new todo to the list of todos at the root url
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"walk the dog"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:16 GMT
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
[{"uid":"647ddb19-cad1-4818-a84d-1be5c2876927","title":"walk the dog","order":0,"completed":false,"href":"https://http4k-todo-backend.local.gd/todos/647ddb19-cad1-4818-a84d-1be5c2876927","url":"https://http4k-todo-backend.local.gd/todos/647ddb19-cad1-4818-a84d-1be5c2876927"}]
```


## Interaction 8: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd storing new todos by posting to the root url adds a new todo to the list of todos at the root url
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"walk the dog"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:15 GMT
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
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd storing new todos by posting to the root url sets up a new todo as initially not completed
content-length: 16
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:16 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://http4k-todo-backend.local.gd/todos/c84391ef-fdfa-4981-92ab-3a8c6519d755
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"c84391ef-fdfa-4981-92ab-3a8c6519d755","completed":false,"href":"https://http4k-todo-backend.local.gd/todos/c84391ef-fdfa-4981-92ab-3a8c6519d755","url":"https://http4k-todo-backend.local.gd/todos/c84391ef-fdfa-4981-92ab-3a8c6519d755"}
```


## Interaction 10: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd storing new todos by posting to the root url sets up a new todo as initially not completed
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:17 GMT
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
[{"uid":"c84391ef-fdfa-4981-92ab-3a8c6519d755","title":"blah","order":0,"completed":false,"href":"https://http4k-todo-backend.local.gd/todos/c84391ef-fdfa-4981-92ab-3a8c6519d755","url":"https://http4k-todo-backend.local.gd/todos/c84391ef-fdfa-4981-92ab-3a8c6519d755"}]
```


## Interaction 11: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd storing new todos by posting to the root url sets up a new todo as initially not completed
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:17 GMT
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
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd storing new todos by posting to the root url each new todo has a url
content-length: 16
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:18 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://http4k-todo-backend.local.gd/todos/f6217651-4f5d-44e2-9ae4-907862852ad3
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"f6217651-4f5d-44e2-9ae4-907862852ad3","completed":false,"href":"https://http4k-todo-backend.local.gd/todos/f6217651-4f5d-44e2-9ae4-907862852ad3","url":"https://http4k-todo-backend.local.gd/todos/f6217651-4f5d-44e2-9ae4-907862852ad3"}
```


## Interaction 13: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd storing new todos by posting to the root url each new todo has a url
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:18 GMT
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
[{"uid":"f6217651-4f5d-44e2-9ae4-907862852ad3","title":"blah","order":0,"completed":false,"href":"https://http4k-todo-backend.local.gd/todos/f6217651-4f5d-44e2-9ae4-907862852ad3","url":"https://http4k-todo-backend.local.gd/todos/f6217651-4f5d-44e2-9ae4-907862852ad3"}]
```


## Interaction 14: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd storing new todos by posting to the root url each new todo has a url
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:18 GMT
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
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd storing new todos by posting to the root url each new todo has a url, which returns a todo
content-length: 19
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"my todo"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:19 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://http4k-todo-backend.local.gd/todos/9261a618-04e6-4a6f-aece-3ac9aa4bd991
content-length: 271
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"my todo","uid":"9261a618-04e6-4a6f-aece-3ac9aa4bd991","completed":false,"href":"https://http4k-todo-backend.local.gd/todos/9261a618-04e6-4a6f-aece-3ac9aa4bd991","url":"https://http4k-todo-backend.local.gd/todos/9261a618-04e6-4a6f-aece-3ac9aa4bd991"}
```


## Interaction 16: GET /todos/9261a618-04e6-4a6f-aece-3ac9aa4bd991
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd storing new todos by posting to the root url each new todo has a url, which returns a todo
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"my todo"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:20 GMT
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
{"uid":"9261a618-04e6-4a6f-aece-3ac9aa4bd991","title":"my todo","order":0,"completed":false,"href":"https://http4k-todo-backend.local.gd/todos/9261a618-04e6-4a6f-aece-3ac9aa4bd991","url":"https://http4k-todo-backend.local.gd/todos/9261a618-04e6-4a6f-aece-3ac9aa4bd991"}
```


## Interaction 17: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd storing new todos by posting to the root url each new todo has a url, which returns a todo
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"my todo"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:20 GMT
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
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd working with an existing todo can navigate from a list of todos to an individual todo via urls
content-length: 27
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:20 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://http4k-todo-backend.local.gd/todos/658d11ab-fee3-47e9-bcaf-0e3498215f56
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"todo the second","uid":"658d11ab-fee3-47e9-bcaf-0e3498215f56","completed":false,"href":"https://http4k-todo-backend.local.gd/todos/658d11ab-fee3-47e9-bcaf-0e3498215f56","url":"https://http4k-todo-backend.local.gd/todos/658d11ab-fee3-47e9-bcaf-0e3498215f56"}
```


## Interaction 19: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd working with an existing todo can navigate from a list of todos to an individual todo via urls
content-length: 27
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:20 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://http4k-todo-backend.local.gd/todos/6e6251f1-67b2-463d-aa83-f8df3ea6c736
content-length: 278
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"todo the first","uid":"6e6251f1-67b2-463d-aa83-f8df3ea6c736","completed":false,"href":"https://http4k-todo-backend.local.gd/todos/6e6251f1-67b2-463d-aa83-f8df3ea6c736","url":"https://http4k-todo-backend.local.gd/todos/6e6251f1-67b2-463d-aa83-f8df3ea6c736"}
```


## Interaction 20: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd working with an existing todo can navigate from a list of todos to an individual todo via urls
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:20 GMT
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
[{"uid":"6e6251f1-67b2-463d-aa83-f8df3ea6c736","title":"todo the first","order":0,"completed":false,"href":"https://http4k-todo-backend.local.gd/todos/6e6251f1-67b2-463d-aa83-f8df3ea6c736","url":"https://http4k-todo-backend.local.gd/todos/6e6251f1-67b2-463d-aa83-f8df3ea6c736"},{"uid":"658d11ab-fee3-47e9-bcaf-0e3498215f56","title":"todo the second","order":0,"completed":false,"href":"https://http4k-todo-backend.local.gd/todos/658d11ab-fee3-47e9-bcaf-0e3498215f56","url":"https://http4k-todo-backend.local.gd/todos/658d11ab-fee3-47e9-bcaf-0e3498215f56"}]
```


## Interaction 21: GET /todos/6e6251f1-67b2-463d-aa83-f8df3ea6c736
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd working with an existing todo can navigate from a list of todos to an individual todo via urls
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:21 GMT
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
{"uid":"6e6251f1-67b2-463d-aa83-f8df3ea6c736","title":"todo the first","order":0,"completed":false,"href":"https://http4k-todo-backend.local.gd/todos/6e6251f1-67b2-463d-aa83-f8df3ea6c736","url":"https://http4k-todo-backend.local.gd/todos/6e6251f1-67b2-463d-aa83-f8df3ea6c736"}
```


## Interaction 22: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd working with an existing todo can navigate from a list of todos to an individual todo via urls
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:21 GMT
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
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd working with an existing todo can change the todo's title by PATCHing to the todo's url
content-length: 25
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"initial title"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:22 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://http4k-todo-backend.local.gd/todos/25a08ef2-5aff-49ed-a03a-936b84e21ad5
content-length: 277
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"initial title","uid":"25a08ef2-5aff-49ed-a03a-936b84e21ad5","completed":false,"href":"https://http4k-todo-backend.local.gd/todos/25a08ef2-5aff-49ed-a03a-936b84e21ad5","url":"https://http4k-todo-backend.local.gd/todos/25a08ef2-5aff-49ed-a03a-936b84e21ad5"}
```


## Interaction 24: PATCH /todos/25a08ef2-5aff-49ed-a03a-936b84e21ad5
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd working with an existing todo can change the todo's title by PATCHing to the todo's url
content-length: 25
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"bathe the cat"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:22 GMT
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
{"uid":"25a08ef2-5aff-49ed-a03a-936b84e21ad5","title":"bathe the cat","order":0,"completed":false,"href":"https://http4k-todo-backend.local.gd/todos/25a08ef2-5aff-49ed-a03a-936b84e21ad5","url":"https://http4k-todo-backend.local.gd/todos/25a08ef2-5aff-49ed-a03a-936b84e21ad5"}
```


## Interaction 25: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd working with an existing todo can change the todo's title by PATCHing to the todo's url
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"bathe the cat"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:23 GMT
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
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd working with an existing todo can change the todo's completedness by PATCHing to the todo's url
content-length: 16
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:24 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://http4k-todo-backend.local.gd/todos/e849a7db-2f05-424c-941f-060fdb289394
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"e849a7db-2f05-424c-941f-060fdb289394","completed":false,"href":"https://http4k-todo-backend.local.gd/todos/e849a7db-2f05-424c-941f-060fdb289394","url":"https://http4k-todo-backend.local.gd/todos/e849a7db-2f05-424c-941f-060fdb289394"}
```


## Interaction 27: PATCH /todos/e849a7db-2f05-424c-941f-060fdb289394
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd working with an existing todo can change the todo's completedness by PATCHing to the todo's url
content-length: 18
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"completed":true}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:24 GMT
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
{"uid":"e849a7db-2f05-424c-941f-060fdb289394","title":"blah","order":0,"completed":true,"href":"https://http4k-todo-backend.local.gd/todos/e849a7db-2f05-424c-941f-060fdb289394","url":"https://http4k-todo-backend.local.gd/todos/e849a7db-2f05-424c-941f-060fdb289394"}
```


## Interaction 28: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd working with an existing todo can change the todo's completedness by PATCHing to the todo's url
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"completed":true}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:24 GMT
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
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd working with an existing todo changes to a todo are persisted and show up when re-fetching the todo
content-length: 16
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:25 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://http4k-todo-backend.local.gd/todos/c9363ec9-0502-435d-89c8-63ed5cd560e9
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"c9363ec9-0502-435d-89c8-63ed5cd560e9","completed":false,"href":"https://http4k-todo-backend.local.gd/todos/c9363ec9-0502-435d-89c8-63ed5cd560e9","url":"https://http4k-todo-backend.local.gd/todos/c9363ec9-0502-435d-89c8-63ed5cd560e9"}
```


## Interaction 30: PATCH /todos/c9363ec9-0502-435d-89c8-63ed5cd560e9
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd working with an existing todo changes to a todo are persisted and show up when re-fetching the todo
content-length: 42
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"changed title","completed":true}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:25 GMT
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
{"uid":"c9363ec9-0502-435d-89c8-63ed5cd560e9","title":"changed title","order":0,"completed":true,"href":"https://http4k-todo-backend.local.gd/todos/c9363ec9-0502-435d-89c8-63ed5cd560e9","url":"https://http4k-todo-backend.local.gd/todos/c9363ec9-0502-435d-89c8-63ed5cd560e9"}
```


## Interaction 31: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd working with an existing todo changes to a todo are persisted and show up when re-fetching the todo
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"changed title","completed":true}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:25 GMT
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
[{"uid":"c9363ec9-0502-435d-89c8-63ed5cd560e9","title":"changed title","order":0,"completed":true,"href":"https://http4k-todo-backend.local.gd/todos/c9363ec9-0502-435d-89c8-63ed5cd560e9","url":"https://http4k-todo-backend.local.gd/todos/c9363ec9-0502-435d-89c8-63ed5cd560e9"}]
```


## Interaction 32: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd working with an existing todo changes to a todo are persisted and show up when re-fetching the todo
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"changed title","completed":true}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:25 GMT
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
{"uid":"c9363ec9-0502-435d-89c8-63ed5cd560e9","title":"changed title","order":0,"completed":true,"href":"https://http4k-todo-backend.local.gd/todos/c9363ec9-0502-435d-89c8-63ed5cd560e9","url":"https://http4k-todo-backend.local.gd/todos/c9363ec9-0502-435d-89c8-63ed5cd560e9"}
```


## Interaction 33: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd working with an existing todo changes to a todo are persisted and show up when re-fetching the todo
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"changed title","completed":true}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:26 GMT
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
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd working with an existing todo can delete a todo making a DELETE request to the todo's url
content-length: 16
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:26 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://http4k-todo-backend.local.gd/todos/854e07e8-84dd-496e-ac86-b9636224a643
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"854e07e8-84dd-496e-ac86-b9636224a643","completed":false,"href":"https://http4k-todo-backend.local.gd/todos/854e07e8-84dd-496e-ac86-b9636224a643","url":"https://http4k-todo-backend.local.gd/todos/854e07e8-84dd-496e-ac86-b9636224a643"}
```


## Interaction 35: DELETE /todos/854e07e8-84dd-496e-ac86-b9636224a643
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd working with an existing todo can delete a todo making a DELETE request to the todo's url
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:27 GMT
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
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd working with an existing todo can delete a todo making a DELETE request to the todo's url
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:27 GMT
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
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd tracking todo order can create a todo with an order field
content-length: 28
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"title":"blah","order":523}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:28 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://http4k-todo-backend.local.gd/todos/75332e78-f6c3-4bdc-9ba4-a7b8aaaf4ed7
content-length: 280
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","order":523,"uid":"75332e78-f6c3-4bdc-9ba4-a7b8aaaf4ed7","completed":false,"href":"https://http4k-todo-backend.local.gd/todos/75332e78-f6c3-4bdc-9ba4-a7b8aaaf4ed7","url":"https://http4k-todo-backend.local.gd/todos/75332e78-f6c3-4bdc-9ba4-a7b8aaaf4ed7"}
```


## Interaction 38: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd tracking todo order can PATCH a todo to change its order
content-length: 27
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"order":10,"title":"blah"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:28 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://http4k-todo-backend.local.gd/todos/b764a7cf-5ca1-45c9-a073-f102a3508a00
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"order":10,"title":"blah","uid":"b764a7cf-5ca1-45c9-a073-f102a3508a00","completed":false,"href":"https://http4k-todo-backend.local.gd/todos/b764a7cf-5ca1-45c9-a073-f102a3508a00","url":"https://http4k-todo-backend.local.gd/todos/b764a7cf-5ca1-45c9-a073-f102a3508a00"}
```


## Interaction 39: PATCH /todos/b764a7cf-5ca1-45c9-a073-f102a3508a00
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd tracking todo order can PATCH a todo to change its order
content-length: 12
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"order":95}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:29 GMT
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
{"uid":"b764a7cf-5ca1-45c9-a073-f102a3508a00","title":"blah","order":95,"completed":false,"href":"https://http4k-todo-backend.local.gd/todos/b764a7cf-5ca1-45c9-a073-f102a3508a00","url":"https://http4k-todo-backend.local.gd/todos/b764a7cf-5ca1-45c9-a073-f102a3508a00"}
```


## Interaction 40: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd tracking todo order remembers changes to a todo's order
content-length: 27
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"order":10,"title":"blah"}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:29 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://http4k-todo-backend.local.gd/todos/14d77b53-875e-4521-b9cb-0fa847526e3a
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"order":10,"title":"blah","uid":"14d77b53-875e-4521-b9cb-0fa847526e3a","completed":false,"href":"https://http4k-todo-backend.local.gd/todos/14d77b53-875e-4521-b9cb-0fa847526e3a","url":"https://http4k-todo-backend.local.gd/todos/14d77b53-875e-4521-b9cb-0fa847526e3a"}
```


## Interaction 41: PATCH /todos/14d77b53-875e-4521-b9cb-0fa847526e3a
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd tracking todo order remembers changes to a todo's order
content-length: 12
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"order":95}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:29 GMT
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
{"uid":"14d77b53-875e-4521-b9cb-0fa847526e3a","title":"blah","order":95,"completed":false,"href":"https://http4k-todo-backend.local.gd/todos/14d77b53-875e-4521-b9cb-0fa847526e3a","url":"https://http4k-todo-backend.local.gd/todos/14d77b53-875e-4521-b9cb-0fa847526e3a"}
```


## Interaction 42: GET /todos/14d77b53-875e-4521-b9cb-0fa847526e3a
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
referer: http://localhost:8000/index.html?https://http4k-todo-backend.local.gd
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
origin: http://localhost:8000
content-type: application/json
user-agent: Chrome under Selenium control
accept: text/plain, */*; q=0.01
fulltitle: Todo-Backend API residing at https://http4k-todo-backend.local.gd tracking todo order remembers changes to a todo's order
connection: close
host: http4k-todo-backend.local.gd
```

### Request body recorded for playback ():

```
{"order":95}
```

### Response headers recorded for playback:

```
date: Wed, 16 Sep 2020 14:27:30 GMT
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
{"uid":"14d77b53-875e-4521-b9cb-0fa847526e3a","title":"blah","order":95,"completed":false,"href":"https://http4k-todo-backend.local.gd/todos/14d77b53-875e-4521-b9cb-0fa847526e3a","url":"https://http4k-todo-backend.local.gd/todos/14d77b53-875e-4521-b9cb-0fa847526e3a"}
```

## Interaction 0: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:52:32 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 842
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"16f4d335-a95c-463e-b275-01636c0e247c","title":"blah","order":523,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/16f4d335-a95c-463e-b275-01636c0e247c","url":"https://todo-backend-sinatra.herokuapp.com/todos/16f4d335-a95c-463e-b275-01636c0e247c"},{"uid":"82164e43-9c06-4a83-b9d5-cce2265807e1","title":"blah","order":95,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/82164e43-9c06-4a83-b9d5-cce2265807e1","url":"https://todo-backend-sinatra.herokuapp.com/todos/82164e43-9c06-4a83-b9d5-cce2265807e1"},{"uid":"fae4f182-fb90-4b02-b883-acf1773eaf56","title":"blah","order":95,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/fae4f182-fb90-4b02-b883-acf1773eaf56","url":"https://todo-backend-sinatra.herokuapp.com/todos/fae4f182-fb90-4b02-b883-acf1773eaf56"}]
```


## Interaction 1: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 18
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:52:33 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/dbfe5486-71ef-4b4b-b4e5-db0bb2e15538
content-length: 270
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"a todo","uid":"dbfe5486-71ef-4b4b-b4e5-db0bb2e15538","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/dbfe5486-71ef-4b4b-b4e5-db0bb2e15538","url":"https://todo-backend-sinatra.herokuapp.com/todos/dbfe5486-71ef-4b4b-b4e5-db0bb2e15538"}
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
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:52:34 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
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
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:52:36 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
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
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:52:37 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 2
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
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
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:52:38 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
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
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 24
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:52:39 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/29476788-86ec-44d7-bbaa-c7106487dee5
content-length: 276
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"walk the dog","uid":"29476788-86ec-44d7-bbaa-c7106487dee5","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/29476788-86ec-44d7-bbaa-c7106487dee5","url":"https://todo-backend-sinatra.herokuapp.com/todos/29476788-86ec-44d7-bbaa-c7106487dee5"}
```


## Interaction 7: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:52:41 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 288
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"29476788-86ec-44d7-bbaa-c7106487dee5","title":"walk the dog","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/29476788-86ec-44d7-bbaa-c7106487dee5","url":"https://todo-backend-sinatra.herokuapp.com/todos/29476788-86ec-44d7-bbaa-c7106487dee5"}]
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
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:52:43 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
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
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 16
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:52:43 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/253f30cc-f5cd-4611-a343-3daf73d4f3a9
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"253f30cc-f5cd-4611-a343-3daf73d4f3a9","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/253f30cc-f5cd-4611-a343-3daf73d4f3a9","url":"https://todo-backend-sinatra.herokuapp.com/todos/253f30cc-f5cd-4611-a343-3daf73d4f3a9"}
```


## Interaction 10: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:52:45 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 280
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"253f30cc-f5cd-4611-a343-3daf73d4f3a9","title":"blah","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/253f30cc-f5cd-4611-a343-3daf73d4f3a9","url":"https://todo-backend-sinatra.herokuapp.com/todos/253f30cc-f5cd-4611-a343-3daf73d4f3a9"}]
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
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:52:46 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
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
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 16
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:52:47 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/31c9cd67-5db2-45df-937e-0cb0172a3c09
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"31c9cd67-5db2-45df-937e-0cb0172a3c09","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/31c9cd67-5db2-45df-937e-0cb0172a3c09","url":"https://todo-backend-sinatra.herokuapp.com/todos/31c9cd67-5db2-45df-937e-0cb0172a3c09"}
```


## Interaction 13: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:52:49 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 280
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"31c9cd67-5db2-45df-937e-0cb0172a3c09","title":"blah","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/31c9cd67-5db2-45df-937e-0cb0172a3c09","url":"https://todo-backend-sinatra.herokuapp.com/todos/31c9cd67-5db2-45df-937e-0cb0172a3c09"}]
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
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:52:51 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
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
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 19
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:52:52 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/6799f6c1-1b4e-4c18-8433-64cbd13bffd9
content-length: 271
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"my todo","uid":"6799f6c1-1b4e-4c18-8433-64cbd13bffd9","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/6799f6c1-1b4e-4c18-8433-64cbd13bffd9","url":"https://todo-backend-sinatra.herokuapp.com/todos/6799f6c1-1b4e-4c18-8433-64cbd13bffd9"}
```


## Interaction 16: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:52:55 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (204: ):

```

```


## Interaction 17: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 27
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:52:57 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/2bb8bd6d-97bf-40f9-a35a-48a533ec13e6
content-length: 278
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"todo the first","uid":"2bb8bd6d-97bf-40f9-a35a-48a533ec13e6","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/2bb8bd6d-97bf-40f9-a35a-48a533ec13e6","url":"https://todo-backend-sinatra.herokuapp.com/todos/2bb8bd6d-97bf-40f9-a35a-48a533ec13e6"}
```


## Interaction 18: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 27
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:52:56 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/bcbb45c4-ecc9-4a96-8d7c-721477955856
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"todo the second","uid":"bcbb45c4-ecc9-4a96-8d7c-721477955856","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/bcbb45c4-ecc9-4a96-8d7c-721477955856","url":"https://todo-backend-sinatra.herokuapp.com/todos/bcbb45c4-ecc9-4a96-8d7c-721477955856"}
```


## Interaction 19: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:52:58 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 580
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"2bb8bd6d-97bf-40f9-a35a-48a533ec13e6","title":"todo the first","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/2bb8bd6d-97bf-40f9-a35a-48a533ec13e6","url":"https://todo-backend-sinatra.herokuapp.com/todos/2bb8bd6d-97bf-40f9-a35a-48a533ec13e6"},{"uid":"bcbb45c4-ecc9-4a96-8d7c-721477955856","title":"todo the second","order":0,"completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/bcbb45c4-ecc9-4a96-8d7c-721477955856","url":"https://todo-backend-sinatra.herokuapp.com/todos/bcbb45c4-ecc9-4a96-8d7c-721477955856"}]
```


## Interaction 20: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:53:00 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (204: ):

```

```


## Interaction 21: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 25
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:53:01 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/9a76e89e-0be4-4936-b8a8-0dba5abef3d3
content-length: 277
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"initial title","uid":"9a76e89e-0be4-4936-b8a8-0dba5abef3d3","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/9a76e89e-0be4-4936-b8a8-0dba5abef3d3","url":"https://todo-backend-sinatra.herokuapp.com/todos/9a76e89e-0be4-4936-b8a8-0dba5abef3d3"}
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
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:53:04 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
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
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 16
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:53:06 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/271df61e-0bb0-4fe4-ae0f-7d919ee10fc6
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"271df61e-0bb0-4fe4-ae0f-7d919ee10fc6","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/271df61e-0bb0-4fe4-ae0f-7d919ee10fc6","url":"https://todo-backend-sinatra.herokuapp.com/todos/271df61e-0bb0-4fe4-ae0f-7d919ee10fc6"}
```


## Interaction 24: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:53:08 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (204: ):

```

```


## Interaction 25: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 16
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:53:10 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/04bd006e-3e54-414e-8620-69edbb209944
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"04bd006e-3e54-414e-8620-69edbb209944","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/04bd006e-3e54-414e-8620-69edbb209944","url":"https://todo-backend-sinatra.herokuapp.com/todos/04bd006e-3e54-414e-8620-69edbb209944"}
```


## Interaction 26: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:53:12 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 288
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"04bd006e-3e54-414e-8620-69edbb209944","title":"changed title","order":0,"completed":true,"href":"https://todo-backend-sinatra.herokuapp.com/todos/04bd006e-3e54-414e-8620-69edbb209944","url":"https://todo-backend-sinatra.herokuapp.com/todos/04bd006e-3e54-414e-8620-69edbb209944"}]
```


## Interaction 27: DELETE /todos
### Request headers recorded for playback:

```
content-length: 0
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:53:13 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (204: ):

```

```


## Interaction 28: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 16
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:53:14 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/1c721885-2828-498e-a70f-2031de2fb70c
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"1c721885-2828-498e-a70f-2031de2fb70c","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/1c721885-2828-498e-a70f-2031de2fb70c","url":"https://todo-backend-sinatra.herokuapp.com/todos/1c721885-2828-498e-a70f-2031de2fb70c"}
```


## Interaction 29: GET /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:53:18 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 2
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[]
```


## Interaction 30: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 28
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:53:20 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/3fe75d0c-13a8-4b8f-b268-b2259ed206c1
content-length: 280
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","order":523,"uid":"3fe75d0c-13a8-4b8f-b268-b2259ed206c1","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/3fe75d0c-13a8-4b8f-b268-b2259ed206c1","url":"https://todo-backend-sinatra.herokuapp.com/todos/3fe75d0c-13a8-4b8f-b268-b2259ed206c1"}
```


## Interaction 31: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 27
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:53:21 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/508b2732-2a53-406e-b88c-745534dc728f
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"order":10,"title":"blah","uid":"508b2732-2a53-406e-b88c-745534dc728f","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/508b2732-2a53-406e-b88c-745534dc728f","url":"https://todo-backend-sinatra.herokuapp.com/todos/508b2732-2a53-406e-b88c-745534dc728f"}
```


## Interaction 32: POST /todos
### Request headers recorded for playback:

```
accept-language: en-US,en;q=0.9
accept-encoding: gzip, deflate, br
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: cross-site
origin: https://www.todobackend.com
content-type: application/json
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
accept: text/plain, */*; q=0.01
content-length: 27
connection: close
host: todo-backend-sinatra.herokuapp.com
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Tue, 18 Aug 2020 16:53:24 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: https://todo-backend-sinatra.herokuapp.com/todos/94eb91e5-e216-4d1b-a568-e343a0d956f8
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
server: thin 1.6.2 codename Doc Brown
via: 1.1 vegur
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"order":10,"title":"blah","uid":"94eb91e5-e216-4d1b-a568-e343a0d956f8","completed":false,"href":"https://todo-backend-sinatra.herokuapp.com/todos/94eb91e5-e216-4d1b-a568-e343a0d956f8","url":"https://todo-backend-sinatra.herokuapp.com/todos/94eb91e5-e216-4d1b-a568-e343a0d956f8"}
```

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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```

```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:07 GMT
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
[{"uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_10","title":"blah","order":523,"completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_10","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_10"},{"uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_1","title":"blah","order":95,"completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_1","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_1"},{"uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_9","title":"blah","order":95,"completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_9","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_9"}]
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
content-length: 18
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:10 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_13
content-length: 270
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"a todo","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_13","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_13","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_13"}
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:11 GMT
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
origin: https://www.todobackend.com
content-type: application/json
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:13 GMT
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
origin: https://www.todobackend.com
content-type: application/json
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:14 GMT
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
origin: https://www.todobackend.com
content-type: application/json
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"a todo"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:16 GMT
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
origin: https://www.todobackend.com
content-type: application/json
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
content-length: 24
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"walk the dog"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:21 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_17
content-length: 276
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"walk the dog","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_17","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_17","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_17"}
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"walk the dog"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:22 GMT
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
[{"uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_17","title":"walk the dog","order":0,"completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_17","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_17"}]
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"walk the dog"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:23 GMT
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
origin: https://www.todobackend.com
content-type: application/json
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
content-length: 16
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:24 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_15
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_15","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_15","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_15"}
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:26 GMT
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
[{"uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_15","title":"blah","order":0,"completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_15","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_15"}]
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:27 GMT
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
origin: https://www.todobackend.com
content-type: application/json
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
content-length: 16
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:29 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_12
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_12","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_12","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_12"}
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:31 GMT
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
[{"uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_12","title":"blah","order":0,"completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_12","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_12"}]
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:33 GMT
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
origin: https://www.todobackend.com
content-type: application/json
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
content-length: 19
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"my todo"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:34 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_16
content-length: 271
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"my todo","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_16","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_16","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_16"}
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"my todo"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:37 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
content-length: 27
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:39 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_14
content-length: 278
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"todo the first","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_14","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_14","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_14"}
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
content-length: 27
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:39 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_4
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"todo the second","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_4","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_4","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_4"}
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:40 GMT
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
[{"uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_14","title":"todo the first","order":0,"completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_14","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_14"},{"uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_4","title":"todo the second","order":0,"completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_4","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_4"}]
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"todo the second"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:43 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
content-length: 25
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"initial title"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:44 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_2
content-length: 277
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"initial title","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_2","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_2","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_2"}
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"initial title"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:47 GMT
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
origin: https://www.todobackend.com
content-type: application/json
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
content-length: 16
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:49 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_5
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_5","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_5","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_5"}
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:53 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
content-length: 16
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:55 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_6
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_6","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_6","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_6"}
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:56 GMT
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
[{"uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_6","title":"changed title","order":0,"completed":true,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_6","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_6"}]
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:59 GMT
content-length: 0
connection: close
access-control-allow-origin: *
x-content-type-options: nosniff
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
content-length: 16
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:24:59 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_11
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_11","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_11","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_11"}
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:25:02 GMT
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
content-length: 28
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"title":"blah","order":523}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:25:03 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_7
content-length: 280
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","order":523,"uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_7","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_7","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_7"}
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
content-length: 27
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"order":10,"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:25:04 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_3
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"order":10,"title":"blah","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_3","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_3","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_3"}
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
user-agent: Servirtium-Testing
accept: text/plain, */*; q=0.01
content-length: 27
connection: close
host: localhost:61417
```

### Request body recorded for playback ():

```
{"order":10,"title":"blah"}
```

### Response headers recorded for playback:

```
date: Sat, 05 Sep 2020 14:25:06 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_8
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"order":10,"title":"blah","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_8","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_8","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_8"}
```

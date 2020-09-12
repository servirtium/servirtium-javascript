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
date: Sat, 12 Sep 2020 08:46:42 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
content-length: 1121
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (200: text/html;charset=utf-8):

```
[{"uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_18","title":"blah","order":0,"completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_18","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_18"},{"uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_4","title":"blah","order":523,"completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_4","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_4"},{"uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_6","title":"blah","order":10,"completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_6","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_6"},{"uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_8","title":"blah","order":10,"completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_8","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_8"}]
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
date: Sat, 12 Sep 2020 08:46:43 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_7
content-length: 270
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"a todo","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_7","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_7","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_7"}
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
date: Sat, 12 Sep 2020 08:46:46 GMT
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
date: Sat, 12 Sep 2020 08:46:48 GMT
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
date: Sat, 12 Sep 2020 08:46:49 GMT
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
date: Sat, 12 Sep 2020 08:46:51 GMT
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
date: Sat, 12 Sep 2020 08:46:52 GMT
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
date: Sat, 12 Sep 2020 08:46:53 GMT
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
date: Sat, 12 Sep 2020 08:46:56 GMT
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
date: Sat, 12 Sep 2020 08:46:56 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_16
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_16","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_16","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_16"}
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
date: Sat, 12 Sep 2020 08:46:57 GMT
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
[{"uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_16","title":"blah","order":0,"completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_16","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_16"}]
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
date: Sat, 12 Sep 2020 08:46:59 GMT
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
date: Sat, 12 Sep 2020 08:47:01 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_9
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_9","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_9","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_9"}
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
date: Sat, 12 Sep 2020 08:47:03 GMT
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
[{"uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_9","title":"blah","order":0,"completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_9","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_9"}]
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
date: Sat, 12 Sep 2020 08:47:05 GMT
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
date: Sat, 12 Sep 2020 08:47:06 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_11
content-length: 271
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"my todo","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_11","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_11","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_11"}
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
date: Sat, 12 Sep 2020 08:47:09 GMT
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
date: Sat, 12 Sep 2020 08:47:10 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_10
content-length: 278
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"todo the first","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_10","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_10","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_10"}
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
date: Sat, 12 Sep 2020 08:47:10 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_14
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"todo the second","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_14","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_14","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_14"}
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
date: Sat, 12 Sep 2020 08:47:12 GMT
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
[{"uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_10","title":"todo the first","order":0,"completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_10","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_10"},{"uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_14","title":"todo the second","order":0,"completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_14","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_14"}]
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
date: Sat, 12 Sep 2020 08:47:14 GMT
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
date: Sat, 12 Sep 2020 08:47:15 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_5
content-length: 277
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"initial title","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_5","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_5","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_5"}
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
date: Sat, 12 Sep 2020 08:47:18 GMT
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
date: Sat, 12 Sep 2020 08:47:19 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_1
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_1","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_1","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_1"}
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
date: Sat, 12 Sep 2020 08:47:22 GMT
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
date: Sat, 12 Sep 2020 08:47:24 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_2
content-length: 268
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_2","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_2","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_2"}
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
date: Sat, 12 Sep 2020 08:47:27 GMT
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
[{"uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_2","title":"changed title","order":0,"completed":true,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_2","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_2"}]
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
date: Sat, 12 Sep 2020 08:47:30 GMT
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
date: Sat, 12 Sep 2020 08:47:31 GMT
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
date: Sat, 12 Sep 2020 08:47:34 GMT
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
date: Sat, 12 Sep 2020 08:47:37 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_13
content-length: 280
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"title":"blah","order":523,"uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_13","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_13","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_13"}
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
date: Sat, 12 Sep 2020 08:47:38 GMT
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
date: Sat, 12 Sep 2020 08:47:43 GMT
connection: close
content-type: text/html;charset=utf-8
access-control-allow-origin: *
location: http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_15
content-length: 279
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
```

### Response body recorded for playback (201: text/html;charset=utf-8):

```
{"order":10,"title":"blah","uid":"REPLACED_UUID_FOR_COMPATABILITY_TEST_15","completed":false,"href":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_15","url":"http://localhost:61417/todos/REPLACED_UUID_FOR_COMPATABILITY_TEST_15"}
```

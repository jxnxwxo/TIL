0713 파이썬

> print("Hello, World!")

자바였으면 3줄...

용도!

- 웹개발, SW개발, 수학, 시스템 스크립팅

장점!

- Python은 다양한 플랫폼(Windows, Mac, Linux, Raspberry Pi 등)에서 작동합니다.

```python
print("hello, world!")
```

- Python은 들여쓰기를 사용하여 코드 블록을 나타냅니다. (동일한 코드 블록에서 동일한 수의 공백)
- 파이썬에는 변수 선언을 위한 명령이 없습니다.
- 주석은 #, """ """
- 파이썬에는 변수 선언을 위한 명령이 없습니다. (변수는 대소문자 구분함)
  - 변수이름 문자 또는 밑줄로 시작(숫자X)
    - Camel / Pascal / Snake case
  - 한 줄에 여러 변수에 값을 할당가능
- print(type(x)) 하면 str, int, float
- 텍스트와 변수 결합은 `+` / 수학은 계산함 / **<u>문자+숫자는 안됨</u>**

```python
x = "awesome"
print("Python is " + x)
```

- 전역변수 / 함수 내부에 전역 변수를 생성하려면 `global`

```python
x = "awesome"

def myfunc():
  print("Python is " + x)

myfunc()
```

- | 텍스트 유형:   | `str`                              |
  | -------------- | ---------------------------------- |
  | 숫자 유형:     | `int`, `float`, `complex`          |
  | 시퀀스 유형:   | `list`, `tuple`, `range`           |
  | 매핑 유형:     | `dict`                             |
  | 세트 유형:     | `set`, `frozenset`                 |
  | 부울 유형:     | `bool`                             |
  | 바이너리 유형: | `bytes`, `bytearray`, `memoryview` |

List [ a, b, c ] / Tuple ( a, b, c ) / Dict { a:b, c:d } / Set { a, b, c }

- 숫자 int / float / complex (복소수는 허수부로 "j"를 사용)
- 난수

```python
import random

print(random.randrange(1, 10))
```

- 문자열 루핑

```python
for x in "banana":
  print(x)
```

- 문자열 길이 len ()

```python
a = "Hello, World!"
print(len(a))
```

- 문자열 확인 -> True, False 로 나옴

```python
txt = "The best things in life are free!"
print("free" in txt)
print("expensive" not in txt)
```

- 슬라이싱 - 시작 인덱스와 끝 인덱스를 콜론으로 구분

```python
b = "Hello, World!"
print(b[2:5]) llo
print(b[:5]) 처음부터 Hello
print(b[2:]) 끝까지 llo, World!
print(b[-5:-2]) 반대로 orl
```

- 문자열 수정

```python
print(a.upper()) 대문자
print(a.lower()) 소문자
```

- 공백제거 (시작 또는 끝 공백제거)

```python
print(a.strip())
```

- 문자열 바꾸기

```python
print(a.replace("H", "J"))
```

- 분할 문자열 (쉼표를 기준으로 분리해줌!)

```python
print(a.split(","))
```

> 문자열 + 숫자 결합이 안되는데 format() 사용하면 할 수 있음

```python
age = 36
txt = "My name is John, and I am {}"
print(txt.format(age))
```

- 부울 (True / False): 문자열과 숫자를 판단하기도함, 맞으면 True
  - True 를 제외한 모든 숫자는 0

- 리스트 List (첫 번째 항목이 인덱스 [0])

```python
thislist = ["apple", "banana", "cherry"]
print(thislist)
```

> 순서 안변함. 새 항목이 추가되면 목록의 끝에 배치, 추가/제거 가능, 중복 가능<br>길이 알고 싶으면 print(len(thislist))

> ```python
> #리스트 생성
> thislist = list(("apple", "banana", "cherry"))
> print(thislist)
> ```

> ```python
> # 2번째 뽑기
> thislist = ["apple", "banana", "cherry"]
> print(thislist[1])
> ```

































1. ## Python 컬렉션(배열)

    Python 프로그래밍 언어에는 네 가지 컬렉션 데이터 유형이 있습니다.

    - **목록** 은 순서가 지정되고 변경할 수 있는 모음입니다. 중복 구성원을 허용합니다.
    - **[Tuple](https://www.w3schools.com/python/python_tuples.asp)** 은 순서가 지정되고**[ 변경할](https://www.w3schools.com/python/python_tuples.asp)** 수 없는 컬렉션입니다. 중복 구성원을 허용합니다.
    - **[Set](https://www.w3schools.com/python/python_sets.asp)** 은 정렬되지 않고 인덱싱되지 않은 컬렉션입니다. 중복 회원이 없습니다.
    - **[사전](https://www.w3schools.com/python/python_dictionaries.asp)** 은 순서가 지정되고* 변경할 수 있는 모음입니다. 중복 회원이 없습니다.



리스트(array) / 튜플(배열) / 세트 / dict(맵)

set 주머니 / list 가변상자 / tuple 고정상자



pip = java에서 maven(라이브러리 관리자)



입력 포맷 패스 -> 파일처리

read / append / write / x

read 2bytes



구조가 중요함
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



<hr>

List [ a, b, c ] / Tuple ( a, b, c ) / Dict { a:b, c:d } / Set { a, b, c }

<hr>

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


<hr>

<list> : 순서가 지정, 변경 가능, 중복값 허용 [ ]

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

> ## List (array)순서 지정 / 변경 가능 / 중복 가능<br>Tuple (배열) 순서 지정 / 변경 X / 중복 가능<br>Set (주머니) 정렬 X / 인덱싱 X / 중복 X<br>Dict (map) 순서 지정(python 3.7이상) / 변경 가능 / 중복 X

- 변경 / 삽입 / 추가 / 확장 / 제거 / 인덱스 제거 / 전체 삭제 / 지우기

```python
thislist[1:2] = ["blackcurrant", "watermelon"]
thislist.insert(2, "watermelon")
thislist.append("orange")
thislist.extend(tropical)
thislist.remove("banana")
thislist.pop(1) #지정하지 않으면 마지막 항목 제거
del thislist
thislist.clear()
```

- 루프

```python
thislist = ["apple", "banana", "cherry"]
for x in thislist:
  print(x)
```

```python
thislist = ["apple", "banana", "cherry"]
i = 0
while i < len(thislist):
  print(thislist[i])
  i = i + 1
```

- 기존 list 바꾸기

```python
newlist = [x.upper() for x in fruits] -> 대문자로
newlist = ['hello' for x in fruits] -> 다 hello로
newlist = [x if x != "banana" else "orange" for x in fruits] -> banana가 아니라 orange로
```

- sort

```python
thislist.sort() 알파벳순, 숫자순
thislist.sort(reverse = True) 내림차순
thislist.reverse() 순서 반대로

thislist.sort(key = myfunc) 내가 원하는대로, (def myfunc(n))해 줘야함
```

- join

```python
for x in list2:
  list1.append(x)
list1.extend(list2)
```

정리해보면 list methods 에는<br>append, clear, copy, count, extend, index, insert, pop, remove, reserve, sort등이 있음

<hr>

<Tuple>: 순서가 있고, 변경할 수 없음 ( )

```python
thistuple = ("apple", "banana", "cherry")
```

길이확인 len()<br>하나의 항목으로도 만들수있는데 ("apple", ) 쉼표찍어줘야함.

print(type(mytuple)) 하면 <class 'tuple'>로 알아들음

```python
thistuple = tuple(("apple", "banana", "cherry")) #이렇게 해도 만들어짐
```

튜플은 변경할 수 없다고 했지만 list로 변환하고, list를 변경하고, list를 다시 튜플로 변환할 수 있습니다.

```python
x = ("apple", "banana", "cherry")
y = list(x)
y[1] = "kiwi"
x = tuple(y)

print(x)
```

튜플에 튜플을 추가하는건 가능

```python
thistuple = ("apple", "banana", "cherry")
y = ("orange",)
thistuple += y
```

제거할때도 list로 바꿔서<br>del이용해서 튜플상태에서 완전삭제도 가능

- 튜플 루프(for, while)

```python
thistuple = ("apple", "banana", "cherry")
for x in thistuple:
  print(x)

for i in range(len(thistuple)):
  print(thistuple[i])

thistuple = ("apple", "banana", "cherry")
i = 0
while i < len(thistuple):
  print(thistuple[i])
  i = i + 1
```

<hr>

<sets> 순서지정X, 변경X, 중복X(중복값은 무시됨), 정렬X, 인덱싱X, { }

```python
thisset = {"apple", "banana", "cherry"}
print(thisset)
```

- set는 항목을 변경할 수는 없지만 추가할 수는 있다. / 다른 set을 현재 set에 추가도 가능

```python
thisset = {"apple", "banana", "cherry"}
thisset.add("orange")

thisset = {"apple", "banana", "cherry"}
tropical = {"pineapple", "mango", "papaya"}

thisset.update(tropical)
```

- 제거는 가능함.

```python
thisset.remove("banana")
thisset.discard("banana")
thisset.pop() #마지막항목 제거
thisset.clear() #비워버리기
del thisset #set를 삭제
```

- join

```python
set3 = set1.union(set2)
set1.update(set2)
#순서는 아무렇게나
```

- 다른 methods

add, clear, copy, difference, difference_update, discard, intersection, intersection_update, isdisjoint,issubset, pop, remove, symmetric_difference, symmetric_difference_update, union, update

<hr>

<dict> 순서 지정, 변경 가능, 중복X(덮어씌워버림), { }

```python
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
```

- Key값 가져오기 // Key : Value순

```python
x = thisdict["model"]
x = thisdict.get("model")
x = thisdict.keys()
x = thisdict.values()
x = thisdict.items() #key:value값 가져옴
```

- 변경 / 추가 / 제거

```python
thisdict["year"] = 2018
thisdict.update({"year": 2020})

thisdict["color"] = "red"
thisdict.update({"color": "red"})

thisdict.pop("model") #지정된 항목
thisdict.popitem() #마지막 항목
del thisdict["model"] #지정된 key
del thisdict #완전히 삭제
thisdict.clear() #비우기 -> {}
```

- loop (value만, key만도 가능)

```python
for x in thisdict:
  print(x)

for x in thisdict:
  print(thisdict[x])

for x in thisdict.values():
  print(x)
for x in thisdict.keys():
  print(x)

for x, y in thisdict.items():
  print(x, y)
```

- copy

```python
mydict = thisdict.copy()
mydict = dict(thisdict)
```

- 다른 methods

clear, copy, fromkeys, get, items, keys, pop, popitem, setdefault, update, values

<hr>

<hr>

<if... Else>

```python
a = 1
b = 2
if b > a:
  print("b>a")

a = 3
b = 3
if b > a:
  print("b is greater than a")
elif a == b: //`ELIF` 이전 조건에 해당되지 않은 경우,이 조건을하려고
  print("a and b are equal")
```

- 삼항연산자

```python
print("A") if a > b else print("B")
print("A") if a > b else print("=") if a == b else print("B")
```

- and / or

- while반복

```python
i = 0
while i < 6:
  i += 1
  if i == 3:
    continue
  print(i)

i = 1
while i < 6:
  print(i)
  i += 1
else:
  print("i is no longer less than 6")
```





pip = java에서 maven(라이브러리 관리자)



입력 포맷 패스 -> 파일처리

read / append / write / x

read 2bytes



구조가 중요함


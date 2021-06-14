[toc]

JavaScript is the world's most popular programming language.

JavaScript is the programming language of the Web.

JavaScript - 배우기는 쉬운데 오류가 많다.<br>Java - 배우기는 어려운데 오류가 적다. (문법이 까다로움)

---

# 자바스크립트

### 자바스크립트 기본 용어

- `표현식` - 값을 만들어 내는 간단한 코드
- `문장` - 프로그래밍 언어에 실행할 수 있는 코드의 최소 단위
- `키워드` - 자바스크립트를 처음 만들 때 정해진 특별한 의미가 부여된 단어
- `식별자` - 자바스크립트에서 변수나 함수 등에 이름을 붙일 때 사용하는 단어
  - 특수문자 _, $만 허용, 숫자로 시작X. 공백 X
- `주석` - 프로그램을 설명. 한 행만 처리 할때는`//` 여러행 처리 할 때 `/* */`

```html
alert('Hello World') -> 함수
Array.length -> 속성
input -> 변수
prompt('Message', 'Defstr') ->함수
Math.PI -> 속성
Math.abs(-273) -> 메서드
```

## 00. 자바스크립트 출력

> 자바스크립트의 가장 기본적인 출력 방법은 alert() 함수를 사용해 웹 브라우저에 경고 창을 띄우는 것

```html
alert("message")
```

---

## 01. 자료형과 변수

1. 자료형

   - 숫자: JS는 정수와 실수를 구분하지 않음

2. 변수

   > 변수는 값을 저장할 때 사용하는 식별자<br>변수에 값을 저장하는 것을 '변수에 값을 할당한다' 라고함<br>
   >
   > 1. 변수를 선언(변수를 만드는 것)
   > 2. 변수를 초기화
   >
   > ```html
   > > var pi; //변수 선언
   > > pi = 3.14; //값 할당
   > ```
   >
   > 글로벌 변수선언 `var` (가급적으로 사용 X)<br>로컬 변수선언 `let` (변경이 될 수 있는거)<br>로컬변수 한번만 할당할거면 `const`

---

## 02. 조건문과 반복문

1. 조건문

   - `if` - 조건이 true면 실행, false면 무시

   ```html
   if(조건){문장}
   ```

   - `if else`

   ```html
   if(조건){문장1}else{문장2}
   ```

2. 반복문

   ```html
   for (var i=0; i<1000; i++){alert('출력');}
   ```

   - `배열` - 여러 개를 한꺼번에 다룰 수 있는 자료형 (대괄호 안 숫자를 index, 0부터)
     - `array.length` 배열의 길이

   ```html
   var array = [];
   ```

   - `while 반복문` - 가장 기본적인 반복문
     - 참이면 중괄호 안 문장을 계속 실행

   ```html
   while(조건){문장}
   
   while (true) {
   	alert ('무한 반복');
   }
   
   let i = 0;
   while(i<a.length){
   	console.log(a[i++]);
   }
   ```

   - `for 반복문` - 원하는 횟수만큼 반복하고 싶을 때

   ```html
   for (초기식; 조건식; 종결식){문장}
   
   for (var i=0; i < 반복횟수; i++){}
                          
   for(let i = 0; i<a.length; i++){
   	console.log(a[i]);
   }
   ```

---

## 03. 함수

> 함수는 코드 집합

### 선언과 호출 , 실행 우선순위

익명 함수: `function () {}`<br>선언적 함수: `function 함수() {}`

`함수();` - 함수를 호출

> 자바스크립트는 모든 코드를 읽기 전에 `선언적 함수`를 먼저 읽음

### 매개변수와 반환 값

> 함수의 괄호 안에 집어넣어 함수 쪽에 추가적인 정보를 전달하는 것을 매개변수

```html
alert('매개변수');
```

```html
function 함수 이름 (매개변수, 매개변수, 매개변수){
	// 함수 코드
	return 반환 값;
}
```

### 콜백함수

> 매개변수로 전달되는 함수를 콜백 함수

---

## 04. 객체

> 객체는 자료형 여러 개를 한번에 저장<br>배열은 인덱스를 기반으로 자료를 저장<br>객체는 키를 기반으로 자료를 저장

> 객체 뒤에 대괄호를 사용해 키를 입력하면 객체 속성에 접근 가능<br>

```html
product['제품명']
product.제품명 //이걸 더 많이씀
```

> `for in 반복문` - 객체 요소를 하나씩 살펴 볼 수 있음

```html
for (var 키 in 객체){
	문장
}
```

> 배열에 있는 값 하나하나를 `요소`<br>객체에 있는 값 하나하나를 `속성`<br>객체 속성 중 자료형이 함수인 속성을 특별히 `메서드`

> C++, Java, C# 등에서는 this키워드 생략 가능<br>하지만 자바스크립트는 this 키워드 반드시 사용해야함
>
> this 붙여주면 실행시 그객체를 찾아감

---

> 객체는 instance 에 올라감<br>`myFunction`객체 a, b, radius, temp, pi <stack> 영역으로 들어감<br>종료되면 <stack> 영역에서 사라짐 (할당됐다가 사라졌다가) 제일좋음!<br><heap> 영역은 창을 비로소 종료해야 사라짐 (memory가 한정)<br>G/C 돌아감 - 구멍이 뚫리게 되고 - 이동이 생기고 - 자주일어나면 성능이 나빠진다

---

## 05. 문서 객체 모델

### 기본용어

> `문서객체` - 태그를 자바스크립트에서 사용할 수 있는 객체로 만든 것
>
> `노드`
>
> - 요소 노드: h1태그, script태그
> - 텍스트 노드: 화면에 출력되는 문자열
>
> `정적생성`/`동적생성`

### 실행순서

> style 속성을 읽을 수 없을 때 h1태그와 h2태그가 생성되어있지않을 때 오류해결법
>
> `script` 태그위치 body에<br>`event`활용하기

---

## 06. 문서 객체 선택

- 1개선택
  - `document.getElementById`(아이디)
  - `document.querySelector`(선택자)
- 여러 개 선택
  - `document.getElementsByName`(이름)
  - `document.getElementsByClassName`(클래스)
  - `document.querySelectorAll`(선택자)

---

## 07. 문서 객체 조작

> `div`가 대부분을 차지함(틀 잡기)
>
> `SPA사이트 (Single Page Application)` - 웹페이지를 한번만 읽어들이고 사용자가 조작 할 때 웹 페이지 내용을 자바스크립트를 사용해서 바꾸는 형태

1. 글자 조작(`document.body.`)
   - `textContent` - 입력한 글자가 body태그 내부에 바로 들어감
   - `innerHTML` - HTML태그를 적용해 내부글자를 변경
2. 스타일 조작(`document.body.style.[' ']`)
   - `background-image`
   - `background-color`
   - `box-sizing`
   - `list-style`
3. 속성 조작(`document.body.`)
   - `setAttribute(속성이름, 속성값)`
   - `getAttribute(속성이름)`

---

## 08. 이벤트

```html
window.onload = function () {};
```

> 코드에서 onload를 `이벤트속성`<br>on을 제외한 load를 `이벤트이름/이벤트타입`<br>이벤트속성에 넣는 함수를 `이벤트리스너/이벤트핸들러`

```html
<button onclick="alert('click')">버튼</button>
```

**인라인이벤트모델**

**고전이벤트모델**

**기본이벤트** - `a href` , `form`

**기본이벤트 제거**

```html
window.onload = function() 이벤트연결
var button = document.getElementById('button'); 문서객체선택

button.onclick = function() 이벤트연결
return false 기본 이벤트제거
```


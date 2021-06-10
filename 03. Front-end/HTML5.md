

[toc]

# HTML5

**인터넷** (이메일, 웹, FTP, 텔넷, ...등)
<u>인터넷은 단순히 웹이 아니다.</u>

#### Web

- Web Site
- Web Application

`CGI` - Common Gateway Interface(Web Program의 통칭)
`AJAX` - 이전에는 html로 데이터를 받다가 xml형태로 데이터를 받음<br>
			이전에는 전체를 받았다면 이제는 변한 부분 일부만

HTML 1.0 ~ 4.0 = W3C<br>
HTML 5 = WHATWG

Client 노드 <-> Mid 노드 <-> Server 노드 <-> DB

> 웹은 요청과 응답이라는 간단한 형태로 동작.<br>
> 웹에서 어떤 대상을 구분하는 주소를 `URL`<br>
> 요청하는 쪽을 `Client(사용자)` 응답하는쪽을 `Server(제공자)`<br>
> 서버에서 실행되는 프로그램을 `서버 프로그램`<br>
> 클라이언트에서 실행되는 프로그램을 `클라이언트 프로그램`<br>
> 서버 프로그램은 사용자와 먼 곳에 있어서 `백엔드 프로그램`<br>
> 클라이언트 프로그램은 사용자와 가까운 곳에 있기 때문에 `프론트엔드 프로그램`<br>
>
> **클라이언트 프로그램은 1. `HTML`로 요소를 생성 2. `CSS`로 디자인 3. `JS`로 프로그래밍 요소를 부여**

### Web 표준기술

**HTML5(웹페이지 구성) + CSS3(스타일 적용) + JS(사용자 반응 처리)**

- `HTML5`: 웹 표준기술을 총칭 (CSS3와 자바스크립트를 모두 포함)<br>
  작은 의미로 웹 페이지를 구성하는 HTML 마크업 언어 그 자체
- `CSS`: HTML 페이지에 스타일을 지정하는 스타일시트를 작성할 때 사용하는 언어
- `Java Script`: HTML 페이지에서 사용자 반응 등을 처리하는 스크립트를 작성하는 언어<br>
  표준 명칭은 `ECMAScript`
- HTML5 주요 기능
  - 멀티미디어 기능: 원래 안됐음(기존에는 플래시라는 플러그인을 통해)
  - 그래픽 기능
  - 통신
  - 장치 접근, 오프라인 및 저장소
  - 시맨틱
  - CSS3 스타일시트
  - 웹의 성능 극대화 및 통합

---

## 기본 세팅

- Eclipse 열어서 - File - New - Dynamic Web Project - 프로젝트이름: 3_HTML - Target runtime: None - 4.0
- index만들어주고 인코딩 UTF-8로 바꿔준다(HTML, CSS3, JS)
- Run as server~ - 8080포트충돌 -  Servers(server.xml 63행 포트를 8888포트로 변경)

> 뭐 안보이는거 있으면 Window탭 - Show View

http://ip:port/3_HTML/ --> welcome 파일(인삿말 파일 대부분 index.html)

http://localhost/3_HTML/<br>
http://도메인명/context명/(index.html 생략)

---

index.html, 3_HTML(Context=App)

```html
<html>
    <body>
        <h1> ~~~~ </h1>
    </body>
```

| JavaEE (Servlet/JSP engine) --> web developer<br/>(Web Container(Tomcat, Resin, Jrun)) // Tomcat에는 Webserver 내장 |
| ------------------------------------------------------------ |
| JavaSE //                                                    |
| Any Web Server (Apache,IIS,NS..) //                          |
| Any O/S //                                                   |
| Any H/W                                                      |

**GET /DOC/TEST.HTML http/1.1** : 주소로 요청하는건 전부 get방식<br>
`error 401` - Un Authorized<br>
`error 404` - Page Not Found<br>

---

## 웹 페이지 기본구조

#### HTML5 기본 용어

- `태그 tag / 요소 element` - HTML페이지를 구성하는 각 부품을 요소<br>
  												태그는 이러한 요소를 만들 때 사용하는 작성 방법

  > 그러나 흔히 요소와 태그를 구분하지 않음, "태그"라는 표현을 더 많이 사용할 것
  >
  > 내용을 가질 수 있는 요소의 형태: <요소이름>내용</요소이름> h1, p, audio<br>
  > 내용을 가질 수 없는 요소의 형태: <요소이름> img, br, hr

  ```html
  <h1>
      HELLO HTML5
  </h1>
  ```

- `속성 attribute` - 태그에 추가 정보를 부여할 때 사용하는 것

  ```html
  <h1 title="header">
      HELLO HTML5
  </h1>
  <img src="image.png"
  ```

  > `title` 속성이름, `header` 속성값 //`src` 속성이름, `image.png` 속성값

- 주석

  ```html
  <!-- 주석 -->
  ```

  >ctrl + shift + / : block처리<br>
  >ctrl + shift + \ : block처리 해제

---

#### HTML5 페이지 구조와 작성법

- 페이지 구조

```html
<!DOCTYPE html> - 웹 브라우저에 html5 문서라는 것을 알림
<html>
<head> - body 태그에 필요한 스타일시트와 자바스크립트를 제공
    <title>Hello HTML5</title> - 웹 브라우저에 표시하는 제목
</head>
<body> - 사용자에게 실제로 보이는 부분을 작성
       
</body>
</html>
```

- 스타일시트 작성과 실행(내부/외부): `link`

  ```html
  <head>
      <title></title>
      <style>
          h1{
              color: white;
              background: black;
      </style>
  </head>
  ```

  ```html
  # Style.css
  h1{
              color: white;
              background: black;
  }
  
  # .html
  <head
  <link rel="stylesheet" href="css/test1.css">
  ```

- 자바스크립트 작성과 실행(내부/외부) `script`

  ```html
  <title></title>
  <script>
  	// 경고 창을 출력
      alert('경고입니다..!');
  </script>
  ```

  ```html
  # OuterJS.js
  alert('OuterScript');
  
  # .html
  <title></title>
  <script src="my.js">
  </script>
  ```

#### 오류와 검증

> 프로그램이 원하지 않는 방향으로 동작하는 것을 버그<br>
> 버그를 수정하는 행위를 디버그 라고함.
>
> 크롬에서 F12 를 통해 가능

---

## HTML5 태그들

#### 글자 태그

> h는 heading, p는 paragraph, br은 break, hr은 horizontal rule을 의미

- 제목글자

  - h1 ~ h6

- 본문 글자

  - p 문단생성, br 줄 바꿈, hr 수평 줄 삽입

  ```html
  <body>
      <h1>제목</h1>
  	<p>문장</p>
  </body>
  ```

- 특수문자 표기

  - `&nbsp;` - 공백
  - `lt;` - < `&gt;` - >
  - `&amp;` - &

#### 앵커 태그

> a 태그는 anchor을 의미
>
> ```html
> # 특정 웹 페이지 연결
> <a href="http://google.com">구글</a>
> 
> # 웹 페이지 내부 연결: 이동하려는 태그의 id속성을 href속성에 #id 속성 형태로 입력
> <a href="#alpha">Alpha부분</a>
> <h1 id="alpha">Alpha</h1>
> ```

#### 글자 모양 태그

> b는 bold 굵게 / i는 italic 기울어지게<br>
> small 작은글자<br>
> sub 아래 첨자 / sup 위 첨자<br>
> ins 밑줄 글자 / del 취소선이 그어진 글자

---

#### 목록태그

> ul - 순서가 없는 목록 생성<br>
> ol - 순서가 있는 목록 생성<br>
> li - 목록 요소 생성

```html
	<li>
		<b>한글</b>
		<ol>
			<li>가</li>
			<li>나</li>
			<li>다</li>
		</ol>	
	</li>
	
	<li>
		<b>English</b>
		<ol>
			<li>A</li>
			<li>B</li>
			<li>C</li>
		</ol>
	</li>
```

---

#### 테이블 태그

> table - 표 삽입
> tr - 표에 행 삽입
> th - 표의 제목 셀 생성
> td - 표의 일반 셀 생성
>
> table border - 표의 테두리 두께
> th, td colspan 셀의너비 지정
> th, td rowspan 셀의높이 지정

```html
	<table border="1">
		<thead>
		<tr> 표에 1번째 행(가로로)
			<th></th>
			<th>월</th>
			<th>화</th>
			<th>수</th>
			<th>목</th>
			<th>금</th>
		</tr>
		</thead>
		<tbody>
		<tr> 표에 2번째 행
			<td>1교시</td>
			<td>영어</td>
			<td>국어</td>
			<td>과학</td>
			<td>미술</td>
			<td>기술</td>
		</tr>
		<tr> 표에 3번째 행
			<td>2교시</td>
			<td>영어</td>
			<td>국어</td>
			<td>과학</td>
			<td>미술</td>
			<td>기술</td>
		</tr>
		</tbody>
	</table>
```

#### 미디어 태그

> img, audio, video 등을 태그<br>
> src 경로지정, alt 이미지 없을 때 나오는 글자 지정<br>
> width, height으로 너비, 높이 지정<br>
> controls로 재생도구 출력 여부 지정

```html
<body>
	<img alt="내 사진" src="filename.jpg" width="150">
	<br>
	<video src="filename.mp4" width="300" controls="controls"></video>
</body>
```

---

- 버튼 넣기 (그냥 html내에서, 외부 my.js 이용해서)

```html
<button onclick="alert('hi')">전송</button>

-- script엔진 살려주고 --
<script src="js/my.js">
	
</script>

-- #my.js a라는 함수로 만들어줬음 --
function a(){
	alert("^^");
}
<button onclick="a()">전송</button>
```

> Event - 액션<br>
> EventSource - button<br>
> EventListener - onclick<br>
> EventHandler - alert('hi')

---

## 입력 양식 태그 구조화 태그

> 입력 양식은 사용자에게 정보를 입력받는 요소 -> 회원가입

- form 태그
- input 태그
  - text, button, checkbox
  - file
  - hidden
  - image
  - password
  - radio
  - reset, submit

```html
<body>
    <form>
        <!-- 사용자가 입력 -->
        <input type="text" name="text" value="text"><br>
        <input type="password" name="password" value="password"><br>
        <input type="file" name="file" value="file"><br>
        <input type="checkbox" name="checkbox" value="checkbox"><br>
        <input type="radio" name="radio" value="radio"><br>
        
        <!-- 보이지 않는 입력 -->
        <input type="hidden" name="hidden" value="hidden"><br>
        
        <!-- 버튼 -->
        <input type="button" value="button"><br>
        <input type="reset" value="reset"><br>
        <input type="submit" value="submit"><br>
        <input type="image" value="image주소"><br>
    </form>   
</body>
```

- Label 태그

  - 의미론적 태그로 일반인에게 하나도 중요하지않다

  ```html
  <label for="id">ID</label><input name="id" id="id">
  ```

> 라디오 버튼의 name 속성을 사용하면 여러 대상 중 하나만 선택하는 형태를 만들 수 있음<br>
> 성별 같은 것! `name을 일치 시킨다`
>
> ```html
> <input id="man" type="radio" name="gender" value="m">
> <label for="man">남자</label>
> <input id="woman" type="radio" name="gender" value="w">
> <label for="woman">여자</label>
> ```

- textarea
- select

---

## HTML5 문서 구조화

> div - 블록 형식으로 공간 분할<br>
> span - 인라인 형식으로 공간 분할



> 프론트엔드의 HTML 부분에 대해서 배웠다.<br>
> 전체적으로 웹의 틀을 구성하는 느낌이 들었고<br>
> 태그들이 직관적이어서 기본적인 세팅만 잘 해놓은다면<br>
> 어렵지않게 공부할 수 있었다.

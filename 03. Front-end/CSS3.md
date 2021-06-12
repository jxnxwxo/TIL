[toc]

# CSS3

---

<u>**:star:모든 contents들은 webContent 하위로 들어가야한다:star:**</u>

---

## CSS3 선택자

> CSS3에서 특정 HTML 태그를 선택할 때는 선택자를 사용함.<br>
>
> ```css
> h1{color:red;}
> ```
>
> css블록<br>h1: 선택자<br>
> color: 스타일속성<br>
> red: 스타일 값<br>
>
> **"h1 태그의 color 스타일 속성에 스타일 값으로 red를 적용한다."<br>**

### 1. 기본선택자

> 전체선택자 *<br>
> 태그 선택자 body h1 h2.. --> 많이 씀!<br>
> 아이디 선택자 #아이디 --> 많이 씀!, 유일성을 보장<br>
> 클래스 선택자 .클래스<br>
>
> 선택자를 여러개 사용할 수도 있음.
>
> ```html
> <style>
>  body, p, h1, h2, h3 {margin:0; padding:0;}
> </style>
> ```
>
> 여러개를 쉼표로 연결하고 margin 스타일속성, padding 스타일 속성 적용<br>

:star:**<u>" 웹 페이지 내부에서 id 속성을 중복해서는 안됨"</u>**:star:

```html
<div id="header">
</div>
<div id="wrap">
</div>
<div id="content">
</div>
```

> `클래스 선택자` - 태그이름이 달라도 어떤 클래스에 소속돼있으면 일괄적용

```html
<style> .select{ color:red; } </style>
<li class="select">가</li>
<li>나</li>
<li class="select">다</li>
<li>라</li>

<style> //클래스를 더 정교화시킬수도있다. h1.a 이런식으로
    .a {color: red; }
    .b{ background-color: blue; }
    .c{ color: yellow; }
</style>
		//공백으로 구분해 클래스를 여러개 사용
<h1 class="a b c"></h1> //순서 바꿔도 style내의 순서로 덮어씌워짐 cascading
```

---

### 2. 속성 선택자(input)

> 선택지[속성] - 특정한 속성이 있는 태그 선택<br>
> 선택지[속성=값] - 특정한 속성 내부 값이 특정 값과 같은 태그 선택
>
> ```html
> <style>
>     input[type="text"]{ background: red;}
> </style>
> <body>
>     <form>
>         <input type="text">
>     </form>
> </body>
> ```

---

### 3. 후손 선택자와 자손 선택자

> `선택자A 선택자B` - A의 후손 B선택<br>`선택자A > 선택자B` - A의 자손 B선택

```html
#header의 후손인 h1, 일반 h2
<style>
    #header h1, h2{ color: red; }
</style>

#header의 후손인 h1, header의 후손인 h2
<style>
    #header h1, #header h2 { color: red; }
</style>
```

---

### 4. 반응, 상태, 구조 선택자( :를 붙여주는게 특징)

> `:active` - 사용자가 마우스를 클릭한 태그 선택<br>
> `:hover` - 사용자가 마우스 커서를 올린 태그 선택<br>

> `:checked` - 체크상태의 input 태그 <br>
> `:focus` - 포커스를 맞춘 input 태그<br>
> `:enabled` - 사용 가능한 input 태그<br>
> `:disabled` - 사용 불가능한 input 태그<br>

> `:first-child`<br>
> `:last-child`<br>
> `:nth-child(수열)`<br>
> `:nth-last-child(수열)`<br>

**<u>:star:주석 나타내는법 HTML5/CSS:star:</u>**

```html
<!-- 주석 -->
```

```css
/* 주석 */
```

---

---

## CSS3 단위

> `키워드 단위` - W3C에서 미리 정의한 단어<br>
> `크기 단위` - 가장 많이 사용하는 단위 %(백분율단위), em(배수단위), px(픽셀단위)
>
> - { font-size: 200% } 
> - { font-size: 2.0em;} 
> - { font-size: 32px}<br>
>
> `색상 단위` - RGB색상, RGBA색상, HEX코드
>
> - { background-color: rgb(255, 255, 255); }
> - { background-color: rgba(255, 255, 255, 0.5); }
> - { background-color: #000000; } 16진수<br>
>
> `URL 단위` 
>
> - background-img: url('filename.jpg');
> - background-img: url('folder/filename.jpg');<br>

---

## CSS3 속성

### 1. 박스 속성

![box](CSS3.assets/box.jpg)

> 파란 박스 안에 width는 가로 height는 세로<br>
> `border` - 테두리 두께<br>
> `padding` - 테두리와 글자 사이 간격<br>
> `margin` - 테두리와 다른 태그 간격
>
> ```html
> <Style>
>     div {
>         width: 100px; height: 100px;
>         background-color: red;
>         border: 20px solid black;
>         margin: 10px; padding: 30px;
>     }
> </Style>
> ```

---

### 2. 가시 속성

>`none`<br>
>`block<br>`
>`inline` / `inline-block`<br>

---

### 3. 배경 속성

>`background-image`<br>
>`background-size`<br>
>`background-repeat`<br>
>`background-attachment` - scroll;(내리면 사진 안보임), fixed;(내려도 사진 고정)<br>
>`background-position` - x축, y축

---

### 4. 글자 속성

>`font-size`<br>
>`font-family<br>`
>`font-style` - 글자스타일(기울기)<br>
>`font-weight` - 글자 두께<br>
>`text-align` - 글자 정렬

---

### 5. 위치 속성

> `absolute` - 절대 위치 좌표 설정<br>
> `fixed` - 화면을 기준으로 절대 위치 좌표 설정<br>
> `relateive` - 초기 위치에서 상하좌우로 위치 이동<br>
> `static` - 위쪽에서 아래쪽으로 순서대로 배치<br>
> `z-index`값 크면 위로 올라옴<br>
>
> position 속성에 absolute 키워드를 적용하면 부모 태그가 영역을 차지하지 않음
>
> - Overflow
>   - 넘치는 부분을 잘라줌
>   - hidden - 넘치는 부분 자름
>   - scroll - 넘치는 부분 스크롤 내리면 볼 수 있게

---

### 6. 유동 속성

### 7. 그림자 속성

> text-shadow: 5px 5px 5px black (오른쪽 아래 흐림도 색상 순)<br>
> box-shadow: 5px 5px 5px black 
>
> ```html
> <style>
>     div{
>         border: 3px solid black; (solid, dashed, dotted 등)
>         box-shadow: 10px 10px 30px black;
>         text-shadow: 5px 5px 5px black;
>     }
> </style>
> ```
>
> 

---

---

## 다양한 레이아웃의 구성과 기능

### 1. 수평, 중앙, One True 정렬 레이아웃

- 수평 정렬 레이아웃

  - 자손에게 float 속성 지정, 부모의 overflow 속성에는 hidden 키워드를 적용

- 중앙 정렬 레이아웃

  - 중앙 정렬하고 싶은 태그에 width 속성을 부여, margin 속성을 `0 auto`로 입력

  ```html
  <style>
  	/* 초기화 */
      * { margin: 0; padding: 0; }
      
      /* 주제 */
      body {
          margin: 0 auto;
          width: 960px; (너비: 가로로 텍스트 담는 크기)
      }
  </style>
  ```

- One True 정렬 레이아웃 (국내 모든 포털 사이트의 메인 페이지)

  - 행 구성
    - #top, #middle, #bottom
  - 열 구성
    - #middle 공간을 공간 분할 태그 2개로 나눔, left, right
  - 레이아웃 구성
    - 부모 태그에 고정된 너비를 입력
    - 수평 정렬하는 부모 태그의 overflow에 hidden
    - 자손 태그에 적당한 너비 입력하고 float

<u>**:star: ​"One True 정렬 레이아웃의 핵심은 각 행을 독립적으로 구성 한다는 것" :star:**</u>

---

### 2. 요소배치

> - 절대위치를 사용한 요소배치
>   - 자손의 position 속성에 absolute를 적용하려면 부모의 position 속성에 relative를 적용
> - 요소를 중앙에 배치
>   - 중앙 정렬하려는 div태그의 position을 absolute로 지정
>   - left 속성과 top 속성을 모두 50%로 지정
>   - margin-left 속성과 margin-top속성에 음수를 입력
>     - <u>**div 태그 너비와 높이의 정확히 반이어야함 그리고 음수!**</u>
> - 요소를 고정 위치에 배치 (인터넷 쇼핑몰 하단 페이지)
> - 고정바 배치 (class를 top_bar, left_bar 이런식으로해서 위치지정)

---

### 3. 글자 생략

> `ellipsis` 클래스 이용하면 너비 초과되면 글자는 ...으로 처리됨
>
> ```html
> <style>
>     .ellipsis{
>         white-space: nowrap;
>         overflow: hidden;
>         text-overflow: ellipsis;
>     }
> </style>
> ```

---



> CSS에 대해 전체적으로 배웠다. <br>
> 옷을 입히는 일일만큼 외워야되는 외울필요가 전혀 없는 부분이라 외우려고 힘쓰지않아 부담이 되지는 않았지만 쏟아지는 기능들 때문에 약간 혼란이 오긴 했다.<br>
> 그래도 텍스트를 보고 대부분 이해하려고 노력했고 쓰여진 코딩이 전부 style, body 쪽 부분지정->부분꾸미기 이런식이어서 이해할 수 있었다.<br>
>
> 추후에 교육과정에서 꾸미게 될 때는 기존에 그래픽 디자이너(?)가 만들어 놓은걸 쓴다고하니 크게 걱정되지는 않고 필요할 때 이게 어떤기능인지 알 수 있을 정도로만 학습을 하려고 한다!<br>

[toc]

# CSS3

---

<u>**:star:모든 contents들은 webContent 하위로 들어가야한다:star:**</u>

---

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

## 1. 기본선택자

> 전체선택자 *<br>
> 태그 선택자 body h1 h2.. --> 많이 씀!<br>
> 아이디 선택자 #아이디 --> 많이 씀!, 유일성을 보장<br>
> 클래스 선택자 .클래스<br>
>
> ```html
> <style>
>     body, p, h1, h2, h3 {margin:0; padding:0;}
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

<h1 class="a b c"></h1> //순서 바꿔도 style내의 순서로 덮어씌워짐 cascading
```


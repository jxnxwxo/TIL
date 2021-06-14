튜토리얼: https://www.w3schools.com/html/default.asp

**Setting the viewport to make your website look good on all devices:**

meta name="viewport" content="width=device-width, initial-scale=1.0"

https://www.w3schools.com/bootstrap/bootstrap_ver.asp

framework 미리짜여져있는 틀, 구조

---

**반응형 웹**

> 웹 페이지 하나로도 desktop, tablet PC,  스마트폰에 맞게 디자인이 자동으로 반응해서 변경되는 웹 페이지<br>미디어쿼리를 사용해 개발함.

**반응형 웹 설정**

- 뷰포트 설정

```html
<meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1">
```

> 뷰포트 메타태그를 사용하는 방법과 사용하지 않는 방법이 있다.

- 미디어 쿼리 설정

```html
@media (<미디어 쿼리>){
    <CSS코드>
    }
```

> @mdeia 규칙

```html
<link rel="stylesheet" href="<file name>" media="<미디어 쿼리>">
```

> media 속성

```html
@media screen{
	body { background-color: red; }
}

@media print{
	body { background-color: green; }
}
```

- 스마트폰, 태블릿PC, 데스크톱 구분이 가능함
- `orientation` 속성을 사용해서 화면 방향 전환에 따라 색상적용 가능

**일반적인 미디어 쿼리 작성 순서**

```html
<style>
	/* 데스크톱 */
    
    /* 스마트폰 */
    
    /* 태블릿PC */
</style>
```


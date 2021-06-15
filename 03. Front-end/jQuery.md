[toc]

# jQuery

> jquery.com 텍스트파일을 받아서 하는 방법도 있는데 이 방법은 거의 쓰지 않는다.<br>`CDN` 을 다운받아서 Google, MS 꺼를 <Script></Script> 가져와서 사용한다.

---

```html
<script>
	$(document).ready(function (){
        
    });
</script>
```

---

## 문서 객체 선택

> $(선택자).메서드(매개변수, 매개변수)

---

## 문서 객체 조작

### 1. 속성 조작(`.attr()`)

```html
var src = $('img').attr('src');
```

> alt속성, src속성, width속성을 변경하기도함
>
> ```html
> $('img').attr('alt', ~~~ );
> $('img').attr('src', ~~~ );
> $('img').attr('width', ~~~ );
> ```

### 2. 스타일 조작(`.css()`)

> ```html
> $('body').css('backgroundColor');
> $('body').css('background-color');
> ```
>
> box 태그에 스타일 적용하기
>
> ```html
> $('.box').css('float', 'left');
> $('.box').css('margin', '10');
> $('.box').css('width', '100');
> $('.box').css('height', '100');
> $('.box').css('backgroundColor', 'red');
> 
> $('.box').css({
> 	float: 'left',
> 	margin: 10,
> 	width: 100,
> 	height: 100,
> 	backgroundColor: 'red'
> })
> <div class="box"></div>
> ```

### 3. 글자 조작(`.html() .text()`)

> `.text()`-`textContent`<br>`.html()` - `innerHTML`
>
> ```html
> var text = $('h1').text();
> var text = $('h1').html();
> 
> alert("text: " + text);
> alert("html: " + html);
> 
> <h1>Header - 0</h1>
> <h1>Header - 1</h1>
> ```
>
> text() 메서드를 사용하면 <h1>의 모든 문서 객체의 글자를 추출<br>html() 메서드를 사용하면 첫 번째에 위치한 문서 객체의 글자를 추출

---

## 이벤트

### 이벤트 연결

> ```html 
> $(document).ready(function(){
> 
> });
> ```
>
> 여기서 ready()는 간단한 이벤트 연결 메서드

```html
$(selector).method(function (event) { });
```

- click 이벤트 연결하기

```html
$('h1').click(function (){
	alert('클릭!');
});
```

- hover() 이벤트 연결하기 (mouseenter/mouseleave)

```html
$(document).ready(function(){
	$('h1').hover(function(){
		$(this).css({"background":'red', "color":'white'});
	}, function(){
		$(this).css({"background":"", "color":""});
	});
		$('h1').dblclick(function(){
			alert();
		});
```

### 이벤트 사용

> on() 이벤트연결, off() 이벤트제거
>
> ```html
> 1.
> $(selector).on(eventName, eventHandler);
> 
> 2.
> $(selector).on({
> 	eventName_0: eventHandler_0,
> 	eventName_1: eventHandler_1,
> })
> ```

> `preventDefault()` - 문서 객체의 기본 이벤트를 제거


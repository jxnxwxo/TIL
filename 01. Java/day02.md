[toc]

## date

```java
import java.util.Date;

	Date now = new Date();
	System.out.println(now);
	System.out.println(now.getDate());
	System.out.println("-----------------------");

	java.sql.Date now1 = new java.sql.Date(System.currentTimeMillis());
	System.out.println(now1.getYear());	

	System.gc();
	// 가비지의 대상이없음 현재 다 레프런싱 하고있어서
```

> `static`: new 없이 메모리에 올라가게 해줌<br>`System.out.println(now)` - 현재 날짜 시간 뽑아줌<br>`System.out.println(now1.getYear());` - 연도를 뽑아줌
>
> - .기능은 참조형 변수에만 쓸수있음(num은 기본형이라 못씀)
> - `System.gc();` - 가비지**

## 변수비교 (==)

```java
	// String은 참조형이지만 세미타입으로 기본형처럼 사용가능하다.
		
		java.lang.String name1 = new String("홍길동");	// heap 영역
		String name2 = new String("홍길동");	//참조형 스타일

		String name3 = "홍길동"; 
		String name4 = "홍길동";
		
		System.out.println(name1 == name2); //주소가 서로 달라 false 예상
		System.out.println(name3 == name4); //주소가 같아서 true 예상
```

> - String은 `java.lang.` 에 있는데 생략할 수 있음
> - String은 참조형이지만 세미타입으로 기본형처럼 사용 가능
>   - String name1 = "홍길동";
>   - String name2 = new String("홍길동");
>
> > 참조형은  heap 영역의 주소가 달라서 == 로 비교를 하면 값이 false가 나옴<br>

## if

```java
		/*
		date.split(date);
		System.out.printf("%s %d %.1f %c %b %s", name, age, avg, grade, b, date);
		*/
		if(b) {
	System.out.printf("%s %.2f %c => 90 이상입니다. %n", name, avg, grade);
		}
		
		if(!b) {
	System.out.printf("%s %.2f %c => 90 이하입니다. %n", name, avg, grade);
		}
```

> String, int, double, char, boolean<br>
>
> double avg = 88.5;<br>
> Boolean b = 90 <= avg;<br>
>
> - if(b){} - b가 참일때 {}실행
> - if(!b){} - b가 거짓일때 {}실행

## integer_temp

```java

		double pi = Math.PI;
		System.out.println(pi);
		
		int num = (int)Math.random() * 100; 

		System.out.printf("byte : %d ~ %d %n", Byte.MIN_VALUE ,Byte.MAX_VALUE );
		System.out.printf("int : %d ~ %d %n", Integer.MIN_VALUE, Integer.MAX_VALUE);
		
		int x = 11, y = 22;
		System.out.printf("(x=%d, y=%d) %n",x,y);
		// x y 값 바꾸기
		int temp = y;
		y=x;
		x=temp;
		
		System.out.printf("(x=%d, y=%d) %n",x,y);
```

> - double pi = Math.PI; 파이값
> - int num = (int)Math.random() * 100;
>   - int 로 강제변환해줌. 그래도 1보다 작은 실수이기 때문에 0만나옴
> - .MIN_VALUE / .MAX_VALUE로 최소값 최대값
> - int x = 11, y= 22; 일 때,
>   - `int temp = y;`
>   -  `y = x;` y는 11로 바꿔주고 
>   -  `x = temp;` x는 y값인 22로 바꿔줌

## Ternary Operation (삼항 연산자)

> - if(msg != null && idx >=0 && idx < msg.length())
>   - msg가 null이 아니고, idx가 0이상이고, idx가 msg의 길이 미만일 때
> - if(jumsu >=0 && jumsu <= 100)
>   - jumsu가 0이상이고, 100이하일 때 (0~100일 때)
> - String res = jumsu >= 70? "pass" : "fail";
>   - res인 jumsu가 70이상이다? 그러면 pass, 아니면 fail
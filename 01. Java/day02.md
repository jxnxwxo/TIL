[toc]

## date

```java
import java.util.Date;
//import java.sql.Date; date가 같아서 오류남
public class Test01_date_now {
//	클래스의 구성 요소(멤버가 될 수 있는것) = 데이터(변수) + 기능(함수, method)
	public static void main(String[] args) {
//	local 변수, 명령문
		
	int num = 'a';
//	char타입 'A'라고 해도 인트로 프로모션 A=65 a=97 아스키코드 대문자->소문자 +32
	System.out.println(num);
//	그냥하면 num 변수초기화가 안되있어서
// 	num은 기본형이라 . 못씀 참조형 변수에만 쓸 수 있음
	
	java.lang.String name = new String("홍길동");
	System.out.println(name);
	System.out.println(name.charAt(0)+"**");
	System.out.println("*"+name.charAt(1)+"*");
	
	Date now = new Date();
	System.out.println(now);
	System.out.println(now.getDate());
	System.out.println("-----------------------");

	java.sql.Date now1 = new java.sql.Date(System.currentTimeMillis());
	System.out.println(now1.getYear());
	
	
	name = null;
	now = null;
	now1 = null;
	// 연결되었던 고리 끊어줌
	System.gc();
	// 가비지의 대상이없음 현재 다 레프런싱 하고있어서
	System.out.println();
		/*
        Date now1 = new Date();
		now 라고하면 중복오류, 그래서 now1
		매번 패키지써주면 불편하니까 import java.util.Date;
		java.sql에도 date가있음
		앞에 패키지를 붙여줘야 에러가 안남
		*/
	}
}
```

> `static`: new 없이 메모리에 올라가게 해줌<br>`System.out.println(now)` - 현재 날짜 시간 뽑아줌<br>`System.out.println(now1.getYear());` - 연도를 뽑아줌
>
> - .기능은 참조형 변수에만 쓸수있음(num은 기본형이라 못씀)
> - String은 `java.lang.` 에 있는데 생략할 수 있음
> - `System.gc();` - 가비지**

## 변수비교 (==)

```java
public class Test02_변수비교 {
	public static void main(String[] args) {

		// String은 참조형이지만 세미타입으로 기본형처럼 사용가능하다.
		
		java.lang.String name1 = new String("홍길동");	// heap 영역
		String name2 = new String("홍길동");	//참조형 스타일로 객체설정 하는법

		String name3 = "홍길동"; // 코드표영역
		String name4 = "홍길동";
//		new 안쓰고 기본형 스타일로 바로 데이터 박을수있음 (앞으로도 이렇게 쓸 것)
		
		System.out.println(name3);
		System.out.println(name3.charAt(0)+"**");
		System.out.println("*"+name3.charAt(1)+"*");
		
		// == 변수에 있는 실제 데이터를 비교 한다.  .참조형비교시 사용하면 안된다.
		System.out.println(name1 == name2); //주소가 서로 달라 false 예상
		System.out.println(name3 == name4); //주소가 같아서 true 예상
		
		name1 = name2;	//name 2에있는 걸 name1에 집어넣어
		name3 = name4;
		
//		int date = new Date().getDate(); //임시객체(여기서 쓰고 버릴거야) 쓰고 바로 gc의 대상이 됨
		String date = new Date().toLocaleString();
		System.out.println(date);
//		마우스 대고있으면 import 적용해주는 팁툴 나옴
	}
}
```

> - String은 참조형이지만 세미타입으로 기본형처럼 사용 가능
>   - String name1 = "홍길동";
>   - String name2 = new String("홍길동");
>
> > 참조형은  heap 영역의 주소가 달라서 == 로 비교를 하면 값이 false가 나옴<br>

## if

```java
public class Test03_if {
	public static void main(String[] args) {
		
		String name = "홍길동";
		int age = 29;
		double avg = 88.5;
		char grade = 'B'; //int로 하면 아스키코드값이 나옴
		Boolean b = 90 <= avg; //평균90점일 때 달성여부
		String date = "2021,05,17";//강의시작일 연, 월, 일 따로 뽑으려면?

		/*
		date.split(date);
		System.out.printf("%s %d %.1f %c %b %s", name, age, avg, grade, b, date);
		*/
		
		//괄호안이 참일때만 이 문장 수행 b값에따라서
		if(b) {
	System.out.printf("%s %.2f %c => 90 이상입니다. %n", name, avg, grade);
		}
		
		if(!b) {
	System.out.printf("%s %.2f %c => 90 이하입니다. %n", name, avg, grade);
		} //90이하입니다 이건 그냥 출력되는거임 if 에 b걸어둔게 위 데이터값과 연결
	}
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
public class Test04_Integer_temp {
	public static void main(String[] args) {
		double pi = Math.PI;
		System.out.println(pi);
		
		int num = (int)Math.random() * 100; 
		// 랜덤 호출하면 더블값 돌아옴
		// int타입은 하면 명시적이기 때문에 (int) 붙여줘야함. 1보다 작은실수기 때문에 0만나옴
		System.out.println(num);
		System.out.println("-----------------------");
		
		// byte, int : Integer
		System.out.printf("byte : %d ~ %d %n", Byte.MIN_VALUE ,Byte.MAX_VALUE );
		System.out.printf("int : %d ~ %d %n", Integer.MIN_VALUE, Integer.MAX_VALUE);
		// byte야 Integer야 최소값 얼마야 최대값 얼마야

		// 형변환
		double sum = Integer.parseInt("99") + Integer.parseInt("77") + 		Double.parseDouble("88.5");
		double avg = sum/3; 
		System.out.printf("총점 : %.2f , 평균 : %.2f %n", sum, avg);
		System.out.println("-----------------------");
		
		int x = 99, y = 77;
		System.out.printf("(x=%d, y=%d) %n",x,y);
		// x y 값 바꾸기
		int temp = y;
		y=x;
		x=temp;
		
		System.out.printf("(x=%d, y=%d) %n",x,y);
		
		System.out.println("-----------------------");
	}
}
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

```java
public class Test05_TernaryOperator {
	public static void main(String[] args) {

		int x = 100, y = 7;
		System.out.println(x / y);
		System.out.println(x % y);
	
		int num = 100;
		System.out.println(num);
		System.out.println(--num);
		System.out.println(num);
		
		x = x / y;
		x /= y;
		// 두개 같음
		
		boolean flag = false;
		System.out.println(flag = (10 == 10));
		System.out.println(true);
		System.out.println(x > y);
		System.out.println("-----------------------------------");
		x = 1;
		// (x>5) && (x<10), (x>5) || (x<10)
		// (x>5) & (x<10) , (x>5) | (x<10)		
		
		flag = (x>5) && (x<10); //true와 flase는 false
		flag = (x>5) & (x<10);
		System.out.println(flag);
		System.out.println("---------------------------------");
		x = 100;
		flag = (x>5) || (x<10);
		flag = (x>5) | (x<10); 
		System.out.println(flag);
		System.out.println("---------------------------------");
		
		System.out.println(4 & 1);	//0
		// 4를 비트로 바꾸면 0100, 0001 = 0000
		System.out.println(4 | 1);	//5
		System.out.println(4 << 2);
		// 0100에서 0두개 밀림 010000
		System.out.println(4 >> 2);
		// 0100 -> 0001
		System.out.println(4 >> 1);
		// 0100 -> 0100
		System.out.println("---------------------------------");

		String msg = null; //가리키는곳이 없음 -> . 쓰면 안됨
		msg = "hello java";
		int idx = 0;
		
		if(msg != null && idx >=0 && idx < msg.length())
//		 메시지가 null이 아닐 때만 쓸 수 있음
//		 if(idx >=0 && idx < 10) 숫자로 접근하기보다 자체의 길이보다 작게하면 되는거므로 길이로 접근
	{  
		System.out.println(msg.length());
		System.out.println(msg.toUpperCase().charAt(idx));
			}else {
			System.out.println("msg에 데이터가 필요합니다.");		}
		System.out.println("---------------------------------");

		int jumsu = 10; // 0~100점까지 점수
		if(jumsu >=0 && jumsu <= 100) {
			String res = jumsu >= 70? "pass" : "fail";
			System.out.printf("%d점 -> %s %n", jumsu, res);
		} 
		else { System.out.println("점수 확인 필요");
		}
	}
}
```

> - if(msg != null && idx >=0 && idx < msg.length())
>   - msg가 null이 아니고, idx가 0이상이고, idx가 msg의 길이 미만일 때
> - if(jumsu >=0 && jumsu <= 100)
>   - jumsu가 0이상이고, 100이하일 때 (0~100일 때)
> - String res = jumsu >= 70? "pass" : "fail";
>   - res인 jumsu가 70이상이다? 그러면 pass, 아니면 fail
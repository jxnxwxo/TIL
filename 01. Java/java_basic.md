[toc]

## println

```java
package packagename;
class Classname {
    
    public static void main(String[] args){
        System.out.println("Hello Java");
    }
}
```

## args

```java
public static void main(String[] args) {
		System.out.println("******************************");
		System.out.println(args.length);
		System.out.println("******************************");
	}
```

> args의 길이가 출력됨.<br>args에 값이 없으므로 0이 출력

## printf

```java
System.out.printf("%d \t %s %c : %b %5.2f \n", 1+2 , "홍길동" , 'A' , 2>1 , 12.34);
```

> 클래스의 구성요소는 데이터(변수)와 기능(함수, method)다.

## string

```java
		String name = "홍길동";
		System.out.println(name);
		System.out.println(name.charAt(0)+"**");

		String msg = null;
		msg = "  hel lo  ";
		System.out.println(msg);
		System.out.println(msg.toUpperCase());
		System.out.println(msg.trim().toUpperCase());
		System.out.println(msg);
		msg = msg.trim();
		System.out.println(msg);
		msg = null;
```

> . 을 누르면 기능들을 보여줌<br>`.charAt(0)` - 0번째 있는 문자 하나 꺼내줌<br>`.toUpperCase()` - 대문자로 바꿔줌<br>`msg.trim` - msg에 있는 공백을 없애줌

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
>   - `y = x;` y는 11로 바꿔주고 
>   - `x = temp;` x는 y값인 22로 바꿔줌

## Ternary Operation (삼항 연산자)

> - if(msg != null && idx >=0 && idx < msg.length())
>   - msg가 null이 아니고, idx가 0이상이고, idx가 msg의 길이 미만일 때
> - if(jumsu >=0 && jumsu <= 100)
>   - jumsu가 0이상이고, 100이하일 때 (0~100일 때)
> - String res = jumsu >= 70? "pass" : "fail";
>   - res인 jumsu가 70이상이다? 그러면 pass, 아니면 fail

## equals

```java
		String s1 = new String("yes");
		String s2 = new String("yes");
		
		String s3 = "yes";
		String s4 = "yes";

		flag = s1.equals(s5);
		System.out.println(s1.equals(s5));

//		검색서비스 이용 할 때 써야함! (대소문자 안가리니까)
```

> `.equals` 로 비교할 수도 있음<br>`.equalsIgnoreCase()` - 대소문자 상관없이 비교

## JOptionPane / showinputDialog

```java
		String msg = JOptionPane.showInputDialog("종료하려면 quit 를 입력하세요 ..");
		if(msg.equalsIgnoreCase("quit")) {
			System.out.println("종료합니다.");
			return ;	
		}else {
			System.out.println("end");
			return;		
```

> import에 * 쓰면 다 쓸수있지만, 너무많으므로 보통 하나하나씩 입력<br>
>
> `JOptionPane.showInputDialog` - 하면 입력창이 생김<br>quit 입력하면 종료(종료합니다 출력), quit 이외 다른거 입력하면 (end출력)

## Scanner

```java
		Scanner keyboard = new Scanner(System.in);
		// 키보드로부터 입력받겠습니다.

		char grade2 = avg >= 90 && avg <= 100 ? 'A' : 
			(avg >= 80 && avg < 90 ? 'B' : (avg >= 70 && avg < 80 ? 'C' : (avg >= 60 && avg < 70 ? 'D' : 'F')));

		char grade3 = ' ';
		switch( (int)avg/10 ) {
		case 10:
		case 9:
			grade3 = 'A';
			break;
		case 8:
			grade3 = 'B';
			break;
		case 7:
			grade3 = 'C';
			break;
		case 6:
			grade3 = 'D';
			break;
		default:
			grade3 = 'F';
			// break = 이 박스를 빠져나와
		}
		
		System.out.printf(" 학점: %c, 학점: %c, 학점: %c, %n", grade, grade2, grade3);
		//		평균을 기반으로 pass인지 fail인지
		keyboard.close();
		// 키보드가 사용하던 자원들 반납해주세요
		keyboard = null;
		// 키보드 객체는 가비지 대상이야 null어사인 하기전에 close반납해줘야함.				
```

> `scanner``system.in` - 키보드로부터 입력을 받는데 따로 창이 뜨지는 않음 그냥 콘솔창에 입력<br>`parseInt`<br>`avg<0 || avg>100` - avg가 0미만 혹은 100초과일때<br>
>
> - 삼항연산자를 계속 연달아 쓸 수 있음
>
> `break` - 박스를 빠져나와야 할 때 씀

## switch

```java
	/*  빌딩의 엘리베이터에 들어옴. 내리고자하는 층을 누름.
		엘리베이터 4층
	*/
		String input = "1"; 
		char c = input !=null && input.trim().length()>0 ? input.trim().charAt(0) : ' ' ;
		switch( c ) {
		case '1':
			System.out.println("1층 약국입니다.");
			break; // 이 구문을 포함한 블럭을 빠져나옴
		case '2':
			System.out.println("2층입니다.");
			break;
		case '3':
			System.out.println("3층입니다.");
			break;
		case '4':
			System.out.println("4층입니다.");
			break;
		default:
			System.out.println("층을 눌러주세요...");
```

> char c는 null이 아니면서 띄어쓰기 다 없앴을 때 길이가 0 초과인가<br>
> 맞으면 트림하고 0번째자리 추출<br>아니면 ' '

## for / while

```java
		int i;
		for( i=1 ; i<=5 ; i++ ) {
			System.out.println("Hello Java"+i);
		}
		System.out.println(i);

		// 조건식 없으면 무한루프
		for( int a=0 ; ; a++ ) {
			System.out.println("....."+a);
			if( a ==100 ) break; // 무한루프에서 어느특정값에 빠져나오게할수있다.
		}
		
		i=0;
		// while 루프 조건에는 true false가 온다.
		while( i<5) {
		System.out.println("Hello Java");
		i++;
		}
		boolean flag = false;
		while(!flag) {
			int num = (int)(Math.random()*100);
			System.out.println(num);
			if(num == 99) flag = !flag;
		}
```

> for문 밖에 i출력은 i++이므로 5까지 처리되고 1더해져서 6이나옴<br>`while`루프 조건에는 true / false가 온다.

## break / out

```java
//out 라벨링작업
		OUT: for(int i=1; i<=9; i++) {
			 for(int j=2; j<=9; j++) {
				//if(j==5) break;
				//if(j==5) continue;
				//if(j==5) break OUT;
				System.out.printf("%d*%d=%2d|", j,i,i*j);
			}
			System.out.println();
```

> `OUT`을 붙여서 break OUT; 으로 원하는곳 빠져나올 수 있음<br>

## StringBuilder

```java
		String msg = "hell "+" , "+"java"+'A'+1+true;
		System.out.println(msg);
//		성능이 안좋음.
		
		
//		StringBuffer sb = new StringBuffer();
		StringBuilder sb = new StringBuilder();
		sb.append("hello");
		sb.append(" , ");
		sb.append("java");
		sb.append('A');
		sb.append(1);
		sb.append(true);
		
		String result = sb.toString();
		System.out.println(result);
		
		return;
```

> msg를 String타입으로 해서 "" + "" 로 다 연결시킬 수도 있지만<br>
> `StringBuilder`을 이용해서  `append`로 이어줄 수 있다.<br>결과를 말할때는 `sb.tostring()`으로 다 붙이기

## Arrays

```java

```

> `(int)(Math.random()*100)` 이거 하면 0나옴<br>
>
> `for( int data : 배열명 ){System.out.println(data)}` 배열에서 data하나씩 빼줌<br>
> `for ( double data : 배열명 ){System.out.println(data)}` 배열에서 data하나씩 빼줌

```java

```



## search

```java

```

>`System.out.println(Arrays.toString(Array))` - 배열에있는거 출력<br>`for (char data : ch2) {System.out.printf("%c => %d %n", data, (int)data);}`

## clone / array copy

```java

```

> `.arraycopy`<br>`.split("/")` - `/` 를 기준으로 문자열을 쪼갬<br>

## twodim

```java

```

## args

```java
		System.out.println(args.length);

		if(args.length > 0)
			System.out.println(args[0]);

		System.out.println("end");
```

> run figurations에서 arguments 설정

## class

```java

```

## args_id_pw

```java
		if(args.length != 2) {
			System.out.println("로그인 정보(id/pw)를 입력하세요.");
		}

		String id = args[0];
		String pw = args[1];

		String msg = String.format("id(%s), pw(%s)", id, pw); 
				
		System.out.println(msg);
```

> arguments에 java 1234 있다고 하면<br>args[0]은 java<br>args[1]은 1234가 되므로 id는 java / pw는 1234가 된다.<br>
>
> `String msg = String.format("id(%s),pw(%s)",id, pw);` 

## Calc

```java
public class Calc {
	//클래스의 구성 요소(멤버가 될 수 있는것) = 데이터(변수) + 기능(함수, method)
	// + - / * %
	
//	 값이 절대 바뀌면 안돼 = final / final없으면 instance 자원
	static final double PI = 3.14;
	
//	 함수 안에는 영역 표시
//	void는 되돌아오는 값이 없음. 우리는 x+y 더한 값이 돌아오기를 원함
	
//	 두 정수를 더하는 add 함수 정의
							// int[] 처리 됨, 마지막 위치만 가능
	public static int add(int ... n) {
		int sum = 0;
		for ( int data :n) {
			sum += data;
		}
			return sum;
	}
	
//	static처리를 한 이유: 
//	static이 동작하기 위해 this 자원이 사용되면 안됨
	public static int add (int x, int y) {
		return x + y;
	}
	
//	add 함수 썼으니까 또 쓸 수 없음. 매개변수를 바꿔주면 가능. int z까지
	public static int add (int x, int y, int z) {
		return x + y + z;
	}
	public static double add (double x, double y) {
		return x + y;
	}

//	두 정수를 빼는 sub 함수 정의
	public static int sub (int x, int y) {
		return x - y;
		}
	}
**********
public class Test03_Calc {
	public static void main(String[] args) {

//		static은 new(객체생설할) 필요없다. 그냥 쓰면 됨
//		Calc c1 = new Calc();
		System.out.println(Calc.add(1,2,3,4,5,6,7));
		System.out.println(Calc.add(1,2,3,4,5,6,7,8,9,10));
		
		System.out.println(Calc.add(123123, 123123));
		System.out.println(Calc.add(100, 123, 456));
		System.out.println(Calc.add(0.5, 0.7));
		
		System.out.println(Calc.sub(213132, 123123));
		
//		static 한 자원만 접근할 수 있음
//		instance 는 주소 필요함.
		System.out.println(Calc.PI);
//		Calc.java에서 final 썼으므로 pi값 바꿔줄 수 없음
		System.out.println(Calc.PI);	
	}
}
```

## Loc

```java
public class Test05_Loc {
	public static void main(String[] args) {
		Loc p1 = new Loc(127.999, 77.7777);
		p1.print();
	}
}

//class로 묶어야 의미가있음. date는 이거 다 포함
class MyTime{
	int y;
	int month;
	int day;
	int h;
	int m;
	int s;
}

class Loc{
//	위치를 나타내는 좌표
//	x,y 좌표는 이 클래스안에서만 볼 수 있음
	private double x;
	private double y;
//	source generate constructor using fields

//	체크 풀면 기본생성자
	public Loc() {
	}

	//	체크하면 x,y 이용한 생성자
	public Loc(double x, double y) {
		super();
		this.x = x;
		this.y = y;
	}

	public double getX() {
		return x;
	}

	public void setX(double x) {
		this.x = x;
	}

	public double getY() {
		return y;
	}

	public void setY(double y) {
		this.y = y;
	}
	
	public void print(){
		System.out.printf("[x=%f,y=%f]%n",x,y);
	}
//	그 데이터와 맞물리는 생성자 함수가 있어야함
}
```



## Singleton

```java
public class Test06_Singleton {
	public static void main(String[] args) {
//		new를 할때마다 계속 Heap영역에 객체가 만들어지니까 주소가 다 다름 syso s1 했을 때
//		new 안해도 쓸수 있는건 static
		
		Singleton s1 = Singleton.getInstance();
		System.out.println(s1);
		Singleton s2 = Singleton.getInstance();
		System.out.println(s2);
		Singleton s3 = Singleton.getInstance();
		System.out.println(s3);
	}
}
//	public도 올수있음
class Singleton {
	
//	public도 올수있음
//	static 붙여주면 heap영역 아니라 static영역에 올라감
	static Singleton s = new Singleton();
//	private이라 위에선 안됨
	private Singleton(){}
	
	public static Singleton getInstance() {
		return s;		 // static method에서는 
	}
}
```


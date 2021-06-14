## args_id_pw

```java
public class Test01_args_id_pw {
	public static void main(String[] args) {
//		아이디 패스워드	2개만 들어갈거니까 구성요소가 2개 만 필요함.
		if(args.length != 2) {
			System.out.println("로그인 정보(id/pw)를 입력하세요.");
		}

		String id = args[0];
		String pw = args[1];
//		로그인 처리 
		String msg = String.format("id(%s), pw(%s)", id, pw); 
				
		System.out.println(msg);
	}
}
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


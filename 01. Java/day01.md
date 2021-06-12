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
public class Test03_printf {
	//클래스의 구성 요소(멤버가 될 수 있는것) = 데이터(변수) + 기능(함수, method)
	//int a;
	//메인함수 안에는 뭐가 올 수 있나?
	public static void main(String[] args){
		// local 변수 , 명령문
		System.out.println("hello");
		System.out.println("홍길동");
		System.out.println('A');
		System.out.println(27);
		System.out.println(1.1);
		System.out.println(false);
		System.out.println(170 > 177);
		System.out.println(80 + 70 + 99);
		System.out.println((80 + 70 + 99)/3);
		System.out.printf("loc(x=%.6f , y=%.6f) %n", 127.2323 , 448.5555);
		System.out.println("--------------------------------");
		System.out.println(7+7);
		System.out.println(1/2.); //정수나누기정수여서 답도정수, 1->1.0 자동으로 프로모션
		System.out.println(1/(int)2.); //2. -> 1로 캐스팅(명시적인 형변환)
		System.out.println(""+1+1);
		System.out.println(1+1+"");
		System.out.println("--------------------------------");
		System.out.println(3+4+"홍길동"+"\t"+'A'+":"+ (3>4) + 30.77);
		//성능저하의 원인이 되는 코드(안씀)
		System.out.printf("%d \t %s %c : %b %5.2f \n", 3+4 , "홍길동" , 'A' , 3>4 , 30.77);
		//5자리중에서 소숫점 2자리까지만
		System.out.printf("%s %s %s %s %s %n", 3+4 , "홍길동" , 'A' , 3>4 , 30.77);
		//다 스트링이라 가능
		System.out.printf("(%d) %.2f %c ", 1, 1.7, 'A');
		//앞에는 포맷기호 뒤에는 데이터
	} 
}

class A{
	//클래스의 구성 요소(멤버가 될 수 있는것) = 데이터(변수) + 기능(함수, method)

}

class B{
	//클래스의 구성 요소(멤버가 될 수 있는것) = 데이터(변수) + 기능(함수, method)

}
```

> 클래스의 구성요소는 데이터(변수)와 기능(함수, method)다.

## string

```java
public class Test04_string {
	//클래스의 구성 요소(멤버가 될 수 있는것) = 데이터(변수) + 기능(함수, method)

	public static void main(String[] args) {
		// local 변수, 명령문
		long num = 999999999999l;
		int x = (int)7.9;
		x = 90; //7이 x공간에서 지워지고 다시 그냥 90으로 바꿈
		//int 넣어줘서 data type맞춰줘야함 int x = (int)num
		//num이라고하는 기억공간, 앞에 데이터 타입이 와줘야함
		System.out.println(x);
		//num은 200이라고 설정
		
		double f = 6.6;
		System.out.println(f);
		
		String name = "홍길동";
		//홍길동 을 기억하고싶다
		System.out.println(name);
		System.out.println(name.charAt(0)+"**");
		//. 누르면 기능들을 보여준다. (대소문자로 바꾸거나 글자를 바꾸거나 등)
		//0번째에있는 문자 하나만 꺼내줘 -> 홍만 뽑아왔음
		
		String msg = null;
		msg = "  hel lo  ";
		System.out.println(msg);
		System.out.println(msg.toUpperCase());
		System.out.println(msg.trim().toUpperCase());
		System.out.println(msg);
		msg = msg.trim();
		System.out.println(msg);
		msg = null;
		
        /*
		msg라는 변수가 만들어짐. null:주소가없음(가리키는곳이)
		주소가 들어감 msg = " hel lo " 메모리 어딘가에
		blank hel blank lo blank라는 데이터가 있음
		msg. 원본은 그대로 냅두고 가져온 데이터를 uppercase로 바꾸고 보여줌
		msg에서 트림을 해서(공백을 제거 해서, 가운데꺼는 공백제거안됨) 대문자로, 원본은 변함이없음
		msg 찍어 해서 원래있던 그대로 나옴 (확인)
		msg = msg.trim 은 msg원본 데이터 가져와서 공백 제거해서 msg에 다시넣어
		이제부터 msg = "hel lo" 공백이 없어진 형태가 됨 (27행에서 32행으로 바뀐거임)
		msg 프린트 해봐 하면 공백이 없어진 애를 가져옴
		msg = null 가져오던거 끊어버려(해제해) msg박스엔 null을 가르키고있음 아무것도 안가르키는중
        */
	}
}
```

> . 을 누르면 기능들을 보여줌<br>`.charAt(0)` - 0번째 있는 문자 하나 꺼내줌<br>`toUpperCase()` - 대문자로 바꿔줌<br>`msg.trim` - msg에 있는 공백을 없애줌

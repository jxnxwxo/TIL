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

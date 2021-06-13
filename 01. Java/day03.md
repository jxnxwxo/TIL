[toc]

## equals

```java
public class Test01_equals {
	public static void main(String[] args) {
		
        int x = 7, y = 7 ;
		boolean flag = x == y;
		System.out.println(flag);
		System.out.println( x == y );
		System.out.println( y == x );
		System.out.println("---------------------------");
		
		String s1 = new String("yes");
		String s2 = new String("yes");
		
		String s3 = "yes";
		String s4 = "yes";
		//new 쓰기보다 이런식으로갈거임
		
		String s5 = "YES";
		// 참조형은 값을 비교할 때 ==써서 비교하면 안돼
		
		System.out.println(s1 == s2);
		System.out.println(s3 == s4);

		System.out.println(s1.equals(s2));
		System.out.println(s2.equals(s1));
		System.out.println(s3.equals(s4));
		System.out.println(s4.equals(s1));
	
//		계속하려면 예스를 누르세요. 여러종류들이 발생할거임
//		"Yes" "yes" "YES"
		
		flag = s1.equals(s5);
		System.out.println(s1.equals(s5));
//		대소문자를 구별함. 우리는 대소문자 상관없이 비교해야하는 상황
		System.out.println(s1.equalsIgnoreCase(s5)); //yes YES 비교 같다!
		
		System.out.println(s1.toUpperCase().equals(s5.toUpperCase()));		
		System.out.println(s1.toLowerCase().equals(s5.toLowerCase()));
//			비효율적임 -> 대소문자 비교할때는 양쪽 같게하고 비교
//			print ln 에서 비교	
//			검색서비스 이용할 때 써야함!
	}
}
```

> `.equals` 로 비교할 수도 있음<br>`.equalsIgnoreCase()` - 대소문자 상관없이 비교

## JOptionPane / showinputDialog

```java
import javax.swing.JOptionPane;
//import javax.swing.*; 도 작동하지만 안씀. 왜냐하면 static에 *에 해당되는거 다 올라가기때문에 메모리 과부하
//import구문 여러개여도 하나하나씩 다 입력할것.
public class Test02_JOptionPane_showInputDialog {
	public static void main(String[] args) {
	
        System.out.println("start");
		//return; 그냥 여기다 놓으면 실행할수 없음 리턴 다음에는 문장이 올수없음
		
//		String msg = "Quit";
		String msg = JOptionPane.showInputDialog("종료하려면 quit 를 입력하세요 ..");
		if(msg.equalsIgnoreCase("quit")) {
			System.out.println("종료합니다.");
			return ;	
//			함수종료
		}else {
			System.out.println("end");
			return;		
//			return 문을 포함한 함수종료
		}
	}
}
```

> import에 * 쓰면 다 쓸수있지만, 너무많으므로 보통 하나하나씩 입력<br>
>
> `JOptionPane.showInputDialog` - 하면 입력창이 생김<br>quit 입력하면 종료(종료합니다 출력), quit 이외 다른거 입력하면 (end출력)

## Scanner

```java
import java.util.Scanner;
public class Test03_Scanner_if_switch {

    public static void main(String[] args) {
		Scanner keyboard = new Scanner(System.in);
		// 키보드로부터 입력받겠습니다.

		System.out.println("성적처리를 진행할까요?");
		System.out.println("진행을 원하면 yes를 입력하세요.");
		
		String msg = keyboard.nextLine();
		// msg 값이 yes가 아닌 경우 App 종료하도록 코딩
		if(!msg.equalsIgnoreCase("yes")) {
			if(keyboard != null) keyboard.close();
			keyboard = null;
			System.out.println("종료합니다");
			
		return;} 
		// else사용안하고 그냥 !msg 로 역으로 생각할수도있음
		
		System.out.print("이름을 입력하세요 __");
		System.out.println();
		String name = keyboard.nextLine();
		// 이름 입력하는곳! 키보드로부터 한줄 입력받겠다. 네임에 넣겠다.
		
		System.out.print("나이를 입력하세요 __");
		System.out.println();
		int age = Integer.parseInt(keyboard.nextLine());
		// 나이 입력하는곳! "" -> int 
		
		System.out.println(" 국어 영어 수학 점수를 입력하세요 __");
		System.out.println(" 입력예 > 90 90 99 처럼 점수를 입력후 엔터 입력하세요.");
		System.out.println();
		int ko = keyboard.nextInt(); //국어성적만
		int eng = keyboard.nextInt(); //영어성적만
		int mat = keyboard.nextInt(); //수학성적만
		keyboard.nextLine();
		// 점수 입력하는곳! 엔터표시 읽어서 버려!
		
		System.out.println("*********************");
		System.out.printf("이름: %s, 나이: %d , %n", name, age);
		int sum = 0;
		// 0으로 초기화
		double avg = 0.0;
		System.out.printf("국어: %d, 영어: %d, 수학: %d, 총합: %d, 평균: %.2f %n", ko, eng, mat, sum = ko+eng+mat, avg = sum/3.0);
		
		if( avg<0 || avg>100 ) {
			keyboard.close();
			keyboard = null;
			System.out.println("점수 확인 필요...");
			return;
		}
        
		char grade = 'F'; //초기값
		// avg 100~90: A, 89~80: B, 79~70: C, 69~60: D, ~: F
		
		if(avg >= 90 && avg <= 100)
			grade = 'A'; 
		else if (avg >= 80 && avg < 90)
			grade = 'B';
		else if (avg >= 70 && avg < 80)
			grade = 'C';
		else if (avg >= 60 && avg < 70)
			grade = 'D';
		else
			grade = 'F';
//		실행문이 하나면 블락 빼도됨
		
		char grade2 = avg >= 90 && avg <= 100 ? 'A' : 
			(avg >= 80 && avg < 90 ? 'B' : (avg >= 70 && avg < 80 ? 'C' : (avg >= 60 && avg < 70 ? 'D' : 'F')));
		// 3항연산자로
		
		// switch 구문으로 성적처리 (평균 점수에따른 등급처리)
		char grade3 = ' ';
//		 ★중요★ switch 조건에 avg넣으면 실수라 에러남. int타입만 받아줄 수 있음. String도 가능(전에는 못썼음).
//		sum은 0~300케이스 다해야함
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
	}
}
```

> `scanner``system.in` - 키보드로부터 입력을 받는데 따로 창이 뜨지는 않음 그냥 콘솔창에 입력<br>`parseInt`<br>`avg<0 || avg>100` - avg가 0미만 혹은 100초과일때<br>
>
> - 삼항연산자를 계속 연달아 쓸 수 있음
>
> `break` - 박스를 빠져나와야 할 때 씀

## switch

```java
public class Test04_switch {
	public static void main(String[] args) {

// 		빌딩의 엘리베이터에 들어옴. 내리고자하는 층을 누름.
//		엘리베이터 4층
		String input = "1"; // 1 2 3 4 층 밖에없음, 도트사용가능
		//char input = '1'; // 싱글쿼테이션
		
		// 괄호 안은 int 타입으로 프로모션 가능한 것만 가능, string도 가능
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
			
		}
	}
}
```

> char c는 null이 아니면서 띄어쓰기 다 없앴을 때 길이가 0 초과인가<br>
> 맞으면 트림하고 0번째자리 추출<br>아니면 ' '

## for / while

```java
public class Test05_for_while {
	public static void main(String[] args) {

		// int 타입 i라는 변수가있는데 0부터 시작하고 1씩 증가시키겠다
		// 10이 되면 이 for 반복문 빠져나옴
		int i;
		
		for( i=1 ; i<=5 ; i++ ) {
			
			System.out.println("Hello Java"+i);
			
		}
		// i 찍으면 오류남 for 박스에서만 i로 정한거니까
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
		
		
		i=9;
		do {
			System.out.println("............");
			i++;
		}while( i<5) ;
			
		System.out.println("----------------------------------");
	
		// 1~100 까지의 합
	int j = 0;
	int sum = 0;
	for (j=1 ; j<=100 ; j++) {
		sum += j;
		System.out.println(sum);
		
//	1~100 3의 배수의 합
//	int k = 0;
//	if (i % 3 == 0)
		System.out.println("----------------------------------");

	for (int x=1 ; x<3 ; x++) {
		for (int y=9 ; y>3; y--) {
			System.out.printf("x=%d, y=%d \t",x, y);
		}
		System.out.println();
			}
		}
	}
}
```

> for문 밖에 i출력은 i++이므로 5까지 처리되고 1더해져서 6이나옴<br>`while`루프 조건에는 true / false가 온다.

## break / out

```java
public class Test06_break_out {
	public static void main(String[] args) {
		
		//out 라벨링작업
		
		OUT: for(int i=1; i<=9; i++) {
			 for(int j=2; j<=9; j++) {
				//if(j==5) break;
				//if(j==5) continue;
				//if(j==5) break OUT;
				System.out.printf("%d*%d=%2d|", j,i,i*j);
			}
			System.out.println();
		}
	}
}
```

> `OUT`을 붙여서 break OUT; 으로 원하는곳 빠져나올 수 있음<br>

## StringBuilder

```java
public class Test07_StringBuilder {
	public static void main(String[] args) {
/*		System.out.println("start");
		String msg = "hello";
		System.out.println(msg.length());
		char c = msg.charAt(0);
		System.out.println(c);
		System.out.println("end");
*/		
		String msg = "hell "+" , "+"java"+'A'+1+true;
		System.out.println(msg);
		// 성능이 안좋음.
		
		
//		StringBuffer sb = new StringBuffer();
		StringBuilder sb = new StringBuilder();
		sb.append("hello");
		sb.append(" , ");
		sb.append("java");
		sb.append('A');
		sb.append(1);
		sb.append(true);
		// 문자열 빌딩시키겠다
		
		String result = sb.toString();
		System.out.println(result);
		
		return;
	}
}
```

> msg를 String타입으로 해서 "" + "" 로 다 연결시킬 수도 있지만<br>
> `StringBuilder`을 이용해서  `append`로 이어줄 수 있다.<br>결과를 말할때는 `sb.tostring()`으로 다 붙이기


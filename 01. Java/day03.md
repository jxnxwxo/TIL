[toc]

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


## Arrays

```java
public class Test01_Arrays {
	public static void main(String[] args) {
//		Array 선언, 생성, 초기화
//		[] 넣는순간 jumsu가 레퍼런스가 된다

		/*
		int[] jumsu = null;		// Array 선언
		jumsu = new int[5];		// Array 생성
		// 인트라는 타입으로 인트타입으로 5개의 방을 만들어주세요
		*/
		
		int[] jumsu = new int[5];		// 선언과 생성을 동시에
		
		System.out.println(jumsu.length); // 배열의크기
		System.out.println(jumsu);	// 점수의 주소
		System.out.println(Arrays.toString(jumsu));	// 0초기화 후 출력용
		
        // Array 초기화
		for (int i=0 ; i<jumsu.length ; i++) {
		jumsu[i] = (int)(Math.random()*100) ;
            
		}
		// 로또번호 생성기
		int sum = 0;
		for (int i=0 ; i<jumsu.length ; i++) {
			sum += jumsu[i];
			System.out.printf("%d	",jumsu[i]);
	
		}
		// 점수안에 들어가있는게 성적이면 총점, 평균 낼 수 있다.
		System.out.println();
		System.out.printf("총합: %d, 평균: %d %n", sum, sum/jumsu.length);
		System.out.println(Arrays.toString(jumsu));	// 초기화 후 출력용
		System.out.println("=======================================");
		
		// 니가 알아서 돌아 점수라는 배열에서 인트타입 데이터 하나 뽑아
		// 아래 for는 데이터를 꺼낼 수만있음
		for( int data : jumsu) {
			System.out.println(data);
		}
		
		double[] num = new double [100];
		for (int i=0 ; i<num.length ; i++) {
			num[i]=Math.random();
		}

		// num에서 double타입 data 뽑아
		for( double data : num) {
//			System.out.println(); 이거하면 줄바꿈됨
			System.out.printf("%.4f", data);
		}
	}
}
```

> `(int)(Math.random()*100)` 이거 하면 0나옴<br>
>
> `for( int data : 배열명 ){System.out.println(data)}` 배열에서 data하나씩 빼줌<br>
> `for ( double data : 배열명 ){System.out.println(data)}` 배열에서 data하나씩 빼줌

```java
import java.util.Arrays;

public class Test02 {
	public static void main(String[] args) {
		int[] num = {5,7,9,3,11,66,11,77};
		System.out.println(Arrays.toString(num));
        // num은 그냥주소, Arrays.tostring은 배열형태로 보여줌

		// num 배열에서 11번 위치 찾기 -> 위치인덱스 출력
		// 한번만 찾고싶으면 break;
		int data = 11;
		for (int i=0 ; i<num.length ; i++) {
			if(num[i] == data) {
				System.out.printf("%d은 num[%d]에 위치해 있습니다. %n",data, i);
				break;
			}
		}
		// 주소가 안찍히고 데이터가 찍히는건 데이터가 찍히게 만들어놨구나, 라고생각
		
		String[] msg = new String[3];
		msg[0] = "hello"; // h e l l o
		msg[1] = null; // j a v a
		msg[2] = "SQL";  // S Q L
				System.out.println(Arrays.toString(msg));
		// msg에서 마지막 문자(length-1)들만 찍어보세요
				
							//배열의 사이즈는 length 괄호없음
		for(int i=0 ; i<msg.length ; i++) {
//			System.out.println(msg[i].charAt(msg[i].length()-1));
							// length 괄호있음
			for(int idx=0 ; msg[i] != null && idx<msg[i].length() ; idx++) {
				System.out.printf( "%c ", msg[i].charAt(idx));
			}		
			System.out.println();
		}			
	}
}

/*
괄호가 있고없고 차이: 
int name ; 괄호가 없는건 변수 & 기능에는 괄호가 있음
*/
```



## search

```java
import java.util.Arrays;

public class Test03_search {
	public static void main(String[] args) {
		String[] names = {"홍길동", "김가", "고아무개", null, "", "이이", "고길동", "김길동"}; 		/*
        {};이걸로 초기화, null; 아직 주소없어
		names = null;
		names = new String[] {"홍길동", "고아무개", "이이", "고길동"}
		스트링의 주소이고 스트링타입으로 배열을 생성할것이고 한개두개~4개 names에 넣을겁니다.
		
		System.out.println(names.length); // null; 쓰면 오류남, 주소가없는데 도트써서
		*/
        
		System.out.println(Arrays.toString(names));
		
		
//		names라는 배열에서 고길동이라는 사람이 있는지 없는지 찾아보시오.
		// 여러개면 []
		String[] res = new String[10];
		int count = 0;
		for(int i=0 ; i<names.length ; i++) {
			if(names[i] != null)
				if( names[i].contains("길동")) {			// 길동을 포함하는 contains api
//				if( names[i].equals("김길동")) {				// 김길동과 같은 equals api
//				if( names[i].startsWith("김")) {			// 김으로 시작하는 startswith api
				res[count++] = names[i];
			}
		}
		System.out.println("----- 검색 결과 -----");
		// 만약 없으면, res==null 이면
		if(count == 0) {
			System.out.println(" 검색결과가 없습니다. ");
		}else {
			System.out.println(Arrays.toString(res));
		}
		
		for(int i=0; i<names.length; i++) {
			if(names[i] != null && names[i].length()>0) // 공백은 charat0이 존재하지않음
			System.out.printf("%c**	",names[i].charAt(0));
		}
		
		boolean[] flag = new boolean[5] ;
		// 5개의 true/false를 저장할수있는 boolean이 만들어짐
		System.out.println();
		System.out.println();
		
		char[] ch2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".toCharArray(); //배열로 바꿔버림
//		string은 문자의 배열
		for (char data : ch2) {
			System.out.printf("%c => %d %n", data, (int)data);
		}
		
		System.out.println();
		
		char[] ch = {'a', 'b' ,'c'};
		String abc = new String(ch); // ch를 String으로 바꿔줌
		String msg = "hello java"; // 이 msg는 메모리에 어떻게 생겼을까 -> string은 내부적으로 char의 배열로 관리가 된다. (코드표)
		System.out.println();
	}
}
```

>`System.out.println(Arrays.toString(Array))` - 배열에있는거 출력<br>`for (char data : ch2) {System.out.printf("%c => %d %n", data, (int)data);}`

## clone / array copy

```java
public class Test04_clone_arraycopy {
	public static void main(String[] args) {
		int[] num1 = new int[] {11,33,55,77,99}; // new int[] 생략 가능
		int[] num2 = num1;
		int[] num3 = num2.clone();

		num1[0] = 0;
		num2[4] = 0;
		num3[2] = 1;

		num3 = num1;
		
		num1 = null;
		num2 = null;
		num3 = null;
		// 더 이상 가리키고 있는게없다. (디버그 모드로 확인)
		
		System.out.println("===============================");
		
//		한번 메모리에 올라가면 리사이징이 안된다.
		int[] num4 = new int[] {9,6,8,2,3};
//		사이즈가 모자라서 더 큰 배열을 만들라고함
		int[] num5 = new int[ num4.length*2 ];
//		데이터를 늘렸으니까 이제 카피하는 작업
		// object src, int srcPos, object dest, int destPos, int length
		// 복사원본, 어디서부터 0번째부터, 목적지, 0번째로, 몇개복사할래
		// num4, 0, num5, 3,  으로하면 3번째부터 변경값이 적용
		System.arraycopy(num4, 0, num5, 0, num4.length);

		System.out.println();
		System.out.println("===============================");

		String[] data = "고길동 / 99 / 77 / 100".split("/");
//		슬러시를 기준으로 문자열을 쪼개고 싶음
//		{"고길동" "99" "77" "100"} 이런모양으로 쪼개짐		
//		리턴타입은 String의 배열이야 --> String[] 으로 받기 
		
//		평균을 내고싶어
		double sum = 0;
		for (int i=1; i<data.length; i++) {
			sum += Double.parseDouble(data[i].trim()); //안전하게 공백제거
		}
		
		System.out.printf("%s, 총점: %.2f, 평균: %.2f", data[0], sum, sum/3);
		
		System.out.println();
	}
}
```

> `.arraycopy`<br>`.split("/")` - `/` 를 기준으로 문자열을 쪼갬<br>

## twodim

```java
public class Test05_twodim {
	public static void main(String[] args) {
			int[] num1 = {1,1,1};
			int[] num2 = {2,2,2,2,2};
			int[] num3 = {3};
			
//			1차원 주소 모아서 관리할거야
//			근데 갖고있는 갯수가 다 다른데?
		int[][]  two = {num1,num2,num3};
			
		System.out.println();
		
		for(int row=0; row<two.length; row++) {
			for(int col=0; col<two[row].length; col++) {
				System.out.printf("%d  ",two[row][col]);
		}
		System.out.println();
		System.out.println();
		}
		
		int N=4;
		int[][] t1 = new int[N][N];
		t1[2][3] = 99;
		
		int[][] t2 = {
				{},
				{99,66,89,88,44,100}, // 1반의점수
				{78,69,92,58,55,77,66,79}, // 2반의점수
				{98,67,55,66} //3반의점수
		};

		// 반별 평균점수 구하기
		double sum = 0;
		for(int i=1; i<t2.length; i++) {
			sum = 0; // 이 전반 성적이 누적이 되어버릴 수도 있으니까
			int count = t2[i].length; // i반의 총 인원수
			for(int c=0; c<count ;c++) {
				sum += t2[i][c];
			}
			System.out.printf("%d반 총점: %.2f 학생수: %d, 평균: %.2f %n",i, sum, count, sum/count);
		}
	}		
}
```

## args

```java
public class Test06_args {
	public static void main(String[] args) {
//			실행할때마다 넘겨오는 정보들 arg로 / 실행파라미터
		System.out.println(args.length);

		if(args.length > 0)
			System.out.println(args[0]);

		System.out.println("end");
	}
}
```

> run figurations에서 arguments 설정

## class

```java
public class Test07_class {
	public static void main(String[] args) {
		Employee emp1 = new Employee();
		emp1.print();
		
		// 하드디스크에 있는걸 메모리로 올리는거 new
		// 주소가 만들어졌으니까 emp1.print() 에서 .(도트) 사용가능
	}
}

class Employee{
	//					명사			동사 (하다 붙여서 다 자연스러우면 기능으로 설계)
	// 클래스의 구성요소 = 데이터(변수) + 기능(함수, method)
	
	String name;// 이름
	String dept;// 부서
	int age;// 나이
	
	// 출력하다 () 괄호가 있음. {}안에 있는 일을 하고 돌아가줘야함
	// 그냥 돌아가려면 void, return
	public void print(){
		System.out.printf("사원명 : %s , 근무부서 : %s %n",name, dept);
		return;
	}
}
```



> 배열이 너무어렵다... 다시해야할듯 210614
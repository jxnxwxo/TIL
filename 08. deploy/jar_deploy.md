1. spring에서 sprSamples workspace만듦
2. Perspective에 원하는게 없어서 Marketplace에서 legacy검색
3. Spring tools 4 Add-On으로 다운로드
4. 이제 Perspective에 Spring 생김



5. New - Starter Project - Jar, Java Version (8 or 11)
6. maven repository에서 spring boot web 검색
7. spring boot starter web 를 pom.xml에 paste
8. sampleApplication 실행해보기, tomcat 8080포트로 실행된걸 볼 수 있음
9. 포트번호 설정 3000, 실행
10. Controller 만들기 @RestController @RequestMapping(value = "/")
11. localhost:3000 찍으면 return값 나옴
12. DTO 만들기 id, pwd, name, email, int auth
13. constructor -> getters and setters -> to String
14. Controller 다시가서 @RequestMapping(value = "/member")<br>return dto;
15. @RequestMapping(value = "memberlist")<br>public List<MemberDTO><br>return list;

16. localhost:3000/member, localhost:3000/memberlist



17. maven build, Goals에 package라고 작성, Profiles란의 pom.xml은 없애줌 (Build Success)
18. 오류가나면 Preferences에서 JAVA-Installed JREs에서 맞는 버전을 찾는다.
19. sprSamples - sample - target 가면 jar파일이 만들어져있음.
20. 경로를 copy하고 cmd실행(내부 배포)
21. cd 경로 해서 경로바꿔줌
22. java -jar 파일명.jar 하면 우리가 평소 spring에서 봤던 모습 나오면서 실행됨

23. 이상태에서 웹에서 localhost:3000 하면 표시됨.
24. 끄고싶으면 ctrl+c

25. pom.xml 가서 <packaging>jar</packaging> 추가

이제 JAR파일을 AWS에 올릴거임

1. github 가서 new repository
2. git config --global user.name  github아이디
3. git config --global user.email "github 이메일"
4. git init
5. git add .
6. git status -> git commit -m "test"
7. git remote add origin git주소
8. git에 올라가있음
9. AWS 회원가입, 아시아태평양 서울로 변경
10. 서비스(EC2), RDS(유료, 절대클릭 NONO)
11. EC2 - 인스턴스 - 인스턴스시작
12. Linux, Ubuntu, window등 여러가지 나오는데 Ubuntu(64비트x86) 선택 - 프리티어(디폴트 값)으로 검토 및 시작
13. 시작하기 누르면 키 페어 선택이 나옴. 키페어가 없으니까 '새 키 페어 생성' - 이름 아무거나 (myKeyPair)설정 하고 키 페어 다운로드 누르면 myKeyPair.pem 파일 다운로드 됨 (c드라이브 찾기쉬운 특정폴더에 저장보관)
14. 마무리 하면 대기중 -> 실행중 으로 변함 iPv4주소, 퍼블릭iPv4주소 가 주소고 유동ip임.

15. 인스턴스 연결 -> 사용자이름 ubuntu -> 연결 누르면 콘솔창이 실행됨.
16. 근데 이 콘솔창은 렉이 자주걸려서 프로그램(putty)을 다운받을 것임.
17. putty gen 실행 -> Conversions import key -> 아까받은 pem파일 불러옴 -> Save Private Key 예<br>.ppk 로 바꿔서 저장해줌(pem->ppk 변환)
18. PuTTY실행 -> 아까 생성한 인스턴스 iPv4 주소 copy후 -> Ip주소 란에 paste / port 22<br>Connection - SSH - Auth - Browse클릭 후 .ppk 불러옴<br>Session명에 ubuntu (아무렇게나 해도 됨) 하고 Save

!!! 주의사항: 우리는 유동IP를 쓰기 때문에 ip가 바뀌면 또 PuTTY들어가서 ip주소 바꾸고 또 save하고 18번 반복해줘야함

19. Open 누르면 PuTTY의 콘솔창이 뜸 login as: ubuntu



20. git clone git주소 엔터치면 클론해줌
21. ls (리스트) 치면 sample / cd(change directory) cd sample 하면 sample 폴더로 이동
22. ls 치면 sample폴더 안에 들어있는것들 보여줌
23. sudo apt-get update 강제로 업데이트
24. sudo apt install openjdk-8-jdk / openjdk-11-jdk 자기버전에 맞는거 다운로드
25. java -version 체크해보면 8로했으면 "1.8.0_292" 나옴



26. sudo chmod 777(7소유자권한 7그룹사용자권한 7기타사용자권한) ./mvnw<br>mvnw에 권한을 다줌 -> ls 찍어보면 mvnw파일 색깔이 달라졌음
27. 빌드를 시킬거임 ./mvnw clean package 엔터 -> BUILD SUCCESS
28. ls, cd target, ls찍어보면 jar파일 나옴
29. java -jar jar파일 엔터 누르면 우리가 봤던 스프링 화면 나옴
30. 퍼블릭 iPv4주소 복사 후 주소:3000 웹주소에 입력 -> 안될거임
31. 포트넘버 3000이 되게해야함 -> 인스턴스에서 보안 탭 들어감 -> 보안그룹 클릭
32. 인바운드 규칙을 만들어 줘야함 edit inbound rules -> 규칙추가(접속을 할 수 있도록 포트를 열어주는것)
33. 사용자 지정 TCP, 포트범위:3000, 소스anywhere 0.0.0.0/0(모든 ip) 규칙저장
34. EC2 - 인스턴스 2/2개 검사통과 ipv4:3000 하면 헬로우 보임 ipv4:3000/member 해도 나옴

ㅡㅡ 배포완료 ㅡㅡ

마찬가지로 끌때도 tomcat처럼 ctrl+c
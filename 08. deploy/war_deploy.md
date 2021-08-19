war배포

github에 올리지않고 직접적으로 올리기

1. pom.xml에서 <packaging>war</packaging>
2. Maven build에서 Goals: package Run -> BUILD SUCCESS
3. C:\2021_5\sprSamples\sample\target가보면 war 파일 있음
4. 간단하게 sample.war 로 이름 변경을 해주고 C:\2021_5\tomcat9\apache-tomcat-9.0.46\webapps으로 그냥 옮겨줌
5. bin가서 startup.bat 실행해서 체크, 뭔가 부족하다!
6. 그냥 project 새로 만들기 new spring starter, 처음에 packaging을 War로 시작
7. 포트넘버 바꿔주고
8. localhost:8090/member 잘 호출 되는거 확인
9. 프로젝트 우클릭 Export, web에 WAR file 형태로 추출(maven build랑 다른 방법임) 
10. Export source files 체크 Overwrite exisiting file 체크 하고 바탕화면으로 경로설정
11. 바탕화면에 War파일이 생겼음
12. 이 파일을  C:\2021_5\tomcat9\apache-tomcat-9.0.46\webapps 으로 옮겨주고 bin가서 startup 해줌
13. 접근을 할때는 localhost:8090/sample1/member 이런식으로

aws에서 깃허브 사용하지 않고 바로 sample1 올리려면?

ubuntu들어가서 ls 하면 sample1이 나오게

1. filezilla 다운로드
2. 깃허브를 통해서 파일을 올리는게 아니라 다이렉트로 올리는거, War파일을 먼저 만들어 놓고, 가상의 공간에 war파일을 던져주는것 (이게 훨씬편하긴함)
3. 편집 - 설정 - SFTP - 키파일 추가 pem키를 가져옴
4. 파일 - 사이트관리자 - 호스트에  퍼블릭 ipv4주소, 로그온유형 일반 사용자이름 ubuntu
5. 연결되면 콘솔에서 보였던 sample폴더가 보임
6. 전송하고 싶은 파일이 있으면 filezilla를 통해서 그냥 드래그로 옮기면 됨
7. PuTTY켜서 ls 쳐가면서 확인해보면서 할 수 있음
8. tomcat 사이트 들어가서 tomcat 9 tar.gz (링크복사)
9. 콘솔에서 명령어로 다운받기 (다른방법도있지만),<br>wget 링크주소복사 엔터누르면 다운받아짐
10. ls 찍어보면 .gz 받아져있음 / filezilla에서도 확인할수있음
11. ls -al 찍어보면 안보이는것도 다 보임 -rw-rw-r--이게뭘까? readwrite, 읽고쓰기 다 할수있음
12. tar -zvxf apache-tomcat-9.0.52.tar.gz 압축풀기 명령어
13. 압축을 풀면 apache-tomcat-9.0.52 받아져있음 마찬가지로 filezilla에서도 확인 가능

14. cd bin으로 들어가서 ./startup.sh ./이 실행한다는 명령어인듯
15. Tomcat started. 나옴 

16. netstat하고싶은데 안깔려있으니 sudo apt install net-tools 깔음
17. 다 깔리고 netstat -npl 하면 8005포트, 8080포트 보임
18. 이제 끄고싶으면? shutdown한거처럼 아니라 ./shutdown.sh 하면 됨
19. netstat -npl 다시 찍어보면 8005포트, 8080포트 껐으니까 없어짐
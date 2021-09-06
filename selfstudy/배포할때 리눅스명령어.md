naver cloud배포

aws배포

배포를 할 때는 *.jar, *.war 두가지 방법이있음

restful방법이 data를 던져주는것



restful

backend 

data



Frontend

Jquery -> react, vue



서버 - 데이터를 줄 수 있는 중간자 (DB도 서버)



1. 깃허브에서 가져오기

2. filezilla에서 가져오기

편집 - 설정 SFTP pem파일 가져오기



도스 윈도우 차이점 CLI환경(콘솔) GUI환경

멀티프로세싱 안됨. 프로그램 하나만 진행가능, GUI는 여러 프로그램 한꺼번에 가능

톰캣을 사용하려면 자바홈이 깔려있어야함



sudo apt-get update 기본적으로 업데이트 해주는게 좋음 

sudo apt install openjdk-8-jdk



ubuntu@ip-172-31-7-143:~/apache-tomcat-9.0.52/bin$ ./startup.sh
Using CATALINA_BASE:   /home/ubuntu/apache-tomcat-9.0.52
Using CATALINA_HOME:   /home/ubuntu/apache-tomcat-9.0.52
Using CATALINA_TMPDIR: /home/ubuntu/apache-tomcat-9.0.52/temp
Using JRE_HOME:        /usr
Using CLASSPATH:       /home/ubuntu/apache-tomcat-9.0.52/bin/bootstrap.jar:/home/ubuntu/apache-tomcat-9.0.52/bin/tomcat-juli.jar
Using CATALINA_OPTS:
Tomcat started.



대부분 서버는 콘솔로 되어있음(가벼워야해서)



sudo apt install net-tools

netstat -nlp



./shutdown.sh 로 꺼주고

꺼졌는지 확인하려면

netstat -nlp 다시해줘서 8080포트 있는지 확인(보면 꺼져있음)



포트변경해줄거임 server.xml

VI(visual editor) = 문서편집

에디터쓰는방법 = insert키 - esc로 insert나옴

:w = write

:w 파일명 = 다른이름으로 저장

:w! = 쓰기권한이 없어도 강제저장

:q 저장안하고 종료(vi나올때)

:wq 저장하고 종료

:q!



mysql 깔려있는지 확인

mysql -v

Command 'mysql' not found, but can be installed with:



sudo apt install mysql-server

mysql 접속할때

sudo mysql -u root -p치면<br>enter password: 

패스워드 안걸려있으니 그냥 엔터치면 됨



이클립스

alt+c
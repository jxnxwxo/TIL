스프링부트란?
안에 툴이 내장되어있어 설치할 필요가 없고, XML기반 설정이나 코드 없이 환경 설정 자동화 가능, 의존성 관리 쉽게 자동으로 가능

https://spring.io 에서 설치하고... workspace 지정

Spring Starter Project로 생성 -> myboot01

run as Spring Boot App으로 실행시킴

hello.html 만들고 hello.jsp 만듦

mybatis이용

application.properties에서

#server
server.port=****
server.session.timeout=360000

이런식으로 세팅을 해줘야 기존포트랑 달라서 돌아감.

스프링 부트 프로젝트는main() 메서드를 시작점으로 실행



컨트롤러 -> 서비스 -> DAO

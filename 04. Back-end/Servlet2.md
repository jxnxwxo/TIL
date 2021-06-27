서블릿은 자바의 일반적인 특징을 모두 가짐<br>하지만 독자적으로 실행되지 못하고 톰캣과 같은 JSP/Servlet컨테이너에서 실행됨.

서버에서 실행 - 웹브라우저에서 요청을 하면 해당기능 수행 - 웹브라우저에 결과 전송



- 요청이나 응답 관련된 API: javax.servlet.http

form태그 이용해서 서블릿에 요청
`<form>태그`
    name, method, action, encType

서블릿에서 클라이언트 요청 얻는 방법
getParameter(String name)

1. 클라이언트로부터 요청
2. DB연동과 같은 비즈니스 로직 처리
3. 처리된 결과를 클라이언트한테 돌려줌


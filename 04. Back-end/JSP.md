[toc]

# JSP

JSP는 WebContent 폴더 밑에 Servlet은 src 폴더 밑에<br>HelloServlet.java 잘라내서 Hello.jsp로<br>응답버퍼 안에 들어가는 내용이 단순한 html이나 텍스트면 그냥 밖으로 빼도됨<br>자바코드 한줄도없이 jsp를 만들수는있는데 좋은방법은 아님<br>Servlet별명에서 jsp이름으로

***JSP는 Servlet 이다***  is a 관계

```
public abstract class HttpServlet
extends GenericServlet
```

Provides an abstract class to be subclassed to create an HTTP servlet suitable for a Web site. A subclass of `HttpServlet` must override at least one method, usually one of these:

- `doGet`, if the servlet supports HTTP GET requests
- `doPost`, for HTTP POST requests
- `doPut`, for HTTP PUT requests
- `doDelete`, for HTTP DELETE requests
- `init` and `destroy`, to manage resources that are held for the life of the servlet
- `getServletInfo`, which the servlet uses to provide information about itself

https://docs.oracle.com/javaee/7/api/toc.htm

https://developer.mozilla.org/ko/docs/Web/HTTP/Methods

---

만들때 `init` `destroy` `service` 다 체크<br>
첫 저장에 생성자 호출, init 호출<br>새로고침 할 때마다 console창에 service 호출됨 계속나옴<br>수정하면 destroy 되고 service

그러면 `doget`, `dopost` 왜 호출 안됐나?<br>service 주석처리하고 브라우저에서<br>새로고침하면 service호출 메시지는 당연히 주석처리해서 안 나 오고 `doGet` 메시지만 호출됨

---

index.html 하나만들어서 body에 <form action = "hello" method="post"> <input submit> 만든다.<br>`method="post"`라고 명시해주면 `post방식`이고 아무것도 입력 안 한 default값은 `get방식`임<br>doPost 호출됨(새로고침하면 이전 방식 기억해서 `이전 양식 다시 제출 확인` 뜨면서)<br>주소창에다 엔터치면 doGet 으로 호출

---

form태그 안쪽에 있는 애들만 넘어감<br>url에 url?id=aaa&pw=bbb `쿼리스트링`<br>url?이름=값&이름=값& ...<br>패스워드는 마킹해야함 type="password"<br>그래도 bbb는 주소창에 그대로 나옴. 화면상으로만 마스킹 해서 안보임.<br>그거를 못보게하려면 메서드를 post로 바꾸면 url에 id, pw 안보임.

---

servlet.java 가서 doGet 부분에서

		String id = request.getParameter("id");
		String pw = request.getParameter("pw");
		System.out.println("doGet 호출됨 : "+id+":"+pw);

doPost에도 마찬가지로<br>그러면 브라우저에서 작동해보면 데이터를 받을 수 있다.<br>이처럼 get과 post의 코드가 중복될때 <br>myService(request, response)를 이용해서 한번에 해결할 수 있다.

---

jsp가 한번이라도 수행되면<br>C:\2021_5\workspace_5_17\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\work\Catalina\localhost\11_ServletLifecycle\org\apache\jsp<br>"JSP는 아는데 Servlet은 몰라요" 라는 말은 말이안되는말 이다. 메커니즘의 이해가 필요

---

OOME java에서 제일 무서운 오류<br>java 를 가지고 웹을 개발하는 개발자가 될거라면 메커니즘을 이해해야한다.<br>프로그램의 실패는 기능구현에 달려있는게 아니라, 서비스의 질(성능)을 말한다.

---

이클립스는 개발서버 / 운영서버는 따로있다.<br>운영서버에 올릴때는 프로젝트 전체를 올리는게 아니라<br>톰캣만 있으므로, 톰캣에서 알아듣는 구조만 올리면 되는데<br>

그 구조는 

- 웹 애플리케이션 이름
  - WEB-INF
    - classes
    - lib
    - web.xml

이런식이다.<br>오른쪽클릭 - Export - War File web application jar<br>webShop밑에 정적인 `jsp/html` `css ` `image` `js` `bin` `conf` `src`들 넣을 수 있다. 

C:\2021_5\tomcat9\apache-tomcat-9.0.46\webapps 넣어주면 webShop 어플리케이션 완성<br>C:\2021_5\tomcat9\apache-tomcat-9.0.46\bin startup.bat파일<br>크롬에서 localhost:8080 해서 확인. (연결이 안되면 충돌방지를 위해 서비스 Oracle 사용하고있는거 중지) 

`WEB-INF`에는 뭐가들어가고 `WebContent`에는 뭐가 `Resources` - `src`에는 뭐가들어가는지.<br>어떤게 자바규칙이고 썬규칙인지 알기.

---

$.get('url' , function ( ) { });<br>url 갔다와서 할 function

---

- get

$.get("demo_test.asp", function(data, status){
  alert("Data: " + data + "\nStatus: " + status);
 });
});

- post

$.post("demo_test_post.asp",
 {
  name: "Donald Duck",
  city: "Duckburg"
 },
 function(data, status){
  alert("Data: " + data + "\nStatus: " + status);
 });
});

---

VO 파일<br>

- 순서
  set get -> toString -> 생성자 all선택 -> 생성자 필수요소 선택 -> 생성자 슈퍼클래스<br>기본값 초기화 `null` 대신 `"한국"` , 나이는 1

---

DAO파일<br>

- public void `CRUD`Member() {

}

1. 드라이버 등록

2. connection 

3. Statement 생성 PreparedStatement st=con.prepareStatement

4. SQL 전송 ?,?,?,?,? 데이터를 채워야함 set string, set int 설정다하고 이제 넘겨줘야함(st.execute) excuteUpdate, excuteQuery, select는query 나머지는 executeUpdate 

5. 결과 얻기 syso

6. 종료 (자원을 거꾸로 st, con) (finally 블락에)

   Connection con = null;
   PreparedStatement st = null; 

try블락 밖에서 초기화 해줘야함. 그래야 finally에 쓸수있음.

try로 `st`,`con` close다시 감싸줌

---

VO는 전영역에서 씀 (Servlet, DAO, Service)

dao에 임포트 java 서블릿이 있거나<br>vo에 임포트 java sql 있으면 망

---


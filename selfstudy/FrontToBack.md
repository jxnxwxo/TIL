JSP(프론트)  에서 Controller(백엔드)로 데이터 전송

JSP에서 Controller로 데이터 전달

프론트에서 백엔드 영역으로 데이터가 이동하는 경우는 GET, POST방식이 있는데

이 방식을 Form-Action을 통해 구현하기도 하고, Ajax를 이용하거나 혹은 location href를 통해 바로 URL주소에 태워서 보내기도 함.



##### Form-Action

가장 기본적인 전달방식 form 태그를 이용,

JSP영역에서

```jsp
<form action="memberRegi.do" method="post">
	이름 : <input type="text" name="userName"><br>
	계정 : <input type="text" name="userId">
	<input type="submit" value="전송버튼">
</form>
```

보내고자 하는 데이터에 name 속성지정

action태그에서는 보내고자 하는 컨트롤러 url에 매핑

받아주는 controller에서는 파라미터로 받아주면 되는데 이때 받아주는 파라미터의 이름은 JSP파일에서 설정한 name과 동일하게 적어주면 자동으로 파라미터 변수에 들어옴.

파라미터에 객체(DTO)를 넣어줘도 자동으로 객체에 값이 들어온다.

```java
@RequestMapping(value = "memberRegi.do", method = RequestMethod.POST)
public void memberRegi(Locale locale, Model model, String userName, MemberDto dto) {
  System.out.println(userName);
  System.out.println(dto.getUserName());
  System.out.println(dto.getUserId());
}
```

이름은 userName이라는 이름으로 전송을 하고

계정은 userId라는 이름으로 컨트롤러에 전송

컨트롤러에서는 Spring userName이라는 String 타입의 변수와 MemberDto라는 객체로 데이터를 받고있음

당연히 dto에는 userName, userId라는 이름으로 변수가 선언되어 있을것

결과적으로 jsp에서 이름에 입력한 값은 String userName과 dto의 userName모두에게 들어오고, 계정란에 입력한 값은 dto의 userId를 통해 받을 수 있음.

dto에는 getter, setter함수 선언되있어야함.



GET방식으로도 전송이가능

JSP의 form태그에서 method="GET"으로 변경하고 컨트롤러에서 method를 RequestMethod.GET으로 바꾸면 됨

get방식으로 전송을 하면 당연히 url을 통해서 데이터가 전송됨 

**'http://localhost:8090/java/memberRegi.do?userName=33&userId=44'** 이런식으로

이걸 응용하면 form태그 없이 url주소만으로 데이터전송 시도 가능

```
<button onclick='location.href="memberRegi.do?userName=33&userId=44";'>url전송</button>
```



Ajax방식을 이용한 데이터 전송

Ajax는 j쿼리의 ajax를 이용해서 전송하는것

```js
<script>

var userName = "이순신";

function ajax(){

  $.ajax({
    url: "memberRegi.do",
    data: "userName=" + userName,
    type: "POST",
    success : function(data){
      alert("성공")
    },
    error : function(){
      alert("에러")		
    }
  });
}

</script>
```

```java
@ResponseBody
@RequestMapping(value = "memberRegi.do", method = RequestMethod.POST)
public void memberRegi(String userName, MemberDto dto, HttpServletRequest request) {
  System.out.println(request.getParameter("userName"));
  System.out.println(dto.getUserName());
  System.out.println(userName);
}
```

Controller에는 각각 String, dto, request 객체를 이용해서 데이터를 받고 있는데

ajax가 호출하는 컨트롤러에 @ResponseBody 꼭 써줘야함



- =는 대입, ==는비교, ===타입까지?
- {} 안에들어가는건 객체라서 .으로 값만 가져올수있음

- id찾기, pw찾기

- 화면 내 어떤 공간에 텍스트 표시해주고싶을때 <div>로 영역을 만들어주고 id부여한 뒤에 ajax에서 text 부여 해주기





0813 하고싶은것

a href 태그 걸어둔 로그인 누르면 -> 로그인 창으로 이동되고 -> 로그인하면 쿠키에 nickname이 저장해서

a 태그 걸어둔 로그인이 nickname님 환영합니다 나 적당한 문구로 바뀌고 -> 추가로 로그아웃버튼을 옆에 달아주고 -> 마이페이지에 회원정보수정 -> 회원탈퇴 기능을 넣고싶음



? - 버튼 하나에 이메일 중복, 인증번호 보내는거 둘다 할 수 있는지? 

? - 인증번호 보내는 속도가 느림(해결 불가능 10초내외 소요)

? - 그러면 인증번호 보내기 누르자마자 10초정도 소요됩니다. 알림뜨게 할수있는지?

? - 로그인 한 후에 다시 로그인 html에 접속했을 때 어떻게 처리하는지


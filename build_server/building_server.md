서버구축해보기 (기본)

1. starter project

![image-20210722224021077](building_server.assets/image-20210722224021077.png)

![image-20210722224038717](building_server.assets/image-20210722224038717.png)



2. app properties 에서 server port설정(세션값은 기본 30분)

   server.port=8090

3. Controller 생성. @RestController, @PostMapping("method이름"), @ModelAttribute

![image-20210722230758947](building_server.assets/image-20210722230758947.png)

4. MemberVO 생성 

private String id, pw, name, msg;

set,get methods, toString

![image-20210722231227388](building_server.assets/image-20210722231227388.png)

5. Postman으로 한번 실행해본다.

![image-20210722231516308](building_server.assets/image-20210722231516308.png)

​	console창에는 MemberVO [id=i, pw=i, name=null, msg=null] 라고 출력됨.



6. Controller로 가서 @Autowired MemberService memberInsert;

![image-20210722232918363](building_server.assets/image-20210722232918363.png)

![image-20210722235853482](building_server.assets/image-20210722235853482.png)

MemberService에 이런 서비스 없으니 memberService.memberInsert 만들어달라.



7. MemberService에 memberInsert 만듦 @Service, @Autowired MemberDAO, memberDAO; 도 해준다.

![image-20210722233554298](building_server.assets/image-20210722233554298.png)

8. MemberDAO 생성

![image-20210722233257194](building_server.assets/image-20210722233257194.png)

9. MemberService에서는 memberDAO.memberInsert(vo);호출

![image-20210722233609034](building_server.assets/image-20210722233609034.png)

10. DAO에 memberInsert만들어줌

![image-20210722233645883](building_server.assets/image-20210722233645883.png)

11. DB연동해야함

@Autowired SqlSession sqlSession;

![image-20210722233756374](building_server.assets/image-20210722233756374.png)

![image-20210722233820874](building_server.assets/image-20210722233820874.png)

12. DB설정 application properties

![image-20210722234124466](building_server.assets/image-20210722234124466.png)

13. resources밑에 mybatis.config.xml 생성

![image-20210722235114467](building_server.assets/image-20210722235114467.png)

14. mybatis/mappers/member.xml 생성

![image-20210722235302685](building_server.assets/image-20210722235302685.png)

15. DAO에서 sqlSession에

![image-20210722235404042](building_server.assets/image-20210722235404042.png)

16. application properties가서 mybatis type aliases 해줘야함

![image-20210722235438746](building_server.assets/image-20210722235438746.png)

17. postman 으로 확인

![image-20210723000018003](building_server.assets/image-20210723000018003.png)

console창에는 MemberVO [id=i2, pw=i2, name=i2, msg=null] 라고 나온다.
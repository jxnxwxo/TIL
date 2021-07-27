회원테이블 : 회원일련번호, 이름, 나이, 생년월일, 핸드폰번호, 이메일
음식점테이블 : 음식점일련번호, 음식점이름, 평점, 정보
댓글테이블 : 댓글일련번호, 그룹순서, 그룹번호, 음식점일련번호

https://okky.kr/article/663361

1. date를 2021-07-27 00:00:00 이런식으로할지, 2021/07/27로할지
2. PK값 default처리, null처리
3. 관계표시
4. 유저 코드 이런건 오토 인크리먼트 같이 자동으로 올라가게 할수있는지



- 회원테이블(customerNum, id, pw, nickname, age, email, favRestaurants, grade)
- 식당테이블(restaurantNum, restaurantName, restaurantInfo, stars, category, location, openingHours, address)
- 게시판테이블(boardNum, title, content, nickname, imgfile, hit, del)
- 댓글테이블(commentNum, nickname, content, del, div)


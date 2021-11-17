# Python Web Crawling

<hr>

### Selenium vs Requests

> 출처: https://m.blog.naver.com/popqser2/221430894929

- 웹 크롤링 - Selenium + Beautiful Soup 4

셀레니움은 실제 브라우저가 동작하는 것처럼 (매크로, 로그인부터 검색, 페이지이동 등등)

팝업창이 떠도 처리할 수 있음(Requests는 이런 복잡한 동작 구현 불가능)

이러한 강점이 있지만 속도가 느리다는 단점이 있음 실제 브라우저가 작동하는 것처럼 일하기 때문에.



셀레니움의 장점

1. JS / CSS, DOM형식에 구애받지 않고 크롤링이 가능(최대 강점)
2. 편리하게 구현 가능
3. 로그인 쉽게 구현 가능(XPATH값만 알면 ID/PW/ENTER)

셀레니움의 단점

1. 정신없다.(실제 웹페이지가 켜져서)
2. 느리다.



처음에 Requests로 크롤링을 시작하다가 보통 JS나 로그인 처리부분에서 막혀서 셀레니움을 하게 된다.

하지만 간단한 크롤러를 만들 때는 정신없고, 느리기 때문에 별로다.

1. driver에 웹 드라이버(크롬) 을 넣어주고
2. 페이지를 열고, 로그인/비밀번호 값 전달하고 로그인하고



<hr>

### 파이썬 엑셀(Openpyxl, Pandas) 

> 출처: https://abooda.tistory.com/ 

- Openpyxl: 기본적인 엑셀기능, 개별적인 자료처리 가능
- Pandas: 대량의 자료 일괄처리
- Xlwings: 파이썬으로 나만의 함수 만들기(엑셀 매크로)

##### 간단하게 만들고 저장하기

```python
import openpyxl #1

wb = openpyxl.Workbook() #2
new_filename = 'c:/경로/excel.xlsx' #3
wb.save(new_filename) #4
```

> #1 Openpyxl 라이브러리 불러오기 #2 Workbook 만들기
>
> #3 파일 위치 및 이름 정하기
> #4파일 저장하기

##### 각각 시트에 이름넣기

```python
import openpyxl #1

wb = openpyxl.Workbook() #2
wb.active.title = "1st_sheet" #3

wb.create_sheet("2nd_sheet") #4
wb.create_sheet("3rd_sheet") #4

new_filename = 'c:/경로/excel.xlsx' #5
wb.save(new_filename) #6
```

> #1 라이브러리 불러오기 #2 Workbook 만들기 #3 자동적으로 만들어지는 첫번째 Sheet 이름 정하기
>
> #4 새롭게 만들고싶은 Sheet 이름 정하기
> #5 파일 위치 및 이름 정하기
> #6 파일 저장하기

##### 파일이름에 오늘 날짜 넣기

```python
import openpyxl #1
from datetime import date #2
wb = openpyxl.Workbook() #3

today = date.today() #4
tday_s = tday.strftime('%b-%d') #4
```

> #1 Openpyxl 라이브러리 불러오기 #2 date 라이브러리 불러오기 #3 Workbook 만들기
>
> #4 오늘 날짜를 불러오는 함수 (default: YYYY-MM-DD): tday = date.today();

##### Sheet 이름 및 위치 바꾸기

```python
wb = openpyxl.Workbook()
wb.active.title = "abc"
w1. = wb["original"]
w2 = wb.create_sheet("good")
w3 = wb.create_sheet("better")
w4 = wb.create_sheet("best")

sheet_list = wb.get_sheet_names()
print(sheet_list)

w4.title = "worst" #변경

wb.move_sheet(w4, -3) #시트위치 이동
```

##### 각각의 Sheet에 입력하기

```python
w4.cell(3,1).value = "abc"
w4.cell(row=4, column=2).value = "def"
```

> 엑셀시트 위치.셀위치 = 값
> 엑셀시트 위치 = w1
> 셀위치 = (row, column)

##### 엑셀 스타일

> 폰트, 정렬, 경계, 테두리, 색채우기, 색상 등

```python
from openpyxl.styles import Font, Alignment, Border, Side, PatternFill, Color
```

```python
Font(name='Calibri', bold=True, color='000000', size=13)
# 폰트, 굵기(true, false), 색상(hex), 크기순
# rgb to hex 구글

Alignment(vertical='center', horizontal='center', wrap_text=true)
# vertical = top, center, bottom
# horizontal = left, center, right
# wrap_text = 띄어쓰기 기준으로 줄 변경

Border(
	left=Side(style="thin", color='000000'),
    right=Side(),
	top=Side(),
	bottom=Side(),
    )
# thin or thick
```

##### 엑셀에서 값 불러오기

```python
import openpyxl
import pandas as pd
import numpy as np
import os

filename = 'C:/경로/excel.xlsx'
```

https://abooda.tistory.com/32?category=969086

https://abooda.tistory.com/34?category=969086

##### 0. 설치

```python
pip install openyxl
```

##### 1. 엑셀에 데이터 그리기

```python
		# 엑셀파일 쓰기
        write_wb = Workbook()

        # 이름이 있는 시트를 생성
        write_ws = write_wb.create_sheet('생성시트')

        # Sheet1에다 입력
        write_ws = write_wb.active
        write_ws['A1'] = '숫자'

        #행 단위로 추가
        write_ws.append([1,2,3])

        #셀 단위로 추가
        write_ws.cell(5, 5, '5행5열')
        write_wb.save("저장장소")
```

##### 2. 엑셀에 데이터 읽기

```python
 		 from openpyxl import load_workbook


        # data_only=True로 해줘야 수식이 아닌 값으로 받아온다. 
        load_wb = load_workbook("저장장소", data_only=True)
        # 시트 이름으로 불러오기 
        load_ws = load_wb['Sheet1']

        # 셀 주소로 값 출력
        print(load_ws['B2'].value)

        # 셀 좌표로 값 출력
        print(load_ws.cell(3, 2).value)

        # 지정한 셀의 값 출력
        get_cells = load_ws['B3' : 'B6']
        for row in get_cells:
            for cell in row:
                print(cell.value)

        # 모든 행 단위로 출력
        for row in load_ws.rows:
            print(row)

        # 모든 열 단위로 출력
        for column in load_ws.columns:
            print(column)

        # 모든 행과 열 출력
        all_values = []
        for row in load_ws.rows:
            row_value = []
            for cell in row:
                row_value.append(cell.value)
            all_values.append(row_value)
        print(all_values)

        load_ws.cell(3, 3, 51470)
        load_ws.cell(4, 3, 21470)
        load_ws.cell(5, 3, 1470)
        load_ws.cell(6, 3, 6470)
        load_wb.save("C:/Users/Administrator/Desktop/기준/프로그래밍/과제대행/주식데이터크롤			링/output.xlsx")
```


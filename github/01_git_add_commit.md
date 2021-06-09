[toc]

## Git 초기 설정

커밋 작성자(author) 설정

처음에만하고, 나중에는 할 필요 없음

```bash
$ git config --global user.email "메일주소"
$ git config --global user.name "유저네임"
```

- 커밋을 작성하는 사람이 누구인지 알아야 하기 때문

<br>

지정된 설정 확인

```bash
$ git config --global -l
# $ git config --global --list
```

<br>

커밋 편집기 변경

```bash
$ git config --global core.editor "code --wait"
```

- 해당 명령어는 반드시 vscode가 설치되어 있어야 함

> 기본 텍스트 편집기 vim을 vscode로 대체하는 것

<br>

---

## Git Basic

##### 로컬 저장소 설정 (한번만 하는 것)

```bash
$ git init

Initialized empty Git repository in C:/Users/Choiw/Desktop/git_class

choiw@DESKTOP-1OCVVS1 MINGW64 ~/Desktop/git_class (master)

```

- 폴더에 git 저장소를 초기화 하면,
  - .git 숨김 폴더가 생기고
  - bash에는 (master)라고 표기된다.

> 주의사항
>
> - git 저장소 내에 또다른 git 저장소를 만들면 안됨!
> - git init  명령어를 입력할 때, `(master)`가 있으면 절대! 입력하지 말 것!

<br>

##### add

>staging area / INDEX
>
>```bash
>$ git add 파일명
>$ git add . # 현재 디렉토리(하위 디렉토리 모두포함해서 선택)
>$ git add a.txt # 특정 파일
>$ git add my_folder/ # 특정 폴더
>```

- working directory 상태의 파일을 staging area 상태로 변경
- 커밋을 위한 파일 및 폴더들을 추가하는 명령어

```bash
$ touch a.txt b.txt

$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        a.txt
        b.txt

nothing added to commit but untracked files present (use "git add" to track)

```

```bash
$ git add a.txt
```

```bash
$ git status
On branch master

No commits yet

Changes to be committed: # 커밋 예정인 변경사항 (staging area로 왔음)
  (use "git rm --cached <file>..." to unstage)
        new file:   a.txt

Untracked files: # 트래킹 되고 있지 않은 파일
  (use "git add <file>..." to include in what will be committed)
        b.txt
```

>모든 정보는 `git status`에 있다. 
>
>GUI(눈으로 볼수있는 환경)이 아니기 때문에 `git status`로 상태를 수시로 확인

<br>

##### commit

```bash
$ git commit -m "first commit"
[master (root-commit) f9eb32a] first commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 a.txt
```

```bash
$ git log
commit f9eb32af57361e1a00c411cea0d346a6c7176b47 (HEAD -> master)
Author: jxnxwxo <jxnxwxo@gmail.com>
Date:   Mon Jun 7 14:41:39 2021 +0900

    first commit
```

```bash
$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        b.txt

nothing added to commit but untracked files present (use "git add" to track)
```

- 커밋을 통해 하나의 버전으로 기록됨
- 커밋 메세지는 현재 변경사항들을 잘 나타낼 수 있도록 작성하는 것을 권장
- 커밋은 고유한 아이디인 해시 값을 가짐
  - SHA-1 알고리즘에 의해 생성
- 커밋 목록은 `git log`를 통해서 확인 할 수 있음

```bash
$ git log --online # 커밋 목록을 한줄로 보기
```

---

##### Status

- working directory, staging area 공간의 파일 상태를 확인할 수 있다.

```bash
$ git status
```

<br>

---

##### 추가 커밋 쌓기

- a.txt 내용 수정

```bash
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   a.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        b.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

```bash
$ git add a.txt

$ git status
```

```bash
$ git commit -m "second commit"
```

```bash
$ git log --oneline
```

- b.txt 커밋 만들기

```bash
$ git add b.txt

$ git status

$ git commit -m "add b.txt"
```

```bash
$ git log --oneline
```


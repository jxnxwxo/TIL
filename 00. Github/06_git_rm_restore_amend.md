[toc]

# Undoing

> 원상태로 되돌리기

<br>

---

## 1. 파일 상태를 Unstage로 변경하기

> Staging Area와 Working Directory 사이를 넘나드는 방법

<br>

### 첫번째(처음으로 add한 후 unstaging)

> ```bash
> $ git rm --cached <file>
> ```
>
> 따로 따로 커밋하려고 했지만, 실수로 `git add .`이라고 실행해 버린 상황
> 처음으로 add 된 상황

```bash
# a.txt를 unstage

$ git rm --cached a.txt
```

<br>

### 두번째(commit 후 -> 수정한 파일을 add후 unstaging)

> ```bash
> $ git restore --staged <file>
> ```
>
> 두 개의 파일을 모두 수정하고서 따로따로 커밋하려고 했지만,
> 실수로 `git add .`라고 실행해 버린 상황

```bash
# 파일을 수정하고
$ git add .
$ git status

On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   a.txt
```

```bash
# a.txt를 unstage

$ git restore --staged a.txt
```

<br>

### 첫번째와 두번째 상황에서 명령어가 다른 이유

> 1. git rm --cached <file>
>    - 기존에 커밋이 없는 경우
>    - to unstatge and remove paths only from the staging area
> 2. git restore --staged <file>
>    - 기존에 커밋이 존재하는 경우
>    - the contents are restored from `HEAD`

<br>

---

<br>

## 2. Modified 파일 되돌리기(수정한내역을 바꿔줌, 타임머신느낌)

> ```bash
> $ git restore <file>
> ```
>
> (add가 되어있지 않은, working directory에 있는)
> 수정된 a.txt를 다시 되돌리기
>
> [주의사항]
>
> - 원래 파일로 덮어썼기 때문에 수정한 내용은 전부 사라짐
> - 수정한 내용이 진짜 마음에 들지 않을 때만 사용
> - 즉, 해당 명령어를 실행한 이후 절대로 다시 돌아가기가 불가능

<br>

---

<br>

## 3. 완료한 커밋 수정

> 1. 커밋 메시지를 잘못 적었을 때
> 2. 너무 일찍 커밋했거나 (어떤 파일을 빼먹었을 때)
>
> [주의 사항]
>
> - 공개된 저장소에 push된 커밋 메시지는 절대 수정하지 말기
> - 커밋 해시값이 변경되기 때문

<br>

### 3-1 커밋 메시지 수정 ( --amend: commit 안 쌓이고, 커밋이름만바뀜)

> 마지막으로 커밋하고 나서 수정한 것이 없다면
> (커밋하자마자 바로 이 명령을 실행하는 경우)
>
> 이 때는 커밋 메시지만 수정함

```bash
$ git commit --amend
```

- 설정에 따라 visual studio code나 vim등 커밋 메시지 작성 화면이 나옴
- 여기에서 커밋 메시지를 수정하고 저장하면 반영 됨

<br>

### 3-2 어떤 파일을 빼먹었을 때(그냥 못올린거 올리고 amend)

> 다시 커밋하고 싶으면 파일 수정 작업을 하고 Staging Area에 추가한 다음
> `--amend`옵션을 사용하여 커밋을 재작성

```bash
$ touch foo.txt bar.txt

$ git add foo.txt
```

```bash
# 실수로 bar.txt를 빼고 커밋 함

$ git commit -m "foo & bar"
```

<br>

해결하기

```bash
$ git add bar.txt
```

```bash
$ git status
On branch master
nothing to commit, working tree clean
```

```bash
# 커밋 편집기 활성화 됨
$ git commit -- amend
```

> `create mode bar.txt` 가 추가된 것을 확인
> commit은 새로 추가되지 않았음
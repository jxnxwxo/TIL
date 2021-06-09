[toc]

# Branch Scenario

## branch 사용법

실습준비

```bash
$ mkdir git_branch
$ cd git_branch

$ git init
$ touch a.txt

# a.txt에 text 1 입력 후 저장

$ git status
$ git add .

$ git commit -m "text 1"
$ git log

# 위와 같은 흐름으로 2번 더 반복, 3번째 commit "text 3"까지 작성

$ git log --oneline
```

<br>

---

- 다른 브랜치에서 로그인 기능을 만든다고 생각해보자.

```bash
(master) $ git branch login
```

```bash
(master) $ git branch
  login
* master
```

```bash
(master) $ git log --oneline
83d2600 (HEAD -> master, login) text 3
c1103e7 text 2
b125546 text 1
```

> `HEAD`: 현재 우리가 속해있는 위치
>
> login 브랜치는 현재 마스터가 머물고 있는 text 3 라는 커밋의 위치에서 만들었기 때문

- a.txt 에 다음과 같이 문장을 추가하고 버전을 만들어보자.

```bash
# a.txt

text 1
text 2
text 3
master text 4
```

```bash
(master) $ git add .
(master) $ git commit -m "master text 4"
```

```bash
(master) $ git log --oneline

c7e0a14 (HEAD -> master) master text 4
83d2600 (login) text 3
c1103e7 text 2
b125546 text 1
```

> 우리는 master text 4 라는 버전으로 이동했고 login 브랜치는 여전히 text 3에 남겨진 상태
>
> 이 상태에서 a.txt를 vscode로 한쪽 화면에 띄운 뒤 어떻게 변화하는지 확인해보자

```bash
(master) $ git checkout login
```

> master text 4문장이 사라진다

```bash
(login) $ git log --all --oneline

c7e0a14 (master) master text 4
83d2600 (HEAD -> login) text 3
c1103e7 text 2
b125546 text 1
```

- login 브랜치에서 a.txt 에 다음과 같이 작업하고 login.txt파일도 만들어서 다음과 같이 입력해보자.

```bash
# a.txt

text 1
text 2
text 3
login text 4
```

```bash
(login) $ touch login.txt
```

```bash
# login.txt

login text 4
```

- 버전을 생성한 후 log 를 확인해보자

```bash
(login) $ git status
On branch login
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   a.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        login.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

```bash
(login) $ git add .
(login) $ git commit -m "login text 4"
```

```bash
(login) $ git log --all --graph --oneline
* 5470ab1 (HEAD -> login) login text 4
| * c7e0a14 (master) master text 4
|/
* 83d2600 text 3
* c1103e7 text 2
* b125546 text 1
```

> 이제야 그래프 처럼 보인다. 우리의 현재 상태는 login 브랜치에 있다.
>
> `login text 4`와 `master text 4`의 부모 커밋은 `text 3` 이다.

<br>

---

<br>

## branch 병합

실습준비

```bash
$ mkdir git_merge
$ cd git_merge

$ git init
$ touch test.txt

# test.txt 에 master test 1을 입력 후 저장

$ git status
$ git add .
$ git commit -m "master test 1"
$ git log
```

<br>

## 3가지 병합 상황

#### 1. fast-forward

> "다른 브랜치가 생성된 이후, master 브랜치에 변경 사항이 없는 상황"
>
> 즉, master 브랜치에서 login 브랜치를 merge 할 때
> login 브랜치가 master 브랜치 이후의 커밋을 가리키고 있으면
> 그저 master 브랜치가 login 브랜치와 동일한 커밋을 가리키도록 이동시킬 뿐

1. login branch 생성 및 이동

```bash
$ git checkout -b login
```

2. 특정 작업 완료 후 commit

```bash
$ touch login.txt
$ git add .
$ git commit -m "login test 1"
```

3. master 브랜치로 이동

```bash
$ git checkout master

$ git log --all --oneline
35425ed (login) login test 1
ad08e55 (HEAD -> master) master test 1
```

4. master에 병합

```bash
$ git merge login

Updating ad08e55..35425ed
Fast-forward
 login.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 login.txt
```

5. 결과 확인 (fast-forward, 단순히 HEAD를 이동)

```bash
$ git log --oneline

35425ed (HEAD -> master, login) login test 1
ad08e55 master test 1
```

6. branch 삭제

```bash
$ git branch -d login

$ git log --oneline

35425ed (HEAD -> master) login test 1
ad08e55 master test 1
```

<br>

---

#### 2. 3-way Merge (Merge commit)

> 현재 브랜치(master)가 가리키는 커밋이 Merge할 브랜치의 조상이 아니면,
> git은 각 브랜치가 가리키는 커밋 2개와 공통조상 하나를 사용하며 3-Way Merge 한다.
>
> 단순히 브랜치 포인터를 최신 커밋으로 옮기는게 아니라 3-way Merge의 결과를
> 별도의 커밋으로 만들고 나서 해당 브랜치가 그 커밋을 가리키도록 이동시킨다.
> 그래서 이런 커밋은 부모가 여러개고 Merge commit 이라고 부른다.

1. signout 브랜치 생성 및 이동

```bash
$ git checkout -b signout
```

2. 특정 작업 완료 후 commit

```bash
$ touch signout.txt

$ git add .
$ git commit -m "signout test 1"

$ git log --oneline
69ef212 (HEAD -> signout) signout test 1
35425ed (master) login test 1
ad08e55 master test 1
```

3. master 브랜치로 이동

```bash
$ git checkout master
```

4. master에 추가작업 후 commit (단 signout 브랜치와 다른 파일을 생성 혹은 수정)

```bash
$ touch master.txt

$ git add .
$ git commit -m "master test 2"

$ git log --all --oneline
7fbcf5c (HEAD -> master) master test 2
69ef212 (signout) signout test 1
35425ed login test 1
ad08e55 master test 1
```

5. master에 병합

```bash
$ git merge signout
```

6. 자동 merge commit 발생

   - 커밋 편집기 화면 등장
   - 자동으로 작성된 커밋 메시지를 확인하고 저장 및 종료

   ```bash
   $ git merge signout
   Merge made by the 'recursive' strategy.
    signout.txt | 1 +
    1 file changed, 1 insertion(+)
    create mode 100644 signout.txt
   ```

7. log 확인

```bash
$ git log --all --graph --oneline
*   5b61ea5 (HEAD -> master) Merge branch 'signout'
|\
| * 69ef212 (signout) signout test 1
* | 7fbcf5c master test 2
|/
* 35425ed login test 1
* ad08e55 master test 1
```

8. branch 삭제

```bash
$ git branch -d signout
```

<br>

---

#### 3. Merge Conflict

> Merge하는 두 브랜치에서 같은 파일의 한 부분을 동시에 수정하고 Merge 하면
>  Git은 해당 부분을 자동으로 Merge하지 못한다
> (반면 동일 파일이더라도 서로 다른 부분을 수정했다면, Conflict 없이 자동으로 Merge commit 된다.)



1. hotfix 브랜치 생성 및 이동

```bash
$ git checkout -b hotfix
```

2. 특정 작업 완료 후 commit

```bash
# test.txt 수정

master test 1
이건 hotfix 에서 작성한 문장이에요!!
```

```bash
$ git add .
$ git commit -m "hotfix test 1"

$ git log --graph --oneline
* 8b41083 (HEAD -> hotfix) hotfix test 1
*   5b61ea5 (master) Merge branch 'signout'
|\
| * 69ef212 signout test 1
* | 7fbcf5c master test 2
|/
* 35425ed login test 1
* ad08e55 master test 1
```

3. master 브랜치로 이동

```bash
$ git checkout master
```

4. 특정 작업(hotfix와 동일 파일의 동일 부분 수정) 완료 후 commit

```bash
# test.txt 수정

master test 1
이건 master 에서 작성한 코드에요!!
```

```bash
$ git add .
$ git commit -m "master test 3"

$ git log --graph --oneline --all
* 1dba295 (HEAD -> master) master test 3
| * 8b41083 (hotfix) hotfix test 1
|/
*   5b61ea5 Merge branch 'signout'
|\
| * 69ef212 signout test 1
* | 7fbcf5c master test 2
|/
* 35425ed login test 1
* ad08e55 master test 1
```

5. master에 병합

```bash
$ git merge hotfix
```

6. 결과 → `merge conflict`발생

7. 충돌 확인 및 해결

   	-	Merge 충돌이 일어났을 때 Git이 어떤 파일을 Merge 할 수 없었는지 살펴보려면 git status 명령을 이용한다.

   ```bash
   $ git status
   
   Auto-merging test.txt
   CONFLICT (content): Merge conflict in test.txt
   Automatic merge failed; fix conflicts and then commit the result.
   
   master test 1
   <<<<<<< HEAD
   이건 master에서 작성한 코드
   =======
   이건 hotfix에서 작성한 코드
   >>>>>>> hotfix
   ```

```bush
# test.txt 최종

master test 1
충돌해결
```

8. Merge commit 진행

```bash
$ git add .
$ git commit
```

- 이전에 진행했던 커밋 편집기 재등장

  ```bash
  Merge branch 'hotfix'
  ```

  - 자동으로 작성된 커밋 메시지를 확인하고 저장 및 종료

  ```bash
  $ git commit
  [master 1d225ee] Merge branch 'hotfix'
  ```

9. log 확인

   ```bash
   $ git log --all --graph --oneline
   *   1d225ee (HEAD -> master) Merge branch 'hotfix'
   |\
   | * 8b41083 (hotfix) hotfix test 1
   * | 1dba295 master test 3
   |/
   *   5b61ea5 Merge branch 'signout'
   |\
   | * 69ef212 signout test 1
   * | 7fbcf5c master test 2
   |/
   * 35425ed login test 1
   * ad08e55 master test 1
   ```

10. 브랜치 삭제

    ```bash
    $ git branch -d hotfix
    ```

    


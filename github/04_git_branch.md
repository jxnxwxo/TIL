## Branch Command

- 브랜치 생성

```bash
$ git branch #branchname
```

<br>

- 브랜치 목록

```bash
$ git branch
```

<br>

- 브랜치 이동

```bash
$ git checkout #branchname
#branchname $
```

<br>

- 브랜치 생성 + 이동 한번에

```bash
$ git checkout -b #branchname
```

<br>

- 브랜치 병합
  - master로 해야함

```bash
(master) $ git merge #branchname
```

<br>

- 브랜치 삭제(master) - 일반, 강제

```bash
$ git branch -d #branchname

$ git branch -D #branchname
```

> merge가 되지 않은 브랜치는 강제로 삭제해야함
>
> ```bash
> error: The branch 'hotfix' is not fully merged.
> If you are sure you want to delete it, run 'git branch -D hotfix'.
> ```


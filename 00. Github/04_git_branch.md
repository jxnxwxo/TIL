## Branch Command

- 브랜치 생성

```bash
$ git branch #branchname
```

- 브랜치 목록

```bash
$ git branch
```

- 브랜치 이동

```bash
$ git checkout #branchname
#branchname $
```

- 브랜치 생성 + 이동

```bash
$ git checkout -b #branchname
```

- 브랜치 병합(master)

```bash
(master) $ git merge #branchname
```

- 브랜치 삭제(master) - 일반, 강제

```bash
$ git branch -d #branchname

$ git branch -D #branchname
```

> merge가 되지 않은 브랜치는 강제로 삭제해야함

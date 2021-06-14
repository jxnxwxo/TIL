[toc]

> `HEAD`: 현재 우리가 속해있는 위치



## 3가지 병합 상황

#### 1. fast-forward

> "다른 브랜치가 생성된 이후, master 브랜치에 변경 사항이 없는 상황"
>
> 즉, master 브랜치에서 login 브랜치를 merge 할 때
> login 브랜치가 master 브랜치 이후의 커밋을 가리키고 있으면
> 그저 master 브랜치가 login 브랜치와 동일한 커밋을 가리키도록 이동시킬 뿐

<br>

---

#### 2. 3-way Merge (Merge commit)

> 현재 브랜치(master)가 가리키는 커밋이 Merge할 브랜치의 조상이 아니면,
> git은 각 브랜치가 가리키는 커밋 2개와 공통조상 하나를 사용하며 3-Way Merge 한다.
>
> 단순히 브랜치 포인터를 최신 커밋으로 옮기는게 아니라 3-way Merge의 결과를
> 별도의 커밋으로 만들고 나서 해당 브랜치가 그 커밋을 가리키도록 이동시킨다.
> 그래서 이런 커밋은 부모가 여러개고 Merge commit 이라고 부른다.

<br>

---

#### 3. Merge Conflict

> Merge하는 두 브랜치에서 같은 파일의 한 부분을 동시에 수정하고 Merge 하면
>  Git은 해당 부분을 자동으로 Merge하지 못한다
> (반면 동일 파일이더라도 서로 다른 부분을 수정했다면, Conflict 없이 자동으로 Merge commit 된다.)

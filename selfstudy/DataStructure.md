# Array / Linked List

### Array

가장 기본적인 자료구조

논리적 저장 순서와 물리적 저장 순서가 일치 = index로 element에 접근 가능 = 즉 random access가 가능

삭제 또는 삽입의 과정에서 해당 원소에 접근하여 작업을 완료 한 뒤, 한 가지 작업을 추가적으로 해줘야 하기 때문에 시간이 더 걸림.

배열의 어느 원소를 삭제했다고 했을 때 연속적인 특징이 깨져 빈 공간이 생김

따라서 삭제한 원소보다 큰 인덱스를 갖는 원소들을 shift 해줘야 하는 비용이 발생

### Linked List

각각의 원소들은 자기 자신 다음에 어떤 원소인지만을 기억하고 있음





# Stack / Queue

### Stack

선형 자료구조의 일종 LIFO (Last In First Out)

나중에 들어간 원소가 먼저 나오는것이 Stack의 가장 큰 특징. 차곡차곡 쌓이는 구조

### Queue

선형 자료구조의 일종 FIFO (First In First Out)

Stack과 반대로 먼저 들어간 놈이 맨 앞에서 대기하고 있다가 먼저 나오게 됨.

<hr>

### Tree

트리는 stack 이나 queue 같은 선형구조가 아닌 비선형 자료구조

트리를 구성하고 있는 구성요소들 Node, Edge, Root Node, Terminal Node, Internal Node

### Binary Tree(이진트리)
#### 메소드 오버라이딩(method overriding)

오버라이딩(overriding)이란 상속 관계에 있는 부모 클래스에서 이미 정의된 메소드를 자식 클래스에서 같은 시그니쳐를 갖는 메소드로 다시 정의하는 것이라고 할 수 있습니다.

자바에서 자식 클래스는 부모 클래스의 private 멤버를 제외한 모든 메소드를 상속받습니다.

이렇게 상속받은 메소드는 그대로 사용해도 되고, 필요한 동작을 위해 재정의하여 사용할 수도 있습니다.

즉, 메소드 오버라이딩이란 상속받은 부모 클래스의 메소드를 재정의하여 사용하는 것을 의미합니다.

<hr>

#### 오버라이딩의 조건

자바에서 메소드를 오버라이딩하기 위한 조건은 다음과 같습니다.

 

1. 오버라이딩이란 메소드의 동작만을 재정의하는 것이므로, 메소드의 선언부는 기존 메소드와 완전히 같아야 합니다.

  하지만 메소드의 반환 타입은 부모 클래스의 반환 타입으로 타입 변환할 수 있는 타입이라면 변경할 수 있습니다.

2. 부모 클래스의 메소드보다 접근 제어자를 더 좁은 범위로 변경할 수 없습니다

3. 부모 클래스의 메소드보다 더 큰 범위의 예외를 선언할 수 없습니다.

<hr>

#### 오버로딩과 오버라이딩

오버로딩과 오버라이딩은 그 단어의 유사함으로 인해 혼동하기 쉽습니다.

하지만 그 개념은 확실히 다르며, 그 차이점을 아는 것이 중요합니다.

 

간단히 정의하면 오버로딩(overloading)은 새로운 메소드를 정의하는 것입니다.

하지만 오버라이딩(overriding)은 상속받은 기존의 메소드를 재정의하는 것입니다.
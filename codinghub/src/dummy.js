export const wikiPages = [
	{
		seq: "1",
		path: "/page1",
		title: "HTML",
		content: `하이퍼 텍스트 마크업 언어(영어: Hyper Text Markup Language, HTML, 문화어: 초본문표식달기언어, 하이퍼본문표식달기언어)는 웹 페이지 표시를 위해 개발된 지배적인 마크업 언어다. 또한, HTML은 제목, 단락, 목록 등과 같은 본문을 위한 구조적 의미를 나타내는 것뿐만 아니라 링크, 인용과 그 밖의 항목으로 구조적 문서를 만들 수 있는 방법을 제공한다. 그리고 이미지와 객체를 내장하여 대화형 양식을 생성하는 데 사용될 수 있다. HTML은 웹 페이지 콘텐츠 안의 꺾쇠 괄호에 둘러싸인 태그로 되어있는 HTML 요소 형태로 작성한다. HTML은 웹 브라우저와 같은 HTML 처리 장치의 행동에 영향을 주는 자바스크립트, 본문과 그 밖의 항목의 외관과 배치를 정의하는 CSS 같은 스크립트를 포함하거나 불러올 수 있다. HTML과 CSS 표준의 공동 책임자인 W3C는 명확하고 표상적인 마크업을 위하여 CSS의 사용을 권장한다.`,
	},
	{
		seq: "2",
		path: "/page2",
		title: "CSS",
		content: `HTML 등의 마크업 언어로 작성된 문서가 실제로 웹사이트에 표현되는 방법을 정해주는 스타일 시트 언어 CSS의 C가 Cascading[1]의 약자인데, 이는 상위 요소의 스타일 속성을 자손 요소들에게 상속시켜주는 모습이 DOM 트리구조에서 마치 폭포수처럼 내려가는 모습을 닮았기 때문이다. 다만 예외로 마진, 패딩, 보더 등의 박스모델 관련 속성은 상속되지 않는다. 물론 inherit 값을 줘서 강제로 상속시킬 순 있다.`,
	},
	{
		seq: "3",
		path: "/page3",
		title: "JavaScript",
		content: `Ecma International의 프로토타입 기반의 프로그래밍 언어로, 스크립트 언어에 해당된다. 특수한 목적이 아닌 이상 모든 웹 브라우저에 인터프리터가 내장되어 있다. 오늘날 HTML, CSS와 함께 웹을 구성하는 요소 중 하나다. HTML이 웹 페이지의 기본 구조를 담당하고, CSS가 디자인을 담당한다면 JavaScript는 클라이언트 단에서 웹 페이지가 동작하는 것을 담당한다.[1] 웹 페이지를 자동차에 비유하자면, HTML은 자동차의 뼈대, CSS는 자동차의 외관, JavaScript는 자동차의 동력원인 엔진이라고 볼 수 있다.
    썬 마이크로시스템즈(현재 오라클)에서 개발한 Java와는 별 관계가 없는 언어이다. 이름이 비슷하다고 같은 언어가 아니다. 사람들이 흔히 헷갈리는 부분 중 하나라 Java의 소유자인 오라클에서도 아니라고 강조한다.[2] 실질적인 구동 방식도 JavaVirtual Machine을 이용해서 돌리는 Java와, 브라우저 내에 스크립트 엔진(인터프리터)이 존재하는 JavaScript는 완전히 다르다.`,
	},
	{
		seq: "4",
		path: "/page4",
		title: "React",
		content: `메타에서 개발한 오픈 소스 자바스크립트 라이브러리.
    프론트엔드 개발자 사이에서 AngularJS, Vue.js와 더불어 많은 인기를 얻고 있다. GitHub Star 수와 npm 패키지 다운로드 수는 React가 가장 많다.
    SPA을 전제로 하고 있으며, Dirty checking과 Virtual DOM을 활용하여 업데이트 해야하는 DOM 요소를 찾아서 해당 부분만 업데이트하기 때문에, 리렌더링이 잦은 동적인 모던 웹에서 엄청나게 빠른 퍼포먼스를 내는게 가능하다. 기본적으로 모듈형 개발이기 때문에 생산성 또한 상당히 높은 라이브러리인지라 순식간에 대세로 떠올랐다. 거기에 기본적으로 프레임워크가 아니라 라이브러리인지라 다른 프레임워크에 간편하게 붙여서 사용하는 것도 가능하며, React Hooks라는 강력한 메소드들을 지원하면서 사실상 웹 프론트엔드 개발의 표준으로 자리잡았다. 이와 더불어 타입스크립트나 Sass 같은 언어도 지원한다. 또한 Next.js 등의 등장으로 인해 SSG, SSR등을 할 수 있게 되면서 사용 범위 또한 기하급수적으로 늘어났다.`,
	},
	{
		seq: "5",
		path: "/page5",
		title: "Node.js",
		content: `Node.js는 JavaScript 코드를 브라우저 밖에서 실행할 수 있게 해주는 런타임 환경이다.
    빈번한 I/O처리에 있어서의 우수한 성능[1], 서버 확장의 용이성, 무엇보다도 JavaScript라는 프론트엔드 필수 언어로 백엔드까지 작성할 수 있다는 엄청난 장점 때문에 출시 이후로 빠르게 점유율을 높여가고 있다.   
    2009년 5월 27일 처음 출시되었으며, 오픈 소스 JavaScript 엔진인 크롬 V8에 비동기 이벤트 처리 라이브러리인 libuv를 결합하여 구현되었다. Ryan Dahl이 처음 개발했으며,[2] 처음엔 리눅스와 macOS만 지원되었으나 2011년 7월에 Windows 버전도 발표되었다.
    2014년 12월 한때 Node.js의 포크인 io.js가 나타나면서 Node.js 0.12 버전, io.js 3.3 버전까지 서로 분열된 모습으로 이어지는 듯했지만, 2015년 9월에 Node.js 4.0 버전으로 병합되어 현재에 이르렀다.
    2023년 11월 5일 기준으로 최신 버전은 21.1.0, LTS 버전은 20.9.0이다. 최신 버전은 기능이 불안정하거나 일부 모듈[3](패키지)이 작동하지 않을 수 있으므로 안정성을 보장하고 싶으면 LTS 버전을 사용하는 게 좋다.`,
	},
	{
		seq: "6",
		path: "/page6",
		title: "Java",
		content: `썬 마이크로시스템즈에서 1995년에 개발한 객체 지향 프로그래밍 언어. 창시자는 제임스 고슬링이다. 2010년에 오라클이 썬 마이크로시스템즈를 인수하면서 Java의 저작권을 소유하였다. 현재는 OpenJDK는 GPL2이나 오라클이 배포하는 Oracle JDK는 상업라이선스로 2019년 1월부터 유료화정책을 강화하고 있다. Java EE는 이클립스 재단의 소유이다. Java 언어는 J2SE 1.4부터는 Java Community Process (JCP)에서 개발을 주도하고 있다.

    C#과 문법적 성향이 굉장히 비슷하며[2], 그에 비해 2019년 Q3에서 가장 많이 이용하는 언어로 뽑혔다. CSS`,
	},
];

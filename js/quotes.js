const quotes = [
    {
        quote: "훌륭한 코드는 훌륭한 문서보다 낫다.",
        author: "Steve McConnell, 개발자",
    },
    {
        quote: "코드의 90%는 개발 시간의 90%를 설명해준다. 나머지 10%는 그 시간에 일어났던 다른 일의 90%를 설명해준다.",
        author: "Tom Cargill, 벨연구소 개발자",
    },
    {
        quote: "컴퓨터랑 일하는 건 엄청 멋있다. 누구랑 싸우지도 않고, 모든 것을 대신 기억해주고, 내 맥주를 뺏어 마시지도 않는다.",
        author: "Paul Leary",
    },
    {
        quote: "프로그래머의 문제점은 일이 너무 늦어질 때까지, 뭘하고 있는지 절대 물어볼 수 없다는 점이다.",
        author: "Seymour Cray, 슈퍼컴퓨터 크레이를 만든 사람",
    },
    {
        quote: "붓과 색을 공부한다고 훌륭한 화가가 되지 않듯, 컴퓨터과학을 공부한다고 훌륭한 프로그래머가 되지는 않는다.",
        author: "Eric Raymond, 인류학자, 오픈소스 운동의 대표 서술가",
    },
    {
        quote: "올바로 작동하지 않는다고 걱정하지 마라. 모든 게 잘 되었다면, 내가 할 일이 없어진다.",
        author: "Mosher’s Law of Software Engineering",
    },
    {
        quote: "세상에는 딱 두 가지 프로그래밍 언어가 있다. 사람들이 욕하는 언어와 아무도 사용하지 않는 언어.",
        author: "Bjarne Stroustrup, C++의 창시자",
    },
    {
        quote: "실수는 사람의 것이다. 그러나 정말 일을 엉망으로 만들고 싶다면 컴퓨터가 필요하다.",
        author: "Paul Ehrlich",
    },
    {
        quote: "백문이 불여일타.",
        author: "Anonymous",
    },
    {
        quote: "컴퓨터가 이해할수 있는 코드는 어느 바보나 다 짤수 있다. 좋은 프로그래머는 사람이 이해할 수 있는 코드를 짠다.",
        author: "Martin Fowler",
    },
]

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
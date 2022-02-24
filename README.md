npx create-next-app --typescript  >> 제목에 괄호 들어가면 zsh missing end of string 에러

yarn add -D eslint prettier
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
yarn add -D eslint-config-airbnb
yarn add -D eslint-config-prettier eslint-plugin-prettier
yarn add -D eslint-plugin-react eslint-plugin-react-hooks
yarn add -D eslint-plugin-jsx-a11y eslint-plugin-import

yarn eslint --init

.eslintrc.js 파일작성, .prettierrc 파일작성 >> 항목별로 의미 찾아보기

yarn add -D @types/eslint-plugin-prettier 

yarn add styled-components
yarn add -D @types/styled-components
yarn add styled-normalize // 브라우저마다 다르게 보이는 css를 초기화 시키기 위해 다운

yarn add -D babel-plugin-styled-components // next 에서 styled-component 초기렌더부분 에러 해결위함
yarn add -D babel-plugin-module-resolver  // 간편하게 파일 import 하기 위해서 필요함

.babelrc //alias 등록, styled-component 연결 
tsconfig.json // alias 등록, rule 확인
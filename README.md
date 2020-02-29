# gatsby-learn
블로그를 구축하기 전, gatsby 사용법 배우기



## step by step

### 설치

package manager npm

### 실행

gatsby develop

### Hello world

- jsx 는 브라우저에서 인식 불가 -> gatsby 를 통해서 브라우저 인식가능 형태로 변환(html, css, js)
- Any React component defined in `src/pages/*.js` will automatically become a page.
- [x] hello page 생성 및 page1 에서 링크로 이동

- https://www.gatsbyjs.org/docs/seo/ -> search engine 관련 내용 

### Layout

- [x] navigation 추가

- 하나의 prop(siteTitle) 을 지정해 줄때,  

    ```
    const Header = ({ siteTitle }) => (
    ```

- graphQL api

    ```
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `)
    ```
    
    자체적으로 graphQL api 를 제공 - https://www.gatsbyjs.org/docs/graphql-api/
    
    http://localhost:8000/___graphql 에서 schema 확인 가능 

### markdown 

- [x] markdown 업로드 기능 추가

- markdown 업로드 기능 설명 - https://www.gatsbyjs.org/docs/adding-markdown-pages/

- markdown 을 추가하는 다섯가지 단계

    1. Read files into Gatsby from the filesystem
    2. Transform Markdown to HTML and [frontmatter](https://www.gatsbyjs.org/docs/adding-markdown-pages/#frontmatter-for-metadata-in-markdown-files) to data
    3. Add a Markdown file
    4. Create a page component for the Markdown files
    5. Create static pages using Gatsby’s Node.js `createPage` API
    
- frontmatter - 특정 페이지에 대한 정보

    ```
    ---
    path: "/blog/my-first-post"
    date: "2019-05-04"
    title: "My first blog post"
    ---
    ```
- [x] markdown list 추가

### navigation

- [ ] 네비게이션에 현재 작성된 마크다운 페이지의 이름이 리스트로 출력되도록 하기 
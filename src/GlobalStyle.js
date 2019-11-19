import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   overflow: scroll;
}

:root{
    background: mistyrose;
    text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

}
`

export default GlobalStyle

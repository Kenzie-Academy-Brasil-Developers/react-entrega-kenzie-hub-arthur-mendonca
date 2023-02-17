import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root{
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --color-white: #EFEFEF;
    --color-transparent: rgba(217, 217, 217, 0.36);
    --color-success: #3FE864;
    --color-warning: #FBEA85;
    --color-error: #E83F5B;
    --grey0: #0a0c0d;
    --grey1: #212529;
    --grey2: #495057;
    --grey3: #868e96;
    --grey4: #dee2e6;
    --grey5: #f8f9fa;
    --grey-opacity-1: rgba(33, 37, 41, 0.5);

    font-size: 62.5%;   
}


* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
    font-family: 'Inter', sans-serif;
    
  }
`;

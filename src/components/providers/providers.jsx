// ARQUIVO PARA CENTRALIZAR OS CONTEXTOS E AS
// TAGS DESTE ARQUIVO VÃO ENVOLVER O APP.JS

import UserProvider from "../../context/userContext/userContext";

function Providers({ children }) {
  return <UserProvider>{children}</UserProvider>;
}

export default Providers;

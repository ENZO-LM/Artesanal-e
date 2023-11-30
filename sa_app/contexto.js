import React, { createContext, useContext, useState } from 'react';
const MeuContexto = createContext();

export function MeuContextoProvider({ children }) {

  const [pedido, setPedidoAtual] = useState()
  return (
    <MeuContexto.Provider value={{ pedido, setPedidoAtual }}>
      {children}
    </MeuContexto.Provider>
  );
}

export function useMeuContexto() {
  return useContext(MeuContexto);
}

import { useState } from 'react'
import Servicos from './Servicos'
import Cards from './Cards'
import Botao from './Botao'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='principal'>

       <Servicos />

      <div className='conteudo'>
      <Cards nome='PLANO DE DESENVOLVIMENTO INSTITUCIONAL '/>
     <Cards nome='PESQUISA PÚBLIC PRECESSO IFTM'/>
     <Cards nome='LICITAÇÕES E CONTRATOS '/>
     <Cards nome='RECEITAS E DESPESAS '/>
     <Cards nome='DADOS ABERTOS '/>
     <Cards nome='TRANSPARENCIA E PRESTAÇÃO DE CONTAS '/>
     <Cards nome='SERVIDORES'/>
     <Cards nome='PESGUNTAS FREQUENTES'/>

     
      </div>

      <Botao botaoMaisInformacao='Mais Informações' />
     

    </div>


    </>
   
  )
}

export default App
import Item from './components/Item';
import Card from './Card';
import CardInfo from './CardInfo';


const App = () => {
  return (
    <>
      <h1> Minha primeira aplicação com React</h1>
      <ul>
        <Item>
          Item 1
        </Item>
        <Item>
          Item 2
        </Item>
        <Item>
          Item 3
        </Item>
      </ul>
      <Card/>
      <CardInfo  empresa="Invest Test" descricao="Mamet, consectetur, adipisci velit. Neque porro quisquam est qui dolorem ipsum quia dolor sit ..."/>
      <CardInfo empresa="Games Informatica" descricao="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."/>
    </>
  )
}

export default App;
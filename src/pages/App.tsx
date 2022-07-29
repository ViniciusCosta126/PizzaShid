import Header from "../MainComponents/Header";
import * as C from "./style";
import HeroImage from "../assets/HeroImage.png";
import Chesse from "../assets/cheese.png";
import Pepproni from "../assets/pepperoni.png";
import Margueritta from "../assets/marguerrita-card.png";

function App() {
  const trendingPizzas = [
    {
      name: "Cheese Lovers",
      description:
        "Combination of Alfredo sauce and two cheeses – Romano, and Parmesan.",
      value: 20.0,
      thumb: Chesse,
    },
    {
      name: "Pepperoni Pizza",
      description: "Pizza with homemade spicy beef sausage",
      value: 25.0,
      thumb: Pepproni ,
    },
    {
      name: "Margherita Pizza",
      description:
        "Made with San Marzano tomatoes, mozzarella cheese, and fresh basil.",
      value: 35.0,
      thumb: Margueritta ,
    },
  ];
  return (
    <C.Container>
      <Header />
      <C.HeroContainer>
        <img src={HeroImage} alt="" />
        <h1>
          We Have The <span>Best pizza!</span>
        </h1>
        <h3>Time to enjoy our delicious pizza.</h3>
        <C.HeroButton>Order Online</C.HeroButton>
      </C.HeroContainer>
      <C.ContainerTrending>
        <h2>Trending Recipes</h2>
        <C.ContainerTrendingPizzas>
          {trendingPizzas.map(pizza=>{
            return (
              <C.CardTrendingPizza>
                <img src={pizza.thumb} alt="" />
                <div>
                  <h3>{pizza.name}</h3>
                  <p className="description">{pizza.description}</p>
                  <p className="value">R${pizza.value.toFixed(2)}</p>
                  <C.CardTrendingButton>Add to cart</C.CardTrendingButton>
                </div>
              </C.CardTrendingPizza>
            )
          })}
        </C.ContainerTrendingPizzas>
      </C.ContainerTrending>
    </C.Container>
  );
}

export default App;

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeItem from "./components/HomeItem";

function App() {
  const item = {
    id: "002",
    image: "images/2.jpg",
    company: "CUKOO",
    item_name: "Women Padded Halter Neck Swimming Dress",
    original_price: 2599,
    current_price: 1507,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.3,
      count: 24,
    },
  };

  return (
    <>
      <Header></Header>
      <main>
        <div className="items-container">
          <HomeItem item={item}></HomeItem>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;

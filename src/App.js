import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Orders from "./componets/Orders";
import Prototypes from "./componets/Prototypes";
import AppStateProvider from "./providers/AppStateProvider";

function App() {
  return (
    <AppStateProvider>
      <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </AppStateProvider>
  );
}

export default App;

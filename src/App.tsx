import { MainLayout } from "./components/user/layout";
import LandingContiner from "./containers/landing-continer";

function App() {
  return (
    <div className="text-center ">
      <>
        <MainLayout>
          <LandingContiner />
        </MainLayout>
      </>
    </div>
  );
}

export default App;

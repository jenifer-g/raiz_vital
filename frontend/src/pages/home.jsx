import Hero from "../components/layout/Hero";
import SeccionCausas from "../components/common/SeccionCausas";
import Mision from "../components/common/Mision";

function home() {
  return (
    <div className="min-h-screen bg-arena">
      <Hero></Hero>
      <SeccionCausas></SeccionCausas>
      <Mision></Mision>
    </div>
  );
}
export default home;
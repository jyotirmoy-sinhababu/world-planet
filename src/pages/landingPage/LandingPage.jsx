import InputForm from '../../components/form/InputForm';
import HeroSection from '../../components/heroSection/HeroSection';
import Navbar from '../../components/nav/Navbar';
import PlantCnt from '../plantCnt/PlantCnt';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <InputForm />
      <PlantCnt />
    </div>
  );
};

export default LandingPage;

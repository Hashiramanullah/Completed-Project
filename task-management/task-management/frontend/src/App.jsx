import AboutSection from './components/About/AboutSection';
import ProgramsSection from './ProgramSection/ProgramSection';
import WhyChooseSection from './components/WhyChooseSection/WhyChooseSection';
import StudentSuccessCarousel from './components/Slider/Slider';
import TopBar from './components/TopBar/TopBar';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';

export default function App() {


  return (
    <div className="flex flex-col min-h-screen">
      {/* Topbar */}
      <TopBar/>
      {/* Navbar */}
      <Navbar/>
      {/* Banner section */}
       <Banner/>
      {/* about*/}
      <AboutSection/>
      {/* program */}
      <ProgramsSection/>
      {/* whyChoice */}
      <WhyChooseSection/>
      {/* student */}
      <StudentSuccessCarousel/>
    </div>
  );
}

import HeroGradiant from './Components/HeroSection/HeroGradiant';
import HeroMain from './Components/HeroSection/HeroMain';
import NavbarMain from './Components/Navbar/NavbarMain';
import SubHeroSection from './Components/HeroSection/subHeroSection';
import AboutMeMain from './Components/AboutMeSection/AboutMeMain';
import HelperSection from './Components/HelperSection';
import SkillsMain from './Components/SkillsSection/SkillsMain';
import SubSkill from './Components/SkillsSection/SubSkill';
import ExperienceMain from './Components/ExperienceSection/ExperienceMain';
import ProjectsMain from './Components/ProjectsSection/ProjectsMain';
import ContactMeMain from './Components/ContactMeSection/ContactMeMain';
import FooterMain from './Components/Footer/FooterMain';

function App() {


  return (<main className='font-body'>
    <NavbarMain/>
    <HeroMain/>
    <HeroGradiant/>
    <SubHeroSection/>
    <AboutMeMain/>
    <SkillsMain />
    <SubSkill/>
    <ExperienceMain/>
    <ProjectsMain/>
    <ContactMeMain/>
    <FooterMain/>
    {/* <HelperSection /> */}
  </main>

  )
}

export default App



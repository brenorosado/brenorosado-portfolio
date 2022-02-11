import ApresentationSection from '../src/components/ApresentationSection';
import ProjectsSection from '../src/components/ProjectsSection';
import { HomeMain } from '../src/styles/homepage';

const Home = () => {
  return (
    <HomeMain>
      <ApresentationSection />
      <ProjectsSection />
    </HomeMain>
  );
};

export default Home;
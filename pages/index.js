import ProjectsSection from '../src/components/ProjectsSection';
import { HomeMain } from '../src/styles/homepage';
import Head from 'next/head';
import CurriculumSection from '../src/components/CurriculumSection';
import StackSection from '../src/components/StackSection';
import ContactSection from '../src/components/ContactSection';

const Home = () => {
  return (
    <>
      <Head>
        <title>Breno Rosado</title>
        <meta name="Breno Rosado" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <HomeMain>
        <ProjectsSection />
        <StackSection />
        <CurriculumSection />
        <ContactSection />
      </HomeMain>
    </>
  );
};

export default Home;
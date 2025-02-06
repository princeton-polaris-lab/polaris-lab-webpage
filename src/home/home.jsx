import "./home.css"
import HomeCarousel from './carousel';
import PapersCarousel from './papers_carousel';

const logo_filepath = "./logos/"

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <PapersCarousel />
    </>
  );
}

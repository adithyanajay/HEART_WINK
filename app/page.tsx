import Features from "./_components/Features";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";


export default function Home() {
  return (
    <div className="main bg-red_main ">
      <div className="content  max-w-6xl  m-auto bg-red_main">
         <Hero /> 
          <Features />
      </div>

      <Footer />
     
      
    </div>
  );
}

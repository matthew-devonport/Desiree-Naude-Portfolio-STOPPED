import React from 'react'


class AboutMe extends React.Component {

   

    render() {
        return (
          
            <section>
            <div class ='row' id='about-me-section'>
            <FadeInSection>
            <div class='aboutMe'>
   
                <div class='text'>
                <h1>ABOUT ME</h1>
             <p>I am a graphic designer with some digital marketing skills. For me designing is a way of life, I cannot imagine a world without creativity. Other than design, I dabble in art, some Illustration as well as photography.</p><br />
             <p>The work I aim to do is 'out of the box', I am interested in fine-art graphic design, illustrative graphic design and digital art. The people I aim to work with are the dreamers, the doers and the innovators. I want to help contribute to their success. My goal is to work alongside start-ups to medium corporations, I want their visions to come alive.</p><br />
             <p>When I’m not designing, you can find me caught up in nature, having a Chai Latte, day dreaming of traveling or an art piece I want to create.</p><br />
             <p>I am passionate about people, good people make me happy. I would love to play a small role in positively impacting the world in some way that's for sure.</p><br />
             </div>
             <img src='/img/blur_edges.png' class='about-me-photo' alt='Des'></img>
             
            </div>
            </FadeInSection>
            </div>
            </section>
           
        )
    }
}
function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
  
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          setVisible(entry.isIntersecting);
        });
      });
  
      const { current } = domRef;
      observer.observe(current);
  
      return () => observer.unobserve(current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }


export default AboutMe
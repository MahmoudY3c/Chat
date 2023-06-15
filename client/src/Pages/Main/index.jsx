import React from "react";
import Navbar from "../../Layouts/navbar";
import Header from "../../components/Header/Header";
import SectionTitle from "../../components/SectionTitle";
import Card from "../../components/Card";
import chatImg from '../../assests/Rectangle 5_1.png';
import chatImg2 from '../../assests/Rectangle 5_2.png';
import chatImg3 from '../../assests/Rectangle 5_3.png';
import FaqRaw from "../../components/FaqRaw/FaqRaw";
import FAQ from '../../JSON/FAQ';
import Footer from "../../Layouts/Footer/Footer";

function Main(props) {
  return (
    <>
      <main>
        <Navbar />
        <Header />
      </main>
      <section className="section" id="whyus">
        <SectionTitle
          title="Why Mas Chat ?"
          description="Because you need a free and easy way to communicate with your customers"
        />
        <div className="section__whyus__card__container">
          <Card
            img={chatImg}
            title="World Wide"
            description="Your customers have questions before they buy. Be where they are, when they need you, so they have the confidence they need to choose you over the competition. Every time."
          />
          <Card
            img={chatImg2}
            title="Security"
            description="Your customers have questions before they buy. Be where they are, when they need you, so they have the confidence they need to choose you over the competition. Every time."
          />
          <Card
            img={chatImg3}
            title="get closer"
            description="Your customers have questions before they buy. Be where they are, when they need you, so they have the confidence they need to choose you over the competition. Every time."
          />
        </div>
      </section>
      <section className="section" id="features">
        <SectionTitle
          title="Features"
          description="Best of  our Features easy way to communicate with your customers"
        />
        <div className="section__features__card__container">
          <Card
            img={chatImg}
            title="World Wide"
            description="Your customers have questions before they buy. Be where they are, when they need you, so they have the confidence they need to choose you over the competition. Every time."
            extended
            shadow
          />
          <Card
            img={chatImg2}
            title="Security"
            description="Your customers have questions before they buy. Be where they are, when they need you, so they have the confidence they need to choose you over the competition. Every time."
            extended
            shadow
          />
          <Card
            img={chatImg3}
            title="get closer"
            description="Your customers have questions before they buy. Be where they are, when they need you, so they have the confidence they need to choose you over the competition. Every time."
            extended
            shadow
          />
        </div>
      </section>
      <section className="section">
        <SectionTitle
          title="FAQ"
        />
        <div className="section__faq__container">
          {
            FAQ.map((e, i) => (
                <FaqRaw
                  question={`${i+1}. ${e.question}`}
                  answer={e.answer}
                  key={i}
                />
              )
            )
          }

        </div>
      </section>
      <Footer />
    </>
  );
}

export default Main;

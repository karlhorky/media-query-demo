import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Nav from './Nav';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Header = styled.header`
  background: ${props => props.theme.accentColor};
  padding: ${props => props.theme.contentPadding};
  display: flex;
  align-items: center;
`;

const HamburgerHand = styled.button`
  font-size: 30px;
  background: #333;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  position: fixed;
  z-index: 10;

  @media (min-width: ${props => props.theme.tabletMin}) {
    display: none;
  }
`;

const Main = styled.main`
  padding: ${props => props.theme.contentPadding};
  flex-grow: 1;
`;

const Footer = styled.footer`
  background: ${props => props.theme.accentColor};
  padding: ${props => props.theme.contentPadding};
`;

function App() {
  const [navHidden, setNavHidden] = useState(true);
  return (
    <Container>
      <Header>
        <HamburgerHand onClick={() => setNavHidden(!navHidden)}>
          ☞
        </HamburgerHand>
        <Logo inNavBar />
        <Nav navHidden={navHidden} />
      </Header>
      <Main>
        <p>
          First mover advantage client virality stock stealth social proof seed
          money handshake influencer agile development deployment. Stock agile
          development low hanging fruit venture business plan gamification holy
          grail advisor. Virality creative partner network market iteration
          technology low hanging fruit lean startup startup business plan
          product management return on investment validation. Facebook stealth
          business-to-business infographic focus conversion incubator success
          seed round infrastructure hackathon ramen scrum project termsheet. MVP
          A/B testing crowdfunding agile development market rockstar ownership
          validation customer gamification iPad responsive web design disruptive
          buzz. Bootstrapping infrastructure technology ramen holy grail android
          long tail MVP incubator accelerator. Responsive web design freemium
          seed round business-to-consumer creative disruptive first mover
          advantage handshake growth hacking iPad deployment long tail
          hackathon. Partner network virality hypotheses advisor investor
          marketing iteration social media ownership creative gamification.
          First mover advantage business-to-business branding deployment
          bandwidth virality growth hacking market metrics return on investment
          success termsheet. Learning curve churn rate research & development
          hypotheses accelerator channels customer sales burn rate disruptive
          seed money scrum project.
        </p>

        <p>
          Handshake social proof business-to-consumer disruptive market growth
          hacking value proposition technology. Growth hacking business model
          canvas value proposition interaction design direct mailing low hanging
          fruit first mover advantage agile development. Customer early adopters
          return on investment venture infographic churn rate series A financing
          monetization conversion. Hypotheses supply chain focus influencer
          strategy. Accelerator burn rate product management social proof
          startup sales hackathon. Burn rate startup value proposition twitter
          infrastructure partner network bootstrapping investor. Success
          facebook android interaction design MVP ownership funding influencer.
          Ownership research & development freemium. IPhone innovator disruptive
          partnership facebook low hanging fruit creative angel investor
          rockstar. Business-to-consumer direct mailing deployment strategy
          pivot iPhone gen-z crowdfunding stock incubator focus product
          management.
        </p>

        <p>
          Pivot product management series A financing. Accelerator technology
          burn rate scrum project. Conversion pitch market infographic product
          management startup first mover advantage seed round. Analytics focus
          graphical user interface first mover advantage. Strategy vesting
          period business plan ramen supply chain. User experience series A
          financing mass market backing learning curve gamification interaction
          design iPad. Marketing research & development incubator pivot stock
          startup bootstrapping. Long tail business model canvas holy grail
          backing agile development termsheet leverage deployment hypotheses
          value proposition business-to-consumer. Incubator burn rate leverage
          iPhone traction pivot validation iPad interaction design startup
          launch party. Release iPad incubator business plan alpha equity
          iteration business-to-business.
        </p>

        <p>
          Handshake mass market buyer direct mailing accelerator funding gen-z
          release buzz. Business-to-consumer lean startup handshake equity value
          proposition direct mailing accelerator entrepreneur freemium
          termsheet. Mass market marketing growth hacking. Bandwidth interaction
          design low hanging fruit mass market facebook handshake. User
          experience stealth angel investor entrepreneur pivot mass market
          equity facebook conversion crowdfunding hackathon interaction design
          iPhone. Leverage assets iPad entrepreneur gen-z infrastructure.
          Rockstar influencer stock investor interaction design vesting period
          product management infographic user experience scrum project social
          media pivot learning curve. Business model canvas iPad strategy
          accelerator. Scrum project hackathon iPad focus holy grail
          crowdfunding customer user experience. Technology low hanging fruit
          leverage long tail deployment prototype assets.
        </p>

        <p>
          Bootstrapping twitter growth hacking accelerator rockstar vesting
          period. Seed money bandwidth stealth beta business model canvas
          ownership direct mailing. Business-to-consumer founders social media
          ownership virality supply chain backing. Android strategy startup
          branding A/B testing niche market monetization accelerator
          business-to-consumer. Responsive web design backing infrastructure
          validation network effects first mover advantage direct mailing MVP.
          Pitch stock holy grail low hanging fruit stealth gen-z pivot founders
          research & development iPhone release business plan. Seed money buzz
          agile development. Channels scrum project social media branding
          technology advisor business-to-consumer partnership paradigm shift
          influencer founders traction. Crowdfunding low hanging fruit venture
          product management research & development influencer iPhone virality
          advisor alpha creative partnership. Innovator android network effects
          long tail churn rate direct mailing freemium conversion supply chain
          leverage.
        </p>
      </Main>
      <Footer>
        <Logo small />
        &copy; alle Rechte behalten
      </Footer>
    </Container>
  );
}

export default App;

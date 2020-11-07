import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import TeamBios from "./TeamBios";

function TeamBiosSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <TeamBios
          items={[
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
              name: "Nicole Fanning",
              role: "Tutor",
              bio:
                "Offering French & Irish grinds for Junior Cert, Leaving Cert & for students transitioning from primary to secondary school.\n" +
                  "         Honours degree in Applied Languages (French & Irish) from UL. One-to-one or group lessons provided",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default TeamBiosSection;

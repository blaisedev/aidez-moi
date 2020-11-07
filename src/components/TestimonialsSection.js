import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Testimonials from "./Testimonials";

function TestimonialsSection(props) {
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
        <Testimonials
          items={[
            {
              name: "Shirley Byrne",
              testimonial: "this lady has helped my son with his irish and continues to do so during this time through emails, it is working out great for him and she is also at the end of the phone for any problems  he has, it's a great service at this time with the school closures",
              company: "Parent",
            },
            {
              name: "Deirdre Hogan",
              testimonial: "Very quick to respond and very professional service. Quality service for a good price.",
              company: "Parent",
            },
            {
              name: "Luke Tennant",
              testimonial: "Nicole est tres sympa. Merci pour l'aide.",
              company: "Student",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default TestimonialsSection;

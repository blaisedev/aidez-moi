import React from "react";
import TeamBiosSection from "./../components/TeamBiosSection";
import TestimonialsSection from "./../components/TestimonialsSection";

function AboutPage(props) {
  return (
    <>
      <TeamBiosSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
    </>
  );
}

export default AboutPage;

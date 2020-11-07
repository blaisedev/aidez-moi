import React from "react";
import HeroSection from "./../components/HeroSection";
import ClientsSection from "./../components/ClientsSection";
import { useRouter } from "./../util/router.js";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Aidez-Moi one stop shop for French & Irish grinds"
        subtitle="Offering French & Irish grinds for Junior Cert, Leaving Cert & for students transitioning from primary to secondary school.
         Honours degree in Applied Languages (French & Irish) from UL. One-to-one or group lessons provided"
        buttonText="Get Started"
        buttonColor="primary"
        image="https://culturenight.ie/wp-content/uploads/2019/08/flags-france-and-ireland-on-a-white-background-vector-25226791.jpg"
        buttonOnClick={() => {
          // Navigate to contact page
          router.push("/contact");
        }}
      />
      {/*<ClientsSection*/}
        {/*bg="light"*/}
        {/*textColor="dark"*/}
        {/*size="sm"*/}
        {/*bgImage=""*/}
        {/*bgImageOpacity={1}*/}
        {/*title=""*/}
        {/*subtitle=""*/}
      {/*/>*/}
    </>
  );
}

export default IndexPage;

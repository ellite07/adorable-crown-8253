import React from 'react'
import Part1 from '../components/Customers/Part1'
import Part3 from "../components/Customers/Part3"
import {Grid , VStack , HStack,Center , Spacer} from "@chakra-ui/react";
  // import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';


const Customers = () => {
  const arr = {
    title :[ "Simple scheduling is an Wave and Particle Properties" , " Light as a Particle: Photoelectric and Compton Effects", "Exploring the Properties of Waves" ,"The Electron Double-Slit Experiment", "Diffraction and Uncertainty" , "Exploring the Dispersion of Classical Waves" , "Electron diffraction", "Properties of a traveling wave" , "Compton Effect" , "Photoelectric effect: vary the incident light","Find the wavelength of the source"],
    img : [ "https://images.ctfassets.net/k0lk9kiuza3o/5thNtHNny0NVtSINaeynFn/b5a261c53646ffcfd03d1535eaae2e20/College_for_creative_studies.png?w=740&h=416&q=50&fm=webp",
    "https://images.ctfassets.net/k0lk9kiuza3o/74TOt7PyfZGzMeWybtKwrv/1832e2ce47850503baed6d5723e1ec5c/Lyft.png?w=740&h=416&q=50&fm=webp",
    "https://images.ctfassets.net/k0lk9kiuza3o/5xS0e6v2Z6xuOaaJFbunKg/755d0ef4fcfa361d9684a26100e5afc6/vonage__2_.png?w=740&h=417&q=50&fm=webp",
    "https://images.ctfassets.net/k0lk9kiuza3o/16JJHqJPlodKRPrkGNht6N/8cfa57ef68f05e68d6113fe4710baa01/Katalon.png?w=741&h=417&q=50&fm=webp",
    "https://images.ctfassets.net/k0lk9kiuza3o/01hB9rsvqIaleGkupZR5C9/ee24ec6855b0afbcee6ffcb8b93d7deb/Ancestry.png?w=740&h=416&q=50&fm=webp",
    "https://images.ctfassets.net/k0lk9kiuza3o/pV4xqRsk31cpgpps9423P/59dbf2daea1ce35a9d88fd1a7dfcc84b/Lazboy.png?w=740&h=416&q=50&fm=webp",
    "https://images.ctfassets.net/k0lk9kiuza3o/wBDFNeYxbDWs0MoFB4g00/713c1d4289b502ff83544ef6a6e274bc/Template__6_.png?w=1920&h=1080&q=50&fm=webp",
    "https://images.ctfassets.net/k0lk9kiuza3o/2HfTako6I8WaTFM7kpln7c/e213a47f381b1ce903f71e1cb0339016/Hackbright.png?w=740&h=417&q=50&fm=webp",
    "https://images.ctfassets.net/k0lk9kiuza3o/4pkFwpR0cBD7K9HxByPyjv/2335e0bc964390fde26a03a3c334cde6/Template__2_.png?w=1920&h=1080&q=50&fm=webp",
    ""
  ],
  }
  return (
   <>
   <Part1/>
   <Grid>
    <VStack>
      <HStack>
        <Part3 title={arr.title[0]} img={arr.img[0]}/>
        <Part3 title={arr.title[1]} img={arr.img[1]}/>
        <Part3 title={arr.title[2]} img={arr.img[2]}/>
      </HStack>
      <HStack>
        <Part3 title={arr.title[3]} img={arr.img[3]}/>
        <Part3 title={arr.title[4]} img={arr.img[4]}/>
        <Part3 title={arr.title[5]}  img={arr.img[5]}/>
      </HStack>
      <HStack>
        <Part3 title={arr.title[6]} img={arr.img[6]}/>
        <Part3 title={arr.title[7]} img={arr.img[7]}/>
        <Part3 title={arr.title[8]}  img={arr.img[8]}/>
      </HStack>
    </VStack>
   </Grid>
<Spacer></Spacer>
  
   </>
  )
}

export default Customers
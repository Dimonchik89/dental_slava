import Laboratory from "@/components/Laboratory/Laboratory";
import Main from "@/components/Main/Main";
import Variant from "@/components/Variant/Variant";
import firstImg from "../images/main/dental5.webp";
import secondImg from "../images/main/dental6.webp";
import thirdImg from "../images/main/dental7.webp";
import fourthImg from "../images/main/dental8.webp";
import VariantImage from "@/components/Variant/VariantImage";
import VariantContent from "@/components/Variant/VariantContent";
import { imageVariantLeftToRight, imageVariantRightToLeft } from "@/motionVariants/imageVariants";
import { textVariantRightToLeft, textVariantLeftToRight } from '@/motionVariants/textVariants';
import { buttonVariantLeftToRight, buttonVariantRightToLeft } from '../motionVariants/buttonVariants';
import Advantages from "@/components/Advantages/Advantages";

export default function Home() {
  return (
    <main className="mt-[106px] bg-black ">
      <Main/>
      <Laboratory/>
      <Variant>
        <VariantImage 
          image={firstImg}
          animationVariant={imageVariantLeftToRight}
        />
        <VariantContent 
          title={"Prace kompozytowe"} 
          text={"Prace kompozytowe to najprostszy rodzaj uzupełnień, jakie można zamówić u nas w laboratorium. Materiał ten charakteryzuje się niższą twardością od naturalnego szkliwa, dzięki czemu nie przyczynia się do ścierania zębów przeciwstawnych. Bardzo dobrze nadaje się do wykorzystania u pacjentów borykających się z problemem zgrzytania zębami i u bruksistów. Idealnie nadaje się do prac typu inlay, onlay, overlay oraz do endokoron. Z kompozytu można również wykonywać licówki, korony oraz mosty wzmacniane włóknem szklanym jako alternatywa dla droższych uzupełnień ceramicznych."}
          animationVariant={textVariantRightToLeft}
          buttonAnimation={buttonVariantRightToLeft}
          buttonTitle={"Czytaj więcej"}
          buttonPath="/works"
        />
      </Variant>
      <Variant>
        <VariantContent 
          title={"Prace ceramiczne"} 
          text={"Prace kompozytowe to najprostszy rodzaj uzupełnień, jakie można zamówić u nas w laboratorium. Materiał ten charakteryzuje się niższą twardością od naturalnego szkliwa, dzięki czemu nie przyczynia się do ścierania zębów przeciwstawnych. Bardzo dobrze nadaje się do wykorzystania u pacjentów borykających się z problemem zgrzytania zębami i u bruksistów. Idealnie nadaje się do prac typu inlay, onlay, overlay oraz do endokoron. Z kompozytu można również wykonywać licówki, korony oraz mosty wzmacniane włóknem szklanym jako alternatywa dla droższych uzupełnień ceramicznych."}
          animationVariant={textVariantLeftToRight}
          buttonAnimation={buttonVariantLeftToRight}
          buttonTitle={"Czytaj więcej"}
          buttonPath="/works"
        />
        <VariantImage 
          image={secondImg}
          animationVariant={imageVariantRightToLeft}  
        />
      </Variant>
      <Variant>
        <VariantImage 
          image={thirdImg}
          animationVariant={imageVariantLeftToRight}
        />
        <VariantContent 
          title={"Projekty wax-up"} 
          text={"Prace kompozytowe to najprostszy rodzaj uzupełnień, jakie można zamówić u nas w laboratorium. Materiał ten charakteryzuje się niższą twardością od naturalnego szkliwa, dzięki czemu nie przyczynia się do ścierania zębów przeciwstawnych. Bardzo dobrze nadaje się do wykorzystania u pacjentów borykających się z problemem zgrzytania zębami i u bruksistów. Idealnie nadaje się do prac typu inlay, onlay, overlay oraz do endokoron. Z kompozytu można również wykonywać licówki, korony oraz mosty wzmacniane włóknem szklanym jako alternatywa dla droższych uzupełnień ceramicznych."}
          animationVariant={textVariantRightToLeft}
          buttonAnimation={buttonVariantRightToLeft}
          buttonTitle={"Czytaj więcej"}
          buttonPath="/works"
        />
      </Variant>
      <Variant>
        <VariantContent 
          title={"Prace na implantach"} 
          text={"Prace kompozytowe to najprostszy rodzaj uzupełnień, jakie można zamówić u nas w laboratorium. Materiał ten charakteryzuje się niższą twardością od naturalnego szkliwa, dzięki czemu nie przyczynia się do ścierania zębów przeciwstawnych. Bardzo dobrze nadaje się do wykorzystania u pacjentów borykających się z problemem zgrzytania zębami i u bruksistów. Idealnie nadaje się do prac typu inlay, onlay, overlay oraz do endokoron. Z kompozytu można również wykonywać licówki, korony oraz mosty wzmacniane włóknem szklanym jako alternatywa dla droższych uzupełnień ceramicznych."}
          animationVariant={textVariantLeftToRight}
          buttonAnimation={buttonVariantLeftToRight}
          buttonTitle={"Czytaj więcej"}
          buttonPath="/works"
        />
        <VariantImage 
          image={fourthImg}
          animationVariant={imageVariantRightToLeft}  
        />
      </Variant>
      <Advantages/>
    </main>
  )
}

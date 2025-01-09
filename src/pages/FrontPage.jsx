import { GridContainer } from "../components/GridContainer/GridContainer";
import { Section } from "../components/Section/Section";
import { SectionNewsletter } from "../components/SectionNewsletter/SectionNewsletter";
import { SectionTitle } from "../components/SectionTitle/SectionTitle";
import { Slider } from "../components/Slider/Slider";
import articleImage1 from "../assets/images/article.jpg";
import articleImage2 from "../assets/images/article2.jpg";
import articleImage3 from "../assets/images/article3.jpg";
import { useGet } from "../hooks/useGet";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { InfoCard } from "../components/InfoCard/InfoCard";

export function FrontPage() {
  const articleImages = [
    { src: articleImage1, title: "KREATIVITET DYRKES", text: 'lorem ipsum'},
    { src: articleImage2, title: "KREATIVITET DYRKES", text: 'lorem ipsum' },
    { src: articleImage3, title: "KREATIVITET DYRKES", text: 'lorem ipsum' },
  ];

  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/bakeonline/products"
  );

  return (
    <>
      <Slider />
      <Section width="50%">
        <SectionTitle
          text="Lorem Ipsum is really really really really borring"
          title="Vi skaber lækkert! brød"
        />

        <GridContainer columns={3}>
          {articleImages.map((item, index) => {
            return (
              <InfoCard key={index}
                imgSrc={item.src}
                infoTitle={item.title}
                infoText={item.text}
              />
            );
          })}
        </GridContainer>
      </Section>

      <SectionNewsletter />
      <Section width={"60%"}>
        <SectionTitle
          text={
            "Lorem ispum har gennemgået mange forandringer, men det er klar sjovest når tilfædlige ord indegår"
          }
          title={"Nyeste bagværk"}
        />
        <GridContainer columns={4}>
          {!isLoading &&
            data?.items
              .sort(() => Math.random() - 0.5) //
              .slice(0, 8)
              .map((item) => {
                return (
                  <ProductCard key={item.title}
                    title={item.title}
                    text={item.teaser}
                    imgSrc={item.image.fullpath}
                    numberComments={item.num_comments}
                    id={item.id}
                  />
                );
              })}
        </GridContainer>
        </Section>
    </>
  );
}

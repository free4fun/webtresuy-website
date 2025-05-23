import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/Animations";
import { Button } from "@/components/ui/button";
const About = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-12 py-12 bg-background text-foreground transition-colors duration-300">
      <AnimatedSection className="max-w-4xl mx-auto text-center space-y-6 px-4" vertical={-40}>
        <h2 className="text-3xl font-bold">{t("about.title")}</h2>
        <p className="text-lg text-muted-foreground">{t("about.mission")}</p>
        <p className="text-base">{t("about.text1")}</p>
      </AnimatedSection>
      <AnimatedSection className="bg-muted/40 py-16 px-4 text-center" vertical={40}>
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">{t("home.community.title")}</h2>
          <p className="text-muted-foreground">{t("home.community.description")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/community"><Button className="transition-colors duration-200 hover:brightness-110 active:scale-95" variant="secondary">{t("about.cta1")}</Button></Link>
            <Link to="/contribute"><Button className="transition-colors duration-200 hover:brightness-110 active:scale-95" variant="secondary">{t("about.cta2")}</Button></Link>
          </div>
        </div>
      </AnimatedSection>
      <section className="text-center space-y-6 px-4 max-w-4xl mx-auto">
        <p className="text-lg text-muted-foreground">{t("about.text3")}</p>
        <AnimatedSection className="max-w-4xl mx-auto text-center space-y-6 px-4" delay={0.5} vertical={-40}>
        <div className="grid gap-6 sm:grid-cols-2 mt-8 text-left">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">{t("about.education.title")}</h2>
            <p className="text-muted-foreground">{t("about.education.text")}</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">{t("about.community.title")}</h2>
            <p className="text-muted-foreground">{t("about.community.text")}</p>
          </div>
        </div>
        </AnimatedSection>
        <AnimatedSection className="max-w-4xl mx-auto text-center space-y-6 px-4" delay={0.7} vertical={-40}>
        <div className="grid gap-6 sm:grid-cols-2 mt-8 text-left">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">{t("about.purpose.title")}</h2>
            <p className="text-muted-foreground">{t("about.purpose.text")}</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">{t("about.conection.title")}</h2>
            <p className="text-muted-foreground">{t("about.conection.text")}</p>
          </div>
        </div>
        </AnimatedSection>
        <AnimatedSection className="max-w-4xl mx-auto text-center space-y-6 px-4"  delay={0.9} vertical={-40}>
        <div className="grid gap-6 sm:grid-cols-2 mt-8 text-left">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">{t("about.curiosity.title")}</h2>
            <p className="text-muted-foreground">{t("about.curiosity.text")}</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">{t("about.comunication.title")}</h2>
            <p className="text-muted-foreground">{t("about.comunication.text")}</p>
          </div>
        </div>
        </AnimatedSection>
      </section>
    </div>
  )
}

export default About

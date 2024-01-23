import { BiCheckDouble } from "react-icons/bi";
import { motion } from "framer-motion";

export const variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      type: "tween",
      duration: 0.6,
      delay: 0.4,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.6,
    },
  },
};

export const InfoItem = ({ title, paragraphs, margin = true }) => {
  return (
    <div>
      <div className="flex items-center justify-start gap-1 mb-4">
        <BiCheckDouble color="#3498db" fontSize="26px"></BiCheckDouble>
        <h3 className="text-md font-bold text-gray-600">{title}</h3>
      </div>
      <div className=" text-gray-600 ">
        {paragraphs?.map((item, i) => {
          return (
            <p key={i} className={`${margin ? "mb-4" : "mb-0"}`}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};
const LegalInfo = () => {
  return (
    <section className="py-12">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto flex max-w-[90rem] flex-col gap-4 px-4 py-8  text-left font-medium lg:px-8   "
      >
        <p className="text-gray-600 ">{""}</p>
        <InfoItem
          title={"Aufsichtsbehörde"}
          paragraphs={[
            "Landesgesundheitsamt Berlin",
            "Postfach 310929",
            "10639 Berlin",
            "Fehrbelliner Platz 1",
            "https://www.berlin.de/lageso",
            "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
          ]}
          margin={false}
        ></InfoItem>
        <InfoItem
          title={"Haftung für Inhalte"}
          paragraphs={[
            "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
            "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
          ]}
        ></InfoItem>
        <InfoItem
          title={"Haftung für Links"}
          paragraphs={[
            "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.",
            "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
          ]}
        ></InfoItem>
        <InfoItem
          title={"Urheberrecht"}
          paragraphs={[
            "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
            "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
          ]}
        ></InfoItem>
        <p>
          Bildrechte und Quellen:{" "}
          <a
            className="text-gray-600"
            href="https://pixabay.com/de/"
            target="_blank"
          >
            https://pixabay.com/de/
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default LegalInfo;

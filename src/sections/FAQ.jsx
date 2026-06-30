import { faqs } from '../data/siteContent';
import SectionHeading from '../components/ui/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';
import { Reveal } from '../components/ui/Reveal';

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Good to Know"
          title="Frequently asked questions"
          highlight="questions"
        />
        <Reveal className="mt-12">
          <FAQAccordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}

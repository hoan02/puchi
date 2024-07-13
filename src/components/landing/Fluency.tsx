import LanguagePill, { type PillVariant } from "@/components/landing/LanguagePill";
import { languages } from "@/constants/languages";

const variants: NonNullable<PillVariant>[] = [
  "secondary",
  "highlightOutline",
  "secondaryOutline",
  "primary",
  "highlight",
  "default",
  "primaryOutline",
];

const Fluency = () => {
  return (
    <ul className="flex flex-col gap-8 px-[5%] lg:px-0">
      {languages.map(({ flag, title, word }, index) => (
        <li key={title} className="flex justify-center">
          <LanguagePill
            title={title}
            word={word}
            flag={flag}
            tilt={index % 2 === 0 ? -1 : 1}
            variant={variants[index % variants.length]}
          />
        </li>
      ))}
    </ul>
  );
};

export default Fluency;

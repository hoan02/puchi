import { use } from "react";
import DictationPageClient from "./DictationPageClient";

interface DictationPageProps {
  params: Promise<{
    id: string;
  }>;
}

const DictationPage = ({ params }: DictationPageProps) => {
  const { id } = use(params);

  return <DictationPageClient lessonId={id} />;
};

export default DictationPage;

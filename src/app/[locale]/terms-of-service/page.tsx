import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const TermsOfServicePage = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">
          Welcome to our Terms of Service page. Here, you will find the rules
          and regulations that govern the use of our website.
        </p>
        <h2 className="text-2xl font-semibold mt-4 mb-2">1. Introduction</h2>
        <p className="mb-4">
          These terms and conditions outline the rules and regulations for the
          use of our Website.
        </p>
        <h2 className="text-2xl font-semibold mt-4 mb-2">
          2. Intellectual Property Rights
        </h2>
        <p className="mb-4">
          Other than the content you own, under these Terms, we own all the
          intellectual property rights and materials contained in this Website.
        </p>
        <h2 className="text-2xl font-semibold mt-4 mb-2">3. Restrictions</h2>
        <p className="mb-4">
          You are specifically restricted from publishing any Website material
          in any other media without permission.
        </p>
        <h2 className="text-2xl font-semibold mt-4 mb-2">4. Your Content</h2>
        <p className="mb-4">
          In these Website Standard Terms and Conditions, “Your Content” shall
          mean any audio, video, text, images or other material you choose to
          display on this Website.
        </p>
        <h2 className="text-2xl font-semibold mt-4 mb-2">5. No warranties</h2>
        <p className="mb-4">
          This Website is provided “as is,” with all faults, and we express no
          representations or warranties, of any kind related to this Website or
          the materials contained on this Website.
        </p>
        <h2 className="text-2xl font-semibold mt-4 mb-2">
          6. Limitation of liability
        </h2>
        <p className="mb-4">
          In no event shall we, nor any of our officers, directors and
          employees, be held liable for anything arising out of or in any way
          connected with your use of this Website.
        </p>
        <h2 className="text-2xl font-semibold mt-4 mb-2">7. Indemnification</h2>
        <p className="mb-4">
          You hereby indemnify to the fullest extent us from and against any
          and/or all liabilities, costs, demands, causes of action, damages and
          expenses arising in any way related to your breach of any of the
          provisions of these Terms.
        </p>
        <h2 className="text-2xl font-semibold mt-4 mb-2">8. Severability</h2>
        <p className="mb-4">
          If any provision of these Terms is found to be invalid under any
          applicable law, such provisions shall be deleted without affecting the
          remaining provisions herein.
        </p>
        <h2 className="text-2xl font-semibold mt-4 mb-2">
          9. Variation of Terms
        </h2>
        <p className="mb-4">
          We are permitted to revise these Terms at any time as it sees fit, and
          by using this Website you are expected to review these Terms on a
          regular basis.
        </p>
        <h2 className="text-2xl font-semibold mt-4 mb-2">10. Assignment</h2>
        <p className="mb-4">
          The we are allowed to assign, transfer, and subcontract its rights
          and/or obligations under these Terms without any notification.
        </p>
        <h2 className="text-2xl font-semibold mt-4 mb-2">
          11. Entire Agreement
        </h2>
        <p className="mb-4">
          These Terms constitute the entire agreement between us and you in
          relation to your use of this Website, and supersede all prior
          agreements and understandings.
        </p>
        <h2 className="text-2xl font-semibold mt-4 mb-2">
          12. Governing Law & Jurisdiction
        </h2>
        <p className="mb-4">
          These Terms will be governed by and interpreted in accordance with the
          laws of the State of [Your State], and you submit to the non-exclusive
          jurisdiction of the state and federal courts located in [Your State]
          for the resolution of any disputes.
        </p>
      </div>
    </div>
  );
};

export default TermsOfServicePage;

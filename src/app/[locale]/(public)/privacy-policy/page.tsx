import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/routing";

const PrivacyPage = () => {
  return (
    <div className="container my-8 font-din">
      <Card className="p-0 md:p-10">
        <CardHeader>
          <CardTitle className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Privacy Policy
            </h1>
          </CardTitle>
          <CardDescription>
            <strong className="text-base">
              Please note that Privacy Policy was last revised on November 10th,
              2024
            </strong>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal text-[18px] ml-6 space-y-4">
            <li>
              <h3 className="font-bold text-gray-800 dark:text-gray-100">
                General
              </h3>
              <p className="text-justify text-gray-700 dark:text-gray-300 mb-4">
                At Puchi, we care about your personal information, so we have
                prepared this Privacy Policy to explain how we collect, use, and
                share it. This Privacy Policy applies to Puchi websites, mobile
                apps, and related services (“Service”). By using the Service,
                you agree with Puchi’s collection, use, and sharing of your
                personal information in accordance with the terms of this
                Privacy Policy.
              </p>

              <p className="text-justify text-gray-700 dark:text-gray-300 mb-4">
                Please note that Puchi is constantly testing and improving our
                product features. Any features discussed in this Privacy Policy
                may not be available to all users or in all jurisdictions.
              </p>
            </li>

            <li>
              <h3 className="font-bold text-gray-800 dark:text-gray-100">
                Privacy Policy Updates
              </h3>
              <p className="text-justify text-gray-700 dark:text-gray-300 mb-4">
                We may update our Privacy Policy to reflect changes to our
                information practices. If we do this and the changes are
                material, we will post a notice that we have made changes to
                this Privacy Policy on the Website for at least seven (7) days
                before the changes are made, and we will indicate the date these
                terms were last revised at the bottom of the Privacy Policy. Any
                revisions to this Privacy Policy will become effective at the
                end of that seven (7) day period.
              </p>
            </li>

            <li>
              <h3 className="font-bold text-gray-800 dark:text-gray-100">
                Data Retention
              </h3>
              <p className="text-justify text-gray-700 dark:text-gray-300 mb-4">
                Puchi will generally retain your personal information until
                your account is deleted. However, Puchi may retain certain
                information longer if necessary to provide our Service, defend
                our legitimate interests or those of third parties, comply with
                legal requirements, resolve or defend ourselves in disputes,
                investigate misuse or disruption of the Service, or perform
                agreements. We may also retain anonymous data indefinitely.
              </p>
            </li>

            <li>
              <h3 className="font-bold text-gray-800 dark:text-gray-100">
                Do Not Track
              </h3>
              <p className="text-justify text-gray-700 dark:text-gray-300 mb-4">
                The Service is not designed to respond to “do not track” signals
                sent by some browsers.
              </p>
            </li>

            <li>
              <h3 className="font-bold text-gray-800 dark:text-gray-100">
                Contact Us
              </h3>
              <div className="text-justify text-gray-700 dark:text-gray-300 mb-4">
                Puchi, Inc. is the data controller of your data for the purposes
                of the General Data Protection Regulation (“GDPR”) and any
                relevant local legislation. Puchi’s headquarters are located
                within the Viet Nam at:
                <p className="mt-4">Puchi, Inc.</p>
                <p>Ha Noi</p>
                <p>Viet Nam</p>
              </div>

              <p className="text-justify text-gray-700 dark:text-gray-300 mb-4">
                For all data privacy inquiries and any questions or concerns you
                have about this Privacy Policy, please contact our Data
                Protection Officer at{" "}
                <a
                  className="underline underline-offset-2"
                  href="mailto:lehoan.dev@gmail.com"
                >
                  lehoan.dev@gmail.com
                </a>
                .
              </p>

              <p className="text-justify text-gray-700 dark:text-gray-300 mb-4">
                For all support inquiries, please go to{" "}
                <Link className="underline underline-offset-2" href="/help">
                  https://puchi.io.vn/help
                </Link>
                .
              </p>
            </li>
          </ol>
        </CardContent>

        <CardFooter>
          <p>Last revised on November 10th, 2024</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PrivacyPage;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="container my-8 font-din">
      <Card className="p-0 md:p-10">
        <CardHeader>
          <CardTitle className="mb-4">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              About Puchi
            </h1>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-justify text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Puchi is an innovative platform designed to help users master
            Vietnamese. With support for multiple languages, Puchi ensures
            accessibility for learners worldwide.
          </p>
          <p>
            Built with modern technologies such as Next.js 15, Shadcn UI, and
            Clerk authentication, Puchi offers a fast, secure, and seamless
            learning experience. Internationalization (i18n) is a core feature,
            allowing users to explore content in their preferred language.
          </p>
          <p>
            Created by Lê Công Hoan, a passionate developer dedicated to
            leveraging technology for education.
          </p>
          <p>
            Join our community on{" "}
            <a
              href="https://www.facebook.com/profile.php?id=61569075361529"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook{" "}
            </a>
            to connect with other learners, or explore the project source code
            on{" "}
            <a
              href="https://github.com/hoan02/puchi"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;

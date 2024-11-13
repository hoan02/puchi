import SelectTheme from "@/components/SelectTheme";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
  return (
    <div className="p-4 gap-8 flex max-md:flex-col max-w-[1024px] mx-auto">
      <div className="flex-1 space-y-10">
        <div className="">
          <h1 className="text-3xl text-gray-700 dark:text-gray-100 font-bold">
            Preferences
          </h1>
        </div>

        <div>
          <div className="text-2xl text-gray-500 dark:text-gray-100 font-bold">
            Lesson experience
          </div>
          <Separator className="mt-2 mb-4" />
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-600 dark:text-gray-100">
              Sound effects
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="text-xl font-semibold text-gray-600 dark:text-gray-100">
              Animations
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="text-xl font-semibold text-gray-600 dark:text-gray-100">
              Motivational messages
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="text-xl font-semibold text-gray-600 dark:text-gray-100">
              Listening exercises
            </div>
            <Switch />
          </div>
        </div>

        <div>
          <div className="text-2xl text-gray-500 dark:text-gray-100 font-bold">
            Appearance
          </div>
          <Separator className="mt-2 mb-4" />
          <div className="text-xl text-gray-500 dark:text-gray-100 font-bold mb-4">
            Dark mode
          </div>
          <SelectTheme />
        </div>
      </div>
      <div className="w-96 flex flex-col gap-4">
        <Card className="py-4 h-[500px]">
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>

        <Card className="py-4 h-[500px]">
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;

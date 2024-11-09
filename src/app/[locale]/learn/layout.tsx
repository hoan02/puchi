type LearnLayoutProps = {
  children: React.ReactNode;
};

export default async function LearnLayout({ children }: LearnLayoutProps) {
  return (
    <div className="container flex flex-grow flex-col px-0">
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  );
}

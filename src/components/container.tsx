type ContainerProps = Readonly<{
  children: React.ReactNode;
}>;

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-[1100px] bg-white mx-auto min-h-screen flex flex-col border-x">
      {children}
    </div>
  );
}

import Link from "next/link";
import { Button } from "../../shared/button";

export const Header = () => {
  return (
    <div className="p-5">
      <div className="container mx-auto flex items-center justify-between">
        <Link href='/' className="text-2xl font-bold">Shortened URL</Link>
        <Button type="success" onclick={undefined}>
          Getting Started
        </Button>
      </div>
    </div>
  );
};

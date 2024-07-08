import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";


const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      <h1 className="text-9xl font-bold">404</h1>
      <span className="font-semibold text-2xl">Not found</span>
      <Button className="gap-2" asChild>
        <Link to="/">
          <ArrowLeft />
          Back to home
        </Link>
      </Button>
    </div>
  );
};

export { Error404 };
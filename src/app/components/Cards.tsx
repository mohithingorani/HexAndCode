import { Card } from "./Card";

export function Cards() {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex  p-4 pb-6 max-w-7xl gap-4 justify-between">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "./Container";

export function Breadcrumbs({ items }: { items: Array<{ name: string; path: string }> }) {
  return <div className="breadcrumb-bar"><Container><nav aria-label="Je bent hier"><ol className="breadcrumb">
    {items.map((item, index) => <li key={item.path}>
      {index > 0 && <ChevronRight size={12} aria-hidden="true" />}
      {index === items.length - 1 ? <span aria-current="page">{item.name}</span> : <Link href={item.path}>{item.name}</Link>}
    </li>)}
  </ol></nav></Container></div>;
}

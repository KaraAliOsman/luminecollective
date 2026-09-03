import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return <section className="section"><Container><div className="legal-content"><p className="section-index">404</p><Heading as="h1" size="xl" className="mt-5">Deze pagina is er niet.</Heading><p className="lead mt-6">Misschien is de link veranderd of is de pagina verwijderd. Je kunt verder vanaf de homepagina of ons een vraag stellen.</p><div className="actions mt-8"><Button href="/"><ArrowLeft size={17} aria-hidden="true" />Naar de homepagina</Button><Button href="/contact" variant="secondary">Neem contact op</Button></div></div></Container></section>;
}

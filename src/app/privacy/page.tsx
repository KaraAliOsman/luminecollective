import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { brand } from "@/lib/constants/brand";
import { createMetadata } from "@/lib/seo/config";

export const metadata: Metadata = createMetadata({ title: "Privacy", description: "Hoe Stichting Lumina Collective omgaat met jouw gegevens, contactverzoeken en privacyrechten.", path: "/privacy" });

export default function PrivacyPage() {
  return <article>
    <header className="page-heading"><Container><p className="section-index">Zorgvuldig met jouw gegevens</p><Heading as="h1" size="xl">Privacy</Heading><p className="lead">Je verhaal is van jou. Hier lees je welke gegevens we via deze website verwerken en waarvoor.</p><p className="article-meta">Bijgewerkt op <time dateTime="2026-09-02">2 september 2026</time></p></Container></header>
    <section className="section"><Container><div className="legal-content editorial-text">
      <h2>Wie is verantwoordelijk?</h2>
      <p>{brand.name}, KVK {brand.kvk}, is verantwoordelijk voor de verwerking via deze website. Ons adres is {brand.address.street}, {brand.address.postalCode} {brand.address.city}. Voor vragen over privacy kun je schrijven naar <a href={`mailto:${brand.email}?subject=Privacy`}>{brand.email}</a>.</p>
      <h2>Contact en vrijwilligerswerk</h2>
      <p>Als je contact opneemt, ontvangen we je naam, e-mailadres, onderwerp en bericht. Bij interesse in vrijwilligerswerk vragen we ook naar je interessegebied en, als je dat wilt delen, je telefoonnummer. We gebruiken deze gegevens om je vraag of verzoek te behandelen en afspraken met je te maken.</p>
      <p>De formulieren vragen je toestemming voor dit gebruik. Je kunt die toestemming intrekken door ons te mailen. Dat verandert niets aan de verwerking die vóór je intrekking al rechtmatig heeft plaatsgevonden. Je bent niet verplicht het formulier te gebruiken: bellen of rechtstreeks mailen kan ook.</p>
      <p>Wanneer een formulier je e-mailprogramma opent, wordt het bericht pas verstuurd nadat je het daar zelf verzendt. Een ingevuld maar niet verzonden formulier wordt niet als aanmelding geregistreerd. Stuur geen BSN, medische gegevens of identiteitsdocumenten mee.</p>
      <h2>Updates ontvangen</h2>
      <p>Vraag je om op de hoogte te blijven, dan gebruiken we je e-mailadres om dat verzoek te behandelen. Een contactbericht meldt je niet automatisch aan voor nieuwsbrieven. Wil je geen updates meer, laat het ons per e-mail weten.</p>
      <h2>Technische gegevens en cookies</h2>
      <p>Voor het aanbieden en beveiligen van de website verwerken onze hostingdiensten technische gegevens, zoals het IP-adres, het tijdstip van een verzoek en het bezochte adres. De grondslag is ons gerechtvaardigde belang bij een bereikbare en veilige website. Formulierverzoeken worden tijdelijk begrensd om misbruik tegen te gaan.</p>
      <p>De website slaat geen formulierberichten op in een publieke databank. Statistische meetinstrumenten worden alleen geladen als ze zijn geactiveerd én je toestemming hebt gegeven. Meer hierover staat in ons <a href="/cookies">cookiebeleid</a>.</p>
      <h2>Hoe lang bewaren we gegevens?</h2>
      <p>We bewaren contactgegevens en berichten zolang dat nodig is om je vraag af te handelen of afspraken over deelname of vrijwilligerswerk uit te voeren. Is het contact afgerond en bestaat er geen ander noodzakelijk doel of wettelijke bewaarplicht, dan kunnen de gegevens worden verwijderd. Gegevens voor vrijwillige updates bewaren we totdat je je afmeldt. Je kunt ons vragen welke gegevens we nog hebben en waarom.</p>
      <h2>Wie heeft toegang?</h2>
      <p>Gegevens zijn bestemd voor de mensen die jouw verzoek namens Lumina behandelen. Voor de technische werking gebruiken we Cloudflare voor hosting, Sanity voor gepubliceerde website-inhoud en, wanneer formulierverzending is ingeschakeld, Resend voor het doorsturen van berichten. Bij rechtstreeks mailen verwerken ook de betrokken e-mailaanbieders je bericht.</p>
      <p>Deze diensten kunnen gegevens buiten de Europese Economische Ruimte verwerken. Bij internationale verwerking moeten de toepasselijke AVG-waarborgen gelden. Je kunt ons om nadere informatie vragen over de dienstverleners en de afspraken voor jouw gegevens. We verkopen geen persoonsgegevens en gebruiken ze niet voor geautomatiseerde besluiten of profilering.</p>
      <h2>Foto&apos;s en verhalen</h2>
      <p>Voor herkenbare foto&apos;s en persoonlijke verhalen uit onze activiteiten vragen we toestemming voor publicatie. Wil je een publicatie bespreken of toestemming intrekken? Neem contact op en vermeld de betreffende pagina. De herkomst van de illustratieve websitefotografie staat op <a href="/fotografie">Fotografie</a>.</p>
      <h2>Jouw rechten</h2>
      <p>Je kunt, voor zover van toepassing, vragen om inzage, correctie, verwijdering, beperking van verwerking of overdracht van je gegevens. Ook kun je bezwaar maken tegen verwerking op basis van een gerechtvaardigd belang. Stuur je verzoek naar <a href={`mailto:${brand.email}?subject=Privacyverzoek`}>{brand.email}</a>. Om je gegevens te beschermen kunnen we je identiteit zorgvuldig controleren.</p>
      <p>Heb je een klacht? Bespreek die gerust met ons. Je kunt ook terecht bij de <a href="https://www.autoriteitpersoonsgegevens.nl/themas/basis-avg/privacyrechten-avg/voor-organisaties-privacyrechten-in-de-praktijk" target="_blank" rel="noreferrer">Autoriteit Persoonsgegevens</a>.</p>
    </div></Container></section>
  </article>;
}
